import type { LucideIcon } from "lucide-react";
import {
    ArrowDownRight,
    ArrowUpRight,
} from "lucide-react";

type StatTrend = "up" | "down" | "neutral";

interface StatCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    description?: string;
    trend?: number;
    trendType?: StatTrend;
    className?: string;
}

export default function StatCard({
    title,
    value,
    icon: Icon,
    description,
    trend,
    trendType = "neutral",
    className = "",
}: StatCardProps) {
    return (
        <div
            className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md ${className}`}
        >
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-slate-500">
                        {title}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                        {value}
                    </h3>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Icon size={22} />
                </div>
            </div>

            {(description || trend !== undefined) && (
                <div className="mt-4 flex items-center gap-2 text-xs">
                    {trend !== undefined &&
                        trendType !== "neutral" && (
                            <span
                                className={`inline-flex items-center gap-0.5 font-semibold ${
    trendType === "up"
        ? "text-emerald-600"
        : "text-red-600"
}`}
                            >
                                {trendType === "up" ? (
                                    <ArrowUpRight size={14} />
                                ) : (
                                    <ArrowDownRight size={14} />
                                )}

                                {Math.abs(trend)}%
                            </span>
                        )}

                    {description && (
                        <span className="text-slate-500">
                            {description}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}