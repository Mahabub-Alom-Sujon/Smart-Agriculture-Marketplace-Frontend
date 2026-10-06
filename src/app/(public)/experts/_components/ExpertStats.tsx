import {
    Award,
    BookOpenCheck,
    Layers,
    Users,
} from "lucide-react";

interface ExpertStatsProps {
    total: number;
    currentPage: number;
    totalPages: number;
}

export default function ExpertStats({
                                        total,
                                        currentPage,
                                        totalPages,
                                    }: ExpertStatsProps) {
    const stats = [
        {
            label: "Total Experts",
            value: total,
            suffix: "Experts",
            icon: Users,
        },
        {
            label: "Current Page",
            value: currentPage,
            suffix: "",
            icon: Layers,
        },
        {
            label: "Total Pages",
            value: totalPages,
            suffix: "",
            icon: BookOpenCheck,
        },
        {
            label: "Expert Support",
            value: "Available",
            suffix: "",
            icon: Award,
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
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600 transition-all group-hover:bg-green-600 group-hover:text-white">
                            <Icon className="h-5 w-5" />
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