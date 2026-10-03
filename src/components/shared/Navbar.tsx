"use client"
import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Heart,
    Leaf,
    ShoppingCart,
} from "lucide-react";
import { useCart } from "@/components/providers/CartProvider";
import { useWishlist } from "@/components/providers/WishlistProvider";
const Navbar = () => {
    const { cartCount } = useCart();
    const { wishlistCount } = useWishlist();
    return (
        <>
            <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
                <div className="container mx-auto flex h-18 items-center justify-between px-4 lg:px-8">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white">
                            <Leaf className="h-6 w-6" />
                        </div>

                        <div>
                            <h1 className="text-xl font-bold tracking-tight text-green-700">
                                AgroNexa
                            </h1>
                            <p className="hidden text-[10px] font-medium text-slate-500 sm:block">
                                Smart Agriculture Marketplace
                            </p>
                        </div>
                    </Link>

                    <nav className="hidden items-center gap-7 lg:flex">
                        <Link
                            href="/"
                            className="text-sm font-semibold text-green-700"
                        >
                            Home
                        </Link>

                        <Link
                            href="/products"
                            className="text-sm font-medium text-slate-600 transition hover:text-green-700"
                        >
                            Marketplace
                        </Link>

                        <Link
                            href="/farmers"
                            className="text-sm font-medium text-slate-600 transition hover:text-green-700"
                        >
                            Farmers
                        </Link>

                        <Link
                            href="/experts"
                            className="text-sm font-medium text-slate-600 transition hover:text-green-700"
                        >
                            Experts
                        </Link>

                        <Link
                            href="/about"
                            className="text-sm font-medium text-slate-600 transition hover:text-green-700"
                        >
                            About
                        </Link>
                    </nav>

                    <div className="flex items-center gap-2">
                        {/* Wishlist */}
                        <Button
                            // asChild
                            variant="ghost"
                            size="icon"
                            className="relative"
                        >
                            <Link
                                href="/wishlist"
                                aria-label="Wishlist"
                            >
                                <Heart className="h-5 w-5" />
                                {wishlistCount > 0 && (
                                    <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
                                    {wishlistCount > 99
                                        ? "99+"
                                        : wishlistCount}
                                </span>
                                )}
                            </Link>
                        </Button>
                        {/* Cart */}
                        <Button
                            //asChild
                            variant="ghost"
                            size="icon"
                            className="relative"
                        >
                            <Link
                                href="/cart"
                                aria-label="Shopping cart"
                            >
                                <ShoppingCart className="h-5 w-5" />
                                {cartCount > 0 && (
                                    <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-[9px] font-bold text-white">
                                    {cartCount > 99
                                        ? "99+"
                                        : cartCount}
                                </span>
                                )}
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            className="hidden sm:inline-flex"
                            //asChild
                        >
                            <Link href="/login">Login</Link>
                        </Button>
                        <Button className="bg-green-600 hover:bg-green-700">
                            <Link href="/register">Get Started</Link>
                        </Button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;