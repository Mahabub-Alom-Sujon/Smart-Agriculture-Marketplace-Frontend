import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <section className="bg-white px-4 pb-20 transition-colors duration-300 dark:bg-slate-950 sm:px-6 lg:px-8 lg:pb-20">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 via-green-600 to-emerald-700 px-6 py-14 text-center transition-colors duration-300 dark:from-green-800 dark:via-emerald-900 dark:to-slate-900 sm:px-12 lg:px-20 lg:py-20">
          {/* Background Decorations */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-sm" />
          <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-emerald-300/20 blur-sm dark:bg-green-400/10" />
          <div className="relative">
            {/* Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/15">
              <Leaf className="h-7 w-7 text-white" />
            </div>
            {/* Heading */}
            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
              Let&apos;s grow agriculture together
            </h2>
            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-green-50 dark:text-emerald-100">
              Join AgroNexa and become part of a growing
              community connecting farmers, buyers, and
              agricultural experts.
            </p>
            {/* Action Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-white px-5 py-6 text-green-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-50 hover:text-green-800 dark:bg-green-50 dark:text-green-800 dark:hover:bg-white"
              >
                <Link href="/register" className="inline-flex items-center">
                  Join AgroNexa
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 bg-transparent px-5 py-6 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:text-white dark:border-white/40 dark:hover:bg-white/10"
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