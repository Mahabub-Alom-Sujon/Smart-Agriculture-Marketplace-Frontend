import React from "react";
import ProductHeader from "@/app/dashboard/admin/products/_components/ProductHeader";
import ProductTable from "@/app/dashboard/admin/products/_components/ProductTable";
import ProductSearch from "@/app/dashboard/admin/products/_components/ProductSearch";
import ProductPagination from "@/app/dashboard/admin/products/_components/ProductPagination";
import type { Product, ProductMeta } from "@/types/types.product";
interface ProductPageProps {
    products: Product[];
    meta: ProductMeta;
    searchTerm: string;
}
const ProductPage = ({
    products,
    meta,
    searchTerm,
}: ProductPageProps) => {
    return (
        <main className="min-h-screen bg-slate-50 transition-colors duration-300 dark:bg-slate-950 rounded-2xl">
            <div className="space-y-6 p-6">
                {/* Header */}
                <ProductHeader />

                {/* Search */}
                <ProductSearch initialSearchTerm={searchTerm} />

                {/* Product Table */}
                <ProductTable products={products} />

                {/* Pagination */}
                {meta.totalPage > 1 && (
                    <ProductPagination
                        currentPage={meta.page}
                        totalPages={meta.totalPage}
                        searchTerm={searchTerm}
                    />
                )}
            </div>
        </main>
    );
};

export default ProductPage;