import type {
    Category,
    CategoryMeta,
} from "@/types/types.category";
import CategoriesHeader from "./CategoriesHeader";
import CategorySearch from "./CategorySearch";
import CategoryStats from "./CategoryStats";
import CategoriesTable from "./CategoriesTable";
import CategoryPagination from "./CategoryPagination";
interface CategoriesPageProps {
    categories: Category[];
    meta: CategoryMeta;
    searchTerm: string;
}
export default function CategoriesPage({
   categories,
   meta,
   searchTerm,
}: CategoriesPageProps) {
    return (
        <div className="space-y-6">
            <CategoriesHeader />
            <CategoryStats
                total={meta.total}
                currentPage={meta.page}
                totalPages={meta.totalPage}
            />
            <CategorySearch
                initialSearchTerm={searchTerm}
            />
            <CategoriesTable
                categories={categories}
            />
            {meta.totalPage > 1 && (
                <CategoryPagination
                    currentPage={meta.page}
                    totalPages={meta.totalPage}
                    searchTerm={searchTerm}
                />
            )}
        </div>
    );
}

