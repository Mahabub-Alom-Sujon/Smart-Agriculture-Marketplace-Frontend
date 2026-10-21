import Link from "next/link";
import {
    ArrowRight,
    Leaf,
    CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
    return (
        <section className="bg-white px-4 py-16 transition-colors duration-300 dark:bg-gray-950 lg:px-8">
            <div className="container mx-auto">
                <div className="relative isolate overflow-hidden rounded-3xl border border-green-200/50 bg-gradient-to-br from-green-700 via-green-800 to-emerald-900 px-6 py-14 text-white shadow-xl shadow-green-900/10 transition-all duration-300 dark:border-green-800/50 dark:from-gray-900 dark:via-green-950 dark:to-gray-900 dark:shadow-black/30 sm:px-10 lg:px-16">
                    {/* Decorative Elements */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-green-300/20 blur-2xl transition-colors duration-300 dark:bg-green-400/10"
                    />

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-2xl transition-colors duration-300 dark:bg-emerald-500/10"
                    />

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute right-1/4 top-0 -z-10 h-px w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />

                    {/* Content */}
                    <div className="relative z-10 mx-auto max-w-3xl text-center">
                        {/* Icon */}
                        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 shadow-inner backdrop-blur-md transition-transform duration-300 hover:scale-110 dark:border-green-400/20 dark:bg-green-400/10">
                            <Leaf className="h-7 w-7 text-white dark:text-green-400" />
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Grow Better. Buy Smarter.
                        </h2>

                        {/* Description */}
                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-green-50/95 dark:text-gray-300 sm:text-base">
                            Connect directly with trusted farmers, discover fresh
                            agricultural products, and get expert advice — all in one
                            smart agriculture marketplace.
                        </p>

                        {/* Action Buttons */}
                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                            <Button
                                size="lg"
                                className="h-auto min-h-12 border border-white bg-white px-7 py-3 font-semibold text-green-800 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-50 hover:shadow-lg dark:border-green-400/30 dark:bg-green-500 dark:text-white dark:hover:bg-green-400"
                            >
                                <Link
                                    href="/products"
                                    className="inline-flex items-center justify-center"
                                >
                                    Explore Marketplace
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="h-auto min-h-12 border-white/40 bg-transparent px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/10 hover:text-white dark:border-green-400/40 dark:bg-transparent dark:text-green-300 dark:hover:border-green-400/70 dark:hover:bg-green-400/10 dark:hover:text-green-200"
                            >
                                <Link
                                    href="/register"
                                    className="inline-flex items-center justify-center"
                                >
                                    Join AgroNexa
                                </Link>
                            </Button>
                        </div>

                        {/* Benefits */}
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-green-50/90 dark:text-gray-300 sm:text-sm">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-green-200 dark:text-green-400" />
                                <span>Trusted Farmers</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-green-200 dark:text-green-400" />
                                <span>Fresh Products</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-green-200 dark:text-green-400" />
                                <span>Expert Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;