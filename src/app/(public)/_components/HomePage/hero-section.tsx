import React from "react";
import {
  BadgeCheck,
  Leaf,
  ShieldCheck,
  Truck,
  ArrowRight,
  Sprout,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
      <section className="relative overflow-hidden bg-green-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <div className="container relative mx-auto px-4 py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Hero Content */}
            <div>
              <Badge className="mb-5 border border-green-200 bg-green-100 px-4 py-2 text-green-800 hover:bg-green-100 dark:border-green-800 dark:bg-green-950 dark:text-green-300 dark:hover:bg-green-950">
                <Leaf className="mr-2 h-4 w-4" />
                Connecting Farmers & Buyers
              </Badge>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                Fresh From
                <span className="block text-green-600 dark:text-green-400">
                Farm to Your Table
              </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Discover fresh agricultural products directly from trusted
                farmers. Buy, sell, and connect with agriculture experts in
                one smart marketplace.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                    size="lg"
                    className="h-12 bg-green-600 px-7 text-base text-white hover:bg-green-700 dark:bg-green-600 dark:text-white dark:hover:bg-green-500"
                >
                  <Link
                      className="inline-flex items-center"
                      href="/products"
                  >
                    Explore Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                    size="lg"
                    variant="outline"
                    className="h-12 border-green-600 bg-transparent px-7 text-base text-green-800 hover:bg-green-100 hover:text-green-900 dark:border-green-500 dark:text-green-400 dark:hover:bg-slate-900 dark:hover:text-green-300"
                >
                  <Link
                      className="inline-flex items-center"
                      href="/register"
                  >
                    <Sprout className="mr-2 h-5 w-5" />
                    Join as Farmer
                  </Link>
                </Button>
              </div>

              {/* Marketplace Features */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-green-600 dark:text-green-400" />
                  Verified Farmers
                </div>

                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-green-600 dark:text-green-400" />
                  Secure Payments
                </div>

                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-green-600 dark:text-green-400" />
                  Fast Delivery
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-green-200/60 blur-2xl dark:bg-green-500/20" />
              <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-yellow-200/60 blur-2xl dark:bg-yellow-500/10" />

              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-green-900/10 dark:shadow-black/40">
                <img
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85"
                    alt="Green agricultural fields"
                    className="h-[430px] w-full object-cover lg:h-[510px]"
                />

                {/* Marketplace Statistics */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/50 bg-white/90 p-4 shadow-lg backdrop-blur-md dark:border-slate-600/70 dark:bg-slate-950/90">
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        Trusted farmers
                      </p>
                      <p className="text-lg font-bold text-slate-900 sm:text-xl dark:text-white">
                        1,200+
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        Products available
                      </p>
                      <p className="text-lg font-bold text-slate-900 sm:text-xl dark:text-white">
                        5,000+
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        Happy buyers
                      </p>
                      <p className="text-lg font-bold text-slate-900 sm:text-xl dark:text-white">
                        8,500+
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;
