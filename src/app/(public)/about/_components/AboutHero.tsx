import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, PlayCircle, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutHero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
            {/* Background decorations */}
            <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />
            <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Content */}
                    <div>
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-700 shadow-sm">
                            <Leaf className="h-4 w-4" />
                            Growing a better future together
                        </div>
                        <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            Connecting{" "}
                            <span className="text-green-600">Farmers</span>{" "}
                            with a Smarter Agricultural Future
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
                            AgroNexa is a smart agriculture marketplace that
                            connects farmers, buyers, and agricultural experts
                            in one trusted digital platform.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Button
                                //asChild
                                size="lg"
                                className="px-5 py-6 bg-green-600 hover:bg-green-700"
                            >
                                <Link href="/products" className="inline-flex items-center">
                                    Explore Marketplace
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="px-5 py-6 border-green-200 text-green-700 hover:bg-green-50"
                            >
                                <PlayCircle className="mr-2 h-5 w-5" />
                                Learn More
                            </Button>
                        </div>
                        {/* Mini stats */}
                        <div className="mt-10 flex flex-wrap gap-8">
                            <div>
                                <p className="text-2xl font-bold text-gray-900">
                                    1,200+
                                </p>
                                <p className="text-sm text-gray-500">
                                    Farmers
                                </p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-gray-900">
                                    8,500+
                                </p>
                                <p className="text-sm text-gray-500">
                                    Buyers
                                </p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-gray-900">
                                    100%
                                </p>
                                <p className="text-sm text-gray-500">
                                    Trusted Platform
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="relative mx-auto w-full max-w-xl">
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=85"
                                alt="Farmer working in agricultural field"
                                width={700}
                                height={650}
                                className="h-[420px] w-full object-cover sm:h-[520px]"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        </div>
                        {/* Floating card */}
                        <div className="absolute -bottom-6 -left-4 rounded-2xl border border-green-100 bg-white p-4 shadow-xl sm:-left-8 sm:p-5">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100">
                                    <Sprout className="h-6 w-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">
                                        Fresh & Trusted
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Directly from farmers
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Experience badge */}
                        <div className="absolute -right-3 top-8 rounded-2xl bg-green-600 px-5 py-4 text-white shadow-xl sm:-right-6">
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