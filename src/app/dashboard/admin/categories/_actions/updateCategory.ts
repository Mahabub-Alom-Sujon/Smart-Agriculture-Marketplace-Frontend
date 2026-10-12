"use server";
import { cookies } from "next/headers";
import { categorySchema } from "@/schemas/category.schema";
import type { SingleCategoryResponse, UpdateCategoryInput } from "@/types/types.category";
export async function updateCategory(id: string, input: UpdateCategoryInput): Promise<SingleCategoryResponse> {
    if (!id?.trim()) {
        return { success: false, message: "Category ID is required" };
    }
    const parsed = categorySchema.safeParse(input);
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
        const response = await fetch(`${apiUrl}/api/v1/categories/${id}`, {
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
                message: result?.message ?? "Failed to update Category"
            };
        }
        return result as SingleCategoryResponse;
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong while updating the Category",
        };
    }
}