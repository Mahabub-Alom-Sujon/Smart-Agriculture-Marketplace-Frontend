"use client";
import {
    Users,
    Sprout,
    ShoppingBag,
    GraduationCap,
    Package,
    Tags,
    ClipboardList,
    CheckCircle2,
    PackageX,
    TrendingUp,
} from "lucide-react";
import type { DashboardStats } from "@/types/types.analytics";
interface AnalyticsStatsCardsProps {
    stats: DashboardStats;
}
const statConfig = [
    {
        key: "totalUsers",
        title: "Total Users",
        icon: Users,
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        key: "totalFarmers",
        title: "Farmers",
        icon: Sprout,
        color: "text-green-600",
        bg: "bg-green-50",
    },
    {
        key: "totalBuyers",
        title: "Buyers",
        icon: ShoppingBag,
        color: "text-purple-600",
        bg: "bg-purple-50",
    },
    {
        key: "totalExperts",
        title: "Experts",
        icon: GraduationCap,
        color: "text-orange-600",
        bg: "bg-orange-50",
    },
    {
        key: "totalProducts",
        title: "Total Products",
        icon: Package,
        color: "text-teal-600",
        bg: "bg-teal-50",
    },
    {
        key: "totalCategories",
        title: "Categories",
        icon: Tags,
        color: "text-pink-600",
        bg: "bg-pink-50",
    },
    {
        key: "totalOrders",
        title: "Total Orders",
        icon: ClipboardList,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
    },
    {
        key: "activeProducts",
        title: "Active Products",
        icon: CheckCircle2,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
    },
    {
        key: "soldOutProducts",
        title: "Sold Out",
        icon: PackageX,
        color: "text-red-600",
        bg: "bg-red-50",
    },
] satisfies {
    key: keyof DashboardStats;
    title: string;
    icon: typeof Users;
    color: string;
    bg: string;
}[];
export default function AnalyticsStatsCards({
    stats,
}: AnalyticsStatsCardsProps) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {statConfig.map((item) => {
                const Icon = item.icon;
                return (
                    <article
                        key={item.key}
                        className="rounded-2xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500">
                                    {item.title}
                                </p>

                                <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                                    {stats[item.key].toLocaleString()}
                                </h3>
                            </div>
                            <div
                                className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}
                            >
                                <Icon
                                    className={`h-6 w-6 ${item.color}`}
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                            <TrendingUp className="h-4 w-4 text-green-600" />
                            <span>Current marketplace statistics</span>
                        </div>
                    </article>
                );
            })}
        </div>
    );
}
