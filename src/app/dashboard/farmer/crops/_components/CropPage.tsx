import type { Crop, CropMeta } from "@/types/type.crop";

import CropHeader from "@/app/dashboard/farmer/crops/_components/CropHeader";
import CropSearch from "@/app/dashboard/farmer/crops/_components/CropSearch";
import CropTable from "@/app/dashboard/farmer/crops/_components/CropTable";
import CropPagination from "@/app/dashboard/farmer/crops/_components/CropPagination";

interface CropPageProps {
    crops: Crop[];
    meta: CropMeta;
    searchTerm: string;
}

export default function CropPage({
    crops,
    meta,
    searchTerm,
}: CropPageProps) {
    return (
        <div className="space-y-6">
            {/* Page Header */}
            <CropHeader />

            {/* Search */}
            <CropSearch initialSearchTerm={searchTerm} />

            {/* Crop Table */}
            <CropTable crops={crops} />

            {/* Pagination */}
            {meta.totalPage > 1 && (
                <CropPagination
                    currentPage={meta.page}
                    totalPages={meta.totalPage}
                    searchTerm={searchTerm}
                />
            )}
        </div>
    );
}