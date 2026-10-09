"use server";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { CreateProductPayload } from "@/types/types.product"
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export const createProduct = async (
    payload: CreateProductPayload
) => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    if (!accessToken) {
        throw new Error("Unauthorized: Access token not found");
    }
    const response = await fetch(`${BASE_URL}/api/v1/products`, {
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
        throw new Error(result?.message || "Failed to create product");
    }
    revalidateTag("products", "max");
    return result;
};