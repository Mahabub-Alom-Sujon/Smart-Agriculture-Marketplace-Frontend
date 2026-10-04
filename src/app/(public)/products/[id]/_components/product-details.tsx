"use client";
import { Product } from "@/types/types.product";
import { ProductGallery } from "./product-gallery";
import { ProductInfo } from "./product-info";
import { FarmerInformation } from "./farmer-information";
import { ProductContent } from "./product-content";
import { RelatedProducts } from "./related-products";
interface ProductDetailsProps {
    product: Product;
    relatedProducts?: Product[];
}
export function ProductDetails({
   product,
   relatedProducts = [],
}: ProductDetailsProps) {
    return (
        <main className="bg-slate-50">
            <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                    <span>Home</span>
                    <span>/</span>
                    <span>Products</span>
                    <span>/</span>
                    <span>
                        {product.category.name}
                    </span>
                    <span>/</span>
                    <span className="font-medium text-slate-900">
                        {product.name}
                    </span>
                </div>
                {/* Product Hero */}
                <div className="grid gap-6 lg:grid-cols-2">
                    <ProductGallery product={product} />
                    <ProductInfo product={product} />
                </div>
                {/* Bottom Content */}
                <div className="mt-6 grid gap-6 lg:grid-cols-[380px_1fr]">
                    <FarmerInformation product={product}/>
                    <div>
                        <ProductContent product={product} />
                        <RelatedProducts products={relatedProducts} />
                    </div>
                </div>
            </div>
        </main>
    );
}