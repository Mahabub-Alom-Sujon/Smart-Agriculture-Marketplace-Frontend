"use client";
import Image from "next/image";
import Link from "next/link";
import {
    Heart,
    ShoppingCart,
    Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { useCart } from "@/components/providers/CartProvider";
import { useWishlist } from "@/components/providers/WishlistProvider";
import type { Product } from "@/types/types.product";
interface WishlistCardProps {
    product: Product;
}
export default function WishlistCard({
     product,
}: WishlistCardProps) {
    const { addToCart, isInCart } = useCart();
    const { removeFromWishlist } = useWishlist();
    const isOutOfStock = product.quantity <= 0;
    const productInCart = isInCart(product.id);
    const handleRemove = () => {
        removeFromWishlist(product.id);
    };
    const handleAddToCart = () => {
        if (isOutOfStock) {
            return;
        }
        addToCart(product);
    };
    return (
        <Card className="group overflow-hidden border-slate-200 bg-white p-0 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Image */}
            <div className="relative h-52 overflow-hidden bg-slate-100">
                <Link href={`/products/${product.id}`}>
                    <Image
                        src={product?.image ?? "/placeholder-image.png" }
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                    />
                </Link>
                {/* Category */}
                <div className="absolute left-3 top-3">
                    <span className="rounded-full bg-green-600 px-3 py-1 text-[11px] font-semibold text-white shadow-sm">
                        {product.category.name}
                    </span>
                </div>
                {/* Wishlist Remove */}
                <Button
                    type="button"
                    size="icon"
                    variant="secondary"
                    onClick={handleRemove}
                    aria-label={`Remove ${product.name} from wishlist`}
                    className="absolute right-3 top-3 h-9 w-9 rounded-full bg-white/90 shadow-sm backdrop-blur-sm hover:bg-white"
                >
                    <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                </Button>
                {/* Stock Status */}
                {isOutOfStock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <span className="rounded-full bg-red-500 px-4 py-2 text-xs font-bold text-white">
                            Out of Stock
                        </span>
                    </div>
                )}
            </div>
            {/* Content */}
            <CardContent className="p-4">
                {/* Product Name */}
                <Link href={`/products/${product.id}`}>
                    <h2 className="line-clamp-1 text-base font-bold text-slate-800 transition hover:text-green-700">
                        {product.name}
                    </h2>
                </Link>
                {/* Description */}
                <p className="mt-1 line-clamp-2 min-h-[36px] text-xs leading-5 text-slate-500">
                    {product.description ||
                        "Fresh quality agricultural product from a trusted farmer."}
                </p>
                {/* Farmer */}
                <p className="mt-2 truncate text-xs text-slate-500">
                    Farmer:{" "}
                    <span className="font-semibold text-slate-700">
                        {product.farmer.name}
                    </span>
                </p>
                {/* Price */}
                <div className="mt-3 flex items-baseline">
                    <span className="text-lg font-extrabold text-green-700">
                        ৳{Number(product.price).toFixed(2)}
                    </span>
                    <span className="ml-1 text-[11px] text-slate-400">
                        /{product.unit.toLowerCase()}
                    </span>
                </div>
                {/* Stock */}
                <p
                    className={`mt-1 text-[11px] font-semibold ${
                        isOutOfStock
                            ? "text-red-500"
                            : "text-slate-500"
                    }`}
                >
                    {isOutOfStock
                        ? "Currently unavailable"
                        : `Available: ${product.quantity} ${product.unit.toLowerCase()}`}
                </p>
                {/* Actions */}
                <div className="mt-4 flex gap-2 border-t border-slate-100 pt-4">
                    <Button
                        type="button"
                        disabled={isOutOfStock}
                        onClick={handleAddToCart}
                        className="flex-1 bg-green-600 hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <ShoppingCart className="mr-2 h-4 w-4" />

                        {productInCart
                            ? "Add More"
                            : "Add to Cart"}
                    </Button>

                    <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        onClick={handleRemove}
                        aria-label={`Delete ${product.name} from wishlist`}
                        className="shrink-0 hover:border-red-200 hover:bg-red-50"
                    >
                        <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}