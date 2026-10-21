"use client";
import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
interface CategoryPaginationProps {
    currentPage: number;
    totalPages: number;
    searchTerm: string;
}
export default function CategoryPagination({
    currentPage,
    totalPages,
    searchTerm,
}: CategoryPaginationProps) {
    const router = useRouter();
    const goToPage = (page: number) => {
        if (
            page < 1 ||
            page > totalPages ||
            page === currentPage
        ) {
            return;
        }
        const params = new URLSearchParams();

        if (searchTerm.trim()) {
            params.set("searchTerm", searchTerm.trim());
        }
        params.set("page", String(page));
        router.push(
            `/dashboard/admin/categories?${params.toString()}`
        );
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const getPages = (): Array<number | "..."> => {
        if (totalPages <= 5) {
            return Array.from(
                { length: totalPages },
                (_, index) => index + 1
            );
        }

        if (currentPage <= 3) {
            return [
                1,
                2,
                3,
                4,
                "...",
                totalPages,
            ];
        }

        if (currentPage >= totalPages - 2) {
            return [
                1,
                "...",
                totalPages - 3,
                totalPages - 2,
                totalPages - 1,
                totalPages,
            ];
        }

        return [
            1,
            "...",
            currentPage - 1,
            currentPage,
            currentPage + 1,
            "...",
            totalPages,
        ];
    };

    const pages = getPages();

    const navigationButtonClass =
        "inline-flex h-9 items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-600 transition-colors hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-emerald-700 dark:hover:bg-emerald-950 dark:hover:text-emerald-400";

    return (
        <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900 sm:flex-row">
            {/* Page Information */}
            <p className="text-sm text-slate-500 dark:text-slate-400">
                Page{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                    {currentPage}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                    {totalPages}
                </span>
            </p>

            {/* Pagination Navigation */}
            <nav
                className="flex items-center gap-1.5"
                aria-label="Categories pagination"
            >
                {/* Previous Button */}
                <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => goToPage(currentPage - 1)}
                    className={navigationButtonClass}
                >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="hidden sm:inline">
                        Previous
                    </span>
                </button>

                {/* Page Numbers */}
                {pages.map((page, index) => {
                    if (page === "...") {
                        return (
                            <span
                                key={`ellipsis-${index}`}
                                className="flex h-9 w-9 items-center justify-center text-sm text-slate-400 dark:text-slate-500"
                                aria-hidden="true"
                            >
                                ...
                            </span>
                        );
                    }

                    const isActive = page === currentPage;

                    return (
                        <button
                            key={page}
                            type="button"
                            onClick={() => goToPage(page)}
                            aria-current={
                                isActive ? "page" : undefined
                            }
                            aria-label={`Go to page ${page}`}
                            className={`h-9 min-w-9 rounded-lg px-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 ${
    isActive
        ? "bg-green-600 text-white shadow-sm hover:bg-green-700 dark:bg-green-500 dark:text-white dark:hover:bg-green-600"
        : "border border-slate-200 bg-white text-slate-600 hover:border-emerald-200 hover:bg-green-50 hover:text-green-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-emerald-700 dark:hover:bg-emerald-950 dark:hover:text-emerald-400"
}`}
                        >
                            {page}
                        </button>
                    );
                })}

                {/* Next Button */}
                <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() => goToPage(currentPage + 1)}
                    className={navigationButtonClass}
                >
                    <span className="hidden sm:inline">
                        Next
                    </span>
                    <ChevronRight className="h-4 w-4" />
                </button>
            </nav>
        </div>
    );
}