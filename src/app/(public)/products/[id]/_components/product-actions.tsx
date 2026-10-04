"use client";
import {
    Check,
    Heart,
    ShoppingCart,
    Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
interface ProductActionsProps {
    isWishlisted: boolean;
    onWishlist: () => void;
    onAddToCart: () => void;
    onBuyNow: () => void;
}
export function ProductActions({
    isWishlisted,
    onWishlist,
    onAddToCart,
    onBuyNow,
}: ProductActionsProps) {
    return (
        <div className="flex flex-col gap-2 sm:flex-row">
            {/* Add to Cart */}
            <Button
                type="button"
                onClick={onAddToCart}
                className="h-12 flex-1 bg-green-600 transition-transform hover:bg-green-700 text-sm font-semibold"
            >
                {/*<ShoppingCart className="mr-2 h-5 w-5" />*/}
                Add to Cart
            </Button>

            {/* Buy Now */}
            <Button
                type="button"
                onClick={onBuyNow}
                className="h-12 flex-1 bg-orange-600 transition-transform hover:bg-green-700 text-sm font-semibold hover:bg-orange-600"
            >
                {/*<Zap className="mr-2 h-5 w-5" />*/}
                Buy Now
            </Button>

            {/* Wishlist */}
            <Button
                type="button"
                variant="outline"
                onClick={onWishlist}
                className="h-12 flex-1 text-sm sm:min-w-44"
            >
                {isWishlisted ? (
                    <Check className="mr-2 h-5 w-5 text-green-600" />
                ) : (
                    <Heart className="mr-2 h-5 w-5" />
                )}

                {isWishlisted
                    ? "Wishlisted"
                    : "Add to Wishlist"}
            </Button>
        </div>
    );
}