"use server";
import { cookies } from "next/headers";
import type {
    DashboardStats,
    DashboardStatsActionResult,
    DashboardStatsResponse,
} from "@/types/types.analytics";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function getDashboardStats(): Promise<DashboardStatsActionResult> {
    try {
        if (!API_URL) {
            throw new Error("API URL is not configured.");
        }
        const cookieStore = await cookies();
        const accessToken = cookieStore.get("accessToken")?.value;
        if (!accessToken) {
            return {
                success: false,
                message: "Authentication required. Please log in again.",
                data: null,
            };
        }
        const response = await fetch(`${API_URL}/api/v1/admin/dashboard-stats`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    Accept: "application/json",
                },
                cache: "no-store",
            },
        );
        const result: DashboardStatsResponse = await response.json();
        if (!response.ok || !result.success) {
            return {
                success: false,
                message: result.message || "Failed to fetch dashboard analytics.",
                data: null,
            };
        }
        const data: DashboardStats = result.data;
        return {
            success: true,
            message: result.message,
            data,
        };
    } catch (error: unknown) {
        console.error("Dashboard analytics error:", error);
        return {
            success: false,
            message: error instanceof Error ? error.message : "Something went wrong while loading analytics.",
            data: null,
        };
    }
}
