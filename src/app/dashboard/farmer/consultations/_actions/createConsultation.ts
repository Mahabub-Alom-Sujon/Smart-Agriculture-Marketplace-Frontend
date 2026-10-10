"use server";
import { cookies } from "next/headers";
import { consultationSchema } from "@/schemas/consultation.schema";
import type {
    CreateConsultationInput,
    ConsultationActionResponse,
} from "@/types/types.consultation";
export async function createConsultation(
    input: CreateConsultationInput,
): Promise<ConsultationActionResponse> {
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
        if (!accessToken) {
            return {
                success: false,
                message: "Please log in to submit a consultation",
            };
        }
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!apiUrl) {
            return {
                success: false,
                message: "API URL is not configured",
            };
        }
        const payload = {
            cropName: parsed.data.cropName?.trim() || undefined,
            problem: parsed.data.problem,
            image: parsed.data.image || undefined,
        };
        const response = await fetch(`${apiUrl}/api/v1/consultations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            try {
                const errorResult = await response.json() as Record<string, unknown>;
                return {
                    success: false,
                    message: typeof errorResult.message === "string" ? errorResult.message : "Failed to create consultation",
                };
            } catch {
                return {
                    success: false,
                    message: `Server responded with status ${response.status}`,
                };
            }
        }

        const result = await response.json() as ConsultationActionResponse;
        return {
            success: true,
            message: result.message || "Consultation submitted successfully",
            data: result.data,
        };

    } catch (error) {
        console.error("Consultation Action Error:", error);
        return {
            success: false,
            message: "Something went wrong. Please try again.",
        };
    }
}
