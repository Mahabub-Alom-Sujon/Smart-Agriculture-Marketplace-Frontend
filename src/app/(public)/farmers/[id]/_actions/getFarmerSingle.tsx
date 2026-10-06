// "use server";
// import { revalidateTag } from "next/cache";
// export const getFarmerSingle = async (id: string) => {
//     try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/farmers/${id}`, {
//             method: "GET",
//             next: {
//                 tags: [`farmers/${id}`],
//                 revalidate: 300,
//             }
//         });
//         const data = await res.json();
//         if (!res.ok) {
//             throw new Error(data.message || "Failed to fetch Farmer details");
//         }
//         //revalidateTag(`farmers/${id}`);
//         return data;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// };
//
// export const revalidateFarmer = async (
//     id: string
// ): Promise<void> => {
//     revalidateTag(`farmers/${id}`, "max");
//     revalidateTag("farmers", "max");
// };

"use server";

import { revalidateTag } from "next/cache";
import type { SingleFarmerResponse } from "@/types/types.farmer";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getFarmerSingle = async (
    id: string
): Promise<SingleFarmerResponse> => {
    if (!API_URL) {
        throw new Error(
            "NEXT_PUBLIC_API_URL is not configured"
        );
    }
    try {
        const response = await fetch(
            `${API_URL}/api/v1/farmers/${id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                next: {
                    tags: [`farmers/${id}`],
                    revalidate: 300,
                },
            }
        );
        const result: SingleFarmerResponse = await response.json();
        if (!response.ok) {
            throw new Error( result.message || "Failed to fetch Farmer details");
        }

        return result;
    } catch (error) {
        console.error("Failed to fetch farmer:", error);
        throw error;
    }
};

/**
 * Revalidate single farmer and farmer list cache
 *
 * Call this after:
 * - Create farmer
 * - Update farmer
 * - Delete farmer
 */
export const revalidateFarmer = async (
    id: string
): Promise<void> => {
    revalidateTag(`farmers/${id}`, "max");
    revalidateTag("farmers", "max");
};