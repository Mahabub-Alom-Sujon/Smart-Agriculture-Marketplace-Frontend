"use server";
import { cookies } from "next/headers";
import type { UserProfileResponse } from "@/types/types.profile";

export async function getProfile(): Promise<UserProfileResponse> {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!baseUrl) {
            throw new Error("NEXT_PUBLIC_API_URL is not configured");
        }
        const cookieStore = await cookies();
        const accessToken = cookieStore.get("accessToken")?.value;
        if (!accessToken) {
            return {
                success: false,
                message: "Unauthorized: Access token not found",
            };
        }
        const response = await fetch(
            `${baseUrl}/api/v1/auth/me`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    Cookie: cookieStore.toString(),
                    "Content-Type": "application/json",
                },
                cache: "no-store",
            }
        );
        const result: unknown = await response.json();
        if (!response.ok) {
            const message = typeof result === "object" &&
                result !== null && "message" in result &&
                typeof result.message === "string" ? result.message : "Failed to fetch user profile";

            return {
                success: false,
                message,
            };
        }

        return result as UserProfileResponse;
    } catch (error: unknown) {
        console.error("getProfile error:", error);

        return {
            success: false,
            message: error instanceof Error ? error.message : "Something went wrong",
        };
    }
}