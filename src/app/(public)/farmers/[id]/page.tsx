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
 *
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
 *
 * Revalidate the generated page every 5 minutes.
 */
export const revalidate = 300;

/**
 * SEO Metadata
 */
// export async function generateMetadata({
//                                            params,
//                                        }: FarmerDetailsPageProps): Promise<Metadata> {
//     const { id } = await params;
//
//     try {
//         const response = await getFarmerSingle(id);
//
//         if (!response.success || !response.data) {
//             return {
//                 title: "Farmer Not Found | AgroMart",
//                 description:
//                     "The requested farmer could not be found.",
//             };
//         }
//
//         const farmer = response.data;
//
//         return {
//             title: `${farmer.name} | Farmer | AgroMart`,
//             description: `View ${farmer.name}'s agricultural profile, farms, locations, land information and farming details on AgroMart.`,
//             openGraph: {
//                 title: `${farmer.name} | AgroMart`,
//                 description: `Explore ${farmer.name}'s farms and agricultural profile.`,
//                 type: "profile",
//             },
//         };
//     } catch (error) {
//         console.error(
//             "Failed to generate farmer metadata:",
//             error
//         );
//
//         return {
//             title: "Farmer | AgroMart",
//             description:
//                 "Explore farmer profiles and farms on AgroMart.",
//         };
//     }
// }

export default async function FarmerDetailsPage({
    params,
}: FarmerDetailsPageProps) {
    const { id } = await params;
    const response = await getFarmerSingle(id);
    if (!response.success || !response.data) {
        notFound();
    }
    return (
        <main className="min-h-screen bg-slate-50">
            <FarmerDetails farmer={response.data} />
        </main>
    );
}