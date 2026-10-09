"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

interface DeleteProductResponse {
    success: boolean;
    message: string;
}

export const deleteProduct = async (
    id: string
): Promise<DeleteProductResponse> => {
    try {
        if (!id) {
            return {
                success: false,
                message: "Product ID is required",
            };
        }

        if (!BASE_URL) {
            return {
                success: false,
                message: "API URL is not configured",
            };
        }

        const cookieStore = await cookies();
        const accessToken = cookieStore.get("accessToken")?.value;
        if (!accessToken) {
            return {
                success: false,
                message: "Unauthorized. Please login again.",
            };
        }
        const response = await fetch(`${BASE_URL}/api/v1/products/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            cache: "no-store",
        });

        let result: any = {};
        try {
            result = await response.json();
        } catch (jsonError) {
            result = { message: "No response body received from server" };
        }

        if (!response.ok) {
            return {
                success: false,
                message: result?.message || result?.data?.message || "Failed to delete Product",
            };
        }

        revalidatePath("/dashboard/admin/products");
        return {
            success: true,
            message: result?.message || "Product deleted successfully",
        };
    } catch (error) {
        console.error("Delete Product error:", error);
        return {
            success: false,
            message: "Something went wrong while deleting Product",
        };
    }
};