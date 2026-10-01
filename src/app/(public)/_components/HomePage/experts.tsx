import React from 'react';
import Link from "next/link";
import {
    ArrowRight,
    BadgeCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

const Experts = () => {
    return (
        <>
            <section className="bg-green-50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mb-10 flex items-end justify-between">
                        <div>
                            <p className="font-semibold text-green-600">
                                Agriculture Experts
                            </p>

                            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                                Get Expert Advice
                            </h2>

                            <p className="mt-3 max-w-xl text-slate-500">
                                Connect with experienced agriculture experts and get
                                professional guidance for your farm.
                            </p>
                        </div>

                        <Button variant="outline" className="hidden sm:flex">
                            <Link href="/experts">
                                Find Experts
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {experts.map((expert) => (
                            <Card
                                key={expert.name}
                                className="border-white bg-white transition hover:-translate-y-1 hover:shadow-xl"
                            >
                                <CardContent className="p-6 text-center">
                                    <Avatar className="mx-auto h-24 w-24 border-4 border-green-100">
                                        <AvatarImage src={expert.image} alt={expert.name} />
                                        <AvatarFallback>
                                            {expert.name.slice(0, 2)}
                                        </AvatarFallback>
                                    </Avatar>

                                    <div className="mt-4 flex items-center justify-center gap-2">
                                        <h3 className="font-bold">{expert.name}</h3>
                                        <BadgeCheck className="h-4 w-4 text-green-600" />
                                    </div>

                                    <p className="mt-1 text-sm font-medium text-green-600">
                                        {expert.specialty}
                                    </p>

                                    <p className="mt-2 text-sm text-slate-500">
                                        {expert.experience}
                                    </p>

                                    <Button className="mt-5 w-full bg-green-600 hover:bg-green-700">
                                        Book Consultation
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Experts;