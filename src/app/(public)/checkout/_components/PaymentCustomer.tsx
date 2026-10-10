"use client";
import { useEffect, useState, useCallback } from "react";
import { MapPin, UserRound } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getCustomer } from "@/app/(public)/checkout/_actions/getCustomer";
import type { PaymentFormValues, PaymentUser, ApiResponse } from "@/types/types.payment";
interface CheckoutCustomerProps {
    onCustomerChange: (customer: PaymentFormValues) => void;
}
const emptyCustomer: PaymentFormValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "Bangladesh",
};
export function PaymentCustomer({ onCustomerChange }: CheckoutCustomerProps) {
    const [customer, setCustomer] = useState<PaymentFormValues>(emptyCustomer);
    const [loading, setLoading] = useState<boolean>(true);
    const handleCustomerChange = useCallback((values: PaymentFormValues) => {
        onCustomerChange(values);
    }, [onCustomerChange]);
    useEffect(() => {
        let active = true;
        async function loadProfile() {
            try {
                const result = await getCustomer() as ApiResponse<PaymentUser>;
                if (!active) return;
                if (!result.success || !result.data) {
                    toast.error(result.message || "Failed to sync profile data.");
                    return;
                }
                const user = result.data;
                const buyer = user.buyer;
                const values: PaymentFormValues = {
                    name: buyer?.name || user.name || "",
                    email: buyer?.email || user.email || "",
                    phone: user.phone || "",
                    address: buyer?.address || user.address || "",
                    city: buyer?.city || "",
                    country: buyer?.country || "Bangladesh",
                };
                setCustomer(values);
                handleCustomerChange(values);
            } catch (error) {
                if (active) {
                    toast.error("Could not load your profile details.");
                    console.error("Profile load error:", error);
                }
            } finally {
                if (active) setLoading(false);
            }
        }
        void loadProfile();
        return () => {
            active = false;
        };
    }, [handleCustomerChange]);
    const updateField = (field: keyof PaymentFormValues, value: string) => {
        setCustomer((previous) => {
            const next = { ...previous, [field]: value };
            handleCustomerChange(next);
            return next;
        });
    };
    if (loading) {
        return (
            <section className="animate-pulse rounded-2xl border bg-white p-6">
                <div className="h-5 w-48 rounded bg-slate-200" />
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="h-11 rounded bg-slate-100" />
                    <div className="h-11 rounded bg-slate-100" />
                    <div className="h-11 rounded bg-slate-100 sm:col-span-2" />
                </div>
            </section>
        );
    }

    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-emerald-50 p-3 text-emerald-700">
                    <UserRound className="h-5 w-5" />
                </div>
                <div>
                    <h2 className="text-lg font-bold text-slate-900">
                        Customer & Delivery Details
                    </h2>
                    <p className="text-sm text-slate-500">
                        Your profile details are filled in automatically.
                    </p>
                </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="checkout-name">Full name</Label>
                    <Input
                        id="checkout-name"
                        autoComplete="name"
                        required
                        value={customer.name}
                        onChange={(event) => updateField("name", event.target.value)}
                        placeholder="Full name"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="checkout-email">Email address</Label>
                    <Input
                        id="checkout-email"
                        type="email"
                        autoComplete="email"
                        required
                        value={customer.email}
                        onChange={(event) => updateField("email", event.target.value)}
                        placeholder="Email address"
                    />
                </div>

                <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="checkout-phone">Phone number</Label>
                    <Input
                        id="checkout-phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={customer.phone}
                        onChange={(event) => updateField("phone", event.target.value)}
                        placeholder="+8801XXXXXXXXX"
                    />
                </div>

                <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="checkout-address">Delivery address</Label>
                    <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                            id="checkout-address"
                            autoComplete="street-address"
                            required
                            className="pl-9"
                            value={customer.address}
                            onChange={(event) => updateField("address", event.target.value)}
                            placeholder="House, road, village or street"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="checkout-city">City / District</Label>
                    <Input
                        id="checkout-city"
                        autoComplete="address-level2"
                        required
                        value={customer.city}
                        onChange={(event) => updateField("city", event.target.value)}
                        placeholder="Dhaka"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="checkout-country">Country</Label>
                    <Input
                        id="checkout-country"
                        autoComplete="country-name"
                        required
                        value={customer.country}
                        onChange={(event) => updateField("country", event.target.value)}
                        placeholder="Bangladesh"
                    />
                </div>
            </div>
        </section>
    );
}

