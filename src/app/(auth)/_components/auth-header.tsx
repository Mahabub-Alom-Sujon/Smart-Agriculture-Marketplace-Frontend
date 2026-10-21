import Link from "next/link";
import { Leaf } from "lucide-react";
export function AuthHeader() {
    return (
        <Link
            href="/"
            className="mb-8 inline-flex items-center gap-3 rounded-lg transition-opacity duration-200 hover:opacity-90"
        >
            {/* Logo */}
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-600 text-white shadow-sm transition-colors duration-300 dark:bg-green-500">
                <Leaf className="h-6 w-6" aria-hidden="true" />
            </div>

            {/* Brand Information */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900 transition-colors duration-300 dark:text-white">
                    AgroNexa
                </h1>

                <p className="text-xs text-green-700 transition-colors duration-300 dark:text-green-300">
                    Smart Agriculture Marketplace
                </p>
            </div>
        </Link>
    );
}