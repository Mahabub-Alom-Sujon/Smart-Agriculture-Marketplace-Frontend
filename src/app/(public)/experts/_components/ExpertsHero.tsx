import {
    ArrowRight,
    Leaf,
    Search,
} from "lucide-react";
import Link from "next/link";
export default function ExpertsHero() {
    return (
        <section className="relative isolate overflow-hidden bg-slate-50 transition-colors duration-300 dark:bg-slate-950">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523742815846-7e3c6f7d4c7b?auto=format&fit=crop&w=2000&q=85')",}}
                aria-hidden="true"
            />

            {/* Light / Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-950/90 via-green-900/85 to-emerald-950/90 transition-colors duration-300 dark:from-slate-950/95 dark:via-green-950/95 dark:to-slate-950/95" />

            {/* Decorative Circles */}
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-green-400/10 blur-3xl" />

            <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-emerald-300/10 blur-3xl" />

            {/* Content */}
            <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-green-300/30 bg-white/10 px-4 py-2 text-xs font-semibold text-green-100 shadow-sm backdrop-blur-md dark:border-emerald-400/25 dark:bg-black/20 dark:text-emerald-200">
                        <Leaf className="h-4 w-4 text-green-300 dark:text-emerald-400" />
                        Trusted Agricultural Experts
                    </div>

                    {/* Heading */}
                    <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Expert Knowledge for
                        <span className="block text-green-300 dark:text-emerald-300">
                            Better Farming
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-2xl text-base leading-7 text-green-50/90 sm:text-lg dark:text-slate-200">
                        Connect with experienced agricultural
                        professionals and get trusted guidance for
                        soil management, crop production, fertilizers,
                        pest control and modern farming.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/experts"
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-green-500 px-6 text-sm font-semibold text-white shadow-lg shadow-green-950/20 transition-all duration-300 hover:bg-green-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2 focus-visible:ring-offset-green-950 dark:bg-emerald-600 dark:hover:bg-emerald-500"
                        >
                            <Search className="h-4 w-4" />
                            Find an Expert
                        </Link>

                        <Link
                            href="/experts"
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-950 dark:border-slate-400/30 dark:bg-slate-900/40 dark:hover:bg-slate-800/70"
                        >
                            Explore Experts
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Trust Points */}
                    <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-green-100/90 dark:text-slate-300">
                        <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                            Experienced Professionals
                        </span>

                        <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                            Agriculture Specialists
                        </span>

                        <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                            Practical Farming Advice
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}