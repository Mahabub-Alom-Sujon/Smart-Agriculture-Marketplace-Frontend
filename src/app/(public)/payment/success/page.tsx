"use client";
import { useEffect } from "react";
import Link from "next/link";
import {
    CheckCircle2,
    PackageCheck,
    ShoppingBag,
} from "lucide-react";

import { useCart } from "@/components/providers/CartProvider";
import { useWishlist } from "@/components/providers/WishlistProvider";

export default function CheckoutSuccessPage() {
    const { clearCart } = useCart();
    const { clearWishlist } = useWishlist();

    useEffect(() => {
        clearCart();
        clearWishlist();
    }, [clearCart, clearWishlist]);

    return (
        <main className="flex min-h-[80vh] items-center justify-center bg-slate-50 px-4 py-12 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
            <section
                className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20 sm:p-10"
                aria-labelledby="checkout-success-title"
            >
                {/* Success Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 transition-colors duration-300 dark:bg-green-950/40">
                    <CheckCircle2
                        className="h-10 w-10 text-green-600 dark:text-green-400"
                        aria-hidden="true"
                    />
                </div>

                {/* Heading */}
                <h1
                    id="checkout-success-title"
                    className="mt-5 text-2xl font-bold text-slate-900 dark:text-slate-100"
                >
                    Payment Submitted
                </h1>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    Thank you for your order. Your payment status will be
                    confirmed securely by our payment provider. You can
                    check your order status from your orders page.
                </p>

                {/* Action Buttons */}
                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                        href="/products"
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-green-600 px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 dark:bg-green-600 dark:hover:bg-green-500 dark:focus-visible:ring-offset-slate-900"
                    >
                        <ShoppingBag
                            className="h-4 w-4"
                            aria-hidden="true"
                        />
                        Continue Shopping
                    </Link>

                    <Link
                        href="/dashboard/buyer/orders"
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:focus-visible:ring-offset-slate-900"
                    >
                        <PackageCheck
                            className="h-4 w-4"
                            aria-hidden="true"
                        />
                        View Orders
                    </Link>
                </div>
            </section>
        </main>
    );
}