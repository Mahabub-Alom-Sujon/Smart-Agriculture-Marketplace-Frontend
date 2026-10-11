import type { Farm, FarmMeta } from "@/types/types.farm";
import FarmHeader from "@/app/dashboard/farmer/farms/_components/FarmHeader";
import FarmSearch from "@/app/dashboard/farmer/farms/_components/FarmSearch";
import FarmTable from "@/app/dashboard/farmer/farms/_components/FarmTable";
import FarmPagination from "@/app/dashboard/farmer/farms/_components/FarmPagination";
interface FarmPageProps {
    farms: Farm[];
    meta: FarmMeta;
    searchTerm: string;
}
export default function FarmPage({
    farms,
    meta,
    searchTerm,
}: FarmPageProps) {
    return (
        <div className="space-y-6">
            {/* Page Header */}
            <FarmHeader />

            {/* Search */}
            <FarmSearch initialSearchTerm={searchTerm} />

            {/* Farm Table */}
            <FarmTable farms={farms} />

            {/* Pagination */}
            {meta.totalPage > 1 && (
                <FarmPagination
                    currentPage={meta.page}
                    totalPages={meta.totalPage}
                    searchTerm={searchTerm}
                />
            )}
        </div>
    );
}