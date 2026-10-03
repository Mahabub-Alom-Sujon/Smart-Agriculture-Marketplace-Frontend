"use client";
import Image from "next/image";
import Link from "next/link";
import {
    Minus,
    Plus,
    Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { useCart } from "@/components/providers/CartProvider";
import type { CartItem as CartItemType } from "@/components/providers/CartProvider";
interface CartItemProps {
    item: CartItemType;
}
export default function CartItem({
    item,
}: CartItemProps) {
    const {updateCartQuantity, removeFromCart} = useCart();
    const { product, quantity } = item;
    const price = Number(product.price);
    const itemTotal = price * quantity;
    const isOutOfStock = product.quantity <= 0;
    const isMaxQuantity = quantity >= product.quantity;
    const handleDecrease = () => {
        updateCartQuantity(
            product.id,
            quantity - 1,
        );
    };
    const handleIncrease = () => {
        if (isMaxQuantity) {
            return;
        }
        updateCartQuantity(
            product.id,
            quantity + 1,
        );
    };
    const handleRemove = () => {
        removeFromCart(product.id);
    };
    return (
        <Card className="overflow-hidden border-slate-200">
            <CardContent className="p-4">
                <div className="flex flex-col gap-4 sm:flex-row">
                    {/* Product Image */}
                    <Link
                        href={`/products/${product.id}`}
                        className="relative h-32 w-full shrink-0 overflow-hidden rounded-lg bg-slate-100 sm:h-28 sm:w-28"
                    >
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="112px"
                            className="object-cover transition duration-300 hover:scale-105"
                        />
                    </Link>
                    {/* Product Information */}
                    <div className="min-w-0 flex-1">
                        <div className="flex flex-col justify-between gap-2 sm:flex-row">
                            <div className="min-w-0">
                                <Link
                                    href={`/products/${product.id}`}
                                    className="line-clamp-1 text-base font-bold text-slate-800 transition hover:text-green-700"
                                >
                                    {product.name}
                                </Link>

                                {/* Category */}
                                <p className="mt-1 text-xs font-medium text-green-600">
                                    {product.category.name}
                                </p>
                            </div>

                            {/* Remove */}
                            <Button
                                type="button"
                                size="icon"
                                variant="ghost"
                                onClick={handleRemove}
                                className="h-8 w-8 self-end text-slate-400 hover:bg-red-50 hover:text-red-500 sm:self-start"
                                aria-label={`Remove ${product.name} from cart`}
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                        {/* Description */}
                        <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
                            {product.description ||
                                "Fresh quality agricultural product from a trusted farmer."}
                        </p>
                        {/* Farmer */}
                        <p className="mt-2 text-xs text-slate-500">
                            Farmer:{" "}
                            <span className="font-semibold text-slate-700">
                                {product.farmer.name}
                            </span>
                        </p>
                        {/* Bottom */}
                        <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-3 sm:flex-row sm:items-center sm:justify-between">
                            {/* Price */}
                            <div>
                                <span className="text-base font-extrabold text-green-700">
                                    ৳{price.toFixed(2)}
                                </span>

                                <span className="ml-1 text-xs text-slate-400">
                                    /
                                    {product.unit.toLowerCase()}
                                </span>
                            </div>
                            {/* Quantity + Total */}
                            <div className="flex items-center justify-between gap-4 sm:justify-end">
                                {/* Quantity */}
                                <div className="flex items-center rounded-lg border border-slate-200">
                                    <Button
                                        type="button"
                                        size="icon"
                                        variant="ghost"
                                        className="h-8 w-8 rounded-none"
                                        onClick={
                                            handleDecrease
                                        }
                                    >
                                        <Minus className="h-3.5 w-3.5" />
                                    </Button>

                                    <span className="w-8 text-center text-sm font-bold text-slate-700">
                                        {quantity}
                                    </span>

                                    <Button
                                        type="button"
                                        size="icon"
                                        variant="ghost"
                                        disabled={
                                            isMaxQuantity ||
                                            isOutOfStock
                                        }
                                        className="h-8 w-8 rounded-none"
                                        onClick={
                                            handleIncrease
                                        }
                                    >
                                        <Plus className="h-3.5 w-3.5" />
                                    </Button>
                                </div>
                                {/* Total */}
                                <div className="min-w-[90px] text-right">
                                    <p className="text-sm text-slate-400">
                                        Total
                                    </p>

                                    <p className="font-bold text-slate-800">
                                        ৳
                                        {itemTotal.toFixed(
                                            2,
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Stock warning */}
                        {isMaxQuantity &&
                            !isOutOfStock && (
                                <p className="mt-2 text-[11px] font-medium text-amber-600">
                                    Maximum available quantity
                                    reached.
                                </p>
                            )}
                        {isOutOfStock && (
                            <p className="mt-2 text-[11px] font-semibold text-red-500">
                                This product is currently
                                out of stock.
                            </p>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}