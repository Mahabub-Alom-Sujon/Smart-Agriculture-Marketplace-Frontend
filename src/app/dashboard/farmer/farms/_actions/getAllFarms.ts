"use server";
import { cookies } from "next/headers";
const API_URL = process.env.NEXT_PUBLIC_API_URL!;
interface getAllFarmsParams {
    page?: number;
    limit?: number;
    searchTerm?: string;
}
export const getAllFarms = async ({
      page = 1,
      limit = 10,
      searchTerm = "",
}: getAllFarmsParams = {}) => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    if (!accessToken) {
        throw new Error("Unauthorized: Access token not found");
    }
    const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
    });
    if (searchTerm.trim()) {
        params.set("searchTerm", searchTerm.trim());
    }
    const res = await fetch(
        `${API_URL}/api/v1/farms?${params.toString()}`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            cache: "no-store",
        }
    );
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Failed to fetch consultations");
    }
    return data;
};