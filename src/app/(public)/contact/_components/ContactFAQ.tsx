"use client";

import {
    ChevronDown,
} from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "How can I become a farmer on AgroNexa?",
        answer:
            "Create an account and complete your farmer profile. After completing the required information, you can start showcasing your agricultural products.",
    },
    {
        question: "Can buyers purchase products directly from farmers?",
        answer:
            "Yes. AgroNexa is designed to help buyers discover agricultural products and connect with farmers through the marketplace.",
    },
    {
        question: "How can I contact an agricultural expert?",
        answer:
            "You can explore available agricultural experts and their services through the expert section of the platform.",
    },
    {
        question: "How long does customer support take to respond?",
        answer:
            "Our support team aims to respond to messages within 24 hours during our regular working hours.",
    },
];

const ContactFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-gray-50 py-20 lg:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center">
                        <span className="text-sm font-semibold uppercase tracking-wider text-green-600">
                            FAQ
                        </span>

                        <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                            Frequently asked questions
                        </h2>

                        <p className="mt-4 text-gray-600">
                            Find quick answers to some common questions about
                            AgroNexa.
                        </p>
                    </div>

                    <div className="mt-10 space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={faq.question}
                                    className="overflow-hidden rounded-2xl border border-gray-100 bg-white"
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenIndex(
                                                isOpen ? null : index
                                            )
                                        }
                                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                                    >
                                        <span className="font-semibold text-gray-900">
                                            {faq.question}
                                        </span>

                                        <ChevronDown
                                            className={`h-5 w-5 shrink-0 text-green-600 transition-transform ${
                                                isOpen
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                        />
                                    </button>

                                    {isOpen && (
                                        <div className="border-t border-gray-100 px-6 pb-5 pt-4">
                                            <p className="text-sm leading-7 text-gray-600">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFAQ;