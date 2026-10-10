"use server";
import { cookies } from "next/headers";
import type { Consultation } from "@/types/types.consultation";

interface GetConsultationResponse {
    success: boolean;
    message: string;
    data?: Consultation;
}
export async function getConsultationById(
    id: string,
): Promise<GetConsultationResponse> {
    // ১. আইডি ভ্যালিডেশন
    if (!id || !id.trim()) {
        return {
            success: false,
            message: "Consultation ID is required",
        };
    }

    try {
        // ২. অথেনটিকেশন ও এনভায়রনমেন্ট চেক
        const cookieStore = await cookies();
        const accessToken = cookieStore.get("accessToken")?.value;
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        if (!accessToken) {
            return { success: false, message: "Please log in to continue" };
        }

        if (!apiUrl) {
            return { success: false, message: "API URL is not configured" };
        }

        // ৩. API রিকোয়েস্ট (GET)
        const response = await fetch(`${apiUrl}/api/v1/consultations/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        // ৪. যদি রেসপন্স স্ট্যাটাস ওকে না হয়
        if (!response.ok) {
            try {
                const errorResult = await response.json() as { message?: string };
                return {
                    success: false,
                    message: errorResult.message || "Unable to load consultation",
                };
            } catch {
                return {
                    success: false,
                    message: `Server responded with status ${response.status}`,
                };
            }
        }

        // ৫. সফল রেসপন্স হ্যান্ডলিং
        const result = await response.json() as { message?: string; data: Consultation };

        return {
            success: true,
            message: result.message || "Consultation loaded successfully",
            data: result.data,
        };

    } catch (error) {
        console.error("Get Consultation Error:", error);
        return {
            success: false,
            message: "Network error. Please try again.",
        };
    }
}
