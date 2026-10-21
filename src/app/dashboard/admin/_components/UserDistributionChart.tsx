"use client";

import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import type { DashboardStats } from "@/types/types.analytics";

interface UserDistributionChartProps {
    stats: DashboardStats;
}

export default function UserDistributionChart({
                                                  stats,
                                              }: UserDistributionChartProps) {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted && resolvedTheme === "dark";

    const data = [
        { name: "Farmers", total: stats.totalFarmers },
        { name: "Buyers", total: stats.totalBuyers },
        { name: "Experts", total: stats.totalExperts },
    ];

    const axisColor = isDark ? "#9ca3af" : "#6b7280";
    const gridColor = isDark ? "#374151" : "#e5e7eb";
    const tooltipBg = isDark ? "#111827" : "#ffffff";
    const tooltipBorder = isDark ? "#374151" : "#e5e7eb";
    const tooltipText = isDark ? "#f3f4f6" : "#111827";
    const cursorColor = isDark ? "#374151" : "#f3f4f6";

    return (
        <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/10">
            {/* Chart Header */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    User Distribution
                </h2>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Marketplace users by role
                </p>
            </div>

            {/* Bar Chart */}
            <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 10,
                            left: -15,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                            stroke={gridColor}
                        />

                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                fill: axisColor,
                                fontSize: 12,
                            }}
                        />

                        <YAxis
                            allowDecimals={false}
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                fill: axisColor,
                                fontSize: 12,
                            }}
                        />

                        <Tooltip
                            cursor={{ fill: cursorColor }}
                            formatter={(value) => [
                                Number(value).toLocaleString(),
                                "Users",
                            ]}
                            contentStyle={{
                                backgroundColor: tooltipBg,
                                border: `1px solid ${tooltipBorder}`,
                                borderRadius: "12px",
                                color: tooltipText,
                                boxShadow: isDark
                                    ? "0 4px 12px rgba(0, 0, 0, 0.3)"
                                    : "0 4px 12px rgba(0, 0, 0, 0.08)",
                            }}
                            labelStyle={{
                                color: tooltipText,
                                fontWeight: 600,
                            }}
                            itemStyle={{
                                color: tooltipText,
                            }}
                        />

                        <Bar
                            dataKey="total"
                            name="Users"
                            fill="#16a34a"
                            radius={[7, 7, 0, 0]}
                            maxBarSize={65}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}
