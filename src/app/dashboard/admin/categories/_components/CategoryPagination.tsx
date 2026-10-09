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
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const getPages = (): Array<number | "..."> => {
        if (totalPages <= 5) {
            return Array.from(
                {
                    length: totalPages,
                },
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

    return (
        <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm sm:flex-row">
            <p className="text-sm text-slate-500">
                Page{" "}
                <span className="font-semibold text-slate-900">
                    {currentPage}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-slate-900">
                    {totalPages}
                </span>
            </p>

            <nav
                className="flex items-center gap-1.5"
                aria-label="Categories pagination"
            >
                <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() =>
                        goToPage(currentPage - 1)
                    }
                    className="inline-flex h-9 items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-600 transition-colors hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="hidden sm:inline">
                        Previous
                    </span>
                </button>

                {pages.map((page, index) => {
                    if (page === "...") {
                        return (
                            <span
                                key={`ellipsis-${index}`}
                                className="flex h-9 w-9 items-center justify-center text-sm text-slate-400"
                            >
                                ...
                            </span>
                        );
                    }

                    const isActive =
                        page === currentPage;

                    return (
                        <button
                            key={page}
                            type="button"
                            onClick={() =>
                                goToPage(page)
                            }
                            aria-current={
                                isActive
                                    ? "page"
                                    : undefined
                            }
                            className={`h-9 min-w-9 rounded-lg px-3 text-sm font-semibold transition-colors ${
                                isActive
                                    ? "bg-green-600 text-white"
                                    : "border border-slate-200 bg-white text-slate-600 hover:border-emerald-200 hover:bg-green-50 hover:text-green-700"
                            }`}
                        >
                            {page}
                        </button>
                    );
                })}

                <button
                    type="button"
                    disabled={
                        currentPage === totalPages
                    }
                    onClick={() =>
                        goToPage(
                            currentPage + 1
                        )
                    }
                    className="inline-flex h-9 items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-600 transition-colors hover:border-green-200 hover:bg-emerald-50 hover:text-green-700 disabled:cursor-not-allowed disabled:opacity-40"
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