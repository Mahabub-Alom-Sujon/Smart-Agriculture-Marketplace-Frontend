"use server";
import { cookies } from "next/headers";
import { CropSchema } from "@/schemas/crop.schema";
import type { CropResponse, UpdateCropInput } from "@/types/type.crop";

export async function updateCrop(id: string, input: UpdateCropInput): Promise<CropResponse> {
    // ১. আইডি ও ডাটা ভ্যালিডেশন
    if (!id?.trim()) {
        return { success: false, message: "Crop ID is required" };
    }

    const parsed = CropSchema.safeParse(input);
    if (!parsed.success) {
        return {
            success: false,
            message: parsed.error.issues[0]?.message ?? "Invalid crop information",
        };
    }

    try {
        const cookieStore = await cookies();
        const accessToken = cookieStore.get("accessToken")?.value;
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!accessToken || !apiUrl) {
            return {
                success: false,
                message: !accessToken ? "Please log in to continue" : "API URL is not configured",
            };
        }
        const response = await fetch(`${apiUrl}/api/v1/crops/${id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(parsed.data),
        });

        const result = await response.json();

        // ৪. রেসপন্স চেক ও রিটার্ন
        if (!response.ok || !result?.success) {
            return {
                success: false,
                message: result?.message ?? "Failed to update crop"
            };
        }

        return result as CropResponse;
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong while updating the crop",
        };
    }
}
