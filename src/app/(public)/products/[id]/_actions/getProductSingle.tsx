"use server";
import { revalidateTag } from "next/cache";
export const getProductSingle = async (id: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/products/${id}`, {
            method: "GET",
            next: {
                tags: [`products/${id}`],
            }
        });
        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.message || "Failed to fetch Product details");
        }
        // revalidateTag(`services/${id}`);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};