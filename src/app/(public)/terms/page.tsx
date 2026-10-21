import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import TermsHero from "@/app/(public)/terms/_components/TermsHero";
import TermsOverview from "@/app/(public)/terms/_components/TermsOverview";
import TermsSidebar from "@/app/(public)/terms/_components/TermsSidebar";
import TermsContent from "@/app/(public)/terms/_components/TermsContent";

export const metadata: Metadata = createPageMetadata({
    title: "Terms and Conditions",
    description:
        "Review the terms and conditions governing the use of the AgroMart marketplace.",
    path: "/terms",
});

const Page = () => {
    return (
        <main
            className="
                min-h-screen
                bg-white
                text-slate-900
                transition-colors duration-300
                dark:bg-slate-950
                dark:text-slate-100
            "
        >
            {/* Hero Section */}
            <TermsHero />

            {/* Overview Section */}
            <TermsOverview />

            {/* Terms Content and Sidebar */}
            <section
                className="
                    bg-gray-50
                    py-16
                    transition-colors duration-300
                    dark:bg-slate-950
                    lg:py-20
                "
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
                        {/* Sidebar */}
                        <TermsSidebar />

                        {/* Main Terms Content */}
                        <TermsContent />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Page;