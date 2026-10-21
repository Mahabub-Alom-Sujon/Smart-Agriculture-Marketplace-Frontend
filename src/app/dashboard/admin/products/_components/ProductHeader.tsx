import {
    FolderTree,
    Plus,
} from "lucide-react";
import Link from "next/link";

export default function ProductHeader() {
    return (
        <div className="flex flex-col gap-4 transition-colors duration-300 sm:flex-row sm:items-center sm:justify-between">
            {/* Header Content */}
            <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600 transition-colors duration-300 dark:bg-emerald-500/10 dark:text-emerald-400">
                    <FolderTree className="h-5 w-5" />
                </div>

                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Products
                    </h1>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Manage your agricultural products
                    </p>
                </div>
            </div>

            {/* Add Product Button */}
            <Link
                href="/dashboard/admin/products/create"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-green-600 px-4 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-green-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 dark:bg-emerald-600 dark:hover:bg-emerald-500 dark:focus-visible:ring-offset-slate-950"
            >
                <Plus className="h-4 w-4" />
                Add Products
            </Link>
        </div>
    );
}