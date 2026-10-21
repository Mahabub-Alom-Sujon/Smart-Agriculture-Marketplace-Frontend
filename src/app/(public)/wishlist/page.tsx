// "use client";
// import Link from "next/link";
// import {
//     ArrowLeft,
//     Heart,
// } from "lucide-react";
// import { useWishlist } from "@/components/providers/WishlistProvider";
// import WishlistCard from "@/app/(public)/wishlist/_components/WishlistCard";
// import EmptyWishlist from "@/app/(public)/wishlist/_components/EmptyWishlist";
// export default function WishlistPage() {
//     const {wishlistItems} = useWishlist();
//     // Empty Wishlist
//     if (wishlistItems.length === 0) {
//         return (
//             <main className="container mx-auto px-4 py-8">
//                 <EmptyWishlist/>
//             </main>
//         );
//     }
//     return (
//         <main className="container mx-auto px-4 py-8">
//             {/* Header */}
//             <div className="mb-8">
//                 {/* Back */}
//                 <Link
//                     href="/products"
//                     className="mb-4 inline-flex items-center text-sm font-medium text-slate-500 transition hover:text-green-700"
//                 >
//                     <ArrowLeft className="mr-2 h-4 w-4"/>
//                     Continue Shopping
//                 </Link>
//                 {/* Title */}
//                 <div className="flex items-center gap-3">
//                     <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
//                         <Heart className="h-5 w-5 fill-red-500 text-red-500"/>
//                     </div>
//                     <div>
//                         <h1 className="text-3xl font-bold text-slate-800">
//                             My Wishlist
//                         </h1>
//                         <p className="mt-1 text-sm text-slate-500">
//                             {wishlistItems.length} saved
//                             product
//                             {wishlistItems.length > 1 ? "s" : ""}
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             {/* Wishlist Products */}
//             <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                 {wishlistItems.map((product) => (
//                     <WishlistCard
//                         key={product.id}
//                         product={product}
//                     />
//                 ))}
//             </div>
//         </main>
//     );
// }

"use client";
import Link from "next/link";
import { ArrowLeft, Heart } from "lucide-react";
import { useWishlist } from "@/components/providers/WishlistProvider";
import WishlistCard from "@/app/(public)/wishlist/_components/WishlistCard";
import EmptyWishlist from "@/app/(public)/wishlist/_components/EmptyWishlist";
export default function WishlistPage() {
    const { wishlistItems } = useWishlist();
    // Empty Wishlist
    if (wishlistItems.length === 0) {
        return (
            <main className="min-h-screen bg-white px-4 py-8 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
                <div className="container mx-auto">
                    <EmptyWishlist />
                </div>
            </main>
        );
    }
    return (
        <main className="min-h-screen bg-white px-4 py-8 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
            <div className="container mx-auto">
                {/* Header */}
                <div className="mb-8">
                    {/* Continue Shopping */}
                    <Link
                        href="/products"
                        className="mb-4 inline-flex items-center text-sm font-medium text-slate-500 transition-colors hover:text-green-700 dark:text-slate-400 dark:hover:text-green-400"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Continue Shopping
                    </Link>
                    {/* Wishlist Title */}
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 transition-colors dark:bg-red-950/50">
                            <Heart className="h-5 w-5 fill-red-500 text-red-500 dark:fill-red-400 dark:text-red-400" />
                        </div>

                        <div>
                            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                                My Wishlist
                            </h1>
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                {wishlistItems.length} saved product
                                {wishlistItems.length > 1 ? "s" : ""}
                            </p>
                        </div>
                    </div>
                </div>
                {/* Wishlist Products */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {wishlistItems.map((product) => (
                        <WishlistCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}