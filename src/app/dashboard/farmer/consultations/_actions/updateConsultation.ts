"use server";
import { cookies } from "next/headers";
import { consultationSchema } from "@/schemas/consultation.schema";
import type {
    Consultation,
    ConsultationActionResponse,
    UpdateConsultationInput,
} from "@/types/types.consultation";

export async function updateConsultation(
    id: string,
    input: UpdateConsultationInput,
): Promise<ConsultationActionResponse> {
    if (!id?.trim()) {
        return {
            success: false,
            message: "Consultation ID is required",
        };
    }
    const parsed = consultationSchema.safeParse(input);
    if (!parsed.success) {
        return {
            success: false,
            message: parsed.error.issues[0]?.message ?? "Invalid consultation data",
        };
    }
    try {
        const cookieStore = await cookies();
        const accessToken = cookieStore.get("accessToken")?.value;
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!accessToken) {
            return {
                success: false,
                message: "Please log in to continue",
            };
        }
        if (!apiUrl) {
            return {
                success: false,
                message: "API URL is not configured",
            };
        }
        const payload = {
            cropName: parsed.data.cropName?.trim() || undefined,
            problem: parsed.data.problem.trim(),
            image: parsed.data.image?.trim() || undefined,
        };
        const response = await fetch(
            `${apiUrl}/api/v1/consultations/${id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(payload),
                cache: "no-store",
            },
        );
        const result: unknown = await response.json();
        if (!response.ok) {
            const message =
                typeof result === "object" &&
                result !== null &&
                "message" in result &&
                typeof result.message === "string"
                    ? result.message
                    : "Failed to update consultation";
            return { success: false, message };
        }
        if (
            typeof result !== "object" ||
            result === null ||
            !("success" in result) ||
            result.success !== true
        ) {
            return {
                success: false,
                message: "Unable to update consultation",
            };
        }
        const data = result as ConsultationActionResponse;
        return {
            success: true,
            message: data.message || "Consultation updated successfully",
            data: data.data as Consultation | undefined,
        };
    } catch {
        return {
            success: false,
            message: "Network error. Please try again.",
        };
    }
}
