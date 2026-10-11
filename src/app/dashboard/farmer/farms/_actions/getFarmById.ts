"use server";
import { cookies } from "next/headers";
import type { FarmApiResponse } from "@/types/types.farm";
export async function getFarmById(
    id: string,
): Promise<FarmApiResponse> {
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
            `${apiUrl}/api/v1/farms/${id}`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                cache: "no-store",
            },
        );

        const result: unknown = await response.json();

        if (!response.ok) {
            const message =
                typeof result === "object" &&
                result !== null &&
                "message" in result &&
                typeof result.message === "string"
                    ? result.message
                    : "Failed to fetch farm";

            return { success: false, message };
        }

        if (
            typeof result !== "object" ||
            result === null ||
            !("success" in result) ||
            result.success !== true ||
            !("data" in result)
        ) {
            return {
                success: false,
                message: "Invalid farm response",
            };
        }

        return result as FarmApiResponse;
    } catch {
        return {
            success: false,
            message: "Unable to load farm",
        };
    }
}
