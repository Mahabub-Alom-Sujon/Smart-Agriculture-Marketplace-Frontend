"use server";
import { cookies } from "next/headers";
import type {
    CreateOrderInput,
    CreateOrderResponse,
} from "@/types/types.payment";
interface CreateOrderResult {
    success: boolean;
    message: string;
    data?: {
        orderId: string;
    };
}
function isRecord(
    value: unknown
): value is Record<string, unknown> {
    return (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
    );
}
export async function createOrder(
    payload: CreateOrderInput
): Promise<CreateOrderResult> {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;

        if (!baseUrl) {
            return {
                success: false,
                message: "API URL is not configured.",
            };
        }

        if (
            !payload.deliveryAddress.trim() ||
            payload.items.length === 0
        ) {
            return {
                success: false,
                message: "Delivery address and order items are required.",
            };
        }

        const hasInvalidItem = payload.items.some(
            (item) =>
                !item.productId.trim() ||
                !Number.isInteger(item.quantity) ||
                item.quantity < 1
        );

        if (hasInvalidItem) {
            return {
                success: false,
                message: "Please provide valid products and quantities.",
            };
        }

        const cookieStore = await cookies();
        const accessToken = cookieStore.get("accessToken")?.value;

        if (!accessToken) {
            return {
                success: false,
                message: "Please log in before placing your order.",
            };
        }
        const response = await fetch(
            `${baseUrl.replace(/\/+$/, "")}/api/v1/orders`,
{
    method: "POST",
        headers: {
    "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
},
    body: JSON.stringify(payload),
        cache: "no-store",
}
);

const result: unknown = await response.json();

if (!response.ok || !isRecord(result)) {
    return {
        success: false,
        message: "Failed to create order. Please try again.",
    };
}

const data = isRecord(result.data)
    ? result.data
    : undefined;

const orderId =
    typeof data?.orderId === "string"
        ? data.orderId
        : typeof data?.id === "string"
            ? data.id
            : undefined;

if (
    result.success !== true ||
    !orderId ||
    !orderId.trim()
) {
    return {
        success: false,
        message:
            typeof result.message === "string"
                ? result.message
                : "Order ID was not returned by the server.",
    };
}

return {
    success: true,
    message:
        typeof result.message === "string"
            ? result.message
            : "Order created successfully.",
    data: {
        orderId,
    },
};
} catch (error: unknown) {
    console.error("Create order error:", error);

    return {
        success: false,
        message: "An unexpected error occurred while creating the order.",
    };
}
}