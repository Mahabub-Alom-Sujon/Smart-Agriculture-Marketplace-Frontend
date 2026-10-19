"use server";
import type { ProductResponse } from "@/types/types.product"
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getAllFeatureProducts = async (): Promise<ProductResponse> => {
    if (!API_URL) {
        throw new Error("NEXT_PUBLIC_API_URL is not configured");
    }
    try {
        const response = await fetch(`${API_URL}/api/v1/products/featured`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            next: {
                tags: ["products"],
                revalidate: 300,
            },
        });
        const result: ProductResponse = await response.json();
        if (!response.ok) {
            throw new Error(
                result.message || "Failed to fetch products"
            );
        }
        return result;
    } catch (error) {
        console.error("Failed to fetch products:", error);
        throw error;
    }
};