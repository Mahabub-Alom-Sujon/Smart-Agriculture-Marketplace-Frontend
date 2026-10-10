"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
interface DeleteExpertResponse {
    success: boolean;
    message: string;
}
export const deleteExpert = async (
    id: string
): Promise<DeleteExpertResponse> => {
    try {
        if (!id) {
            return {
                success: false,
                message: "Expert ID is required",
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

        const response = await fetch(`${BASE_URL}/api/v1/experts/${id}`,
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
            (await response.json()) as DeleteExpertResponse;
        if (!response.ok) {
            return {
                success: false,
                message: result.message || "Failed to delete category",
            };
        }
        revalidatePath("/dashboard/admin/experts");
        return {
            success: true,
            message: result.message || "Expert deleted successfully",
        };
    } catch (error) {
        console.error(
            "Delete Expert error:",
            error
        );

        return {
            success: false,
            message: "Something went wrong while deleting Expert",
        };
    }
};