"use server";
import { cookies } from "next/headers";
import type { CropResponse } from "@/types/type.crop";
export async function deleteCrop(
    id: string,
): Promise<CropResponse> {
    if (!id.trim()) {
        return {
            success: false,
            message: "Farm ID is required",
        };
    }

    try {
        const cookieStore = await cookies();
        const accessToken = cookieStore.get("accessToken")?.value;
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        if (!accessToken) {
            return {
                success: false,
                message: "Please log in to continue",
            };
        }

        if (!apiUrl) {
            return {
                success: false,
                message: "API URL is not configured",
            };
        }

        const response = await fetch(
            `${apiUrl}/api/v1/crops/${id}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                cache: "no-store",
            },
        );

        const result: unknown = await response.json();

        if (
            !response.ok ||
            typeof result !== "object" ||
            result === null ||
            !("success" in result) ||
            result.success !== true
        ) {
            const message =
                typeof result === "object" &&
                result !== null &&
                "message" in result &&
                typeof result.message === "string"
                    ? result.message
                    : "Failed to delete farm";

            return { success: false, message };
        }

        return result as CropResponse;
    } catch {
        return {
            success: false,
            message: "Unable to delete farm",
        };
    }
}
