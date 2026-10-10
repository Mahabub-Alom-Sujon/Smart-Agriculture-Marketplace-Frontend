import Link from "next/link";
import { ArrowLeft, CreditCard } from "lucide-react";

export default function CheckoutCancelPage() {
    return (
        <main className="flex min-h-[80vh] items-center justify-center bg-slate-50 px-4 py-12">
            <div className="w-full max-w-lg rounded-2xl border bg-white p-8 text-center shadow-sm sm:p-10">
                <CreditCard className="mx-auto h-14 w-14 text-amber-500" />

                <h1 className="mt-5 text-2xl font-bold text-slate-900">
                    Payment Cancelled
                </h1>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                    Your payment was not completed. You can return to checkout and
                    try again.
                </p>

                <Link
                    href="/checkout"
                    className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Return to Checkout
                </Link>
            </div>
        </main>
    );
}