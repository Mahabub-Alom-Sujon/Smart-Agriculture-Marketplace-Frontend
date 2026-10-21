import type {
    Farmer,
    FarmerMeta,
} from "@/types/types.farmer";
import FarmerHeader from "@/app/dashboard/admin/farmers/_components/FarmerHeader";
import FarmerSearch from "@/app/dashboard/admin/farmers/_components/FarmerSearch";
import FarmerTable from "@/app/dashboard/admin/farmers/_components/FarmerTable";
import FarmerPagination from "@/app/dashboard/admin/farmers/_components/FarmerPagination";
interface FarmerPageProps {
    farmer: Farmer[];
    meta: FarmerMeta;
    searchTerm: string;
}

export default function FarmerPage({
    farmer,
    meta,
   searchTerm,
}: FarmerPageProps) {
    return (
        <main className="min-h-screen bg-slate-50 transition-colors duration-300 dark:bg-slate-950">
            <div className="space-y-6 p-4 sm:p-6 lg:p-8">
                {/* Page Header */}
                <FarmerHeader />

                {/* Search Farmers */}
                <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-5">
                    <FarmerSearch
                        initialSearchTerm={searchTerm}
                    />
                </section>

                {/* Farmers Table */}
                <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
                    <FarmerTable
                        farmers={farmer}
                    />
                </section>

                {/* Pagination */}
                {meta.totalPage > 1 && (
                    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-5">
                        <FarmerPagination
                            currentPage={meta.page}
                            totalPages={meta.totalPage}
                            searchTerm={searchTerm}
                        />
                    </div>
                )}
            </div>
        </main>
    );
}