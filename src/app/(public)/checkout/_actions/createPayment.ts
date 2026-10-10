"use server";

import { cookies } from "next/headers";

import type {
    PaymentCreateInput,
    PaymentCreateResponse,
} from "@/types/types.payment";

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null;
}

export async function createPayment(
    input: PaymentCreateInput,
): Promise<PaymentCreateResponse> {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "");

    if (!baseUrl) {
        return {
            success: false,
            message: "API URL is not configured.",
        };
    }

    const orderId = input.orderId?.trim();

    if (!orderId) {
        return {
            success: false,
            message: "A valid order ID is required.",
        };
    }

    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("accessToken")?.value;

        if (!token) {
            return {
                success: false,
                message: "Please log in to continue.",
            };
        }

        const response = await fetch(`${baseUrl}/api/v1/payments/create`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ orderId }),
            cache: "no-store",
        });

        const result: unknown = await response.json().catch(() => null);

        if (!response.ok) {
            return {
                success: false,
                message:
                    isRecord(result) && typeof result.message === "string"
                        ? result.message
                        : "Could not create payment.",
            };
        }

        if (
            !isRecord(result) ||
            result.success !== true ||
            !isRecord(result.data)
        ) {
            return {
                success: false,
                message: "Invalid payment response.",
            };
        }

        const data = result.data;

        // Backend returns paymentUrl.
        const paymentUrl =
            typeof data.paymentUrl === "string"
                ? data.paymentUrl
                : typeof data.checkoutUrl === "string"
                  ? data.checkoutUrl
                  : typeof data.url === "string"
                    ? data.url
                    : typeof data.sessionUrl === "string"
                      ? data.sessionUrl
                      : null;

        if (!paymentUrl) {
            return {
                success: false,
                message: "Payment URL was not returned by the server.",
            };
        }

        let parsedUrl: URL;

        try {
            parsedUrl = new URL(paymentUrl);
        } catch {
            return {
                success: false,
                message: "The payment URL is invalid.",
            };
        }

        if (parsedUrl.protocol !== "https:") {
            return {
                success: false,
                message: "The payment URL must use HTTPS.",
            };
        }

        return {
            success: true,
            message: "Payment session created successfully.",
            data: {
                checkoutUrl: parsedUrl.toString(),
            },
        };
    } catch {
        return {
            success: false,
            message: "Network error. Please try again.",
        };
    }
}