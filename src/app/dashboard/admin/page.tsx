import AnalyticsDashboard from "@/app/dashboard/admin/_components/AnalyticsDashboard";
export const metadata = {
    title: "Dashboard Analytics | AgroMart",
    description: "Smart Agriculture Marketplace analytics dashboard",
};
export default function AnalyticsPage() {
    return (
        <main className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
            <div className="mx-auto w-full max-w-7xl">
                <AnalyticsDashboard />
            </div>
        </main>
    );
}