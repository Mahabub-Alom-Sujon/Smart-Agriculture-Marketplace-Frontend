"use client";
import {
    CheckCircle2,
    CreditCard,
    ShieldCheck,
} from "lucide-react";
export function PaymentMethod() {
    return (
        <section className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-emerald-900/70 dark:bg-slate-900 dark:shadow-black/10 sm:p-7">
            {/* Section Heading */}
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Payment Method
            </h2>
            {/* Selected Payment Method */}
            <div className="mt-5 flex items-start gap-4 rounded-xl border-2 border-emerald-500 bg-emerald-50/60 p-4 transition-colors duration-300 dark:border-emerald-600 dark:bg-emerald-950/30">
                <div className="rounded-lg bg-white p-3 text-emerald-700 shadow-sm transition-colors duration-300 dark:bg-slate-800 dark:text-emerald-400">
                    <CreditCard className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                            Credit / Debit Card
                        </h3>
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        Pay securely using the card payment page provided by your
                        payment processor.
                    </p>
                    {/* Payment Badges */}
                    <div className="mt-3 flex flex-wrap gap-2">
                        {[
                            "VISA",
                            "Mastercard",
                            "Secure Checkout",
                        ].map((label) => (
                            <span
                                key={label}
                                className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-600 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                            >
                                {label}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            {/* Security Notice */}
            <div className="mt-4 flex gap-3 rounded-xl bg-slate-50 p-4 transition-colors duration-300 dark:bg-slate-800/70">
                <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <p className="text-xs leading-5 text-slate-600 dark:text-slate-400">
                    Never share your card PIN or password. Card information
                    should be entered only on the trusted payment provider page.
                </p>
            </div>
        </section>
    );
}