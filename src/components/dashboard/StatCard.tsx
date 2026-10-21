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
            className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/10 dark:hover:border-slate-700 dark:hover:shadow-black/20 ${className}`}
        >
            {/* Card Header */}
            <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {title}
                    </p>

                    <h3 className="mt-2 break-words text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {value}
                    </h3>
                </div>

                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 transition-colors duration-300 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20">
                    <Icon size={22} />
                </div>
            </div>

            {/* Description & Trend */}
            {(description || trend !== undefined) && (
                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                    {trend !== undefined &&
                        trendType !== "neutral" && (
                            <span
                                className={`inline-flex items-center gap-0.5 font-semibold ${
                                trendType === "up"
                                ? "text-emerald-600 dark:text-emerald-400"
                                : "text-red-600 dark:text-red-400"
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
                        <span className="text-slate-500 dark:text-slate-400">
                            {description}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}