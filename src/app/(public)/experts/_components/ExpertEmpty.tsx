import Link from "next/link";

import {
    ArrowLeft,
    SearchX,
    Sprout,
} from "lucide-react";

export default function ExpertEmpty() {
    return (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                <SearchX className="h-7 w-7" />
            </div>

            <div className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-green-600">
                <Sprout className="h-4 w-4" />
                AgroMart Experts
            </div>

            <h3 className="mt-2 text-xl font-bold text-slate-900">
                No Experts Found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                There are currently no agricultural experts
                available. Please check again later.
            </p>

            <Link
                href="/"
                className="mt-6 inline-flex h-10 items-center gap-2 rounded-xl bg-green-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-green-700"
            >
                <ArrowLeft className="h-4 w-4" />
                Back Home
            </Link>
        </div>
    );
}