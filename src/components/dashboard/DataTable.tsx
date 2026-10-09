"use client";
import type { ReactNode } from "react";
export interface DataTableColumn<T> {
    key: string;
    header: string;
    className?: string;
    render: (
        item: T,
        index: number
    ) => ReactNode;
}

interface DataTableProps<T> {
    data: T[];
    columns: DataTableColumn<T>[];
    getRowKey: (
        item: T,
        index: number
    ) => string;
    loading?: boolean;
    emptyState?: ReactNode;
    className?: string;
}

export default function DataTable<T>({
    data,
    columns,
    getRowKey,
    loading = false,
    emptyState,
    className = "",
}: DataTableProps<T>) {
    return (
        <div
            className={`w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ${className}`}
        >
            <div className="w-full overflow-x-auto">
                <table className="w-full min-w-175 border-collapse">
                    <thead>
                        <tr className="border-b border-slate-200 bg-slate-50">
                            {columns.map(
                                (column) => (
                                    <th
                                        key={
                                            column.key
                                        }
                                        className={`px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 ${column.className ?? ""}`}
                                    >
                                        {
                                            column.header
                                        }
                                    </th>
                                )
                            )}
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">
                        {loading ? (
                            Array.from({
                                length: 5,
                            }).map(
                                (_, index) => (
                                    <tr
                                        key={`loading-${index}`}
                                    >
                                        {columns.map(
                                            (
                                                column
                                            ) => (
                                                <td
                                                    key={
                                                        column.key
                                                    }
                                                    className="px-5 py-4"
                                                >
                                                    <div className="h-5 w-full max-w-40 animate-pulse rounded bg-slate-200" />
                                                </td>
                                            )
                                        )}
                                    </tr>
                                )
                            )
                        ) : data.length ===
                          0 ? (
                            <tr>
                                <td
                                    colSpan={
                                        columns.length
                                    }
                                    className="p-0"
                                >
                                    {emptyState ?? (
                                        <div className="py-12 text-center text-sm text-slate-500">
                                            No data
                                            found.
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ) : (
                            data.map(
                                (
                                    item,
                                    index
                                ) => (
                                    <tr
                                        key={getRowKey(
                                            item,
                                            index
                                        )}
                                        className="transition hover:bg-slate-50"
                                    >
                                        {columns.map(
                                            (
                                                column
                                            ) => (
                                                <td
                                                    key={
                                                        column.key
                                                    }
                                                    className={`px-5 py-4 text-sm text-slate-700 ${column.className ?? ""}`}
                                                >
                                                    {column.render(
                                                        item,
                                                        index
                                                    )}
                                                </td>
                                            )
                                        )}
                                    </tr>
                                )
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}