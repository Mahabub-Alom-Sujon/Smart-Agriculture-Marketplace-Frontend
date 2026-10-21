"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Category } from "@/types/types.category";
interface CategoriesProps {
    categories: Category[];
}

const Categories = ({ categories }: CategoriesProps) => {
    return (
        <section className="bg-white py-20 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="mb-10 flex items-end justify-between gap-4">
                    <div>
                        <p className="font-semibold text-green-600 dark:text-green-400">
                            Explore Products
                        </p>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                            Shop by Category
                        </h2>
                        <p className="mt-3 max-w-xl text-slate-500 dark:text-slate-400">
                            Find fresh and quality agricultural products from trusted
                            farmers.
                        </p>
                    </div>
                    <Button
                        className="hidden shrink-0 px-4 py-5 bg-green-600 text-white hover:bg-green-700 sm:flex"
                    >
                        <Link className="inline-flex items-center" href="/products">
                            View All
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
                {/* Categories Grid */}
                {categories.length > 0 ? (
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                href={`/products?category=${encodeURIComponent(
                                    category.name
                                )}`}
                                className="h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
                            >
                                <Card className="group h-full border-slate-200 bg-white p-0 transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-green-700">
                                    <CardContent className="p-4 text-center">
                                        <div className="relative mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-green-50 transition group-hover:bg-green-100 dark:bg-green-950 dark:group-hover:bg-green-900">
                                            {category.image ? (
                                                <Image
                                                    src={category.image}
                                                    alt={category.name}
                                                    fill
                                                    sizes="64px"
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <span className="text-4xl">🌱</span>
                                            )}
                                        </div>

                                        <h3 className="mt-3 font-semibold text-slate-900 dark:text-slate-100">
                                            {category.name}
                                        </h3>

                                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                            {category._count?.products ?? 0} Products
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center dark:border-slate-700 dark:bg-slate-900">
                        <div className="mb-3 text-4xl">🌱</div>
                        <p className="text-lg font-semibold text-slate-700 dark:text-slate-200">
                            No categories available
                        </p>
                        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                            Please check back later for available agricultural product
                            categories.
                        </p>
                        <Button
                            className="mt-5 bg-green-600 text-white hover:bg-green-700"
                        >
                            <Link href="/products">
                                Browse Products
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                )}
                {/* Mobile View All Button */}
                <div className="mt-6 flex justify-center sm:hidden">
                    <Button
                        className="px-4 py-5 bg-green-600 text-white hover:bg-green-700"
                    >
                        <Link className="inline-flex items-center" href="/products">
                            View All Products
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Categories;
