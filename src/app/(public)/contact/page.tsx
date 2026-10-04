import React from 'react';
import ContactHero from "@/app/(public)/contact/_components/ContactHero";
import ContactInfo from "@/app/(public)/contact/_components/ContactInfo";
import ContactForm from "@/app/(public)/contact/_components/ContactForm";
import ContactMap from "@/app/(public)/contact/_components/ContactMap";
import ContactFAQ from "@/app/(public)/contact/_components/ContactFAQ";
import ContactCTA from "@/app/(public)/contact/_components/ContactCTA";

const Page = () => {
    return (
        <>
            <main>
                <ContactHero/>
                <ContactInfo/>
                <ContactForm/>
                <ContactMap/>
                <ContactFAQ/>
                <ContactCTA/>
            </main>
        </>
    );
};

export default Page;