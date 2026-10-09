"use server";
import { cookies } from "next/headers";
import type { CategoryResponse } from "@/types/types.category";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getAllCategory = async (): Promise<CategoryResponse> => {
    if (!API_URL) {
        throw new Error("NEXT_PUBLIC_API_URL is not configured");
    }
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    const response = await fetch(`${API_URL}/api/v1/categories/admin`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
        cache: "no-store"
    });
    const result: CategoryResponse = await response.json();
    if (!response.ok) {
        throw new Error(
            result.message || "Failed to fetch categories"
        );
    }
    return result;
};
