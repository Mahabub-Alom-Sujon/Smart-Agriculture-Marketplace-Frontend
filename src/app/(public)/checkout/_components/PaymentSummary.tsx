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
        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/10 sm:p-7 lg:sticky lg:top-24">
            {/* Heading */}
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                Order Summary
            </h2>
            {/* Price Details */}
            <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between gap-4 text-slate-600 dark:text-slate-400">
                    <span>Items ({totalQuantity})</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">
                        ৳ {cartTotal.toLocaleString("en-BD")}
                    </span>
                </div>
                <div className="flex justify-between gap-4 text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-2">
                        <Truck className="h-4 w-4" />
                        Delivery
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">
                        {deliveryFee === 0
                            ? "Free"
                            : `৳ ${deliveryFee.toLocaleString("en-BD")}`}
                    </span>
                </div>
                {/* Free Delivery Message */}
                {cartTotal < 1000 && cartTotal > 0 && (
                    <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                        Add ৳{" "}
                        {(1000 - cartTotal).toLocaleString("en-BD")}{" "}
                        more for free delivery.
                    </p>
                )}
            </div>
            {/* Divider */}
            <div className="my-6 border-t border-dashed border-slate-200 dark:border-slate-700" />
            {/* Total */}
            <div className="flex items-center justify-between gap-3">
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                    Total
                </span>
                <span className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">
                    ৳ {total.toLocaleString("en-BD")}
                </span>
            </div>
            {/* Payment Button */}
            <button
                type="button"
                onClick={onPay}
                disabled={isSubmitting || cartItems.length === 0}
                className="mt-6 flex h-12 w-full items-center justify-center rounded-lg bg-emerald-600 px-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:focus-visible:ring-offset-slate-900"
            >
                {isSubmitting ? "Preparing payment..." : "Continue to Card Payment"}
            </button>
            {/* Security Notice */}
            <div className="mt-5 flex items-start gap-3 rounded-xl bg-slate-50 p-4 transition-colors duration-300 dark:bg-slate-800/70">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <p className="text-xs leading-5 text-slate-600 dark:text-slate-400">
                    Secure card checkout. Final prices, stock, and
                    delivery charges must be verified by the server
                    before payment.
                </p>
            </div>
        </aside>
    );
}