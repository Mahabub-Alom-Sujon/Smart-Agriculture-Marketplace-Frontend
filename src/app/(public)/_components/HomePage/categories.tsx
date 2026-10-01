import React from 'react';
import Link from "next/link";
import {
    ArrowRight
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
    {
        name: "Vegetables",
        icon: "🥬",
        count: "120+ Products",
    },
    {
        name: "Fruits",
        icon: "🍎",
        count: "85+ Products",
    },
    {
        name: "Rice & Grains",
        icon: "🌾",
        count: "65+ Products",
    },
    {
        name: "Organic Products",
        icon: "🌱",
        count: "90+ Products",
    },
    {
        name: "Seeds",
        icon: "🌰",
        count: "45+ Products",
    },
    {
        name: "Dairy",
        icon: "🥛",
        count: "35+ Products",
    },
];

const Categories = () => {
    return (
        <>
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
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

                        <Button variant="ghost" className="hidden sm:flex">
                            <Link href="/products">
                                View All
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                        {categories.map((category) => (
                            <Link
                                key={category.name}
                                href={`/products?category=${category.name}`}
                            >
                                <Card className="group h-full border-slate-200 transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg">
                                    <CardContent className="p-5 text-center">
                                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-4xl transition group-hover:bg-green-100">
                                            {category.icon}
                                        </div>

                                        <h3 className="mt-4 font-semibold">{category.name}</h3>

                                        <p className="mt-1 text-xs text-slate-500">
                                            {category.count}
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Categories;