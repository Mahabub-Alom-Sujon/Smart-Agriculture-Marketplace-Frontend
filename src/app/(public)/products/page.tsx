import React, { Suspense } from "react";
import ProductList from "@/app/(public)/products/_components/product-list";
import Pagination from "@/app/(public)/products/_components/Pagination";
import ProductSearchBar from "@/app/(public)/products/_components/product-search-bar";
import {ProductListSkeleton} from "@/app/(public)/products/_components/product-list-skeleton";
import ProductFilter from "@/app/(public)/products/_components/product-filter";
interface PageProps {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined;
    }>;
}
const Page = async ({ searchParams }: PageProps) => {
    const params = await searchParams;
    return (
        <section className="min-h-screen">
            <div className="container mx-auto mt-10 px-4 lg:px-8">
                {/* Header */}
                <div className="mb-10 flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
                    <div>
                        <span className="inline-flex rounded-full bg-green-600 px-3 py-1 text-sm font-medium text-white">
                            Our Marketplace
                        </span>
                        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                            Explore Products
                        </h1>
                        <p className="mt-2 max-w-2xl text-base text-slate-600">
                            Discover fresh and quality agricultural products
                            directly from trusted farmers.
                        </p>
                    </div>
                    <div className="w-full md:w-[380px]">
                         <ProductSearchBar />
                    </div>
                </div>
                {/* Content */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                    {/* Filter */}
                    <aside className="lg:col-span-3">
                        <ProductFilter />
                        {/*
                        <Suspense fallback={<ProductFilterSkeleton />}>
                            <ProductFilter />
                        </Suspense>
                        */}
                    </aside>

                    {/* Products */}
                    <main className="lg:col-span-9">
                        <Suspense
                            key={JSON.stringify(params)}
                            fallback={<ProductListSkeleton />}
                        >
                            <ProductList searchParams={searchParams} />
                            <div className="mt-10 flex justify-center">
                                <Pagination searchParams={searchParams}/>
                            </div>
                        </Suspense>
                    </main>
                </div>
            </div>
        </section>
    );
};

export default Page;