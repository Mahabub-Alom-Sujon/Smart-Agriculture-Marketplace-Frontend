"use client";
import { ArrowLeft, Trash2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/providers/CartProvider";
import CartItem from "@/app/(public)/cart/_components/CartItem";
import CartSummary from "@/app/(public)/cart/_components/CartSummary";
import EmptyCart from "@/app/(public)/cart/_components/EmptyCart";
export default function CartPage() {
    const { cartItems, clearCart } = useCart();
    // Empty Cart
    if (cartItems.length === 0) {
        return (
            <main className="min-h-screen bg-white px-4 py-8 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
                <div className="container mx-auto">
                    <EmptyCart />
                </div>
            </main>
        );
    }
    return (
        <main className="min-h-screen bg-white px-4 py-8 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
            <div className="container mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <Link
                        href="/products"
                        className="mb-4 inline-flex items-center text-sm font-medium text-slate-500 transition-colors hover:text-green-700 dark:text-slate-400 dark:hover:text-green-400"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Continue Shopping
                    </Link>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                                Shopping Cart
                            </h1>

                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                Review your selected products before checkout.
                            </p>

                            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                                {cartItems.length}{" "}
                                {cartItems.length === 1 ? "item" : "items"} in your cart
                            </p>
                        </div>

                        {/* Clear Cart */}
                        <Button
                            type="button"
                            variant="outline"
                            onClick={clearCart}
                            className="w-fit border-red-200 bg-white text-red-500 transition-colors hover:bg-red-50 hover:text-red-600 dark:border-red-900 dark:bg-slate-900 dark:text-red-400 dark:hover:bg-red-950 dark:hover:text-red-300"
                        >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Clear Cart
                        </Button>
                    </div>
                </div>

                {/* Cart Content */}
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
                    {/* Cart Items */}
                    <div className="min-w-0 space-y-4">
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.product.id}
                                item={item}
                            />
                        ))}
                    </div>

                    {/* Cart Summary */}
                    <aside className="h-fit">
                        <CartSummary />
                    </aside>
                </div>
            </div>
        </main>
    );
}