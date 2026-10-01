import React from 'react';
import Link from "next/link";
import {
    BadgeCheck,
    MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const farmers = [
    {
        name: "Abdul Rahim",
        farm: "Rahim Agro Farm",
        location: "Bogura",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
        products: "45 Products",
    },
    {
        name: "Karim Hasan",
        farm: "Green Valley Farm",
        location: "Dinajpur",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
        products: "32 Products",
    },
    {
        name: "Mohammad Ali",
        farm: "Nature Fresh Farm",
        location: "Rangpur",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
        products: "28 Products",
    },
];

const experts = [
    {
        name: "Dr. Ahmed Hasan",
        specialty: "Crop & Soil Specialist",
        experience: "12+ Years Experience",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=80",
    },
    {
        name: "Dr. Nusrat Jahan",
        specialty: "Plant Disease Expert",
        experience: "8+ Years Experience",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500&q=80",
    },
    {
        name: "Md. Sakib Rahman",
        specialty: "Modern Farming Expert",
        experience: "10+ Years Experience",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=80",
    },
];


const Farmers = () => {
    return (
        <>
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <p className="font-semibold text-green-600">
                            Meet Our Farmers
                        </p>

                        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                            Trusted Farmers
                        </h2>

                        <p className="mt-4 text-slate-500">
                            Connect directly with farmers who grow fresh and quality
                            agricultural products.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {farmers.map((farmer) => (
                            <Card
                                key={farmer.name}
                                className="overflow-hidden transition hover:-translate-y-1 hover:shadow-xl"
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-4">
                                        <Avatar className="h-20 w-20 border-4 border-green-50">
                                            <AvatarImage src={farmer.image} alt={farmer.name} />
                                            <AvatarFallback>
                                                {farmer.name.slice(0, 2)}
                                            </AvatarFallback>
                                        </Avatar>

                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-bold">{farmer.name}</h3>
                                                <BadgeCheck className="h-4 w-4 text-green-600" />
                                            </div>

                                            <p className="text-sm text-green-600">
                                                {farmer.farm}
                                            </p>

                                            <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                                                <MapPin className="h-3 w-3" />
                                                {farmer.location}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex items-center justify-between border-t pt-5">
                                        <span className="text-sm text-slate-500">
                                          {farmer.products}
                                        </span>

                                        <Button variant="outline" size="sm">
                                            <Link href="/farmers">View Farm</Link>
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

export default Farmers;