import Link from "next/link";
import {
    ArrowRight,
    Leaf,
    Sprout,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function FarmersHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950">
            {/* Background decoration */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-green-200/30 blur-3xl dark:bg-green-500/10" />

            <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-500/10" />

            <div className="container relative mx-auto px-4 py-16 sm:py-20 lg:py-24">
                <div className="mx-auto max-w-3xl text-center">
                    {/* Badge */}
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-100 px-4 py-2 text-sm font-medium text-green-700 transition-colors duration-300 dark:border-green-800 dark:bg-green-900/40 dark:text-green-300">
                        <Sprout className="h-4 w-4" />
                        Meet Our Farmers
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-slate-100">
                        Meet the Farmers Behind{" "}
                        <span className="text-green-600 dark:text-green-400">
                            Fresh Food
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg dark:text-slate-300">
                        Discover trusted farmers who grow fresh,
                        high-quality agricultural products and bring them
                        directly to your table.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                        <Button
                            className="bg-green-600 px-5 py-6 text-white hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-500"
                        >
                            <Link
                                href="/products"
                                className="inline-flex items-center"
                            >
                                Explore Products
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>

                        <Button
                            variant="outline"
                            className="border-green-200 bg-white px-5 py-6 text-green-700 hover:bg-green-50 hover:text-green-800 dark:border-green-800 dark:bg-slate-900 dark:text-green-400 dark:hover:bg-green-950 dark:hover:text-green-300"
                        >
                            <Link
                                href="/farmers"
                                className="inline-flex items-center"
                            >
                                <Leaf className="mr-2 h-4 w-4" />
                                Browse Farmers
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}