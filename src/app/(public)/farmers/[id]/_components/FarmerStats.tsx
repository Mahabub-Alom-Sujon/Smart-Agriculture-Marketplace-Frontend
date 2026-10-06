import {
    LandPlot,
    MapPin,
    Sprout,
    Trees,
} from "lucide-react";
interface FarmerStatsProps {
    farmCount: number;
    totalLand: number;
    locationCount: number;
}
export default function FarmerStats({
    farmCount,
    totalLand,
    locationCount,
}: FarmerStatsProps) {
    const stats = [
        {
            label: "Registered Farms",
            value: farmCount,
            suffix: farmCount === 1 ? "Farm" : "Farms",
            icon: Sprout,
        },
        {
            label: "Total Land",
            value: totalLand.toFixed(2),
            suffix: "Acres",
            icon: LandPlot,
        },
        {
            label: "Locations",
            value: locationCount,
            suffix: locationCount === 1
                ? "Location"
                : "Locations",
            icon: MapPin,
        },
        {
            label: "Agricultural Profile",
            value: "Active",
            suffix: "",
            icon: Trees,
        },
    ];
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                    <div
                        key={stat.label}
                        className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg hover:shadow-green-900/5"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
                                <Icon className="h-5 w-5" />
                            </div>
                        </div>
                        <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                            {stat.label}
                        </p>
                        <div className="mt-1.5 flex items-baseline gap-1.5">
                            <span className="text-2xl font-bold text-slate-900">
                                {stat.value}
                            </span>
                            {stat.suffix && (
                                <span className="text-xs font-medium text-slate-400">
                                    {stat.suffix}
                                </span>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}