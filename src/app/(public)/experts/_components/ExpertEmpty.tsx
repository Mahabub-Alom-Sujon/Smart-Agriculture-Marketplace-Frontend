import Link from "next/link";
import {
    ArrowLeft,
    SearchX,
    Sprout,
} from "lucide-react";
export default function ExpertEmpty() {
    return (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">
            {/* Empty State Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-600 transition-colors duration-300 dark:bg-green-950/50 dark:text-emerald-400">
                <SearchX className="h-7 w-7" />
            </div>
            {/* Brand Label */}
            <div className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-green-600 dark:text-emerald-400">
                <Sprout className="h-4 w-4" />
                AgroMart Experts
            </div>
            {/* Heading */}
            <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-slate-100">
                No Experts Found
            </h3>
            {/* Description */}
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
                There are currently no agricultural experts
                available. Please check again later.
            </p>
            {/* Back Home Button */}
            <Link
                href="/"
                className="mt-6 inline-flex h-10 items-center gap-2 rounded-xl bg-green-600 px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
            >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Back Home
            </Link>
        </div>
    );
}