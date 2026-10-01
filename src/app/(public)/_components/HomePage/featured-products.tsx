import React from 'react';
import Link from "next/link";
import {
    ChevronRight,
    MapPin,
    ShoppingCart,
    Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
const products = [
    {
        name: "Fresh Organic Tomatoes",
        farmer: "Rahim Agro Farm",
        location: "Bogura, Bangladesh",
        price: "৳120",
        unit: "/ kg",
        rating: "4.9",
        image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Premium Basmati Rice",
        farmer: "Green Valley Farm",
        location: "Dinajpur, Bangladesh",
        price: "৳180",
        unit: "/ kg",
        rating: "4.8",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Fresh Mango",
        farmer: "Mango Garden",
        location: "Rajshahi, Bangladesh",
        price: "৳150",
        unit: "/ kg",
        rating: "4.9",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Organic Potatoes",
        farmer: "Nature Fresh Farm",
        location: "Rangpur, Bangladesh",
        price: "৳70",
        unit: "/ kg",
        rating: "4.7",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80",
    },
];

const FeaturedProducts = () => {
    return (
        <>
            <section className="bg-slate-50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-10 flex items-end justify-between">
                        <div>
                            <p className="font-semibold text-green-600">
                                Fresh & Quality
                            </p>
                            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                                Featured Products
                            </h2>
                            <p className="mt-3 text-slate-500">
                                Fresh products directly from verified farmers.
                            </p>
                        </div>
                        <Button variant="outline" className="hidden sm:flex bg-green-600">
                            <Link className="text-white" href="/products">
                                Browse Marketplace
                                {/*<ChevronRight className="ml-1 h-4 w-4" />*/}
                            </Link>
                        </Button>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {products.map((product) => (
                            <Card
                                key={product.name}
                                className="group overflow-hidden border-0 p-0 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                                    />

                                    <Badge className="absolute left-3 top-3 bg-green-600 hover:bg-green-600">
                                        Organic
                                    </Badge>

                                    <Button
                                        size="icon"
                                        variant="secondary"
                                        className="absolute right-3 top-3 rounded-full"
                                    >
                                        <ShoppingCart className="h-4 w-4" />
                                    </Button>
                                </div>

                                <CardContent className="p-5">
                                    <div className="flex items-center gap-1 text-sm">
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        <span className="font-semibold">{product.rating}</span>
                                    </div>

                                    <h3 className="mt-2 line-clamp-1 text-lg font-bold">
                                        {product.name}
                                    </h3>

                                    <p className="mt-1 text-sm text-slate-500">
                                        {product.farmer}
                                    </p>

                                    <div className="mt-2 flex items-center gap-1 text-xs text-slate-400">
                                        <MapPin className="h-3.5 w-3.5" />
                                        {product.location}
                                    </div>

                                    <div className="mt-5 flex items-center justify-between">
                                        <div>
                                          <span className="text-xl font-bold text-green-700">
                                            {product.price}
                                          </span>
                                            <span className="text-sm text-slate-400">
                                                {product.unit}
                                            </span>
                                        </div>
                                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                            View
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeaturedProducts;