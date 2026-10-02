import React from "react";
import { getProductsAction } from "@/app/(public)/products/_actions/productAction";
import { Product } from "@/types/types.product";
import {ProductCard} from "@/app/(public)/products/_components/product-card";

interface ProductListProps {
    searchParams?: Promise<{
        [key: string]: string | string[] | undefined;
    }>;
}

const ProductList = async ({
   searchParams,
}: ProductListProps) => {
    const query = await searchParams;
    const result = await getProductsAction({
        query,
    });
    const products: Product[] = result?.data ?? [];
    return (
        <>
            {result.success && products.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ):(
                <p className="py-12 text-center text-muted-foreground">
                    No product found.
                </p>
            )}
        </>
    );
};

export default ProductList;