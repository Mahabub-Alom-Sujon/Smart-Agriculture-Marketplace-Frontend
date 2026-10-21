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
        color: "text-blue-600 dark:text-blue-400",
        bg: "bg-blue-50 dark:bg-blue-500/10",
        border: "border-blue-100 dark:border-blue-900/40",
    },
    {
        key: "totalFarmers",
        title: "Farmers",
        icon: Sprout,
        color: "text-green-600 dark:text-green-400",
        bg: "bg-green-50 dark:bg-green-500/10",
        border: "border-green-100 dark:border-green-900/40",
    },
    {
        key: "totalBuyers",
        title: "Buyers",
        icon: ShoppingBag,
        color: "text-purple-600 dark:text-purple-400",
        bg: "bg-purple-50 dark:bg-purple-500/10",
        border: "border-purple-100 dark:border-purple-900/40",
    },
    {
        key: "totalExperts",
        title: "Experts",
        icon: GraduationCap,
        color: "text-orange-600 dark:text-orange-400",
        bg: "bg-orange-50 dark:bg-orange-500/10",
        border: "border-orange-100 dark:border-orange-900/40",
    },
    {
        key: "totalProducts",
        title: "Total Products",
        icon: Package,
        color: "text-teal-600 dark:text-teal-400",
        bg: "bg-teal-50 dark:bg-teal-500/10",
        border: "border-teal-100 dark:border-teal-900/40",
    },
    {
        key: "totalCategories",
        title: "Categories",
        icon: Tags,
        color: "text-pink-600 dark:text-pink-400",
        bg: "bg-pink-50 dark:bg-pink-500/10",
        border: "border-pink-100 dark:border-pink-900/40",
    },
    {
        key: "totalOrders",
        title: "Total Orders",
        icon: ClipboardList,
        color: "text-indigo-600 dark:text-indigo-400",
        bg: "bg-indigo-50 dark:bg-indigo-500/10",
        border: "border-indigo-100 dark:border-indigo-900/40",
    },
    {
        key: "activeProducts",
        title: "Active Products",
        icon: CheckCircle2,
        color: "text-emerald-600 dark:text-emerald-400",
        bg: "bg-emerald-50 dark:bg-emerald-500/10",
        border: "border-emerald-100 dark:border-emerald-900/40",
    },
    {
        key: "soldOutProducts",
        title: "Sold Out",
        icon: PackageX,
        color: "text-red-600 dark:text-red-400",
        bg: "bg-red-50 dark:bg-red-500/10",
        border: "border-red-100 dark:border-red-900/40",
    },
] satisfies {
    key: keyof DashboardStats;
    title: string;
    icon: typeof Users;
    color: string;
    bg: string;
    border: string;
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
                        className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/10 dark:hover:border-gray-700"
                    >
                        <div className="flex items-center justify-between gap-4">
                            <div className="min-w-0">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    {item.title}
                                </p>

                                <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                                    {stats[item.key].toLocaleString()}
                                </h3>
                            </div>

                            <div
                                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105 ${item.bg} ${item.border}`}
                            >
                                <Icon
                                    className={`h-6 w-6 ${item.color}`}
                                />
                            </div>
                        </div>

                        <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-3 text-xs text-gray-500 dark:border-gray-800 dark:text-gray-400">
                            <TrendingUp className="h-4 w-4 shrink-0 text-green-600 dark:text-green-400" />

                            <span>Current marketplace statistics</span>
                        </div>
                    </article>
                );
            })}
        </div>
    );
}