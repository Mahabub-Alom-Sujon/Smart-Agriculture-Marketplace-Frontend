import Link from "next/link";
import { Leaf } from "lucide-react";

export function AuthHeader() {
    return (
        <Link
            href="/"
            className="mb-8 inline-flex items-center gap-3"
        >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-600 text-white shadow-sm">
                <Leaf className="h-6 w-6" />
            </div>
            <div>
                <h1 className="text-xl font-bold tracking-tight text-green-700">
                    AgroNexa
                </h1>
                <p className="text-[11px] text-slate-500">
                    Smart Agriculture Marketplace
                </p>
            </div>
        </Link>
    );
}