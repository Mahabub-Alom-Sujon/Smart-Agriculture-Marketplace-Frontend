import type {
    Consultation,
    ConsultationMeta,
} from "@/types/types.consultation";
import ConsultationsHeader from "@/app/dashboard/farmer/consultations/_components/ConsultationsHeader";
import ConsultationSearch from "@/app/dashboard/farmer/consultations/_components/ConsultationSearch";
import ConsultationTable from "@/app/dashboard/farmer/consultations/_components/ConsultationTable";
import ConsultationPagination from "@/app/dashboard/farmer/consultations/_components/ConsultationPagination";

interface ConsultationsPageProps {
    consultations: Consultation[];
    meta: ConsultationMeta;
    searchTerm: string;
}

export default function ConsultationsPage({
    consultations,
    meta,
    searchTerm,
}: ConsultationsPageProps) {
    return (
        <div className="space-y-6">
            {/* Page Header */}
            <ConsultationsHeader />
            {/* Search */}
            <ConsultationSearch
                initialSearchTerm={searchTerm}
            />
            {/* Consultation Table */}
            <ConsultationTable
                consultations={consultations}
            />
            {/* Pagination */}
            {meta.totalPage > 1 && (
                <ConsultationPagination
                    currentPage={meta.page}
                    totalPages={meta.totalPage}
                    searchTerm={searchTerm}
                />
            )}
        </div>
    );
}