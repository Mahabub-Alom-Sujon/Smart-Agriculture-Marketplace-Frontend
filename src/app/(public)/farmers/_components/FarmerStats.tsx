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
        <section className="border-y bg-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={stat.label}
                                className="flex items-center justify-center gap-3 text-center sm:gap-4"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xl font-bold text-gray-900">
                                        {stat.value}
                                        <span className="text-green-600">
                                            {stat.suffix}
                                        </span>
                                    </p>
                                    <p className="text-xs text-gray-500 sm:text-sm">
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