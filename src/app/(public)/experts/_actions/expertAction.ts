"use server";
import type { ExpertResponse } from "@/types/types.expert";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export interface GetExpertsParams {
    searchTerm?: string;
    page?: number;
    limit?: number;
}
export const getAllExperts = async ({
    searchTerm = "",
    page = 1,
    limit = 10,
}: GetExpertsParams = {}): Promise<ExpertResponse> => {
    if (!API_URL) {
        throw new Error("NEXT_PUBLIC_API_URL is not configured");
    }
    try {
        const queryParams = new URLSearchParams();
        if (searchTerm.trim()) {
            queryParams.set("searchTerm", searchTerm.trim());
        }
        queryParams.set("page", String(page));
        queryParams.set("limit", String(limit));
        const response = await fetch(
            `${API_URL}/api/v1/experts/public?${queryParams.toString()}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                next: {
                    tags: ["experts"],
                    revalidate: 300,
                },
            }
        );
        const result: ExpertResponse =
            await response.json();
        if (!response.ok) {
            throw new Error(
                result.message ||
                "Failed to fetch experts"
            );
        }
        return result;
    } catch (error) {
        console.error("Failed to fetch experts:", error);
        throw error;
    }
};