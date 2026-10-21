import Link from "next/link";
import { ArrowLeft, CreditCard } from "lucide-react";
export default function CheckoutCancelPage() {
    return (
        <main className="flex min-h-[80vh] items-center justify-center bg-slate-50 px-4 py-12 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
            <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20 sm:p-10">
                {/* Payment Cancelled Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 transition-colors duration-300 dark:bg-amber-950/40">
                    <CreditCard className="h-9 w-9 text-amber-500 dark:text-amber-400" />
                </div>

                {/* Heading */}
                <h1 className="mt-5 text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Payment Cancelled
                </h1>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    Your payment was not completed. You can return to checkout
                    and try again.
                </p>

                {/* Return to Checkout Button */}
                <Link
                    href="/checkout"
                    className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:bg-emerald-600 dark:hover:bg-emerald-500 dark:focus-visible:ring-offset-slate-900"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Return to Checkout
                </Link>
            </div>
        </main>
    );
}