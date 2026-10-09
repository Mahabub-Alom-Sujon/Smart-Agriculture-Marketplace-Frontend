import React from 'react';
import { getAllProduct } from "./_actions/getAllProduct";
import ProductPage from "@/app/dashboard/admin/products/_components/ProductPage";
interface PageProps {
    searchParams: Promise<{
        page?: string;
        searchTerm?: string;
    }>;
}
export default async function Page({ searchParams }: PageProps) {
    const params = await searchParams;
    const searchTerm = params.searchTerm?.trim() ?? "";
    const page = Math.max(1, Number(params.page) || 1);
    const limit = 10;
    const response = await getAllProduct({
        page,
        limit,
        searchTerm,
    });
    const products = response?.data ?? [];
    const meta = response?.meta ?? {
        total: 0,
        page: 1,
        limit,
        totalPage: 0,
    };
    return (
        <ProductPage
            products={products}
            meta={meta}
            searchTerm={searchTerm}
        />
    );
}