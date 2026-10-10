"use client";

import { ShieldCheck, Truck } from "lucide-react";
import { useCart } from "@/components/providers/CartProvider";

interface CheckoutSummaryProps {
    isSubmitting: boolean;
    onPay: () => void;
}

export function PaymentSummary({
                                isSubmitting,
                                    onPay,
                                }: CheckoutSummaryProps) {
    const { cartItems, cartTotal } = useCart();

    const deliveryFee = cartTotal >= 1000 ? 0 : 60;
    const total = cartTotal + deliveryFee;
    const totalQuantity = cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0,
    );

    return (
        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:sticky lg:top-24">
            <h2 className="text-xl font-bold text-slate-900">
                Order Summary
            </h2>

            <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between gap-4 text-slate-600">
                    <span>Items ({totalQuantity})</span>
                    <span className="font-semibold text-slate-900">
            ৳ {cartTotal.toLocaleString("en-BD")}
          </span>
                </div>

                <div className="flex justify-between gap-4 text-slate-600">
          <span className="flex items-center gap-2">
            <Truck className="h-4 w-4" />
            Delivery
          </span>
                    <span className="font-semibold text-slate-900">
            {deliveryFee === 0
                ? "Free"
                : `৳ ${deliveryFee.toLocaleString("en-BD")}`}
          </span>
                </div>

                {cartTotal < 1000 && cartTotal > 0 && (
                    <p className="text-xs leading-5 text-slate-500">
                        Add ৳ {(1000 - cartTotal).toLocaleString("en-BD")} more
                        for free delivery.
                    </p>
                )}
            </div>

            <div className="my-6 border-t border-dashed border-slate-200" />

            <div className="flex items-center justify-between gap-3">
        <span className="font-semibold text-slate-700">
          Total
        </span>
                <span className="text-2xl font-bold text-emerald-700">
          ৳ {total.toLocaleString("en-BD")}
        </span>
            </div>

            <button
                type="button"
                onClick={onPay}
                disabled={isSubmitting || cartItems.length === 0}
                className="mt-6 flex h-12 w-full items-center justify-center rounded-lg bg-emerald-600 px-4 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
                {isSubmitting ? "Preparing payment..." : "Continue to Card Payment"}
            </button>

            <div className="mt-5 flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="text-xs leading-5 text-slate-600">
                    Secure card checkout. Final prices, stock, and delivery charges
                    must be verified by the server before payment.
                </p>
            </div>
        </aside>
    );
}