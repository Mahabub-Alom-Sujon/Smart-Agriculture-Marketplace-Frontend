"use client";
import { useCallback, useEffect, useState } from "react";
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
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState<string | null>(null);
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
    if (loading) {
        return (
            <div className="flex min-h-96 items-center justify-center">
                <div className="text-center">
                    <RefreshCw className="mx-auto h-8 w-8 animate-spin text-green-600" />
                    <p className="mt-3 text-sm text-gray-500">
                        Loading dashboard analytics...
                    </p>
                </div>
            </div>
        );
    }
    if (error && !stats) {
        return (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                <AlertCircle className="h-8 w-8 text-red-600" />
                <h2 className="mt-3 font-semibold text-red-900">
                    Failed to load analytics
                </h2>
                <p className="mt-1 text-sm text-red-700">
                    {error}
                </p>
                <button
                    type="button"
                    onClick={() => void loadAnalytics()}
                    className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
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
        <div className="space-y-6">
            <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <div className="flex items-center gap-2">
                        <Activity className="h-6 w-6 text-green-600" />
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                            Dashboard Analytics
                        </h1>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                        Monitor your agriculture marketplace performance.
                    </p>
                </div>
                <button
                    type="button"
                    onClick={() => void loadAnalytics(true)}
                    disabled={refreshing}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    <RefreshCw
                        className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`}
                    />
                    {refreshing ? "Refreshing..." : "Refresh"}
                </button>
            </header>
            {error && (
                <div
                    role="alert"
                    className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800"
                >
                    Refresh failed: {error}. Showing the last loaded data.
                </div>
            )}
            <AnalyticsStatsCards stats={stats} />
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <UserDistributionChart stats={stats} />
                <ProductStatusChart stats={stats} />
            </div>
            <footer className="rounded-xl border border-green-100 bg-green-50 p-4">
                <p className="text-sm text-green-900">
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
