import React from 'react';
import Link from "next/link";
import {
    Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const testimonials = [
    {
        name: "Abdur Rahman",
        role: "Farmer",
        text: "This marketplace helped me reach customers directly. My sales have increased and I can manage my products much more easily.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
    {
        name: "Sadia Akter",
        role: "Buyer",
        text: "I can easily find fresh products directly from farmers. The ordering process is simple and the quality has been excellent.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    },
    {
        name: "Rakib Hasan",
        role: "Farmer",
        text: "The expert consultation service is very useful. I received practical advice about crop diseases and soil management.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
];
const Testimonials = () => {
    return (
        <>
            <section className="bg-slate-50 py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mx-auto mb-12 max-w-2xl text-center">
                        <p className="font-semibold text-green-600">Testimonials</p>

                        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                            What Our Community Says
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {testimonials.map((testimonial) => (
                            <Card key={testimonial.name} className="border-0 shadow-sm">
                                <CardContent className="p-7">
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map((item) => (
                                            <Star
                                                key={item}
                                                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                            />
                                        ))}
                                    </div>

                                    <p className="mt-5 text-sm leading-7 text-slate-600">
                                        “{testimonial.text}”
                                    </p>

                                    <div className="mt-6 flex items-center gap-3 border-t pt-5">
                                        <Avatar>
                                            <AvatarImage
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                            />
                                            <AvatarFallback>
                                                {testimonial.name.slice(0, 2)}
                                            </AvatarFallback>
                                        </Avatar>

                                        <div>
                                            <p className="font-semibold">{testimonial.name}</p>
                                            <p className="text-xs text-slate-500">
                                                {testimonial.role}
                                            </p>
                                        </div>
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

export default Testimonials;