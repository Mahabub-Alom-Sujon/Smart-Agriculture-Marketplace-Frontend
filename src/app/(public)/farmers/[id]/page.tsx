import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getFarmerSingle } from "@/app/(public)/farmers/[id]/_actions/getFarmerSingle";
import { getAllFarmers } from "@/app/(public)/farmers/_actions/farmerAction";
import FarmerDetails from "@/app/(public)/farmers/[id]/_components/FarmerDetails";

interface FarmerDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

/**
 * SSG
 * Existing farmers will be statically generated
 * during the production build.
 */
export async function generateStaticParams() {
    try {
        const response = await getAllFarmers();

        return response.data.map((farmer) => ({
            id: farmer.id,
        }));
    } catch (error) {
        console.error(
            "Failed to generate farmer static params:",
            error
        );

        return [];
    }
}

/**
 * ISR
 * Revalidate the generated page every 5 minutes.
 */
export const revalidate = 300;

export default async function FarmerDetailsPage({
                                                    params,
                                                }: FarmerDetailsPageProps) {
    const { id } = await params;
    const response = await getFarmerSingle(id);

    if (!response.success || !response.data) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
            <FarmerDetails farmer={response.data} />
        </main>
    );
}