import { FileText, ShieldCheck } from "lucide-react";
const PrivacyHero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950">
            {/* Decorative Background Elements */}
            <div aria-hidden="true" className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-green-200/30 blur-3xldark:bg-green-500/10"/>
            <div
                aria-hidden="true"
                className="
                    absolute -right-24 bottom-0
                    h-80 w-80 rounded-full
                    bg-emerald-200/30 blur-3xl
                    dark:bg-emerald-500/10
                "
            />

            {/* Hero Content */}
            <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-3xl text-center">

                    {/* Privacy Badge */}
                    <div
                        className="
                            mx-auto mb-5 flex w-fit items-center gap-2
                            rounded-full
                            border border-green-200
                            bg-white px-4 py-2
                            text-sm font-medium text-green-700
                            shadow-sm
                            transition-colors duration-300
                            dark:border-green-800
                            dark:bg-slate-900
                            dark:text-green-400
                        "
                    >
                        <ShieldCheck className="h-4 w-4 shrink-0" />
                        Your privacy matters
                    </div>

                    {/* Heading */}
                    <h1
                        className="
                            text-4xl font-bold tracking-tight
                            text-gray-900
                            transition-colors duration-300
                            dark:text-white
                            sm:text-5xl lg:text-6xl
                        "
                    >
                        Privacy{" "}
                        <span className="text-green-600 dark:text-green-400">
                            Policy
                        </span>
                    </h1>

                    {/* Description */}
                    <p
                        className="
                            mx-auto mt-6 max-w-2xl
                            text-base leading-7
                            text-gray-600
                            transition-colors duration-300
                            dark:text-slate-300
                            sm:text-lg
                        "
                    >
                        We are committed to protecting your personal
                        information and being transparent about how we
                        collect, use, and protect your data.
                    </p>

                    {/* Last Updated */}
                    <div
                        className="
                            mt-8 inline-flex items-center gap-2
                            rounded-full
                            border border-gray-100
                            bg-white px-4 py-2
                            text-sm text-gray-500
                            shadow-sm
                            transition-colors duration-300
                            dark:border-slate-700
                            dark:bg-slate-900
                            dark:text-slate-300
                        "
                    >
                        <FileText className="h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />
                        <span>Last updated: October 5, 2026</span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PrivacyHero;