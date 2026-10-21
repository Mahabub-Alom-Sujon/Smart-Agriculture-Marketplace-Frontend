"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
const faqs = [
    {
        question: "How can I become a farmer on AgroNexa?",
        answer: "Create an account and complete your farmer profile. After completing the required information, you can start showcasing your agricultural products.",
    },
    {
        question: "Can buyers purchase products directly from farmers?",
        answer: "Yes. AgroNexa is designed to help buyers discover agricultural products and connect with farmers through the marketplace.",
    },
    {
        question: "How can I contact an agricultural expert?",
        answer: "You can explore available agricultural experts and their services through the expert section of the platform.",
    },
    {
        question: "How long does customer support take to respond?",
        answer: "Our support team aims to respond to messages within 24 hours during our regular working hours.",
    },
];

const ContactFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    return (
        <section className="bg-gray-50 py-20 transition-colors duration-300 dark:bg-gray-950 lg:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    {/* Header */}
                    <div className="text-center">
                        <span className="text-sm font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">
                            FAQ
                        </span>
                        <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                            Frequently asked questions
                        </h2>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                            Find quick answers to some common questions about
                            AgroNexa.
                        </p>
                    </div>
                    {/* FAQ Accordion */}
                    <div className="mt-10 space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={faq.question}
                                    className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900"
                                >
                                    <button
                                        type="button"
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-answer-${index}`}
                                        onClick={() =>
                                            setOpenIndex(
                                                isOpen ? null : index
                                            )
                                        }
                                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-green-500 dark:hover:bg-gray-800"
                                    >
                                        <span className="font-semibold text-gray-900 dark:text-gray-100">
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            className={`h-5 w-5 shrink-0 text-green-600 transition-transform duration-300 dark:text-green-400 ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                        />
                                    </button>
                                    {isOpen && (
                                        <div
                                            id={`faq-answer-${index}`}
                                            className="border-t border-gray-100 px-6 pb-5 pt-4 dark:border-gray-800"
                                        >
                                            <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
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