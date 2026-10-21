import Link from "next/link";
import {
    ArrowLeft,
    Award,
    CalendarDays,
    Mail,
    MapPin,
    Sprout,
} from "lucide-react";
import moment from "moment";

import type { Farmer } from "@/types/types.farmer";

interface FarmerProfileHeaderProps {
    farmer: Farmer;
}

export default function FarmerProfileHeader({
    farmer,
}: FarmerProfileHeaderProps) {
    const farms = farmer.farms ?? [];
    const initial = farmer.name.trim().charAt(0).toUpperCase();

    const locations = Array.from(
        new Set(farms.map((farm) => farm.location))
    );

    return (
        <section className="relative overflow-hidden border-b border-green-900/10 text-white transition-colors duration-300 dark:border-slate-800">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2000&q=85')",
                }}
            />

            {/* Theme-aware Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-950/85 via-green-900/75 to-emerald-950/80 dark:from-slate-950/95 dark:via-slate-950/90 dark:to-green-950/90" />

            {/* Additional Image Overlay */}
            <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />

            {/* Background Decoration */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-300/10 blur-3xl dark:bg-green-400/10" />

            <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl dark:bg-emerald-400/10" />

            {/* Content */}
            <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link
                    href="/farmers"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-white/90 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300"
                >
                    <ArrowLeft className="h-4 w-4" />
                    All Farmers
                </Link>

                {/* Main Profile */}
                <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                    {/* Farmer Information */}
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                        {/* Avatar */}
                        <div className="relative shrink-0">
                            <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/30 bg-white/15 text-4xl font-bold shadow-2xl backdrop-blur-md">
                                {initial}
                            </div>

                            {/* Active Indicator */}
                            <span className="absolute bottom-1 right-1 h-5 w-5 rounded-full border-4 border-green-900 bg-green-400 shadow-lg dark:border-slate-950" />
                        </div>

                        {/* Information */}
                        <div>
                            {/* Name + Certification */}
                            <div className="flex flex-wrap items-center gap-3">
                                <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-sm sm:text-4xl">
                                    {farmer.name}
                                </h1>

                                {farmer.certification && (
                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/30 bg-amber-400/20 px-3 py-1.5 text-xs font-semibold text-amber-100 backdrop-blur-sm">
                                        <Award className="h-3.5 w-3.5" />
                                        Certified Farmer
                                    </span>
                                )}
                            </div>

                            {/* Farmer Details */}
                            <div className="mt-4 flex flex-col gap-2 text-sm text-green-50/90 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
                                {/* Email */}
                                <span className="inline-flex items-center gap-2">
                                    <Mail className="h-4 w-4 shrink-0 text-green-300 dark:text-green-400" />
                                    <span className="break-all">
                                        {farmer.email}
                                    </span>
                                </span>

                                {/* Locations */}
                                {locations.length > 0 && (
                                    <span className="inline-flex items-center gap-2">
                                        <MapPin className="h-4 w-4 shrink-0 text-green-300 dark:text-green-400" />
                                        <span className="max-w-md truncate">
                                            {locations.join(" • ")}
                                        </span>
                                    </span>
                                )}

                                {/* Joined Date */}
                                <span className="inline-flex items-center gap-2">
                                    <CalendarDays className="h-4 w-4 shrink-0 text-green-300 dark:text-green-400" />
                                    Joined{" "}
                                    {moment(farmer.createdAt).format(
                                        "MMM Do YY"
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Marketplace Status */}
                    <div className="w-fit rounded-2xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-md transition-colors duration-300 dark:border-white/15 dark:bg-white/5">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-green-700 shadow-lg dark:bg-green-900 dark:text-green-300">
                                <Sprout className="h-5 w-5" />
                            </div>

                            <div>
                                <p className="text-xs font-medium text-green-100/80">
                                    Marketplace Status
                                </p>

                                <div className="mt-1 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />

                                    <p className="font-semibold text-white">
                                        Active Farmer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Trust Strip */}
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/20 pt-5 text-xs text-green-100/80 dark:border-white/15 dark:text-slate-300">
                    <span className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                        Verified Marketplace Profile
                    </span>

                    <span className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        Local Agricultural Producer
                    </span>

                    <span className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                        AgroMart Farmer
                    </span>
                </div>
            </div>
        </section>
    );
}