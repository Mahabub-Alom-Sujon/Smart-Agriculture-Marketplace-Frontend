// "use client";
// import { useCallback, useEffect, useState } from "react";
// import {
//     Activity,
//     AlertCircle,
//     RefreshCw,
// } from "lucide-react";
// import { getDashboardStats } from "@/app/dashboard/admin/_actions/getDashboardStats";
// import AnalyticsStatsCards from "./AnalyticsStatsCards";
// import ProductStatusChart from "./ProductStatusChart";
// import UserDistributionChart from "./UserDistributionChart";
// import type { DashboardStats } from "@/types/types.analytics";
// export default function AnalyticsDashboard() {
//     const [stats, setStats] = useState<DashboardStats | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [refreshing, setRefreshing] = useState(false);
//     const [error, setError] = useState<string | null>(null);
//     const loadAnalytics = useCallback(async (isRefresh = false) => {
//         if (isRefresh) {
//             setRefreshing(true);
//         } else {
//             setLoading(true);
//         }
//         setError(null);
//         try {
//             const result = await getDashboardStats();
//             if (!result.success || !result.data) {
//                 setError(result.message);
//                 return;
//             }
//             setStats(result.data);
//         } catch {
//             setError("Unable to load dashboard analytics.");
//         } finally {
//             setLoading(false);
//             setRefreshing(false);
//         }
//     }, []);
//     useEffect(() => {
//         void loadAnalytics();
//     }, [loadAnalytics]);
//     if (loading) {
//         return (
//             <div className="flex min-h-96 items-center justify-center">
//                 <div className="text-center">
//                     <RefreshCw className="mx-auto h-8 w-8 animate-spin text-green-600" />
//                     <p className="mt-3 text-sm text-gray-500">
//                         Loading dashboard analytics...
//                     </p>
//                 </div>
//             </div>
//         );
//     }
//     if (error && !stats) {
//         return (
//             <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
//                 <AlertCircle className="h-8 w-8 text-red-600" />
//                 <h2 className="mt-3 font-semibold text-red-900">
//                     Failed to load analytics
//                 </h2>
//                 <p className="mt-1 text-sm text-red-700">
//                     {error}
//                 </p>
//                 <button
//                     type="button"
//                     onClick={() => void loadAnalytics()}
//                     className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
//                 >
//                     Try Again
//                 </button>
//             </div>
//         );
//     }
//     if (!stats) {
//         return null;
//     }
//     return (
//         <div className="space-y-6">
//             <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//                 <div>
//                     <div className="flex items-center gap-2">
//                         <Activity className="h-6 w-6 text-green-600" />
//                         <h1 className="text-2xl font-bold tracking-tight text-gray-900">
//                             Dashboard Analytics
//                         </h1>
//                     </div>
//                     <p className="mt-2 text-sm text-gray-500">
//                         Monitor your agriculture marketplace performance.
//                     </p>
//                 </div>
//                 <button
//                     type="button"
//                     onClick={() => void loadAnalytics(true)}
//                     disabled={refreshing}
//                     className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                     <RefreshCw
//                         className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`}
//                     />
//                     {refreshing ? "Refreshing..." : "Refresh"}
//                 </button>
//             </header>
//             {error && (
//                 <div
//                     role="alert"
//                     className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800"
//                 >
//                     Refresh failed: {error}. Showing the last loaded data.
//                 </div>
//             )}
//             <AnalyticsStatsCards stats={stats} />
//             <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
//                 <UserDistributionChart stats={stats} />
//                 <ProductStatusChart stats={stats} />
//             </div>
//             <footer className="rounded-xl border border-green-100 bg-green-50 p-4">
//                 <p className="text-sm text-green-900">
//                     <span className="font-semibold">
//                         Marketplace overview:
//                     </span>{" "}
//                     {stats.totalUsers.toLocaleString()} users,{" "}
//                     {stats.totalProducts.toLocaleString()} products and{" "}
//                     {stats.totalOrders.toLocaleString()} orders.
//                 </p>
//             </footer>
//         </div>
//     );
// }

"use client";
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
    Activity,
    AlertCircle,
    RefreshCw,
} from "lucide-react";

