import type {
    Expert,
    ExpertMeta,
} from "@/types/types.expert";
import ExpertsHeader from "./ExpertsHeader";
import ExpertSearch from "./ExpertSearch";
import ExpertsTable from "./ExpertsTable";
import ExpertPagination from "./ExpertPagination";
interface ExpertPageProps {
    experts: Expert[];
    meta: ExpertMeta;
    searchTerm: string;
}

export default function ExpertPage({
    experts,
    meta,
    searchTerm,
}: ExpertPageProps) {
    return (
        <div className="space-y-6">
            <ExpertsHeader />
            <ExpertSearch
                initialSearchTerm={searchTerm}
            />
            <ExpertsTable
                experts={experts}
            />
            {meta.totalPage > 1 && (
                <ExpertPagination
                    currentPage={meta.page}
                    totalPages={meta.totalPage}
                    searchTerm={searchTerm}
                />
            )}
        </div>
    );
}