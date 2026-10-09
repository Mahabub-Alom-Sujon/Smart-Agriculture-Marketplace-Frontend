"use server";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export interface CreateCategoryPayload {
    name: string;
    description?: string;
    image?: string;
}
export const createCategory = async (
    payload: CreateCategoryPayload
) => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    if (!accessToken) {
        throw new Error("Unauthorized: Access token not found");
    }
    const response = await fetch(`${BASE_URL}/api/v1/categories`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
    });
    const result = await response.json();
    if (!response.ok) {
        throw new Error(result?.message || "Failed to create category");
    }
    revalidateTag("categories", "max");
    return result;
};