import { Leaf, MessageCircle } from "lucide-react";

const ContactHero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />

            <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-700 shadow-sm">
                        <Leaf className="h-4 w-4" />
                        We&apos;re here to help
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        Let&apos;s{" "}
                        <span className="text-green-600">Connect</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                        Have a question about AgroNexa? Need help with the
                        marketplace? Our team is ready to help farmers,
                        buyers, and agricultural experts.
                    </p>

                    <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
                        <MessageCircle className="h-5 w-5 text-green-600" />
                        We usually respond within 24 hours.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;