// import type {
//     Category,
//     CategoryMeta,
// } from "@/types/types.category";
// import CategoriesHeader from "./CategoriesHeader";
// import CategorySearch from "./CategorySearch";
// import CategoryStats from "./CategoryStats";
// import CategoriesTable from "./CategoriesTable";
// import CategoryPagination from "./CategoryPagination";
// interface CategoriesPageProps {
//     categories: Category[];
//     meta: CategoryMeta;
//     searchTerm: string;
// }
// export default function CategoriesPage({
//    categories,
//    meta,
//    searchTerm,
// }: CategoriesPageProps) {
//     return (
//         <div className="space-y-6">
//             <CategoriesHeader />
//             <CategoryStats
//                 total={meta.total}
//                 currentPage={meta.page}
//                 totalPages={meta.totalPage}
//             />
//             <CategorySearch
//                 initialSearchTerm={searchTerm}
//             />
//             <CategoriesTable
//                 categories={categories}
//             />
//             {meta.totalPage > 1 && (
//                 <CategoryPagination
//                     currentPage={meta.page}
//                     totalPages={meta.totalPage}
//                     searchTerm={searchTerm}
//                 />
//             )}
//         </div>
//     );
// }

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
        <main className="min-h-screen bg-gray-50 text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">
            <div className="mx-auto w-full space-y-6 p-4 sm:p-6 lg:p-8">
                {/* Page Header */}
                <CategoriesHeader />

                {/* Category Statistics */}
                <section aria-label="Category statistics">
                    <CategoryStats
                        total={meta.total}
                        currentPage={meta.page}
                        totalPages={meta.totalPage}
                    />
                </section>

                {/* Search Categories */}
                <section aria-label="Search categories">
                    <CategorySearch
                        initialSearchTerm={searchTerm}
                    />
                </section>

                {/* Categories Table */}
                <section
                    aria-label="Categories list"
                    className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/10"
                >
                    <CategoriesTable
                        categories={categories}
                    />
                </section>

                {/* Pagination */}
                {meta.totalPage > 1 && (
                    <nav
                        aria-label="Category pagination"
                        className="rounded-xl border border-gray-200 bg-white p-3 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 sm:p-4"
                    >
                        <CategoryPagination
                            currentPage={meta.page}
                            totalPages={meta.totalPage}
                            searchTerm={searchTerm}
                        />
                    </nav>
                )}
            </div>
        </main>
    );
}