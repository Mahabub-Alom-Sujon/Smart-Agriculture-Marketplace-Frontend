import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

import { Button } from "@/components/ui/button";

const ContactCTA = () => {
    return (
        <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-20">
            <div className="container mx-auto">
                <div className="relative overflow-hidden rounded-3xl bg-green-600 px-6 py-14 text-center sm:px-12 lg:px-20 lg:py-20">
                    <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10" />

                    <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-white/10" />

                    <div className="relative">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
                            <Leaf className="h-7 w-7 text-white" />
                        </div>

                        <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
                            Let&apos;s grow agriculture together
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl leading-7 text-green-50">
                            Join AgroNexa and become part of a growing
                            community connecting farmers, buyers, and
                            agricultural experts.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                            <Button
                                //asChild
                                size="lg"
                                className="px-5 py-6 bg-white text-green-700 hover:bg-green-50"
                            >
                                <Link href="/register" className="inline-flex items-center">
                                    Join AgroNexa
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>

                            <Button
                                //asChild
                                size="lg"
                                variant="outline"
                                className="px-5 py-6 border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
                            >
                                <Link href="/products" className="inline-flex items-center">
                                    Explore Products
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;