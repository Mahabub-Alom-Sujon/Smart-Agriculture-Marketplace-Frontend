import {
    CalendarDays,
    LandPlot,
    MapPin,
    Sprout,
} from "lucide-react";
import type { Farm } from "@/types/types.farmer";
interface FarmerFarmCardProps {
    farm: Farm;
}
export default function FarmerFarmCard({
   farm,
}: FarmerFarmCardProps) {
    const registeredDate = new Date(
        farm.createdAt
    ).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
    return (
        <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5">
            {/* Accent */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500" />
            <div className="flex items-start justify-between gap-4 pt-1">
                <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
                        <Sprout className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                        <h3 className="truncate text-lg font-bold text-slate-900">
                            {farm.farmName}
                        </h3>
                        <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                            <MapPin className="h-3.5 w-3.5 shrink-0 text-green-500" />
                            <span className="truncate">
                                {farm.location}
                            </span>
                        </div>
                    </div>
                </div>
                <span className="shrink-0 rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-semibold text-green-700">
                    Active
                </span>
            </div>
            <div className="mt-6 grid grid-cols-2 overflow-hidden rounded-xl border border-slate-100">
                <div className="border-r border-slate-100 p-4">
                    <div className="flex items-center gap-2">
                        <LandPlot className="h-4 w-4 text-green-600" />
                        <span className="text-xs font-medium text-slate-500">
                            Land Size
                        </span>
                    </div>
                    <p className="mt-2 text-xl font-bold text-slate-900">
                        {farm.landSize}
                        <span className="ml-1 text-xs font-medium text-slate-400">
                            acres
                        </span>
                    </p>
                </div>
                <div className="p-4">
                    <div className="flex items-center gap-2">
                        <Sprout className="h-4 w-4 text-emerald-600" />
                        <span className="text-xs font-medium text-slate-500">
                            Soil Type
                        </span>
                    </div>
                    <p className="mt-2 truncate text-base font-bold text-slate-900">
                        {farm.soilType}
                    </p>
                </div>
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                    <CalendarDays className="h-3.5 w-3.5" />
                    Registered {registeredDate}
                </div>
                <div className="h-2 w-2 rounded-full bg-green-500" />
            </div>
        </article>
    );
}