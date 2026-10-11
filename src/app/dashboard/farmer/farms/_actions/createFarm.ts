"use server";
import { cookies } from "next/headers";
import { farmSchema } from "@/schemas/farm.schema";
import type { FarmApiResponse, CreateFarmInput } from "@/types/types.farm";
export async function createFarm(
    input: CreateFarmInput,
): Promise<FarmApiResponse> {
    const parsed = farmSchema.safeParse(input);
    if (!parsed.success) {
        return {
            success: false,
            message: parsed.error.issues[0]?.message ?? "Invalid farm information",
        };
    }

    try {
        const cookieStore = await cookies();
        const accessToken = cookieStore.get("accessToken")?.value;
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        if (!accessToken) {
            return {
                success: false,
                message: "Please log in to continue",
            };
        }

        if (!apiUrl) {
            return {
                success: false,
                message: "API URL is not configured",
            };
        }

        const payload = {
            farmName: parsed.data.farmName,
            location: parsed.data.location,
            landSize: parsed.data.landSize,
            soilType: parsed.data.soilType
        };

        const response = await fetch(`${apiUrl}/api/v1/farms`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
            cache: "no-store",
        });

        const result: unknown = await response.json();

        if (
            !response.ok ||
            typeof result !== "object" ||
            result === null ||
            !("success" in result) ||
            result.success !== true
        ) {
            const message =
                typeof result === "object" &&
                result !== null &&
                "message" in result &&
                typeof result.message === "string"
                    ? result.message
                    : "Failed to create farm";

            return { success: false, message };
        }

        return result as FarmApiResponse;
    } catch {
        return {
            success: false,
            message: "Something went wrong while creating the farm",
        };
    }
}
