"use server";
import { cookies } from "next/headers";
import type { SingleCategoryResponse } from "@/types/types.category";
export async function getCategoryById(id: string): Promise<SingleCategoryResponse> {
    // ১. আইডি ভ্যালিডेशन (Category ID হিসেবে সংশোধন করা হয়েছে)
    if (!id?.trim()) {
        return {
            success: false,
            message: "Category ID is required",
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
        // ৩. API রিকোয়েস্ট (GET Method)
        const response = await fetch(`${apiUrl}/api/v1/categories/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const result = await response.json();
        // ৪. রেসপন্স চেক ও রিটার্ন
        if (!response.ok || !result?.success) {
            return {
                success: false,
                message: result?.message ?? "Failed to load category",
            };
        }
        return result as SingleCategoryResponse;
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong while loading the category",
        };
    }
}