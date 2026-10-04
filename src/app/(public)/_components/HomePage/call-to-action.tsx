import React from 'react';
import Link from "next/link";
import {
    ArrowRight,
    Wheat,
    Leaf,
    CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
const CallToAction = () => {
    return (
        <>
            {/*<section className="px-4 py-20">*/}
            {/*    <div className="container mx-auto overflow-hidden rounded-[2rem] bg-green-700 px-6 py-14 text-center text-white sm:px-10 lg:px-20">*/}
            {/*        <div className="mx-auto max-w-3xl">*/}
            {/*            <Wheat className="mx-auto h-12 w-12 text-green-200" />*/}

            {/*            <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl">*/}
            {/*                Grow Your Agriculture Business With Us*/}
            {/*            </h2>*/}

            {/*            <p className="mx-auto mt-5 max-w-2xl text-green-100">*/}
            {/*                Join thousands of farmers and buyers building a smarter and*/}
            {/*                more connected agriculture ecosystem.*/}
            {/*            </p>*/}

            {/*            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">*/}
            {/*                <Button*/}
            {/*                    size="lg"*/}
            {/*                    className="bg-white text-green-700 hover:bg-green-50"*/}
            {/*                >*/}
            {/*                    <Link href="/register">*/}
            {/*                        Join AgroMart*/}
            {/*                        <ArrowRight className="ml-2 h-4 w-4" />*/}
            {/*                    </Link>*/}
            {/*                </Button>*/}

            {/*                <Button*/}
            {/*                    size="lg"*/}
            {/*                    variant="outline"*/}
            {/*                    className="border-green-300 bg-transparent text-white hover:bg-green-600 hover:text-white"*/}
            {/*                >*/}
            {/*                    <Link href="/products">Explore Marketplace</Link>*/}
            {/*                </Button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <section className="px-4 py-16 lg:px-8">
                <div className="container mx-auto">
                    <div className="relative overflow-hidden rounded-3xl bg-green-700 px-6 py-14 text-white shadow-xl sm:px-10 lg:px-16">
                        {/* Decorative Elements */}
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
                        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-green-500/30" />

                        <div className="relative z-10 mx-auto max-w-3xl text-center">
                            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                                <Leaf className="h-7 w-7" />
                            </div>

                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                                Grow Better. Buy Smarter.
                            </h2>

                            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-green-50 sm:text-base">
                                Connect directly with trusted farmers, discover fresh agricultural
                                products, and get expert advice — all in one smart agriculture
                                marketplace.
                            </p>

                            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                                <Button
                                    size="lg"
                                    className="px-5 py-6 bg-white px-7 text-green-700 hover:bg-green-50"
                                >
                                    <Link href="/products" className="inline-flex items-center">
                                        Explore Marketplace
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>

                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="px-5 py-6 border-white/40 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white"
                                >
                                    <Link href="/register" className="inline-flex items-center">
                                        Join AgroNexa
                                    </Link>
                                </Button>
                            </div>

                            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-green-100 sm:text-sm">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4" />
                                    Trusted Farmers
                                </div>

                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4" />
                                    Fresh Products
                                </div>

                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4" />
                                    Expert Support
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CallToAction;