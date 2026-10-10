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
import type { DashboardStats } from "@/types/types.analytics";
interface UserDistributionChartProps {
    stats: DashboardStats;
}
export default function UserDistributionChart({
  stats,
}: UserDistributionChartProps) {
    const data = [
        { name: "Farmers", total: stats.totalFarmers },
        { name: "Buyers", total: stats.totalBuyers },
        { name: "Experts", total: stats.totalExperts },
    ];
    return (
        <section className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                    User Distribution
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                    Marketplace users by role
                </p>
            </div>
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
                            stroke="#e5e7eb"
                        />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#6b7280", fontSize: 12 }}
                        />

                        <YAxis
                            allowDecimals={false}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#6b7280", fontSize: 12 }}
                        />
                        <Tooltip
                            cursor={{ fill: "#f3f4f6" }}
                            formatter={(value) => [
                                Number(value).toLocaleString(),
                                "Users",
                            ]}
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
