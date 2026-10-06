import type { Metadata } from "next";
import { getAllExperts } from "./_actions/expertAction";
import ExpertsPage from "./_components/ExpertsPage";
export const metadata: Metadata = {
    title: "Agricultural Experts | AgroMart",
    description: "Find experienced agricultural experts for professional farming, soil and crop management advice.",
};
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
        <main className="min-h-screen bg-slate-50">
            <ExpertsPage
                experts={response.data}
                meta={response.meta}
                searchTerm={searchTerm}
            />
        </main>
    );
}