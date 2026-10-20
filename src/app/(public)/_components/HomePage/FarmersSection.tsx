import {
    Sprout,
} from "lucide-react";
import Farmers from "@/app/(public)/_components/HomePage/farmers";
import type { Farmer } from "@/types/types.farmer";
interface FarmersSectionProps {
    farmers: Farmer[];
}

export default function FarmersSection({
    farmers,
}: FarmersSectionProps) {
    return (
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-green-50 via-white to-slate-50 py-16 sm:py-20 lg:py-24">
            {/* Decorative background */}
            <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section heading */}
                <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-700 shadow-sm">
                            <Sprout className="h-4 w-4" />
                            Our Farming Community
                        </div>
                        <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            Meet the People Behind
                            <span className="block text-green-600">Your Fresh Food</span>
                        </h2>
                        <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                            Discover passionate local farmers, explore their farms,
                            and connect directly with the people growing fresh,
                            quality agricultural products for your everyday needs.
                        </p>
                    </div>
                </div>
                {/* Farmer cards */}
                <Farmers farmers={farmers} />
            </div>
        </section>
    );
}
