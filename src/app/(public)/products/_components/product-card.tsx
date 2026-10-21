"use client";
import Link from "next/link";
import Image from "next/image";
import {
    Heart,
    ShoppingCart,
    Star,
    User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { Product } from "@/types/types.product";
import { useCart } from "@/components/providers/CartProvider";
import { useWishlist } from "@/components/providers/WishlistProvider";
interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const { addToCart, isInCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const isOutOfStock = product.quantity <= 0;
    const isLowStock = product.quantity > 0 && product.quantity < 10;
    const isWishlisted = isInWishlist(product.id);
    const productInCart = isInCart(product.id);
    const handleAddToCart = () => {
        if (isOutOfStock) return;
        addToCart(product);
    };
    const handleWishlist = () => {
        toggleWishlist(product);
    };
    return (
        <Card
            className="
                group overflow-hidden rounded-xl border
                border-slate-200 bg-white p-0
                text-slate-900 shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
                dark:border-slate-800 dark:bg-slate-900
                dark:text-slate-100
                dark:hover:border-slate-700
            "
        >
            {/* Image Section */}
            <div className="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Link
                    href={`/products/${product.id}`}
                    aria-label={`View ${product.name}`}
                >
                    <Image
                        src={product?.image ?? "/placeholder-image.png"}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </Link>

                {/* Category */}
                <div className="absolute left-3 top-3 z-10">
                    <Badge className="border-none bg-green-600 font-medium text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
                        {product.category.name}
                    </Badge>
                </div>

                {/* Wishlist */}
                <Button
                    type="button"
                    size="icon"
                    variant="secondary"
                    onClick={handleWishlist}
                    aria-label={
                        isWishlisted
                            ? "Remove from wishlist"
                            : "Add to wishlist"
                    }
                    className="
                        absolute right-3 top-3 z-10 h-9 w-9
                        rounded-full border border-slate-200
                        bg-white/90 text-slate-700 shadow-sm
                        backdrop-blur-sm transition-colors
                        hover:bg-white
                        dark:border-slate-700 dark:bg-slate-900/90
                        dark:text-slate-200 dark:hover:bg-slate-800
                    "
                >
                    <Heart
                        className={`h-4 w-4 transition-colors ${
                        isWishlisted ? "fill-red-500 text-red-500" : "text-slate-600 dark:text-slate-300"
                        }`}
                    />
                </Button>

                {/* Low Stock */}
                {isLowStock && (
                    <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1 rounded-full bg-amber-500 px-3 py-1 text-[11px] font-bold text-white shadow-sm">
                        <span>Only</span>
                        <span className="font-extrabold">
                            {product.quantity}
                        </span>
                        <span>Left</span>
                    </div>
                )}

                {/* Out Of Stock */}
                {isOutOfStock && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 text-sm font-bold text-white backdrop-blur-[1px]">
                        Stock Out
                    </div>
                )}
            </div>

            {/* Content */}
            <CardContent className="p-4">
                {/* Reviews */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-0.5">
                        <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-slate-700 dark:text-slate-200">
                            {product._count.reviews > 0 ? "4.5" : "New"}
                        </span>
                    </div>
                    <span>•</span>
                    <span>
                        ({product._count.reviews} reviews)
                    </span>
                </div>
                {/* Product Name */}
                <Link href={`/products/${product.id}`}>
                    <h3 className="mt-1.5 line-clamp-1 text-base font-bold text-slate-800 transition-colors hover:text-green-700 dark:text-slate-100 dark:hover:text-green-400">
                        {product.name}
                    </h3>
                </Link>
                {/* Description */}
                <p className="mt-1 line-clamp-2 min-h-[32px] text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {product.description}
                </p>
                {/* Farmer */}
                <div className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-3 dark:border-slate-800">
                    <Avatar className="h-7 w-7 border border-slate-200 dark:border-slate-700">
                        <AvatarFallback className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                            <User className="h-3.5 w-3.5" />
                        </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-medium text-slate-600 dark:text-slate-400">
                            Farmer:{" "}
                            <span className="font-semibold text-slate-800 dark:text-slate-200">
                                {product.farmer.name}
                            </span>
                        </p>
                    </div>
                </div>
                {/* Price + Quantity + Add to Cart */}
                <div className="mt-4 flex items-end justify-between gap-2 border-t border-slate-200 pt-3 dark:border-slate-800">
                    <div className="min-w-0">
                        <div className="flex items-baseline">
                            <span className="text-lg font-extrabold text-green-700 dark:text-green-400">
                                ৳{product.price}
                            </span>

                            <span className="ml-0.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                                /{product.unit.toLowerCase()}
                            </span>
                        </div>

                        {/* Quantity */}
                        <p className={`mt-1 text-[11px] font-semibold ${isOutOfStock ? "text-red-500 dark:text-red-400" : isLowStock ? "text-amber-600 dark:text-amber-400" : "text-slate-500 dark:text-slate-400"}`}>
                            {isOutOfStock ? (
                                "Out of stock"
                            ) : (
                                <>
                                    Available:{" "}
                                    <span className="font-bold">
                                        {product.quantity}
                                    </span>{" "}
                                    {product.unit.toLowerCase()}
                                </>
                            )}
                        </p>
                    </div>

                    {/* Add to Cart */}
                    <Button
                        type="button"
                        size="sm"
                        disabled={isOutOfStock}
                        onClick={handleAddToCart}
                        className="
                            shrink-0 bg-green-600 text-white
                            transition-transform hover:bg-green-700
                            active:scale-95
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                            dark:bg-green-600 dark:hover:bg-green-500
                        "
                    >
                        <ShoppingCart className="mr-1 h-3.5 w-3.5" />
                        {productInCart ? "Add More" : "Add"}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}