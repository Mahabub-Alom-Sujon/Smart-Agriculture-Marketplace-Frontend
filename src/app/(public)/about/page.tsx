import React from 'react';
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import AboutHero from "@/app/(public)/about/_components/AboutHero";
import AboutStats from "@/app/(public)/about/_components/AboutStats";
import AboutMission from "@/app/(public)/about/_components/AboutMission";
import AboutFeatures from "@/app/(public)/about/_components/AboutFeatures";
import AboutHowItWorks from "@/app/(public)/about/_components/AboutHowItWorks";
import AboutValues from "@/app/(public)/about/_components/AboutValues";
import AboutCTA from "@/app/(public)/about/_components/AboutCTA";
export const metadata: Metadata = createPageMetadata({
    title: "About Us",
    description: "Learn about AgroMart, our mission, and how we connect farmers, buyers, and agricultural experts.",
    path: "/about",
});
const Page = () => {
    return (
        <>
            <main className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
                <AboutHero />
                <AboutStats/>
                <AboutMission/>
                <AboutFeatures/>
                <AboutHowItWorks/>
                <AboutValues/>
                <AboutCTA/>
            </main>
        </>
    );
};

export default Page;