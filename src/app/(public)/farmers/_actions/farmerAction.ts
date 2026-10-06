"use server";
import type { FarmerResponse } from "@/types/types.farmer";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getAllFarmers = async (): Promise<FarmerResponse> => {
    if (!API_URL) {
        throw new Error("NEXT_PUBLIC_API_URL is not configured");
    }
    try {
        const response = await fetch(`${API_URL}/api/v1/farmers`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            next: {
                tags: ["farmers"],
                revalidate: 300,
            },
        });
        const result: FarmerResponse = await response.json();
        if (!response.ok) {
            throw new Error(
                result.message || "Failed to fetch farmers"
            );
        }
        return result;
    } catch (error) {
        console.error("Failed to fetch farmers:", error);
        throw error;
    }
};