import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Leaf,
    PlayCircle,
    Sprout,
} from "lucide-react";
import { Button } from "@/components/ui/button";
const AboutHero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 text-slate-900 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950 dark:text-slate-100">
            {/* Background decorations */}
            <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-green-200/30 blur-3xl dark:bg-green-500/10" />
            <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-500/10" />
            <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Content */}
                    <div>
                        {/* Badge */}
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-700 shadow-sm transition-colors duration-300 dark:border-green-800 dark:bg-slate-900 dark:text-green-400">
                            <Leaf className="h-4 w-4" />
                            Growing a better future together
                        </div>
                        {/* Heading */}
                        <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-900 transition-colors duration-300 sm:text-5xl lg:text-6xl dark:text-white">
                            Connecting{" "}
                            <span className="text-green-600 dark:text-green-400">
                                Farmers
                            </span>{" "}
                            with a Smarter Agricultural Future
                        </h1>
                        {/* Description */}
                        <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 transition-colors duration-300 sm:text-lg dark:text-slate-300">
                            AgroNexa is a smart agriculture marketplace that connects
                            farmers, buyers, and agricultural experts in one trusted
                            digital platform.
                        </p>
                        {/* Buttons */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Button
                                size="lg"
                                className="bg-green-600 px-5 py-6 text-white transition-colors hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-500"
                            >
                                <Link href="/products" className="inline-flex items-center">
                                    Explore Marketplace
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-green-200 bg-white px-5 py-6 text-green-700 transition-colors hover:bg-green-50 hover:text-green-800 dark:border-green-800 dark:bg-slate-900 dark:text-green-400 dark:hover:bg-green-950 dark:hover:text-green-300"
                            >
                                <Link href="/#highlights" className="inline-flex items-center">
                                    <PlayCircle className="mr-2 h-5 w-5" />
                                    Learn More
                                </Link>
                            </Button>
                        </div>
                        {/* Mini stats */}
                        <div className="mt-10 flex flex-wrap gap-8">
                            <div>
                                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                                    1,200+
                                </p>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Farmers
                                </p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                                    8,500+
                                </p>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Buyers
                                </p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                                    100%
                                </p>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Trusted Platform
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="relative mx-auto w-full max-w-xl">
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-green-950/10 dark:shadow-black/40">
                            <Image
                                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=85"
                                alt="Farmer working in an agricultural field"
                                width={700}
                                height={650}
                                priority
                                className="h-[420px] w-full object-cover sm:h-[520px]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        </div>
                        {/* Floating card */}
                        <div className="absolute -bottom-6 -left-4 rounded-2xl border border-green-100 bg-white p-4 shadow-xl transition-colors duration-300 sm:-left-8 sm:p-5 dark:border-slate-700 dark:bg-slate-900">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
                                    <Sprout className="h-6 w-6 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                                        Fresh & Trusted
                                    </p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                        Directly from farmers
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Experience badge */}
                        <div className="absolute -right-3 top-8 rounded-2xl bg-green-600 px-5 py-4 text-white shadow-xl sm:-right-6 dark:bg-green-700">
                            <p className="text-2xl font-bold">24/7</p>
                            <p className="text-xs text-green-100">
                                Digital Marketplace
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;