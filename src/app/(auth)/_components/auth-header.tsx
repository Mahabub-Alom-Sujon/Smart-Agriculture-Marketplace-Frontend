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
                <h1 className="text-2xl font-bold text-white">
                    AgroNexa
                </h1>
                <p className="text-xs text-green-100">
                    Smart Agriculture Marketplace
                </p>
            </div>
        </Link>
    );
}