// "use client";
// import { ArrowRight, ShoppingBag } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { useCart } from "@/components/providers/CartProvider";
// export default function CartSummary() {
//     const router = useRouter();
//     const { cartItems, cartCount, cartTotal } = useCart();
//     const isCartEmpty = cartItems.length === 0;
//     const deliveryFee = isCartEmpty ? 0 : cartTotal >= 1000 ? 0 : 60;
//     const grandTotal = cartTotal + deliveryFee;
//     const handleCheckout = () => {
//         if (!isCartEmpty) {
//             router.push("/checkout");
//         }
//     };
//
//     return (
//         <Card className="h-fit border-slate-200 lg:sticky lg:top-24">
//             <CardContent className="p-5">
//                 {/* Header */}
//                 <div className="flex items-center gap-2">
//                     <ShoppingBag className="h-5 w-5 text-green-600" />
//                     <h2 className="text-lg font-bold text-slate-800">
//                         Order Summary
//                     </h2>
//                 </div>
//
//                 {/* Items */}
//                 <div className="mt-5 space-y-3">
//                     <div className="flex justify-between text-sm">
//                         <span className="text-slate-500">Products</span>
//                         <span className="font-medium text-slate-700">
//                             {cartItems.length}
//                         </span>
//                     </div>
//                     <div className="flex justify-between text-sm">
//                         <span className="text-slate-500">Total Quantity</span>
//                         <span className="font-medium text-slate-700">
//                             {cartCount}
//                         </span>
//                     </div>
//                     <div className="flex justify-between text-sm">
//                         <span className="text-slate-500">Subtotal</span>
//                         <span className="font-semibold text-slate-700">
//                             ৳{cartTotal.toFixed(2)}
//                         </span>
//                     </div>
//
//                     {/* Delivery */}
//                     <div className="flex justify-between text-sm">
//                         <span className="text-slate-500">Delivery Fee</span>
//                         <span className="font-semibold text-slate-700">
//                             {deliveryFee === 0 ? "Free" : `৳${deliveryFee.toFixed(2)}`}
//                         </span>
//                     </div>
//                 </div>
//
//                 {/* Free Delivery Message (কার্ট খালি না থাকলে এবং ডেলিভারি ফি থাকলে দেখাবে) */}
//                 {!isCartEmpty && deliveryFee > 0 && (
//                     <div
//                         onClick={() => router.push("/products")}
//                         className="mt-4 rounded-lg bg-green-50 p-3 border border-green-100 cursor-pointer hover:bg-green-100/60 transition-all group"
//                     >
//                         <p className="text-xs leading-5 text-green-700">
//                             Add ৳{(1000 - cartTotal).toFixed(2)} more to get free delivery.
//                         </p>
//                     </div>
//                 )}
//                 {/*{!isCartEmpty && deliveryFee > 0 && (*/}
//                 {/*    <div*/}
//                 {/*        onClick={() => router.push("/products")}*/}
//                 {/*        className="mt-4 rounded-lg bg-green-50 p-3 border border-green-100 cursor-pointer hover:bg-green-100/60 transition-all group"*/}
//                 {/*    >*/}
//                 {/*        <p className="text-xs leading-5 text-green-700 font-medium">*/}
//                 {/*            আর মাত্র <span className="font-bold text-green-800">৳{(1000 - cartTotal).toFixed(2)}</span> টাকার পণ্য যোগ করলেই পাচ্ছেন <span className="underline group-hover:text-green-900">ফ্রি ডেলিভারি!</span> 🚀*/}
//                 {/*        </p>*/}
//                 {/*    </div>*/}
//                 {/*)}*/}
//
//                 {/* Total */}
//                 <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-5">
//                     <span className="font-bold text-slate-800">Total</span>
//                     <span className="text-xl font-extrabold text-green-700">
//                         ৳{grandTotal.toFixed(2)}
//                     </span>
//                 </div>
//
//                 {/* Checkout Button */}
//                 <Button
//                     type="button"
//                     disabled={isCartEmpty}
//                     onClick={handleCheckout}
//                     className="mt-6 w-full bg-green-600 py-5 font-semibold hover:bg-green-700 text-white"
//                 >
//                     Proceed to Checkout
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//
//                 {/* Continue Shopping Button */}
//                 <Button
//                     type="button"
//                     variant="outline"
//                     className="mt-2 w-full py-5 font-semibold"
//                     onClick={() => router.push("/products")}
//                 >
//                     Continue Shopping
//                 </Button>
//
//                 {/* Secure checkout text */}
//                 <p className="mt-4 text-center text-[11px] text-slate-400">
//                     Secure checkout • Your information is protected
//                 </p>
//             </CardContent>
//         </Card>
//     );
// }

