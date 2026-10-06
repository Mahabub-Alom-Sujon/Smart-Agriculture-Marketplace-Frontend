import {
    ArrowRight,
    Leaf,
    Search,
    Sprout,
} from "lucide-react";
import Link from "next/link";

export default function ExpertsHero() {
    return (
        <section className="relative overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1523742815846-7e3c6f7d4c7b?auto=format&fit=crop&w=2000&q=85')",
                }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-950/95 via-green-900/90 to-emerald-950/90" />

            {/* Decorative circles */}
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-green-400/10 blur-3xl" />

            <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-emerald-300/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-green-300/20 bg-white/10 px-4 py-2 text-xs font-semibold text-green-100 backdrop-blur-md">
                        <Leaf className="h-4 w-4 text-green-300" />
                        Trusted Agricultural Experts
                    </div>

                    {/* Heading */}
                    <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Expert Knowledge for
                        <span className="block text-green-300">
                            Better Farming
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-2xl text-base leading-7 text-green-50/80 sm:text-lg">
                        Connect with experienced agricultural
                        professionals and get trusted guidance for
                        soil management, crop production, fertilizers,
                        pest control and modern farming.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/experts"
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-green-500 px-6 text-sm font-semibold text-white shadow-lg shadow-green-950/20 transition-all hover:bg-green-400"
                        >
                            <Search className="h-4 w-4" />
                            Find an Expert
                        </Link>
                        <Link
                            href="/experts"
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
                        >
                            Explore Experts
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    {/* Trust points */}
                    <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-green-100/70">
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