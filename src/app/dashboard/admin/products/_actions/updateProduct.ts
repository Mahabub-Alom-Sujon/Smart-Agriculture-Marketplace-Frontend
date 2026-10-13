"use server";
import { cookies } from "next/headers";
import { productSchema } from "@/schemas/product.schema";
import type { SingleProductResponse, UpdateProductPayload } from "@/types/types.product";
export async function updateProduct(id: string, input: UpdateProductPayload): Promise<SingleProductResponse> {
    if (!id?.trim()) {
        return { success: false, message: "Category ID is required" };
    }
    const parsed = productSchema.safeParse(input);
    if (!parsed.success) {
        return {
            success: false,
            message: parsed.error.issues[0]?.message ?? "Invalid Category information",
        };
    }
    try {
        const cookieStore = await cookies();
        const accessToken = cookieStore.get("accessToken")?.value;
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!accessToken || !apiUrl) {
            return {
                success: false,
                message: !accessToken ? "Please log in to continue" : "API URL is not configured",
            };
        }
        const response = await fetch(`${apiUrl}/api/v1/products/${id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(parsed.data),
        });
        const result = await response.json();
        if (!response.ok || !result?.success) {
            return {
                success: false,
                message: result?.message ?? "Failed to update Products"
            };
        }
        return result as SingleProductResponse;
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong while updating the Products",
        };
    }
}