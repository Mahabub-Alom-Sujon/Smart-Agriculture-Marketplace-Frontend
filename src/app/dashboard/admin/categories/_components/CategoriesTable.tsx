"use client";
import Image from "next/image";
import { useState } from "react";
import {
    FolderTree,
    MoreHorizontal,
    Eye,
    Pencil,
    Trash2,
} from "lucide-react";

import moment from 'moment'
import type { Category } from "@/types/types.category";
import {DeleteAlert} from "@/lib/DeleteAlert";
import {deleteCategory} from "@/app/dashboard/admin/categories/_actions/deleteCategory";
import { toast } from "sonner";

interface CategoriesTableProps {
    categories: Category[];
}

export default function CategoriesTable({
    categories,
}: CategoriesTableProps) {
    const [openActionId, setOpenActionId] = useState<string | null>(
        null
    );

    const handleView = (categoryId: string) => {
        console.log("View category:", categoryId);
        // router.push(`/dashboard/admin/categories/${categoryId}`);
    };

    const handleUpdate = (categoryId: string) => {
        console.log("Update category:", categoryId);
        // router.push(`/dashboard/admin/categories/${categoryId}/edit`);
};

    const handleDelete = async (id: string) => {
        const alertResult = await DeleteAlert();
        if (!alertResult.isConfirmed) {
            return;
        }
        const result = await deleteCategory(id);
        if (result.success) {
            toast.success(result.message);
        } else {
            toast.error(result.message);
        }
    };

return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {/* Header */}
        <div className="border-b border-slate-200 px-5 py-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="font-semibold text-slate-900">
                        Category List
                    </h2>

                    <p className="mt-1 text-xs text-slate-500">
                        All product categories
                    </p>
                </div>
                <FolderTree className="h-5 w-5 text-green-600" />
            </div>
        </div>

        {/* Empty State */}
        {categories.length === 0 ? (
            <div className="flex min-h-60 flex-col items-center justify-center px-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                    <FolderTree className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">
                    No categories found
                </h3>
                <p className="mt-1 max-w-sm text-sm text-slate-500">
                    Try changing your search keyword or
                    create a new category.
                </p>
            </div>
        ) : (
            <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                    <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                        <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Category
                        </th>
                        <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Description
                        </th>
                        <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Status
                        </th>
                        <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Created
                        </th>
                        <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Action
                        </th>
                    </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">
                    {categories.map((category) => (
                        <tr
                            key={category.id}
                            className="transition-colors hover:bg-slate-50"
                        >
                            {/* Category */}
                            <td className="px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-emerald-50">
                                        {category.image ? (
                                            <Image
                                                src={category.image}
                                                alt={category.name}
                                                fill
                                                sizes="44px"
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center">
                                                <FolderTree className="h-5 w-5 text-emerald-600" />
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <p className="font-semibold text-slate-900">
                                            {category.name}
                                        </p>

                                        <p className="mt-0.5 text-xs text-slate-400">
                                            {category.id.slice(0, 8)}
                                            ...
                                        </p>
                                    </div>
                                </div>
                            </td>

                            {/* Description */}
                            <td className="max-w-md px-5 py-4">
                                <p className="line-clamp-2 text-sm text-slate-600">
                                    {category.description ||
                                        "No description available"}
                                </p>
                            </td>

                            {/* Status */}
                            <td className="px-5 py-4">
                                        <span
                                            className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                                                category.isDeleted
                                                    ? "bg-red-50 text-red-600"
                                                    : "bg-emerald-50 text-green-700"
                                            }`}
                                        >
                                            {category.isDeleted
                                                ? "Deleted"
                                                : "Active"}
                                        </span>
                            </td>

                            {/* Created */}
                            <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-500">
                                {moment(category.createdAt).format('MMM Do YY')}
                            </td>

                            {/* Actions */}
                            <td className="relative px-5 py-4 text-right">
                                <button
                                    type="button"
                                    aria-label={`Actions for ${category.name}`}
                                    aria-expanded={ openActionId === category.id }
                                    onClick={() => setOpenActionId( openActionId === category.id ? null : category.id) }
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
                                >
                                    <MoreHorizontal className="h-5 w-5" />
                                </button>

                                {/* Dropdown */}
                                {openActionId ===
                                    category.id && (
                                        <div className="absolute right-5 top-14 z-50 w-55 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 text-left shadow-lg">
                                            {/* View */}
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setOpenActionId(null);
                                                    handleView( category.id );
                                                }}
                                                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-50"
                                            >
                                                <Eye className="h-4 w-4 text-slate-500" />
                                                <span> View </span>
                                            </button>

                                            {/* Update */}
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setOpenActionId(null);
                                                    handleUpdate( category.id );
                                                }}
                                                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                                            >
                                                <Pencil className="h-4 w-4" />
                                                <span> Update </span>
                                            </button>

                                            {/* Delete */}
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setOpenActionId(null );
                                                    handleDelete( category.id );
                                                }}
                                                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 transition-colors hover:bg-red-50"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                                <span> Delete </span>
                                            </button>
                                        </div>
                                    )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )}
    </div>
);
}