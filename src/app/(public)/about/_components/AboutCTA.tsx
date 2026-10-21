import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
const AboutCTA = () => {
    return (
        <section className="bg-white px-4 pb-20 transition-colors duration-300 sm:px-6 lg:px-8 dark:bg-slate-950">
            <div className="container mx-auto">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 via-green-600 to-emerald-700 px-6 py-14 text-center shadow-xl shadow-green-900/10 transition-all duration-300 sm:px-12 lg:px-20 lg:py-20 dark:from-green-800 dark:via-emerald-900 dark:to-slate-900 dark:shadow-black/30">
                    {/* Background decorations */}
                    <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-sm" />
                    <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-emerald-300/15 blur-sm" />
                    <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-green-300/10 blur-3xl" />
                    <div className="relative">
                        {/* Icon */}
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/15 shadow-inner">
                            <Leaf className="h-7 w-7 text-white" />
                        </div>
                        {/* Heading */}
                        <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                            Ready to be part of a smarter agricultural future?
                        </h2>
                        {/* Description */}
                        <p className="mx-auto mt-5 max-w-2xl leading-7 text-green-50 dark:text-slate-200">
                            Whether you are a farmer looking for new customers or a buyer
                            searching for fresh products, AgroNexa is built for you.
                        </p>
                        {/* Action buttons */}
                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                            <Button
                                size="lg"
                                className="bg-white px-5 py-6 text-green-700 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-50 hover:text-green-800 dark:bg-green-50 dark:text-green-900 dark:hover:bg-white"
                            >
                                <Link href="/register" className="inline-flex items-center">
                                    Join AgroNexa
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/50 bg-transparent px-5 py-6 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/15 hover:text-white dark:border-slate-300/40 dark:hover:border-white dark:hover:bg-white/10"
                            >
                                <Link className="inline-flex items-center" href="/products">Explore Products</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCTA;