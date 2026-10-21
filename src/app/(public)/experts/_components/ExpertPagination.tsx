"use client";
import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
interface ExpertPaginationProps {
    currentPage: number;
    totalPages: number;
    searchTerm: string;
}
export default function ExpertPagination({
    currentPage,
    totalPages,
    searchTerm,
}: ExpertPaginationProps) {
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
        router.push(`/experts?${params.toString()}`);
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
            return [1, 2, 3, 4, "...", totalPages];
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
    const navigationButtonClass = "inline-flex h-10 items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:border-green-200 hover:bg-green-50 hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:bg-white disabled:hover:text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-emerald-700 dark:hover:bg-emerald-950/50 dark:hover:text-emerald-300 dark:focus-visible:ring-offset-slate-950 dark:disabled:hover:border-slate-700 dark:disabled:hover:bg-slate-900 dark:disabled:hover:text-slate-300";
    return (
        <nav
            className="flex flex-wrap items-center justify-center gap-2"
            aria-label="Experts pagination"
        >
            {/* Previous */}
            <button
                type="button"
                disabled={currentPage <= 1}
                onClick={() => goToPage(currentPage - 1)}
                className={navigationButtonClass}
                aria-label="Previous page"
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
                            className="flex h-10 w-10 items-center justify-center text-sm text-slate-400 dark:text-slate-500"
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
                        className={`h-10 min-w-10 rounded-xl px-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 ${
                        isActive
                        ? "bg-green-600 text-white shadow-md shadow-green-600/20 hover:bg-green-700 dark:bg-emerald-600 dark:text-white dark:hover:bg-emerald-500"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-green-200 hover:bg-green-50 hover:text-green-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-emerald-700 dark:hover:bg-emerald-950/50 dark:hover:text-emerald-300"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                        aria-label={`Page ${page}`}
                    >
                        {page}
                    </button>
                );
            })}
            {/* Next */}
            <button
                type="button"
                disabled={currentPage >= totalPages}
                onClick={() => goToPage(currentPage + 1)}
                className={navigationButtonClass}
                aria-label="Next page"
            >
                <span className="hidden sm:inline">
                    Next
                </span>
                <ChevronRight className="h-4 w-4" />
            </button>
        </nav>
    );
}