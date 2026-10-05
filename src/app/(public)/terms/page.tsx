import React from 'react';
import TermsHero from "@/app/(public)/terms/_components/TermsHero";
import TermsOverview from "@/app/(public)/terms/_components/TermsOverview";
import TermsSidebar from "@/app/(public)/terms/_components/TermsSidebar";
import TermsContent from "@/app/(public)/terms/_components/TermsContent";

const Page = () => {
    return (
        <>
            <main>
                <TermsHero/>
                <TermsOverview />
                <section className="bg-gray-50 py-16 lg:py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
                            <TermsSidebar />
                            <TermsContent />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Page;