import {
    FolderTree,
    Plus,
} from "lucide-react";
import Link from "next/link";
export default function ProductHeader() {
    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <FolderTree className="h-5 w-5" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                        Products
                    </h1>
                    <p className="mt-1 text-sm text-slate-500">
                        Manage your agricultural product
                    </p>
                </div>
            </div>
            <Link
                href="/dashboard/admin/products/create"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-green-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-green-700"
            >
                <Plus className="h-4 w-4" />
                Add Products
            </Link>
        </div>
    );
}