import {
    Award,
    MapPin,
    Sprout,
    Users,
} from "lucide-react";

interface FarmerStatsProps {
    totalFarmers: number;
    totalFarms: number;
    totalLand: number;
}

export default function FarmerStats({
    totalFarmers,
    totalFarms,
    totalLand,
}: FarmerStatsProps) {
    const stats = [
        {
            label: "Trusted Farmers",
            value: totalFarmers,
            suffix: "+",
            icon: Users,
        },
        {
            label: "Registered Farms",
            value: totalFarms,
            suffix: "+",
            icon: Sprout,
        },
        {
            label: "Total Farm Land",
            value: totalLand.toFixed(2),
            suffix: " acres",
            icon: MapPin,
        },
        {
            label: "Quality Focus",
            value: "100",
            suffix: "%",
            icon: Award,
        },
    ];

    return (
        <section className="border-y border-gray-200 bg-white text-gray-900 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                    {stats.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={stat.label}
                                className="flex items-center justify-center gap-3 text-center sm:gap-4"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 transition-colors duration-300 dark:bg-green-900/40 dark:text-green-400">
                                    <Icon className="h-5 w-5" />
                                </div>

                                <div className="text-left">
                                    <p className="text-xl font-bold text-gray-900 dark:text-slate-100">
                                        {stat.value}
                                        <span className="text-green-600 dark:text-green-400">
                                            {stat.suffix}
                                        </span>
                                    </p>

                                    <p className="text-xs text-gray-500 dark:text-slate-400 sm:text-sm">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}