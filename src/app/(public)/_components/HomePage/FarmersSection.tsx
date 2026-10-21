import { Sprout } from "lucide-react";
import Farmers from "@/app/(public)/_components/HomePage/farmers";
import type { Farmer } from "@/types/types.farmer";
interface FarmersSectionProps {
    farmers: Farmer[];
}
export default function FarmersSection({
   farmers,
}: FarmersSectionProps) {
    return (
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-green-50 via-white to-slate-50 py-16 text-slate-900 transition-colors duration-300 dark:from-gray-950 dark:via-slate-950 dark:to-gray-900 dark:text-slate-100 sm:py-20 lg:py-24">
            {/* Decorative background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-32 top-10 -z-10 h-72 w-72 rounded-full bg-green-200/30 blur-3xl dark:bg-green-500/10"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-500/10"
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section heading */}
                <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
                    <div className="max-w-2xl">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-700 shadow-sm transition-colors duration-300 dark:border-green-800 dark:bg-slate-900/80 dark:text-green-400">
                            <Sprout className="h-4 w-4" />
                            Our Farming Community
                        </div>

                        {/* Heading */}
                        <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 transition-colors duration-300 dark:text-white sm:text-4xl lg:text-5xl">
                            Meet the People Behind
                            <span className="block text-green-600 dark:text-green-400">
                                Your Fresh Food
                            </span>
                        </h2>
                        {/* Description */}
                        <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 transition-colors duration-300 dark:text-slate-400 sm:text-base">
                            Discover passionate local farmers, explore their farms,
                            and connect directly with the people growing fresh,
                            quality agricultural products for your everyday needs.
                        </p>
                    </div>
                </div>
                {/* Farmer cards */}
                <div className="mt-10">
                    <Farmers farmers={farmers} />
                </div>
            </div>
        </section>
    );
}