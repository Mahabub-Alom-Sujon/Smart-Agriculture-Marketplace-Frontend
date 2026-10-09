"use client";
import Image from "next/image";
import { useState } from "react";
import {
    Package,
    MoreHorizontal,
    Eye,
    Pencil,
    Trash2,
    ShoppingBasket,
    UserRound,
    FolderTree,
    Star,
} from "lucide-react";
import moment from "moment";
import type { Product } from "@/types/types.product";
import {DeleteAlert} from "@/lib/DeleteAlert";
import { deleteProduct } from "@/app/dashboard/admin/products/_actions/deleteProduct";
import { toast } from "sonner";

interface ProductTableProps {
    products: Product[];
}

const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-BD", {
        style: "currency",
        currency: "BDT",
        maximumFractionDigits: 2,
    }).format(price);

const statusStyles: Record<Product["status"], string> = {
    ACTIVE: "bg-emerald-50 text-green-600 ring-green-600/20",
    SOLD_OUT: "bg-amber-50 text-amber-700 ring-amber-600/20",
    INACTIVE: "bg-slate-100 text-slate-600 ring-slate-500/20",
};

export default function ProductTable({
     products,
}: ProductTableProps) {
    const [openActionId, setOpenActionId] = useState<string | null>(null);
    const handleView = (id: string) => {
        console.log("View category:", id);
        // router.push(`/dashboard/admin/categories/${categoryId}`);
    };

    const handleUpdate = (id: string) => {
        console.log("Update category:", id);
        // router.push(`/dashboard/admin/categories/${categoryId}/edit`);
    };

    const handleDelete = async (id: string) => {
        const alertResult = await DeleteAlert();
        if (!alertResult.isConfirmed) {
            return;
        }
        const result = await deleteProduct(id);
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
                            Product List
                        </h2>
                        <p className="mt-1 text-xs text-slate-500">
                            Manage marketplace products
                        </p>
                    </div>
                    <FolderTree className="h-5 w-5 text-green-600" />
                </div>
            </div>

            {/* Empty State */}
            {products.length === 0 ? (
                <div className="flex min-h-60 flex-col items-center justify-center px-6 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                        <Package className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="mt-4 font-semibold text-slate-900">
                        No products found
                    </h3>
                    <p className="mt-1 max-w-sm text-sm text-slate-500">
                        There are no products to display yet.
                        Add a product to your marketplace.
                    </p>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[800px]">
                        <thead>
                            <tr className="border-b border-slate-200 bg-slate-50">
                                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Product
                                </th>

                                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Category
                                </th>

                                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Farmer
                                </th>

                                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Price
                                </th>

                                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Stock
                                </th>

                                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Status
                                </th>

                                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Created
                                </th>

                                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100">
                        {products.map((product) => (
                            <tr
                                key={product.id}
                                className="transition-colors hover:bg-slate-50"
                            >
                                {/* Category */}
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-emerald-50">
                                            {product.image ? (
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    sizes="48px"
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center">
                                                    <Package className="h-5 w-5 text-green-600" />
                                                </div>
                                            )}
                                        </div>

                                        <div className="max-w-48">
                                            <p className="truncate text-sm font-semibold text-slate-900">
                                                {product.name}
                                            </p>
                                            <p className="mt-1 text-xs text-slate-400">
                                                ID: {product.id.slice(0, 8)}
                                            </p>
                                            <p className="mt-1 line-clamp-1 text-xs text-slate-500">
                                                {product.description || "No description"}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                {/* Category */}
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-2">
                                        <FolderTree className="h-4 w-4 shrink-0 text-green-600" />
                                        <span className="text-sm text-slate-700">
                                                {product.category?.name ?? "Uncategorized"}
                                            </span>
                                    </div>
                                </td>

                                {/* Farmer */}
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-50">
                                            <UserRound className="h-4 w-4 text-sky-600" />
                                        </div>

                                        <div className="max-w-40">
                                            <p className="truncate text-sm font-medium text-slate-800">
                                                {product.farmer?.name ?? "Unknown farmer"}
                                            </p>
                                            <p className="truncate text-xs text-slate-400">
                                                {product.farmer?.email ?? "No email"}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                {/* Price */}
                                <td className="whitespace-nowrap px-5 py-4">
                                    <p className="text-sm font-semibold text-slate-900">
                                        {formatPrice(product.price)}
                                    </p>

                                    <p className="mt-1 text-xs text-slate-400">
                                        per {product.unit}
                                    </p>
                                </td>

                                {/* Stock */}
                                <td className="whitespace-nowrap px-5 py-4">
                                    <p
                                        className={`text-sm font-semibold ${
                                            product.quantity <= 0 ? "text-red-600" : "text-slate-800"
                                        }`}
                                    >
                                        {product.quantity}
                                    </p>
                                    <p className="mt-1 text-xs text-slate-400">
                                        {product.unit}
                                    </p>
                                </td>

                                {/* Status */}
                                <td className="px-5 py-3">
                                    <span
                                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${
                                            statusStyles[product.status] ?? statusStyles.INACTIVE
                                        }`}
                                    >
                                        {/* রেন্ডার হওয়ার সময় SOLD_OUT পরিবর্তন হয়ে SOLD OUT দেখাবে */}
                                        {product.status.replace("_", " ")}
                                    </span>
                                    {product.isDeleted && (
                                        <p className="mt-1 text-xs font-medium text-red-600">
                                            Deleted
                                        </p>
                                    )}
                                </td>
                                {/* Created */}
                                <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-500">
                                    {moment(product.createdAt).format(
                                        "MMM D, YYYY"
                                    )}
                                </td>

                                {/* Actions */}
                                <td className="relative px-5 py-4 text-right">
                                    <button
                                        type="button"
                                        aria-label={`Actions for ${product.name}`}
                                        aria-expanded={ openActionId === product.id }
                                        onClick={() => setOpenActionId( openActionId === product.id ? null : product.id) }
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
                                    >
                                        <MoreHorizontal className="h-5 w-5" />
                                    </button>

                                    {/* Dropdown */}
                                    {openActionId === product.id && (
                                            <div className="absolute right-5 top-14 z-50 w-55 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 text-left shadow-lg">
                                                {/* View */}
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setOpenActionId(null);
                                                        handleView( product.id );
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
                                                        handleUpdate( product.id );
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
                                                        handleDelete( product.id );
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