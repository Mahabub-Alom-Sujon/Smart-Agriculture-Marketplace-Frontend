import Link from "next/link";
import {
    ArrowRight,
    ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
export default function EmptyCart() {
    return (
        <div className="mx-auto max-w-md py-16 text-center">
            {/* Icon */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
                <ShoppingCart className="h-10 w-10 text-green-600" />
            </div>

            {/* Title */}
            <h1 className="mt-6 text-2xl font-bold text-slate-800">
                Your cart is empty
            </h1>

            {/* Description */}
            <p className="mt-2 text-sm leading-6 text-slate-500">
                You haven't added any products to your
                shopping cart yet. Explore our marketplace
                and discover fresh products from trusted
                farmers.
            </p>

            {/* Button */}
            <Button
                //asChild
                className="mt-6 px-4 py-5 bg-green-600 hover:bg-green-700"
            >
                <Link href="/products" className="inline-flex items-center gap-1">
                    Browse Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
    );
}