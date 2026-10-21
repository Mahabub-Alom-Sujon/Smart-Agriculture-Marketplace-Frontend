import { getAllFarmer } from "./_actions/getAllFarmer";
import FarmerPage from "@/app/dashboard/admin/farmers/_components/FarmerPage";
interface FarmerRouteProps {
    searchParams: Promise<{
        page?: string;
        limit?: string;
        searchTerm?: string;
    }>;
}
export default async function FarmerRoute({
    searchParams,
}: FarmerRouteProps) {
    const params = await searchParams;
    const searchTerm = params.searchTerm?.trim() ?? "";
    const page = Math.max(1, Number(params.page) || 1);
    const limit = Math.max(1, Number(params.limit) || 10);
    const response = await getAllFarmer({
        page,
        limit,
        searchTerm,
    });
    const farmer = response?.data?.data ?? [];
    const meta = response?.data?.meta ?? {
        total: 0,
        page: 1,
        limit,
        totalPage: 0,
    };
    return (
        <main className="min-h-screen bg-slate-50 transition-colors duration-300 dark:bg-slate-950">
            <div className="mx-auto w-full max-w-[1600px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <FarmerPage
                    farmer={farmer}
                    meta={meta}
                    searchTerm={searchTerm}
                />
            </div>
        </main>
    );
}
