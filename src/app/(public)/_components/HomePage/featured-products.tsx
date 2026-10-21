// "use client";
// import React, {useMemo} from 'react';
// import Link from "next/link";
// import Image from "next/image";
// import {
//     ChevronRight,
//     Heart,
//     ShoppingCart,
//     Star,
//     User,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import type { Product } from "@/types/types.product";
// import { useCart } from "@/components/providers/CartProvider";
// import { useWishlist } from "@/components/providers/WishlistProvider";
// interface FeaturedProductsProps {
//     products: Product[];
// }
//
// const FeaturedProducts = ({
//     products,
//   }: FeaturedProductsProps) => {
//     const { addToCart, isInCart } = useCart();
//     const { toggleWishlist, isInWishlist } = useWishlist();
//     const featuredProducts = products.slice(0, 4);
//     if (featuredProducts.length === 0) {
//         return null;
//     }
//     return (
//         <>
//             <section className="bg-slate-50 py-12 md:py-16">
//                 <div className="container mx-auto px-4">
//                     {/* Section Header */}
//                     <div className="mb-10 flex items-end justify-between">
//                         <div>
//                             <p className="font-semibold text-green-600">
//                                 Fresh & Quality
//                             </p>
//                             <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
//                                 Featured Products
//                             </h2>
//                             <p className="mt-3 text-slate-500">
//                                 Fresh products directly from verified farmers.
//                             </p>
//                         </div>
//                         <Button variant="outline" className="px-4 py-5 hidden sm:flex  bg-green-600 hover:bg-green-700">
//                             <Link className="text-white inline-flex items-center gap-1" href="/products">
//                                 Browse Marketplace
//                                 <ChevronRight className="ml-1 h-4 w-4" />
//                             </Link>
//                         </Button>
//                     </div>
//                     {/* Featured Product Cards */}
//                     <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                         {featuredProducts.map((product) => {
//                             const isOutOfStock = product.quantity <= 0;
//                             const isLowStock = product.quantity > 0 && product.quantity < 10;
//                             const isWishlisted = isInWishlist(product.id);
//                             const productInCart = isInCart(product.id);
//                             const farmerInitials = product.farmer.name?.slice(0, 2).toUpperCase() || "FR";
//                             const handleAddToCart = () => {
//                                 if (isOutOfStock) return;
//                                 addToCart(product);
//                             };
//
//                             const handleWishlist = () => {
//                                 toggleWishlist(product);
//                             };
//
//                             return (
//                                 <Card
//                                     key={product.id}
//                                     className="group overflow-hidden border-slate-200 bg-white p-0 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
//                                 >
//                                     {/* Product Image */}
//                                     <div className="relative h-52 w-full overflow-hidden bg-slate-100">
//                                         <Link
//                                             href={`/products/${product.id}`}
//                                             aria-label={`View ${product.name}`}
//                                         >
//                                             <Image
//                                                 src={
//                                                     product.image ||
//                                                     "/placeholder-image.png"
//                                                 }
//                                                 alt={product.name}
//                                                 fill
//                                                 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
//                                                 className="object-cover transition duration-500 group-hover:scale-105"
//                                             />
//                                         </Link>
//
//                                         {/* Category */}
//                                         <div className="absolute left-3 top-3 z-10">
//                                             <Badge className="border-none bg-green-600 font-medium text-white hover:bg-green-600">
//                                                 {product.category.name}
//                                             </Badge>
//                                         </div>
//
//                                         {/* Wishlist */}
//                                         <Button
//                                             type="button"
//                                             size="icon"
//                                             variant="secondary"
//                                             onClick={handleWishlist}
//                                             aria-label={
//                                                 isWishlisted
//                                                     ? "Remove from wishlist"
//                                                     : "Add to wishlist"
//                                             }
//                                             className="absolute right-3 top-3 z-10 h-9 w-9 rounded-full bg-white/90 shadow-sm backdrop-blur-sm hover:bg-white"
//                                         >
//                                             <Heart
//                                                 className={`h-4 w-4 transition-colors ${
//                                                     isWishlisted
//                                                         ? "fill-red-500 text-red-500"
//                                                         : "text-slate-600"
//                                                 }`}
//                                             />
//                                         </Button>
//
//                                         {/* Low Stock */}
//                                         {isLowStock && (
//                                             <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1 rounded-full bg-amber-500 px-3 py-1 text-[11px] font-bold text-white shadow-sm">
//                                                 <span>Only</span>
//                                                 <span className="font-extrabold">
//                                                 {product.quantity}
//                                             </span>
//                                                 <span>Left</span>
//                                             </div>
//                                         )}
//
//                                         {/* Out of Stock */}
//                                         {isOutOfStock && (
//                                             <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 text-sm font-bold text-white backdrop-blur-[1px]">
//                                                 Stock Out
//                                             </div>
//                                         )}
//                                     </div>
//
//                                     {/* Product Details */}
//                                     <CardContent className="p-4">
//
//                                         {/* Reviews */}
//                                         <div className="flex items-center gap-1.5 text-xs text-slate-400">
//                                             <div className="flex items-center gap-0.5">
//                                                 <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
//
//                                                 <span className="font-semibold text-slate-700">
//                                                 {product._count.reviews > 0
//                                                     ? "4.5"
//                                                     : "New"}
//                                             </span>
//                                             </div>
//
//                                             <span>•</span>
//
//                                             <span>
//                                             ({product._count.reviews} reviews)
//                                         </span>
//                                         </div>
//
//                                         {/* Product Name */}
//                                         <Link
//                                             href={`/products/${product.id}`}
//                                         >
//                                             <h3 className="mt-1.5 line-clamp-1 text-base font-bold text-slate-800 transition hover:text-green-700">
//                                                 {product.name}
//                                             </h3>
//                                         </Link>
//
//                                         {/* Description */}
//                                         <p className="mt-1 min-h-[32px] line-clamp-2 text-xs text-slate-500">
//                                             {product.description}
//                                         </p>
//
//                                         {/* Farmer Information */}
//                                         <div className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-3">
//                                             <Avatar className="h-7 w-7 border border-slate-100">
//                                                 <AvatarFallback className="bg-emerald-50 text-[9px] font-bold text-emerald-700">
//                                                     {farmerInitials || (
//                                                         <User className="h-3 w-3" />
//                                                     )}
//                                                 </AvatarFallback>
//                                             </Avatar>
//
//                                             <div className="min-w-0 flex-1">
//                                                 <p className="truncate text-xs font-medium text-slate-600">
//                                                     Farmer:{" "}
//                                                     <span className="font-semibold text-slate-800">
//                                                     {product.farmer.name}
//                                                 </span>
//                                                 </p>
//                                             </div>
//                                         </div>
//
//                                         {/* Price, Quantity and Cart */}
//                                         <div className="mt-4 flex items-end justify-between gap-2 border-t border-slate-200 pt-3">
//                                             <div className="min-w-0">
//                                                 <div className="flex items-baseline">
//                                                 <span className="text-lg font-extrabold text-green-700">
//                                                     ৳{product.price}
//                                                 </span>
//
//                                                     <span className="ml-0.5 text-[11px] font-medium text-slate-400">
//                                                     /{product.unit.toLowerCase()}
//                                                 </span>
//                                                 </div>
//
//                                                 {/* Available Quantity */}
//                                                 <p
//                                                     className={`mt-1 text-[11px] font-semibold ${
//                                                         isOutOfStock
//                                                             ? "text-red-500"
//                                                             : isLowStock
//                                                                 ? "text-amber-600"
//                                                                 : "text-slate-500"
//                                                     }`}
//                                                 >
//                                                     {isOutOfStock ? (
//                                                         "Out of stock"
//                                                     ) : (
//                                                         <>
//                                                             Available:{" "}
//                                                             <span className="font-bold">
//                                                             {product.quantity}
//                                                         </span>{" "}
//                                                             {product.unit.toLowerCase()}
//                                                         </>
//                                                     )}
//                                                 </p>
//                                             </div>
//
//                                             {/* Add to Cart */}
//                                             <Button
//                                                 type="button"
//                                                 size="sm"
//                                                 disabled={isOutOfStock}
//                                                 onClick={handleAddToCart}
//                                                 className="shrink-0 bg-green-600 transition-transform hover:bg-green-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
//                                             >
//                                                 <ShoppingCart className="mr-1 h-3.5 w-3.5" />
//
//                                                 {productInCart
//                                                     ? "Add More"
//                                                     : "Add"}
//                                             </Button>
//                                         </div>
//                                     </CardContent>
//                                 </Card>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };
//
// export default FeaturedProducts;


