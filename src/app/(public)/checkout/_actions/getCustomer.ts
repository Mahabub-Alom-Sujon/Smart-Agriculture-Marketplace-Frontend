"use server";

import { cookies } from "next/headers";
import type {
    ApiResponse,
    PaymentUser,
} from "@/types/types.payment";

export async function getCustomer(): Promise<{
    success: boolean;
    message: string;
    data?: PaymentUser;
}> {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!baseUrl) {
        return {
            success: false,
            message: "API_URL is not configured.",
        };
    }

    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("accessToken")?.value;

        if (!token) {
            return {
                success: false,
                message: "Please log in to continue checkout.",
            };
        }

        const response = await fetch(`${baseUrl}/api/v1/auth/me`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
            },
            cache: "no-store",
        });

        const result: ApiResponse<PaymentUser> =
            await response.json();

        if (!response.ok || !result.success) {
            return {
                success: false,
                message: result.message || "Unable to load your profile.",
            };
        }

        if (result.data.role !== "BUYER" || !result.data.buyer) {
            return {
                success: false,
                message: "A buyer profile is required to checkout.",
            };
        }

        return {
            success: true,
            message: result.message,
            data: result.data,
        };
    } catch {
        return {
            success: false,
            message: "Failed to load your profile. Please try again.",
        };
    }
}