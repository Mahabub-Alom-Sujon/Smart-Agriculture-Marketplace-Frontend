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
        <div className="space-y-6">
            {/* Page Header */}
            <FarmerHeader />
            {/* Search Farmers */}
            <FarmerSearch
                initialSearchTerm={searchTerm}
            />
            {/* Farmers Table */}
            <FarmerTable
                farmers={farmer}
            />
            {/* Pagination */}
            {meta.totalPage > 1 && (
                <FarmerPagination
                    currentPage={meta.page}
                    totalPages={meta.totalPage}
                    searchTerm={searchTerm}
                />
            )}
        </div>
    );
}
