import React from 'react';
import AboutHero from "@/app/(public)/about/_components/AboutHero";
import AboutStats from "@/app/(public)/about/_components/AboutStats";
import AboutMission from "@/app/(public)/about/_components/AboutMission";
import AboutFeatures from "@/app/(public)/about/_components/AboutFeatures";
import AboutHowItWorks from "@/app/(public)/about/_components/AboutHowItWorks";
import AboutValues from "@/app/(public)/about/_components/AboutValues";
import AboutCTA from "@/app/(public)/about/_components/AboutCTA";

const Page = () => {
    return (
        <>
            <main>
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