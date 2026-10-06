import Link from "next/link";
import {
    ArrowUpRight,
    Award,
    CalendarDays,
    Mail,
    MapPin,
    Sprout,
} from "lucide-react";
import type { Farmer } from "@/types/types.farmer";
interface FarmerCardProps {
    farmer: Farmer;
}
export default function FarmerCard({
    farmer,
}: FarmerCardProps) {
    const totalLand = farmer.farms.reduce(
        (total, farm) => total + farm.landSize,
        0
    );
    const locations = Array.from(
        new Set( farmer.farms.map((farm) => farm.location))
    );
    const initial = farmer.name.trim().charAt(0).toUpperCase();
    const joinedDate = new Date(
        farmer.createdAt
    ).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
    });
    return (
        <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5">
            {/* Top Accent */}
            <div className="h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500" />
            {/* Header */}
            <div className="relative px-5 pt-5">
                <div className="flex items-start justify-between gap-4">
                    {/* Profile */}
                    <div className="flex min-w-0 items-center gap-3">
                        <div className="relative shrink-0">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 text-xl font-bold text-green-700 ring-4 ring-green-50">
                                {initial}
                            </div>
                            {/* Active indicator */}
                            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
                        </div>
                        <div className="min-w-0">
                            <h3 className="truncate text-lg font-bold text-slate-900 transition-colors group-hover:text-green-700">
                                {farmer.name}
                            </h3>
                            <div className="mt-1 flex min-w-0 items-center gap-1.5 text-xs text-slate-500">
                                <Mail className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                                <span className="truncate">
                                    {farmer.email}
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Certification / Arrow */}
                    {farmer.certification ? (
                        <div className="flex shrink-0 items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1.5 text-[10px] font-semibold text-amber-700">
                            <Award className="h-3.5 w-3.5" />
                            Certified
                        </div>
                    ) : (
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all group-hover:bg-green-50 group-hover:text-green-600">
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </div>
                    )}
                </div>
            </div>
            {/* Location */}
            <div className="mx-5 mt-5 flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-3.5 py-3 transition-colors group-hover:border-green-100 group-hover:bg-green-50/50">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-green-600 shadow-sm">
                    <MapPin className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        Location
                    </p>
                    <p className="mt-0.5 truncate text-sm font-medium text-slate-700">
                        {locations.length > 0 ? locations.join(" • ") : "Location not available"}
                    </p>
                </div>
            </div>
            {/* Stats */}
            <div className="mx-5 mt-4 grid grid-cols-2 overflow-hidden rounded-xl border border-slate-100">
                <div className="border-r border-slate-100 px-4 py-3.5">
                    <div className="flex items-center gap-2">
                        <Sprout className="h-4 w-4 text-green-600" />
                        <span className="text-xs font-medium text-slate-500">
                            Farms
                        </span>
                    </div>
                    <p className="mt-1.5 text-xl font-bold text-slate-900">
                        {farmer.farms.length}
                    </p>
                </div>
                <div className="px-4 py-3.5">
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-emerald-600" />
                        <span className="text-xs font-medium text-slate-500">
                            Total Land
                        </span>
                    </div>
                    <p className="mt-1.5 text-xl font-bold text-slate-900">
                        {totalLand.toFixed(2)}
                        <span className="ml-1 text-xs font-medium text-slate-400">
                            acres
                        </span>
                    </p>
                </div>
            </div>
            {/* Farm tags */}
            <div className="mx-5 mt-4">
                {farmer.farms.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5">
                        {farmer.farms
                            .slice(0, 2)
                            .map((farm) => (
                                <span
                                    key={farm.id}
                                    className="inline-flex max-w-full items-center gap-1.5 rounded-md border border-green-100 bg-green-50 px-2.5 py-1.5 text-[11px] font-medium text-green-700"
                                >
                                    <Sprout className="h-3 w-3 shrink-0" />
                                    <span className="truncate">
                                        {farm.farmName}
                                    </span>
                                </span>
                            ))}
                        {farmer.farms.length > 2 && (
                            <span className="inline-flex items-center rounded-md border border-slate-100 bg-slate-50 px-2.5 py-1.5 text-[11px] font-medium text-slate-500">
                                +{farmer.farms.length - 2}
                            </span>
                        )}
                    </div>
                ) : (
                    <div className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-400">
                        No registered farms yet
                    </div>
                )}
            </div>
            {/* Footer */}
            <div className="mx-5 mt-5 flex items-center justify-between border-t border-slate-100 py-4">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <CalendarDays className="h-3.5 w-3.5" />
                    Joined {joinedDate}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-green-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Active
                </div>
            </div>
            {/* CTA */}
            <div className="px-5 pb-5">
                <Link
                    href={`/farmers/${farmer.id}`}
                    className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-green-600 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-700"
                >
                    View Farmer
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
            </div>
        </article>
    );
}