"use client"
import {
    ArrowLeft,
    Trash2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/providers/CartProvider";
import CartItem from "@/app/(public)/cart/_components/CartItem";
import CartSummary from "@/app/(public)/cart/_components/CartSummary";
import EmptyCart from "@/app/(public)/cart/_components/EmptyCart";
export default function CartPage() {
    const {
        cartItems,
        clearCart,
    } = useCart();

    // Empty Cart
    if (cartItems.length === 0) {
        return (
            <main className="container mx-auto px-4 py-8">
                <EmptyCart />
            </main>
        );
    }

    return (
        <main className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8">
                <Link
                    href="/products"
                    className="mb-4 inline-flex items-center text-sm font-medium text-slate-500 transition hover:text-green-700"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Continue Shopping
                </Link>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-800">
                            Shopping Cart
                        </h1>

                        <p className="mt-1 text-sm text-slate-500">
                            Review your selected products
                            before checkout.
                        </p>
                    </div>
                    {/* Clear Cart */}
                    <Button
                        type="button"
                        variant="outline"
                        onClick={clearCart}
                        className="w-fit border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600"
                    >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Clear Cart
                    </Button>
                </div>
            </div>
            {/* Cart Content */}
            <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
                {/* Cart Items */}
                <div className="space-y-4">
                    {cartItems.map((item) => (
                        <CartItem
                            key={item.product.id}
                            item={item}
                        />
                    ))}
                </div>
                {/* Summary */}
                <CartSummary />
            </div>
        </main>
    );
}