
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What is Smart Agriculture Marketplace?",
        answer:
            "AgroMart is an online marketplace that connects farmers, buyers, and agricultural experts. Users can discover agricultural products, manage orders, and access farming guidance.",
    },
    {
        question: "How can I register as a farmer?",
        answer:
            "Create an account on AgroMart and sign in. Follow the available farmer registration or role-selection process in your application to access farmer features.",
    },
    {
        question: "How can I buy agricultural products?",
        answer:
            "Browse the products page, explore product details, add available items to your cart, and proceed to checkout to place your order.",
    },
    {
        question: "Can farmers sell their products directly?",
        answer:
            "Yes. Approved farmers can use the marketplace's farmer features to manage their agricultural products and make them available to buyers.",
    },
    {
        question: "Can I consult an agricultural expert?",
        answer:
            "AgroMart is designed to connect users with agricultural experts. Explore the expert or consultation section to find available guidance and services.",
    },
    {
        question: "How can I track or manage my orders?",
        answer:
            "Sign in to your account and visit the relevant order or dashboard page to review your orders and their available status information.",
    },
    {
        question: "Is registration required to use AgroMart?",
        answer:
            "You can browse publicly available marketplace content without signing in. Account access may be required for ordering, managing products, and using personalized features.",
    },
    {
        question: "How can I get help with a problem?",
        answer:
            "Use the contact or support options provided by AgroMart to ask questions about your account, products, orders, or marketplace features.",
    },
];

export default function FAQs() {
    return (
        <section
            id="faqs"
            className="bg-gray-50 py-16 dark:bg-gray-950 sm:py-20"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                    <div className="lg:sticky lg:top-24">
            <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-950 dark:text-green-400">
              FAQs
            </span>

                        <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Frequently Asked{" "}
                            <span className="text-green-600">Questions</span>
                        </h2>

                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-400">
                            Have questions about AgroMart? Find helpful information about
                            accounts, agricultural products, orders, and expert services.
                        </p>

                        <div className="mt-8 rounded-2xl border border-green-100 bg-white p-6 dark:border-green-900 dark:bg-gray-900">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Still have questions?
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                Our team can help you understand how to use the marketplace.
                            </p>

                            <a
                                href="/contact"
                                className="mt-5 inline-flex items-center rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <details
                                key={faq.question}
                                open={index === 0}
                                className="group rounded-xl border border-gray-200 bg-white p-5 transition-colors open:border-green-300 dark:border-gray-800 dark:bg-gray-900 dark:open:border-green-800"
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-gray-900 marker:hidden dark:text-white">
                                    <span>{faq.question}</span>

                                    <ChevronDown
                                        size={20}
                                        className="shrink-0 text-green-600 transition-transform duration-200 group-open:rotate-180"
                                    />
                                </summary>

                                <p className="mt-4 border-t border-gray-100 pt-4 text-sm leading-7 text-gray-600 dark:border-gray-800 dark:text-gray-400">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
