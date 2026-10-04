"use client";
import {
    CheckCircle2,
    Package,
    Recycle,
    ShieldCheck,
    Users,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Product } from "@/types/types.product";
import { useCart } from "@/components/providers/CartProvider";
import { useWishlist } from "@/components/providers/WishlistProvider";
import { ProductActions } from "./product-actions";
import { ProductQuantity } from "./product-quantity";
interface ProductInfoProps {
    product: Product;
}
export function ProductInfo({ product }: ProductInfoProps) {
    const router = useRouter();
    const [quantity, setQuantity] = useState(1);
    const { addToCart, isInCart } = useCart();
    const {
        toggleWishlist,
        isInWishlist,
    } = useWishlist();
    const isAvailable =
        product.status === "ACTIVE" &&
        product.quantity > 0;
    const isWishlisted = isInWishlist(product.id);
    const productInCart = isInCart(product.id);
    // Add to Cart
    const handleAddToCart = () => {
        if (!isAvailable) return;
        // Add the product first
        addToCart(product);
        // If user selected more than 1 quantity,
        // update the cart quantity accordingly.
        if (quantity > 1) {
            const targetQuantity = Math.min(
                quantity,
                product.quantity
            );
            // The provider's addToCart starts with quantity 1.
            // Additional quantity can be handled from cart.
            for (let i = 1; i < targetQuantity; i++) {
                addToCart(product);
            }
        }
    };
    // Buy Now
    const handleBuyNow = () => {
        if (!isAvailable) return;
        addToCart(product);
        if (quantity > 1) {
            const targetQuantity = Math.min(
                quantity,
                product.quantity
            );
            for (let i = 1; i < targetQuantity; i++) {
                addToCart(product);
            }
        }
        router.push("/checkout");
    };
    // Wishlist
    const handleWishlist = () => {
        toggleWishlist(product);
    };
    return (
        <div className="rounded-2xl border bg-white p-6 shadow-sm lg:p-8">
            {/* Category */}
            <div className="mb-4 inline-flex rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                {product.category.name}
            </div>
            {/* Product Name */}
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {product.name}
            </h1>
            {/* Description */}
            <p className="mt-3 text-base leading-7 text-slate-600">
                {product.description}
            </p>
            {/* Price + Stock */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="text-3xl font-bold text-green-600">
                    ৳ {product.price.toLocaleString()}
                    <span className="ml-1 text-base font-medium text-slate-500">
                        / {product.unit}
                    </span>
                </div>
                <div
                    className={`rounded-full px-4 py-2 text-sm font-medium ${
                        isAvailable
                            ? "bg-green-50 text-green-700"
                            : "bg-red-50 text-red-600"
                    }`}
                >
                    {isAvailable
                        ? `In Stock (${product.quantity} ${product.unit} available)`
                        : "Out of Stock"}
                </div>
            </div>
            {/* Product Stats */}
            <div className="mt-8 grid grid-cols-3 divide-x rounded-xl border bg-slate-50 py-5">
                <div className="flex flex-col items-center gap-2 px-3 text-center">
                    <Package className="h-6 w-6 text-green-600" />
                    <span className="text-xs text-slate-500">
                        Unit
                    </span>
                    <span className="font-semibold text-slate-800">
                        {product.unit}
                    </span>
                </div>
                <div className="flex flex-col items-center gap-2 px-3 text-center">
                    <Package className="h-6 w-6 text-green-600" />
                    <span className="text-xs text-slate-500">
                        Quantity
                    </span>
                    <span className="font-semibold text-slate-800">
                        {product.quantity} {product.unit}
                    </span>
                </div>

                <div className="flex flex-col items-center gap-2 px-3 text-center">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                    <span className="text-xs text-slate-500">
                        Status
                    </span>
                    <span className="font-semibold text-emerald-600">
                        {product.status}
                    </span>
                </div>
            </div>
            {/* Quantity + Actions */}
            <div className="mt-8 flex flex-col gap-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <ProductQuantity
                        quantity={quantity}
                        maxQuantity={product.quantity}
                        onChange={setQuantity}
                    />
                    <div className="flex-1">
                        <ProductActions
                            isWishlisted={isWishlisted}
                            onWishlist={handleWishlist}
                            onAddToCart={handleAddToCart}
                            onBuyNow={handleBuyNow}
                        />
                    </div>
                </div>

                {productInCart && (
                    <p className="text-sm text-green-600">
                        This product is already in your cart.
                    </p>
                )}
            </div>

            {/* Benefits */}
            <div className="mt-8 grid gap-5 border-t pt-6 sm:grid-cols-3">
                <Benefit
                    icon={Recycle}
                    title="Fresh & Natural"
                    description="Farm Fresh Produce"
                />

                <Benefit
                    icon={Users}
                    title="Direct from Farmers"
                    description="Support Local Farmers"
                />

                <Benefit
                    icon={ShieldCheck}
                    title="Safe & Secure"
                    description="Easy & Secure Payment"
                />
            </div>
        </div>
    );
}

interface BenefitProps {
    icon: React.ComponentType<{
        className?: string;
    }>;
    title: string;
    description: string;
}

function Benefit({
     icon: Icon,
     title,
     description,
}: BenefitProps) {
    return (
        <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50">
                <Icon className="h-5 w-5 text-green-600" />
            </div>
            <div>
                <h3 className="text-sm font-semibold text-slate-800">
                    {title}
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                    {description}
                </p>
            </div>
        </div>
    );
}