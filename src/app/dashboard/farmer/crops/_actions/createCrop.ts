"use server";
import { cookies } from "next/headers";
import { CropSchema } from "@/schemas/crop.schema";
import type { CropResponse, CreateCropInput } from "@/types/type.crop";

export async function createCrop(input: CreateCropInput): Promise<CropResponse> {
    // ১. ডাটা ভ্যালিডেশন
    const parsed = CropSchema.safeParse(input);
    if (!parsed.success) {
        return {
            success: false,
            message: parsed.error.issues[0]?.message ?? "Invalid farm information",
        };
    }

    try {
        // ২. টোকেন এবং ইউআরএল চেক
        const cookieStore = await cookies();
        const accessToken = cookieStore.get("accessToken")?.value;
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!accessToken || !apiUrl) {
            return {
                success: false,
                message: !accessToken ? "Please log in to continue" : "API URL is not configured",
            };
        }

        // ৩. API রিকোয়েস্ট পাঠানো
        const response = await fetch(`${apiUrl}/api/v1/crops`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(parsed.data), // সরাসরি parsed.data পাঠানো হয়েছে
        });

        const result = await response.json();

        // ৪. রেসপন্স চেক ও রিটার্ন
        if (!response.ok || !result?.success) {
            return {
                success: false,
                message: result?.message ?? "Failed to create farm"
            };
        }

        return result as CropResponse;
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong while creating the farm",
        };
    }
}
