"use server";
import type { CategoryResponse } from "@/types/types.category"
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getAllCategories = async (): Promise<CategoryResponse> => {
    if (!API_URL) {
        throw new Error("NEXT_PUBLIC_API_URL is not configured");
    }
    try {
        const response = await fetch(`${API_URL}/api/v1/categories`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            next: {
                tags: ["products"],
                revalidate: 300,
            },
        });
        const result: CategoryResponse = await response.json();
        if (!response.ok) {
            throw new Error(
                result.message || "Failed to fetch category"
            );
        }
        return result;
    } catch (error) {
        console.error("Failed to fetch Category:", error);
        throw error;
    }
};