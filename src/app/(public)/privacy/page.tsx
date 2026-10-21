import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import React from 'react';
import PrivacyHero from "@/app/(public)/privacy/_components/PrivacyHero";
import PrivacyOverview from "@/app/(public)/privacy/_components/PrivacyOverview";
import PrivacySidebar from "@/app/(public)/privacy/_components/PrivacySidebar";
import PrivacyContent from "@/app/(public)/privacy/_components/PrivacyContent";
export const metadata: Metadata = createPageMetadata({
    title: "Privacy Policy",
    description: "Read the AgroMart privacy policy to understand how personal information is handled and protected.",
    path: "/privacy",
});
const Page = () => {
    return (
        <>
            <main className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
                <PrivacyHero/>
                <PrivacyOverview/>
                <section className="bg-gray-50 py-16 lg:py-20 bg-gray-50 py-16 transition-colors duration-300 dark:bg-slate-950 lg:py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
                            <PrivacySidebar />
                            <PrivacyContent />
                        </div>
                    </div>
                </section>
                {/*<PrivacySidebar/>*/}
                {/*<PrivacyContent/>*/}
            </main>
        </>
    );
};

export default Page;