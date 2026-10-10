"use client";
import { CheckCircle2, CreditCard, ShieldCheck } from "lucide-react";
export function PaymentMethod() {
    return (
        <section className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm sm:p-7">
            <h2 className="text-lg font-bold text-slate-900">
                Payment Method
            </h2>

            <div className="mt-5 flex items-start gap-4 rounded-xl border-2 border-emerald-500 bg-emerald-50/60 p-4">
                <div className="rounded-lg bg-white p-3 text-emerald-700 shadow-sm">
                    <CreditCard className="h-6 w-6" />
                </div>

                <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-slate-900">
                            Credit / Debit Card
                        </h3>
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    </div>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                        Pay securely using the card payment page provided by your
                        payment processor.
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                        {["VISA", "Mastercard", "Secure Checkout"].map((label) => (
                            <span
                                key={label}
                                className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-600"
                            >
                {label}
              </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-4 flex gap-3 rounded-xl bg-slate-50 p-4">
                <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-600" />
                <p className="text-xs leading-5 text-slate-600">
                    Never share your card PIN or password. Card information should
                    be entered only on the trusted payment provider page.
                </p>
            </div>
        </section>
    );
}