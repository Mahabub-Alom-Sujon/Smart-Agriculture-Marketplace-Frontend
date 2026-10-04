"use client";
import {
    Leaf,
    ShieldCheck,
    Star,
} from "lucide-react";
import { useState } from "react";
import { Product } from "@/types/types.product";
interface ProductContentProps {
    product: Product;
}
type TabType = "description" | "reviews" | "details";
export function ProductContent({
   product,
}: ProductContentProps) {
    const [activeTab, setActiveTab] = useState<TabType>("description");
    const tabs: {
        id: TabType;
        label: string;
    }[] = [
        {
            id: "description",
            label: "Description",
        },
        {
            id: "reviews",
            label: `Reviews (${product._count.reviews})`,
        },
        {
            id: "details",
            label: "Details",
        },
    ];

    return (
        <div className="rounded-2xl border bg-white shadow-sm">
            {/* Tabs */}
            <div className="flex overflow-x-auto border-b px-4 sm:px-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        type="button"
                        onClick={() =>
                            setActiveTab(tab.id)
                        }
                        className={`relative whitespace-nowrap px-5 py-5 text-sm font-semibold transition ${
                            activeTab === tab.id ? "text-green-600" : "text-slate-500 hover:text-slate-900"
                        }`}
                    >
                        {tab.label}

                        {activeTab === tab.id && (
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-600" />
                        )}
                    </button>
                ))}
            </div>
            {/* Content */}
            <div className="p-6 sm:p-8">
                {activeTab === "description" && (
                    <DescriptionContent product={product} />
                )}
                {activeTab === "reviews" && (
                    <ReviewsContent product={product} />
                )}
                {activeTab === "details" && (
                    <DetailsContent product={product} />
                )}
            </div>
        </div>
    );
}

function DescriptionContent({
    product,
}: {
    product: Product;
}) {
    return (
        <div>
            <p className="text-base leading-7 text-slate-600">
                {product.description}
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
                Our {product.name.toLowerCase()} are grown
                with natural care, ensuring the best quality,
                fresh taste, and rich nutrition. Perfect for
                your daily cooking needs.
            </p>
            {/* Highlights */}
            <div className="mt-8 grid gap-6 border-t pt-6 sm:grid-cols-4">
                <Highlight
                    icon={Leaf}
                    title="100% Fresh"
                    description="Farm to Table"
                />
                <Highlight
                    icon={ShieldCheck}
                    title="No Pesticides"
                    description="Safe & Healthy"
                />
                <Highlight
                    icon={Leaf}
                    title="Locally Sourced"
                    description="Support Farmers"
                />
                <Highlight
                    icon={Star}
                    title="Premium Quality"
                    description="Best in Market"
                />
            </div>
            {/* Why Farmers */}
            <div className="mt-8 rounded-2xl bg-emerald-50 p-6">
                <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white">
                        <Leaf className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-green-700">
                            Why Buy from Local Farmers?
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            By buying directly from farmers,
                            you get fresh, quality produce,
                            support local communities, and
                            help build a sustainable future.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
function ReviewsContent({
    product,
}: {
    product: Product;
}) {
    if (product.reviews.length === 0) {
        return (
            <div className="py-10 text-center">
                <Star className="mx-auto h-10 w-10 text-slate-300" />
                <h3 className="mt-3 text-lg font-semibold text-slate-800">
                    No reviews yet
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                    Be the first customer to review this
                    product.
                </p>
            </div>
        );
    }
    return (
        <div className="space-y-5">
            {product.reviews.map((review) => (
                <div
                    key={review.id}
                    className="border-b pb-5 last:border-0"
                >
                    <div className="flex items-center gap-1">
                        {Array.from({
                            length: 5,
                        }).map((_, index) => (
                            <Star
                                key={index}
                                className={`h-4 w-4 ${
                                    index < review.rating
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-slate-300"
                                }`}
                            />
                        ))}
                    </div>

                    <p className="mt-2 text-sm text-slate-600">
                        {review.comment}
                    </p>
                </div>
            ))}
        </div>
    );
}

function DetailsContent({
                            product,
                        }: {
    product: Product;
}) {
    return (
        <div className="grid gap-4 sm:grid-cols-2">
            <Detail
                label="Product"
                value={product.name}
            />

            <Detail
                label="Category"
                value={product.category.name}
            />

            <Detail
                label="Unit"
                value={product.unit}
            />

            <Detail
                label="Available Quantity"
                value={`${product.quantity} ${product.unit}`}
            />

            <Detail
                label="Status"
                value={product.status}
            />

            <Detail
                label="Farmer"
                value={product.farmer.name}
            />
        </div>
    );
}

function Highlight({
                       icon: Icon,
                       title,
                       description,
                   }: {
    icon: React.ComponentType<{
        className?: string;
    }>;
    title: string;
    description: string;
}) {
    return (
        <div className="text-center">
            <Icon className="mx-auto h-6 w-6 text-emerald-600" />

            <h4 className="mt-2 text-sm font-semibold text-slate-800">
                {title}
            </h4>

            <p className="mt-1 text-xs text-slate-500">
                {description}
            </p>
        </div>
    );
}

function Detail({
                    label,
                    value,
                }: {
    label: string;
    value: string;
}) {
    return (
        <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs text-slate-500">
                {label}
            </p>

            <p className="mt-1 font-semibold text-slate-800">
                {value}
            </p>
        </div>
    );
}