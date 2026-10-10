"use client";

import Image from "next/image";
import { Package } from "lucide-react";
import { useCart } from "@/components/providers/CartProvider";

export function PaymentItems() {
    const { cartItems } = useCart();

    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-5 flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-bold text-slate-900">
                        Your Order
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                        Review your selected products.
                    </p>
                </div>
                <Package className="h-5 w-5 text-emerald-600" />
            </div>

            {cartItems.length === 0 ? (
                <p className="py-6 text-sm text-slate-500">
                    No products have been selected.
                </p>
            ) : (
                <div className="divide-y divide-slate-100">
                    {cartItems.map(({ product, quantity }) => (
                        <div key={product.id} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                                <Image
                                    src={product?.image ?? "/placeholder-image.png"}
                                    alt={product.name}
                                    fill
                                    sizes="80px"
                                    className="object-cover"
                                />
                            </div>

                            <div className="min-w-0 flex-1">
                                <h3 className="line-clamp-2 font-semibold text-slate-900">
                                    {product.name}
                                </h3>
                                <p className="mt-1 text-sm text-slate-500">
                                    Qty: {quantity} {product.unit}
                                </p>
                                <p className="mt-2 font-bold text-emerald-700">
                                    ৳ {(product.price * quantity).toLocaleString("en-BD")}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}