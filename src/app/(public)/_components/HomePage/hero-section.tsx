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
    <section className="relative overflow-hidden bg-green-50">
      <div className="container relative mx-auto px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Hero Content */}
          <div>
            <Badge className="mb-5 border border-green-200 bg-green-100 px-4 py-2 text-green-700 hover:bg-green-100">
              <Leaf className="mr-2 h-4 w-4" />
              Connecting Farmers & Buyers
            </Badge>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Fresh From
              <span className="block text-green-600">
                Farm to Your Table
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Discover fresh agricultural products directly from trusted
              farmers. Buy, sell, and connect with agriculture experts in
              one smart marketplace.
            </p>

            {/* Two Action Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-12 bg-green-600 px-7 text-base hover:bg-green-700"
              >
                <Link className="text-white inline-flex items-center" href="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-12 border-green-600 px-7 text-base text-green-700 hover:bg-green-100 hover:text-green-800"
              >
                <Link className="inline-flex items-center" href="/register">
                  <Sprout className="mr-2 h-5 w-5" />
                  Join as Farmer
                </Link>
              </Button>
            </div>

            {/* Marketplace Features */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-green-600" />
                Verified Farmers
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                Secure Payments
              </div>

              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-green-600" />
                Fast Delivery
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-green-200/60 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-yellow-200/60 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85"
                alt="Green agricultural fields"
                className="h-[430px] w-full object-cover lg:h-[510px]"
              />

              {/* Marketplace Statistics */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/40 bg-white/90 p-4 backdrop-blur">
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <p className="text-xs text-slate-500">
                      Trusted farmers
                    </p>
                    <p className="text-lg font-bold text-slate-900 sm:text-xl">
                      1,200+
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Products available
                    </p>
                    <p className="text-lg font-bold text-slate-900 sm:text-xl">
                      5,000+
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Happy buyers
                    </p>
                    <p className="text-lg font-bold text-slate-900 sm:text-xl">
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