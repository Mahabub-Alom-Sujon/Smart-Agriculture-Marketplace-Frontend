"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Category } from "@/types/types.category";
interface CategoriesProps {
    categories: Category[];
}
const Categories = ({ categories }: CategoriesProps) => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="mb-10 flex items-end justify-between">
                     <div>
                        <p className="font-semibold text-green-600">Explore Products</p>
                         <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                             Shop by Category
                         </h2>

                         <p className="mt-3 max-w-xl text-slate-500">
                             Find fresh and quality agricultural products from trusted
                             farmers.
                         </p>
                     </div>
                     <Button variant="ghost" className="px-4 py-5 hidden sm:flex  bg-green-600 hover:bg-green-700">
                         <Link className="text-white inline-flex items-center" href="/products">
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
                                <Card className="group h-full border-slate-200 transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg p-0">
                                    <CardContent className="p-4 text-center">
                                        <div className="relative mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-green-50 transition group-hover:bg-green-100">
                                            {category.image ? (
                                                <Image
                                                    src={category.image}
                                                    alt={category.name}
                                                    fill
                                                    sizes="64px"
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <span className="text-4xl">
                                                    🌱
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="mt-3 font-semibold">
                                            {category.name}
                                        </h3>

                                        <p className="mt-1 text-xs text-slate-500">
                                            {category._count.products ?? 0} Products
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="rounded-xl border border-dashed border-slate-300 px-6 py-12 text-center">
                        <p className="text-lg font-semibold text-slate-700">
                            No categories available
                        </p>

                        <p className="mt-2 text-sm text-slate-500">
                            Please check back later for available
                            agricultural product categories.
                        </p>

                        <Button className="mt-5 px-4 py-5 hidden sm:flex  bg-green-600 hover:bg-green-700">
                            <Link className="text-white inline-flex items-center" href="/products">
                                Browse Products
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Categories;