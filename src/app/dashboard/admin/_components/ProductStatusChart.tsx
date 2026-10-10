"use client";
import {
    Cell,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from "recharts";
import type { DashboardStats } from "@/types/types.analytics";
interface ProductStatusChartProps {
    stats: DashboardStats;
}
const COLORS = ["#16a34a", "#f59e0b"];
export default function ProductStatusChart({
   stats,
}: ProductStatusChartProps) {
    const data = [
        {
            name: "Active",
            value: stats.activeProducts,
        },
        {
            name: "Sold Out",
            value: stats.soldOutProducts,
        },
    ];

    return (
        <section className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                    Product Status
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                    Active and sold-out product distribution
                </p>
            </div>
            <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={65}
                            outerRadius={95}
                            paddingAngle={4}
                            stroke="none"
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={entry.name}
                                    fill={COLORS[index]}
                                />
                            ))}
                        </Pie>

                        <Tooltip
                            formatter={(value) => [
                                Number(value).toLocaleString(),
                                "Products",
                            ]}
                        />

                        <Legend verticalAlign="bottom" />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-3">
                {data.map((item, index) => (
                    <div
                        key={item.name}
                        className="rounded-xl bg-gray-50 p-3"
                    >
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span
                                className="h-2.5 w-2.5 rounded-full"
                                style={{ backgroundColor: COLORS[index] }}
                            />
                            {item.name}
                        </div>

                        <p className="mt-2 text-xl font-bold text-gray-900">
                            {item.value.toLocaleString()}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
