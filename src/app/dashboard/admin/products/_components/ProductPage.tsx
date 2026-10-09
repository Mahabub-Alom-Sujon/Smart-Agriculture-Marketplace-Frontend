import React from 'react';
import ProductHeader from "@/app/dashboard/admin/products/_components/ProductHeader";
import type {Product, ProductMeta } from "@/types/types.product";
import ProductTable from "@/app/dashboard/admin/products/_components/ProductTable";
import ProductSearch from "@/app/dashboard/admin/products/_components/ProductSearch";
import ProductPagination from "@/app/dashboard/admin/products/_components/ProductPagination";

interface ProductPageProps {
    products: Product[];
    meta: ProductMeta;
    searchTerm: string;
}

const ProductPage = ({ products, meta, searchTerm }: ProductPageProps) => {
    return (
        <>
            <div className="space-y-6">
                <ProductHeader />
                <ProductSearch initialSearchTerm={ searchTerm }/>
                <ProductTable products={products}/>
                {meta.totalPage > 1 && (
                    <ProductPagination
                        currentPage={meta.page}
                        totalPages={meta.totalPage}
                        searchTerm={searchTerm}
                    />
                )}
            </div>
        </>
    );
};

export default ProductPage;