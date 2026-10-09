"use client";
import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    disabled?: boolean;
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    disabled = false,
}: PaginationProps) {
    if (totalPages <= 1) {
        return null;
    }

    const pages: number[] = [];

    for (let page = 1; page <= totalPages; page++) {
        pages.push(page);
    }

    return (
        <div className="flex items-center justify-between border-t border-slate-100 px-5 py-4">
            <button
                type="button"
                disabled={
                    disabled ||
                    currentPage === 1
                }
                onClick={() =>
                    onPageChange(currentPage - 1)
                }
                className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
                <ChevronLeft size={16} />

                Previous
            </button>

            <div className="flex items-center gap-1">
                {pages.map((page) => (
                    <button
                        key={page}
                        type="button"
                        disabled={disabled}
                        onClick={() =>
                            onPageChange(page)
                        }
                        className={`flex h-9 min-w-9 items-center justify-center rounded-lg px-2 text-sm font-medium transition ${
    currentPage === page
        ? "bg-emerald-600 text-white"
        : "text-slate-600 hover:bg-slate-100"
}`}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
                type="button"
                disabled={
                    disabled ||
                    currentPage === totalPages
                }
                onClick={() =>
                    onPageChange(currentPage + 1)
                }
                className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
                Next

                <ChevronRight size={16} />
            </button>
        </div>
    );
}