"use client";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/components/providers/WishlistProvider";
import { Product } from "@/types/types.product";
import {useState} from "react";
interface ProductGalleryProps {
    product: Product;
}
export function ProductGallery({
   product,
}: ProductGalleryProps) {
    const { toggleWishlist, isInWishlist} = useWishlist();
    const isWishlisted = isInWishlist(product.id);
    const [selectedImage, setSelectedImage] = useState(product.image);
    const images = [
        product.image,
        product.image,
        product.image,
        product.image,
    ];
    const handleWishlist = () => {
        toggleWishlist(product);
    };
    return (
        <div className="rounded-2xl border bg-white p-4 shadow-sm">
            {/* Main Image */}
            <div className="relative h-[400px] overflow-hidden rounded-xl bg-muted sm:h-[400px] lg:h-[430px]">
                <Image
                    src={product?.image ?? "/placeholder-image.png"}
                    alt={product.name}
                    fill
                    priority
                    unoptimized
                    className="object-cover transition-transform duration-300 hover:scale-105"
                />
                {/* Fresh Badge */}
                <div className="absolute left-4 top-4 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow">
                    Fresh & Natural
                </div>
                {/* Wishlist */}
                <Button
                    type="button"
                    size="icon"
                    variant="secondary"
                    onClick={handleWishlist}
                    aria-label={ isWishlisted ? "Remove from wishlist" : "Add to wishlist" }
                    className="absolute right-4 top-4 h-11 w-11 rounded-full bg-white shadow-md hover:bg-white"
                >
                    <Heart
                        className={`h-5 w-5 transition-colors ${
                            isWishlisted
                                ? "fill-red-500 text-red-500"
                                : "text-slate-600"
                        }`}
                    />
                </Button>
            </div>

            {/* Thumbnail Images */}
            <div className="mt-4 grid grid-cols-4 gap-3">
                {images.map((item, index) => {
                    const isSelected = selectedImage === item;
                    return (
                        <button
                            key={`${item}-${index}`}
                            type="button"
                            onClick={() => setSelectedImage(item)}
                            aria-label={`View ${product.name} image ${ index + 1 }`}
                            className={`relative aspect-square overflow-hidden rounded-lg border-2 transition ${
                                isSelected ? "border-emerald-600" : "border-transparent hover:border-emerald-300"
                            }`}
                        >
                            <Image
                                src={item ?? "/placeholder-image.png"}
                                alt={`${product.name} ${index + 1}`}
                                fill
                                unoptimized
                                className="object-cover"
                            />
                        </button>
                    );
                })}
            </div>

            {/* Wishlist Status */}
            {isWishlisted && (
                <div className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                    <Heart className="h-4 w-4 fill-red-500" />
                    Added to your wishlist
                </div>
            )}
        </div>
    );
}