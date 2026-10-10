"use client";
import { useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/providers/CartProvider";
import { createOrder } from "@/app/(public)/checkout/_actions/createOrder";
import { createPayment } from "@/app/(public)/checkout/_actions/createPayment";
import type { PaymentFormValues } from "@/types/types.payment";
import { PaymentMethod } from "@/app/(public)/checkout/_components/PaymentMethod";
import { PaymentCustomer } from "@/app/(public)/checkout/_components/PaymentCustomer";
import { PaymentItems } from "@/app/(public)/checkout/_components/PaymentItems";
import { PaymentSummary } from "@/app/(public)/checkout/_components/PaymentSummary";
import { PaymentHeader } from "@/app/(public)/checkout/_components/PaymentHeader";
export default function CheckoutPage() {
    const { cartItems } = useCart();
    const [customer, setCustomer] = useState<PaymentFormValues | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleCustomerChange = useCallback(
        (values: PaymentFormValues) => {
            setCustomer(values);
        },
        [],
    );
    const handlePay = async (): Promise<void> => {
        if (isSubmitting) return;
        if (!customer) {
            toast.error("Please wait for your customer details to load.");
            return;
        }
        const requiredFields: Array<keyof PaymentFormValues> = [
            "name",
            "email",
            "phone",
            "address",
            "city",
            "country",
        ];

        const hasMissingField = requiredFields.some(
            (field) => !String(customer[field] ?? "").trim(),
        );

        if (hasMissingField) {
            toast.error("Please complete all customer details.");
            return;
        }

        if (cartItems.length === 0) {
            toast.error("Your cart is empty.");
            return;
        }
        setIsSubmitting(true);
        const toastId = toast.loading("Creating your order...");
        try {
            // Step 1: Create the order in the backend.
            const orderResult = await createOrder({
                deliveryAddress: [
                    customer.address.trim(),
                    customer.city.trim(),
                    customer.country.trim(),
                ].join(", "),
                items: cartItems.map((item) => ({
                    productId: item.product.id,
                    quantity: item.quantity,
                })),
            });

            if (
                !orderResult.success ||
                !orderResult.data?.orderId
            ) {
                toast.error(
                    orderResult.message || "Failed to create order.",
                    { id: toastId },
                );
                return;
            }
            const orderId = orderResult.data.orderId;
            // Step 2: Create the Stripe payment session.
            toast.loading("Creating secure payment session...", {
                id: toastId,
            });
            const paymentResult = await createPayment({ orderId });
            if (!paymentResult.success) {
                toast.error(
                    paymentResult.message ||
                        "Failed to create payment session.",
                    { id: toastId },
                );
                return;
            }
            const checkoutUrl = paymentResult.data?.checkoutUrl;
            if (
                !checkoutUrl ||
                !checkoutUrl.startsWith("https://")
            ) {
                toast.error(
                    "A valid payment checkout URL was not returned.",
                    { id: toastId },
                );
                return;
            }
            toast.success("Redirecting to secure payment...", {
                id: toastId,
            });
            window.location.assign(checkoutUrl);
        } catch (error: unknown) {
            console.error("Checkout error:", error);
            toast.error(
                "Unable to start checkout. Please try again.",
                { id: toastId },
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    if (cartItems.length === 0) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
                <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                        <ShoppingBag className="h-8 w-8 text-emerald-600" />
                    </div>

                    <h1 className="mt-5 text-2xl font-bold text-slate-900">
                        Your cart is empty
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                        Add products to your cart before proceeding to checkout.
                    </p>

                    <Button
                        //asChild
                        className="mt-6 bg-emerald-600 hover:bg-emerald-700"
                    >
                        <Link href="/products">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Continue Shopping
                        </Link>
                    </Button>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <PaymentHeader />

                <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
                    <div className="min-w-0 space-y-6">
                        <PaymentCustomer
                            onCustomerChange={handleCustomerChange}
                        />

                        <PaymentItems />

                        <PaymentMethod />

                        <div className="lg:hidden">
                            <PaymentSummary
                                isSubmitting={isSubmitting}
                                onPay={handlePay}
                            />
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <PaymentSummary
                            isSubmitting={isSubmitting}
                            onPay={handlePay}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}