import { getDashboardStats } from "@/app/dashboard/admin/_actions/getDashboardStats";
import AnalyticsStatsCards from "./AnalyticsStatsCards";
import ProductStatusChart from "./ProductStatusChart";
import UserDistributionChart from "./UserDistributionChart";
import type { DashboardStats } from "@/types/types.analytics";
export default function AnalyticsDashboard() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const isDark = mounted && resolvedTheme === "dark";
    useEffect(() => {
        setMounted(true);
    }, []);
    const loadAnalytics = useCallback(async (isRefresh = false) => {
        if (isRefresh) {
            setRefreshing(true);
        } else {
            setLoading(true);
        }
        setError(null);
        try {
            const result = await getDashboardStats();
            if (!result.success || !result.data) {
                setError(result.message);
                return;
            }
            setStats(result.data);
        } catch {
            setError("Unable to load dashboard analytics.");
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    }, []);
    useEffect(() => {
        void loadAnalytics();
    }, [loadAnalytics]);

    const colors = {
        page: isDark ? "bg-gray-950 text-gray-100" : "bg-white text-gray-900",
        heading: isDark ? "text-gray-100" : "text-gray-900",
        description: isDark ? "text-gray-400" : "text-gray-500",
        panel: isDark
            ? "border-gray-800 bg-gray-900"
            : "border-gray-200 bg-white",
        refreshButton: isDark
            ? "border-gray-700 bg-gray-900 text-gray-200 hover:bg-gray-800"
            : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50",
        errorPanel: isDark
            ? "border-red-900/70 bg-red-950/40 text-red-300"
            : "border-red-200 bg-red-50 text-red-700",
        warningPanel: isDark
            ? "border-amber-900/70 bg-amber-950/40 text-amber-200"
            : "border-amber-200 bg-amber-50 text-amber-800",
        footer: isDark
            ? "border-green-900/70 bg-green-950/40 text-green-200"
            : "border-green-100 bg-green-50 text-green-900",
    };

    if (loading) {
        return (
            <div
                className={`flex min-h-96 items-center justify-center rounded-2xl transition-colors duration-300 ${colors.page}`}
            >
                <div className="text-center">
                    <RefreshCw className="mx-auto h-8 w-8 animate-spin text-green-600" />
                    <p className={`mt-3 text-sm ${colors.description}`}>
                        Loading dashboard analytics...
                    </p>
                </div>
            </div>
        );
    }

    if (error && !stats) {
        return (
            <div
                role="alert"
                className={`rounded-2xl border p-6 transition-colors duration-300 ${colors.errorPanel}`}
            >
                <AlertCircle className="h-8 w-8 text-red-500" />

                <h2 className="mt-3 font-semibold">
                    Failed to load analytics
                </h2>

                <p className="mt-1 text-sm">{error}</p>

                <button
                    type="button"
                    onClick={() => void loadAnalytics()}
                    className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                >
                    Try Again
                </button>
            </div>
        );
    }

    if (!stats) {
        return null;
    }

    return (
        <div className={`space-y-6 rounded-2xl transition-colors duration-300 p-6 ${colors.page}`}
        >
            {/* Dashboard Header */}
            <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <div className="flex items-center gap-2">
                        <Activity className="h-6 w-6 text-green-600" />

                        <h1
                            className={`text-2xl font-bold tracking-tight ${colors.heading}`}
                        >
                            Dashboard Analytics
                        </h1>
                    </div>

                    <p className={`mt-2 text-sm ${colors.description}`}>
                        Monitor your agriculture marketplace performance.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={() => void loadAnalytics(true)}
                    disabled={refreshing}
                    className={`inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${colors.refreshButton}`}
                >
                    <RefreshCw
                        className={`h-4 w-4 ${
                            refreshing ? "animate-spin" : ""
                        }`}
                    />

                    {refreshing ? "Refreshing..." : "Refresh"}
                </button>
            </header>

            {/* Refresh Error */}
            {error && (
                <div
                    role="alert"
                    className={`rounded-xl border px-4 py-3 text-sm ${colors.warningPanel}`}
                >
                    Refresh failed: {error}. Showing the last loaded data.
                </div>
            )}

            {/* Statistics Cards */}
            <AnalyticsStatsCards stats={stats} />

            {/* Analytics Charts */}
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <UserDistributionChart stats={stats} />
                <ProductStatusChart stats={stats} />
            </div>

            {/* Marketplace Summary */}
            <footer
                className={`rounded-xl border p-4 transition-colors duration-300 ${colors.footer}`}
            >
                <p className="text-sm">
                    <span className="font-semibold">
                        Marketplace overview:
                    </span>{" "}
                    {stats.totalUsers.toLocaleString()} users,{" "}
                    {stats.totalProducts.toLocaleString()} products and{" "}
                    {stats.totalOrders.toLocaleString()} orders.
                </p>
            </footer>
        </div>
    );
}