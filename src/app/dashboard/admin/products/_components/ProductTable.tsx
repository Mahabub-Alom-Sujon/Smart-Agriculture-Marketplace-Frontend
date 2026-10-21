"use client";
import Image from "next/image";
import { useState } from "react";
import {
    Package,
    MoreHorizontal,
    Eye,
    Pencil,
    Trash2,
    UserRound,
    FolderTree,
} from "lucide-react";
import moment from "moment";
import type { Product } from "@/types/types.product";
import { DeleteAlert } from "@/lib/DeleteAlert";
import { useRouter } from "next/navigation";
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
    ACTIVE: "bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-950/50 dark:text-emerald-400 dark:ring-emerald-500/30",
    SOLD_OUT: "bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-950/40 dark:text-amber-400 dark:ring-amber-500/30",
    INACTIVE: "bg-slate-100 text-slate-600 ring-slate-500/20 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-600/40",
};

export default function ProductTable({
     products,
}: ProductTableProps) {
    const router = useRouter();
    const [openActionId, setOpenActionId] = useState<string | null>(
        null
    );
    const handleView = (id: string) => {
        console.log("View product:", id);
        // Add product details navigation here when the route is available.
    };
    const handleUpdate = (id: string) => {
        router.push(`/dashboard/admin/products/${id}/edit`);
    };
    const handleDelete = async (id: string) => {
        try {
            const alertResult = await DeleteAlert();
            if (!alertResult.isConfirmed) {
                return;
            }
            const result = await deleteProduct(id);
            if (result.success) {
                toast.success(result.message);
                router.refresh();
            } else {
                toast.error(result.message);
            }
        } catch {
            toast.error("Failed to delete product. Please try again.");
        }
    };
    const actionButtonStyle = "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800";
    return (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
            {/* Header */}
            <div className="border-b border-slate-200 px-5 py-4 dark:border-slate-800">
                <div className="flex items-center justify-between gap-3">
                    <div>
                        <h2 className="font-semibold text-slate-900 dark:text-white">
                            Product List
                        </h2>

                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                            Manage marketplace products
                        </p>
                    </div>

                    <FolderTree className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
            </div>

            {/* Empty State */}
            {products.length === 0 ? (
                <div className="flex min-h-60 flex-col items-center justify-center px-6 py-10 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/50">
                        <Package className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                    </div>

                    <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">
                        No products found
                    </h3>

                    <p className="mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">
                        There are no products to display yet. Add a
                        product to your marketplace.
                    </p>
                </div>
            ) : (
                /* Product Table */
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[1000px]">
                        <thead>
                        <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950/70">
                            <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Product
                            </th>

                            <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Category
                            </th>

                            <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Farmer
                            </th>

                            <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Price
                            </th>

                            <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Stock
                            </th>

                            <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Status
                            </th>

                            <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Created
                            </th>

                            <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Actions
                            </th>
                        </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {products.map((product) => (
                            <tr
                                key={product.id}
                                className="transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                            >
                                {/* Product */}
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-emerald-50 dark:bg-emerald-950/50">
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
                                                    <Package className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                                                </div>
                                            )}
                                        </div>

                                        <div className="max-w-48">
                                            <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                                                {product.name}
                                            </p>

                                            <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                                                ID: {product.id.slice(0, 8)}
                                            </p>

                                            <p className="mt-1 line-clamp-1 text-xs text-slate-500 dark:text-slate-400">
                                                {product.description ||
                                                    "No description"}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                {/* Category */}
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-2">
                                        <FolderTree className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />

                                        <span className="text-sm text-slate-700 dark:text-slate-300">
                                                {product.category?.name ??
                                                    "Uncategorized"}
                                            </span>
                                    </div>
                                </td>

                                {/* Farmer */}
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-50 dark:bg-sky-950/50">
                                            <UserRound className="h-4 w-4 text-sky-600 dark:text-sky-400" />
                                        </div>

                                        <div className="max-w-40">
                                            <p className="truncate text-sm font-medium text-slate-800 dark:text-slate-200">
                                                {product.farmer?.name ??
                                                    "Unknown farmer"}
                                            </p>

                                            <p className="truncate text-xs text-slate-400 dark:text-slate-500">
                                                {product.farmer?.email ??
                                                    "No email"}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                {/* Price */}
                                <td className="whitespace-nowrap px-5 py-4">
                                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                        {formatPrice(product.price)}
                                    </p>

                                    <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                                        per {product.unit}
                                    </p>
                                </td>

                                {/* Stock */}
                                <td className="whitespace-nowrap px-5 py-4">
                                    <p
                                        className={`text-sm font-semibold ${
                                            product.quantity <= 0
                                                ? "text-red-600 dark:text-red-400"
                                                : "text-slate-800 dark:text-slate-200"
                                        }`}
                                    >
                                        {product.quantity}
                                    </p>

                                    <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                                        {product.unit}
                                    </p>
                                </td>

                                {/* Status */}
                                <td className="px-5 py-3">
                                        <span
                                            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${
                                                statusStyles[product.status] ??
                                                statusStyles.INACTIVE
                                            }`}
                                        >
                                            {product.status.replace(
                                                "_",
                                                " "
                                            )}
                                        </span>

                                    {product.isDeleted && (
                                        <p className="mt-1 text-xs font-medium text-red-600 dark:text-red-400">
                                            Deleted
                                        </p>
                                    )}
                                </td>

                                {/* Created */}
                                <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-500 dark:text-slate-400">
                                    {moment(product.createdAt).format(
                                        "MMM D, YYYY"
                                    )}
                                </td>

                                {/* Actions */}
                                <td className="relative px-5 py-4 text-right">
                                    <button
                                        type="button"
                                        aria-label={`Actions for ${product.name}`}
                                        aria-expanded={
                                            openActionId === product.id
                                        }
                                        onClick={() =>
                                            setOpenActionId(
                                                openActionId === product.id
                                                    ? null
                                                    : product.id
                                            )
                                        }
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                                    >
                                        <MoreHorizontal className="h-5 w-5" />
                                    </button>

                                    {/* Dropdown */}
                                    {openActionId === product.id && (
                                        <div className="absolute right-5 top-14 z-50 w-52 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 text-left shadow-xl dark:border-slate-700 dark:bg-slate-900">
                                            {/* View */}
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setOpenActionId(null);
                                                    handleView(product.id);
                                                }}
                                                className={actionButtonStyle}
                                            >
                                                <Eye className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                                                <span>View</span>
                                            </button>

                                            {/* Update */}
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setOpenActionId(null);
                                                    handleUpdate(product.id);
                                                }}
                                                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-emerald-700 transition-colors hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-950/50"
                                            >
                                                <Pencil className="h-4 w-4" />
                                                <span>Update</span>
                                            </button>

                                            {/* Delete */}
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setOpenActionId(null);
                                                    void handleDelete(product.id);
                                                }}
                                                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/40"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                                <span>Delete</span>
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