import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import Sidebar from "@/components/shared/Sidebar";
import Navbar from "@/components/shared/Navbar";
import { getMe } from "@/service/getMe";
interface DashboardLayoutProps {
    children: ReactNode;
}
export default async function DashboardLayout({
    children,
}: DashboardLayoutProps) {
    const user = await getMe();
    if (!user.success || !user.data) {
        redirect("/login");
    }
    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar user={user} />
            <div className="flex">
                <Sidebar user={user.data} />
                <main className="min-w-0 flex-1 overflow-x-hidden p-4 pb-20 md:p-6 md:pb-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}