"use client";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/components/providers/CartProvider";
export default function CartSummary() {
    const router = useRouter();
    const { cartItems, cartCount, cartTotal } = useCart();
    const isCartEmpty = cartItems.length === 0;
    const deliveryFee = isCartEmpty ? 0 : cartTotal >= 1000 ? 0 : 60;
    const grandTotal = cartTotal + deliveryFee;
    const handleCheckout = () => {
        if (!isCartEmpty) {
            router.push("/checkout");
        }
    };
    return (
        <Card className="h-fit border-slate-200 bg-white shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 lg:sticky lg:top-24">
            <CardContent className="p-5">
                {/* Header */}
                <div className="flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5 text-green-600 dark:text-green-400" />

                    <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                        Order Summary
                    </h2>
                </div>

                {/* Items */}
                <div className="mt-5 space-y-3">
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-500 dark:text-slate-400">
                            Products
                        </span>

                        <span className="font-medium text-slate-700 dark:text-slate-200">
                            {cartItems.length}
                        </span>
                    </div>

                    <div className="flex justify-between text-sm">
                        <span className="text-slate-500 dark:text-slate-400">
                            Total Quantity
                        </span>

                        <span className="font-medium text-slate-700 dark:text-slate-200">
                            {cartCount}
                        </span>
                    </div>

                    <div className="flex justify-between text-sm">
                        <span className="text-slate-500 dark:text-slate-400">
                            Subtotal
                        </span>

                        <span className="font-semibold text-slate-700 dark:text-slate-200">
                            ৳{cartTotal.toFixed(2)}
                        </span>
                    </div>

                    {/* Delivery Fee */}
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-500 dark:text-slate-400">
                            Delivery Fee
                        </span>

                        <span className="font-semibold text-slate-700 dark:text-slate-200">
                            {deliveryFee === 0
                                ? "Free"
                                : `৳${deliveryFee.toFixed(2)}`}
                        </span>
                    </div>
                </div>

                {/* Free Delivery Message */}
                {!isCartEmpty && deliveryFee > 0 && (
                    <button
                        type="button"
                        onClick={() => router.push("/products")}
                        className="group mt-4 w-full cursor-pointer rounded-lg border border-green-100 bg-green-50 p-3 text-left transition-colors hover:bg-green-100/60 dark:border-green-900/60 dark:bg-green-950/40 dark:hover:bg-green-900/50"
                    >
                        <p className="text-xs leading-5 text-green-700 dark:text-green-300">
                            Add{" "}
                            <span className="font-bold">
                                ৳{(1000 - cartTotal).toFixed(2)}
                            </span>{" "}
                            more to get{" "}
                            <span className="font-semibold underline decoration-green-500 underline-offset-2 group-hover:text-green-800 dark:group-hover:text-green-200">
                                free delivery
                            </span>
                            .
                        </p>
                    </button>
                )}

                {/* Total */}
                <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-5 dark:border-slate-700">
                    <span className="font-bold text-slate-800 dark:text-slate-100">
                        Total
                    </span>

                    <span className="text-xl font-extrabold text-green-700 dark:text-green-400">
                        ৳{grandTotal.toFixed(2)}
                    </span>
                </div>

                {/* Checkout Button */}
                <Button
                    type="button"
                    disabled={isCartEmpty}
                    onClick={handleCheckout}
                    className="mt-6 w-full bg-green-600 py-5 font-semibold text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-green-600 dark:hover:bg-green-500"
                >
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                {/* Continue Shopping Button */}
                <Button
                    type="button"
                    variant="outline"
                    className="mt-2 w-full border-slate-200 bg-white py-5 font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white"
                    onClick={() => router.push("/products")}
                >
                    Continue Shopping
                </Button>

                {/* Secure Checkout Text */}
                <p className="mt-4 text-center text-[11px] text-slate-400 dark:text-slate-500">
                    Secure checkout • Your information is protected
                </p>
            </CardContent>
        </Card>
    );
}