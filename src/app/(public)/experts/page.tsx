import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { getAllExperts } from "./_actions/expertAction";
import ExpertsPage from "./_components/ExpertsPage";
export const metadata: Metadata = createPageMetadata({
    title: "Agricultural Experts",
    description:
        "Find agricultural experts for crop management, soil health, and farming consultation.",
    path: "/experts",
});
export const revalidate = 300;
interface ExpertsRouteProps {
    searchParams: Promise<{
        searchTerm?: string;
        page?: string;
    }>;
}
export default async function ExpertsRoute({
    searchParams,
}: ExpertsRouteProps) {
    const params = await searchParams;
    const searchTerm = params.searchTerm ?? "";
    const page = Math.max(
        1,
        Number(params.page) || 1
    );
    const limit = 10;
    const response = await getAllExperts({
        searchTerm,
        page,
        limit,
    });
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
            <ExpertsPage
                experts={response.data}
                meta={response.meta}
                searchTerm={searchTerm}
            />
        </main>
    );
}