// import Link from "next/link";
// import {
//     ArrowRight,
//     Heart,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
//
// export default function EmptyWishlist() {
//     return (
//         <div className="mx-auto max-w-md py-16 text-center">
//             {/* Icon */}
//             <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
//                 <Heart className="h-10 w-10 text-red-400" />
//             </div>
//             {/* Title */}
//             <h1 className="mt-6 text-2xl font-bold text-slate-800">
//                 Your wishlist is empty
//             </h1>
//             {/* Description */}
//             <p className="mt-2 text-sm leading-6 text-slate-500">
//                 Save your favorite agriculture products
//                 here and easily find them whenever you
//                 want to buy them.
//             </p>
//             {/* Button */}
//             <Button
//                 //asChild
//                 className="mt-6 px-4 py-5 bg-green-600 hover:bg-green-700"
//             >
//                 <Link href="/products" className="inline-flex items-center gap-1" >
//                     Browse Products
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                 </Link>
//             </Button>
//         </div>
//     );
// }

import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EmptyWishlist() {
    return (
        <div className="mx-auto max-w-md py-16 text-center">
            {/* Icon */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50 transition-colors duration-300 dark:bg-red-950/40">
                <Heart className="h-10 w-10 text-red-400 dark:text-red-400" />
            </div>

            {/* Title */}
            <h1 className="mt-6 text-2xl font-bold text-slate-800 dark:text-slate-100">
                Your wishlist is empty
            </h1>

            {/* Description */}
            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                Save your favorite agriculture products here and easily
                find them whenever you want to buy them.
            </p>

            {/* Browse Products Button */}
            <Button
                className="mt-6 bg-green-600 px-4 py-5 text-white transition-colors duration-300 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-500"
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