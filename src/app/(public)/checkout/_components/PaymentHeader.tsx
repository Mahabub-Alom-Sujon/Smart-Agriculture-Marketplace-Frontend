import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export function PaymentHeader() {
    return (
        <header className="mb-8">
            <Link
                href="/products"
                className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-emerald-700"
            >
                <ArrowLeft className="h-4 w-4" />
                Continue shopping
            </Link>

            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700">
                        <ShieldCheck className="h-4 w-4" />
                        Secure checkout
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Complete Your Order
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                        Confirm your delivery information and pay securely by card.
                    </p>
                </div>
            </div>
        </header>
    );
}