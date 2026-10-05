import Link from "next/link";
import { ArrowRight, Leaf, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function FarmersHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
            {/* Background decoration */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-green-200/30 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
            <div className="container relative mx-auto px-4 py-16 sm:py-20 lg:py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                        <Sprout className="h-4 w-4" />
                        Meet Our Farmers
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        Meet the Farmers Behind{" "}
                        <span className="text-green-600">
                            Fresh Food
                        </span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                        Discover trusted farmers who grow fresh,
                        high-quality agricultural products and bring them
                        directly to your table.
                    </p>
                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                        <Button
                            //asChild
                            className="px-5 py-6 bg-green-600 hover:bg-green-700"
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
                            //asChild
                            variant="outline"
                            className="px-5 py-6 border-green-200 text-green-700 hover:bg-green-50"
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