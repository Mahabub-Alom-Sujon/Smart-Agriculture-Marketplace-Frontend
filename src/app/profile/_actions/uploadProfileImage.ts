"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
export interface UploadProfileImageResponse {
    success: boolean;
    message: string;
    data?: {
        imageUrl: string;
        imagePublicId: string;
    };
}
export async function uploadProfileImage(
    formData: FormData
): Promise<UploadProfileImageResponse> {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!baseUrl) {
            return {
                success: false,
                message: "API URL is not configured.",
            };
        }
        const file = formData.get("profileImage") as File; // আপনার ইনপুট ফিল্ডের নাম 'file' না হয়ে 'image' হলে সেটি লিখুন
        if (!file) {
            return {
                success: false,
                message: "No image file provided.",
            };
        }

        const cookieStore = await cookies();
        const accessToken = cookieStore.get("accessToken")?.value;
        const apiFormData = new FormData();
        apiFormData.append("profileImage", file); // ব্যাকএন্ডে যে নামে ফাইল ধরেছে সেই কি (key) দিন

        const response = await fetch(
            `${baseUrl}/api/v1/user/profile-image`,
            {
                method: "PATCH",
                headers: {
                    // যদি আপনার ব্যাকএন্ড টোকেন আশা করে তবে এটি ব্যবহার করুন:
                    Authorization: `Bearer ${accessToken}`,
                    // কুকি ভিত্তিক অথেনটিকেশন হলে নিচের লাইনটি রাখুন:
                    Cookie: cookieStore.toString(),
                },
                body: apiFormData, // ফ্রেশ ক্লিন বডি পাঠানো হচ্ছে
                cache: "no-store",
            }
        );

        const result: any = await response.json();

        if (!response.ok) {
            return {
                success: false,
                message: result?.message || result?.error || "Failed to upload profile image.",
            };
        }

        // প্রোফাইল পেজের ক্যাশ রিভ্যালিডেট করা হচ্ছে যাতে নতুন ইমেজ সাথে সাথে দেখায়
        revalidatePath("/profile");

        return {
            success: true,
            message: result?.message || "Profile image updated successfully.",
            data: result?.data,
        };
    } catch (error: unknown) {
        console.error("Profile image upload error:", error);

        return {
            success: false,
            message: "Unable to upload profile image.",
        };
    }
}