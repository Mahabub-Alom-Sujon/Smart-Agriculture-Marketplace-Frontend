import type { Metadata } from "next";
import { Suspense } from "react";
import { createPageMetadata } from "@/lib/metadata";
import ProductList from "@/app/(public)/products/_components/product-list";
import Pagination from "@/app/(public)/products/_components/Pagination";
import ProductSearchBar from "@/app/(public)/products/_components/product-search-bar";
import { ProductListSkeleton } from "@/app/(public)/products/_components/product-list-skeleton";
import ProductFilter from "@/app/(public)/products/_components/product-filter";
interface PageProps {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined;
    }>;
}
export const metadata: Metadata = createPageMetadata({
    title: "Agricultural Products",
    description: "Explore agricultural products, compare offerings, and shop for fresh farm produce on AgroMart.",
    path: "/products",
});

const Page = async ({ searchParams }: PageProps) => {
    const params = await searchParams;
    return (
        <section className="min-h-screen bg-slate-50 py-1 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
            <div className="container mx-auto mt-10 px-4 lg:px-8">
                {/* Header */}
                <div className="mb-10 flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 md:flex-row md:items-center md:justify-between">
                    {/* Heading */}
                    <div>
                        <span className="inline-flex rounded-full bg-green-600 px-3 py-1 text-sm font-medium text-white dark:bg-green-500">
                            Our Marketplace
                        </span>

                        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                            Explore Products
                        </h1>

                        <p className="mt-2 max-w-2xl text-base text-slate-600 dark:text-slate-400">
                            Discover fresh and quality agricultural products
                            directly from trusted farmers.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="w-full md:w-[380px]">
                        <ProductSearchBar />
                    </div>
                </div>

                {/* Products Content */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                    {/* Filter Sidebar */}
                    <aside className="min-w-0 lg:col-span-3">
                        <ProductFilter />
                    </aside>

                    {/* Product List */}
                    <main className="min-w-0 lg:col-span-9">
                        <Suspense
                            key={JSON.stringify(params)}
                            fallback={<ProductListSkeleton />}
                        >
                            <ProductList searchParams={searchParams} />

                            {/* Pagination */}
                            <div className="mt-10 flex justify-center">
                                <Pagination searchParams={searchParams} />
                            </div>
                        </Suspense>
                    </main>
                </div>
            </div>
        </section>
    );
};

export default Page;