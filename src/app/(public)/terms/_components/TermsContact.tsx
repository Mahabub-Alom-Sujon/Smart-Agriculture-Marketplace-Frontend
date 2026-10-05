import Link from "next/link";
import {
    ArrowRight,
    MessageCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const TermsContact = () => {
    return (
        <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
            <div className="container mx-auto">
                <div className="rounded-3xl border border-green-100 bg-green-50 p-8 sm:p-12">
                    <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
                        <div className="flex flex-col items-center gap-4 md:flex-row">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-600">
                                <MessageCircle className="h-7 w-7 text-white" />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    Have questions about our terms?
                                </h2>

                                <p className="mt-2 text-gray-600">
                                    Our team is available to help you
                                    understand the AgroNexa marketplace.
                                </p>
                            </div>
                        </div>

                        <Button
                            // asChild
                            className="bg-green-600 hover:bg-green-700"
                        >
                            <Link href="/contact">
                                Contact Us
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsContact;