"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
interface DeleteFarmerResponse {
    success: boolean;
    message: string;
}
export const deleteFarmer = async (
    id: string
): Promise<DeleteFarmerResponse> => {
    try {
        if (!id) {
            return {
                success: false,
                message: "Farmer ID is required",
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

        const response = await fetch(`${BASE_URL}/api/v1/farmers/${id}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                cache: "no-store",
            }
        );

        const result =
            (await response.json()) as DeleteFarmerResponse;
        if (!response.ok) {
            return {
                success: false,
                message: result.message || "Failed to delete category",
            };
        }
        revalidatePath("/dashboard/admin/farmers");
        return {
            success: true,
            message: result.message || "Farmer deleted successfully",
        };
    } catch (error) {
        console.error(
            "Delete Farmer error:",
            error
        );

        return {
            success: false,
            message: "Something went wrong while deleting Farmer",
        };
    }
};