import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function EmptyCart() {
    return (
        <div className="mx-auto max-w-md py-16 text-center">
            {/* Icon */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50 transition-colors duration-300 dark:bg-green-950/50">
                <ShoppingCart className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>
            {/* Title */}
            <h1 className="mt-6 text-2xl font-bold text-slate-800 dark:text-slate-100">
                Your cart is empty
            </h1>
            {/* Description */}
            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                You haven't added any products to your shopping cart yet.
                Explore our marketplace and discover fresh products from
                trusted farmers.
            </p>
            {/* Browse Products Button */}
            <Button
                className="mt-6 bg-green-600 px-4 py-5 text-white transition-colors hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-500"
            >
                <Link
                    href="/products"
                    className="inline-flex items-center gap-1"
                >
                    Browse Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
    );
}