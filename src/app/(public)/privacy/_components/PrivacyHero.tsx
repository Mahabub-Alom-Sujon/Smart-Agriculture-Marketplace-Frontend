import { FileText, ShieldCheck } from "lucide-react";

const PrivacyHero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />
            <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-700 shadow-sm">
                        <ShieldCheck className="h-4 w-4" />
                        Your privacy matters
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        Privacy{" "}
                        <span className="text-green-600">
                            Policy
                        </span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                        We are committed to protecting your personal
                        information and being transparent about how we
                        collect, use, and protect your data.
                    </p>
                    <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-gray-500 shadow-sm">
                        <FileText className="h-4 w-4 text-green-600" />
                        Last updated: October 5, 2026
                    </div>
                </div>
            </div>
        </section>
    );
};
export default PrivacyHero;