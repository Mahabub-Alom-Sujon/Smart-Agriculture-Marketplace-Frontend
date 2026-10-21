"use client";
import { FormEvent, useState } from "react";
import {
    CheckCircle2,
    Loader2,
    Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    return (
        <section className="bg-gray-50 py-20 transition-colors duration-300 dark:bg-gray-950 lg:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
                    {/* Left Content */}
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">
                            Get in Touch
                        </span>
                        <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl">
                            We&apos;d love to hear from you
                        </h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-400">
                            Whether you have a question, feedback, partnership
                            idea, or need help using AgroNexa, send us a
                            message.
                        </p>
                        <div className="mt-8 space-y-5">
                            {/* Quick Support */}
                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                                        Quick Support
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                                        Our team is ready to help you with
                                        marketplace-related questions.
                                    </p>
                                </div>
                            </div>
                            {/* Trusted Communication */}
                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                                        Trusted Communication
                                    </h3>
                                    <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                                        We value every message and work to
                                        provide clear and helpful responses.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Contact Form */}
                    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 sm:p-8">
                        {submitted ? (
                            <div className="flex min-h-[450px] flex-col items-center justify-center text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40">
                                    <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                                </div>
                                <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
                                    Message Sent!
                                </h3>
                                <p className="mt-3 max-w-md text-gray-500 dark:text-gray-400">
                                    Thank you for contacting AgroNexa. Our
                                    team will get back to you as soon as
                                    possible.
                                </p>
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="mt-6 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
                                    onClick={() => setSubmitted(false)}
                                >
                                    Send Another Message
                                </Button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                <div className="grid gap-5 sm:grid-cols-2">
                                    {/* Full Name */}
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="name"
                                            className="text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            Full Name
                                        </label>

                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Your name"
                                            required
                                            className="h-11 border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus-visible:ring-green-500 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500"
                                        />
                                    </div>
                                    {/* Email Address */}
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="email"
                                            className="text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            Email Address
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            required
                                            className="h-11 border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus-visible:ring-green-500 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500"
                                        />
                                    </div>
                                </div>
                                {/* Subject */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="subject"
                                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Subject
                                    </label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        placeholder="How can we help?"
                                        required
                                        className="h-11 border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus-visible:ring-green-500 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500"
                                    />
                                </div>
                                {/* Message */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="message"
                                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Write your message here..."
                                        required
                                        className="min-h-[160px] resize-none border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus-visible:ring-green-500 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500"
                                    />
                                </div>
                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="h-11 w-full bg-green-600 text-white transition-colors hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-500"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-4 w-4" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;