"use client";
import Link from "next/link";
import Image from "next/image";
import {
    ChevronRight,
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
interface FeaturedProductsProps {
    products: Product[];
}
const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
    const { addToCart, isInCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const featuredProducts = products.slice(0, 4);
    if (featuredProducts.length === 0) {
        return null;
    }

    return (
        <section className="bg-slate-50 py-12 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 md:py-16">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="mb-10 flex items-end justify-between gap-4">
                    <div>
                        <p className="font-semibold text-green-600 dark:text-green-400">
                            Fresh & Quality
                        </p>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                            Featured Products
                        </h2>
                        <p className="mt-3 text-slate-500 dark:text-slate-400">
                            Fresh products directly from verified farmers.
                        </p>
                    </div>
                    <Button
                        className="px-4 py-5 hidden shrink-0 bg-green-600 text-white hover:bg-green-700 sm:flex"
                    >
                        <Link className="inline-flex items-center" href="/products">
                            Browse Marketplace
                            <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                {/* Featured Product Cards */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {featuredProducts.map((product) => {
                        const isOutOfStock = product.quantity <= 0;
                        const isLowStock = product.quantity > 0 && product.quantity < 10;
                        const isWishlisted = isInWishlist(product.id);
                        const productInCart = isInCart(product.id);
                        const farmerInitials = product.farmer.name?.slice(0, 2).toUpperCase() || "FR";
                        const handleAddToCart = () => {
                            if (isOutOfStock) return;
                            addToCart(product);
                        };
                        const handleWishlist = () => {
                            toggleWishlist(product);
                        };

                        return (
                            <Card
                                key={product.id}
                                className="group overflow-hidden border-slate-200 bg-white p-0 transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-green-800"
                            >
                                {/* Product Image */}
                                <div className="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                                    <Link
                                        href={`/products/${product.id}`}
                                        aria-label={`View ${product.name}`}
                                    >
                                        <Image
                                            src={product.image || "/placeholder-image.png"}
                                            alt={product.name}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                            className="object-cover transition duration-500 group-hover:scale-105"
                                        />
                                    </Link>

                                    {/* Category */}
                                    <div className="absolute left-3 top-3 z-10">
                                        <Badge className="border-none bg-green-600 font-medium text-white hover:bg-green-700">
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
                                        className="absolute right-3 top-3 z-10 h-9 w-9 rounded-full bg-white/90 text-slate-700 shadow-sm backdrop-blur-sm hover:bg-white dark:bg-slate-900/90 dark:text-slate-200 dark:hover:bg-slate-800"
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

                                    {/* Out of Stock */}
                                    {isOutOfStock && (
                                        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 text-sm font-bold text-white backdrop-blur-[1px]">
                                            Stock Out
                                        </div>
                                    )}
                                </div>

                                {/* Product Details */}
                                <CardContent className="p-4">
                                    {/* Reviews */}
                                    <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                                        <div className="flex items-center gap-0.5">
                                            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />

                                            <span className="font-semibold text-slate-700 dark:text-slate-200">
                                                {product._count.reviews > 0 ? "4.5" : "New"}
                                            </span>
                                        </div>

                                        <span>•</span>

                                        <span>({product._count.reviews} reviews)</span>
                                    </div>

                                    {/* Product Name */}
                                    <Link href={`/products/${product.id}`}>
                                        <h3 className="mt-1.5 line-clamp-1 text-base font-bold text-slate-800 transition hover:text-green-700 dark:text-slate-100 dark:hover:text-green-400">
                                            {product.name}
                                        </h3>
                                    </Link>

                                    {/* Description */}
                                    <p className="mt-1 min-h-[32px] line-clamp-2 text-xs text-slate-500 dark:text-slate-400">
                                        {product.description}
                                    </p>

                                    {/* Farmer Information */}
                                    <div className="mt-3 flex items-center gap-2 border-t border-slate-100 pt-3 dark:border-slate-800">
                                        <Avatar className="h-7 w-7 border border-slate-100 dark:border-slate-700">
                                            <AvatarFallback className="bg-emerald-50 text-[9px] font-bold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                                                {farmerInitials || <User className="h-3 w-3" />}
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

                                    {/* Price, Quantity and Cart */}
                                    <div className="mt-4 flex items-end justify-between gap-2 border-t border-slate-200 pt-3 dark:border-slate-800">
                                        <div className="min-w-0">
                                            <div className="flex items-baseline">
                                                <span className="text-lg font-extrabold text-green-700 dark:text-green-400">
                                                  ৳{product.price}
                                                </span>

                                                <span className="ml-0.5 text-[11px] font-medium text-slate-400 dark:text-slate-500">
                                                    /{product.unit.toLowerCase()}
                                                </span>
                                            </div>

                                            {/* Available Quantity */}
                                            <p
                                                className={`mt-1 text-[11px] font-semibold ${
                                                    isOutOfStock
                                                        ? "text-red-500"
                                                        : isLowStock
                                                            ? "text-amber-600 dark:text-amber-400"
                                                            : "text-slate-500 dark:text-slate-400"
                                                }`}
                                            >
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
                                            className="shrink-0 bg-green-600 text-white transition-transform hover:bg-green-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            <ShoppingCart className="mr-1 h-3.5 w-3.5" />
                                            {productInCart ? "Add More" : "Add"}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Mobile Marketplace Button */}
                <div className="mt-6 flex justify-center sm:hidden">
                    <Button className="px-4 py-5 bg-green-600 text-white hover:bg-green-700">
                        <Link className="inline-flex items-center" href="/products">
                            Browse Marketplace
                            <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
