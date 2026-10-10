"use server";
import { cookies } from "next/headers";
import type {
    UpdateProfileInput,
    UserProfileResponse,
} from "@/types/types.profile";
export async function updateProfile(
    payload: UpdateProfileInput
): Promise<UserProfileResponse> {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!baseUrl) {
            throw new Error(
                "NEXT_PUBLIC_API_URL is not configured"
            );
        }
        const cookieStore = await cookies();
        const response = await fetch(
            `${baseUrl}/api/v1/user/update-profile`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Cookie: cookieStore.toString(),
                },
                body: JSON.stringify(payload),
                cache: "no-store",
            }
        );
        const result: unknown = await response.json();
        if (!response.ok) {
            const message =
                typeof result === "object" &&
                result !== null &&
                "message" in result &&
                typeof result.message === "string" ? result.message : "Failed to update profile";
            return {
                success: false,
                message,
            };
        }
        return result as UserProfileResponse;
    } catch (error: unknown) {
        console.error("updateProfile error:", error);
        return {
            success: false,
            message: error instanceof Error ? error.message : "Something went wrong",
        };
    }
}