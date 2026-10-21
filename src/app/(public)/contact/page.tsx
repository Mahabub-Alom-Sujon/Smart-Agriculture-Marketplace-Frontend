import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import ContactHero from "@/app/(public)/contact/_components/ContactHero";
import ContactInfo from "@/app/(public)/contact/_components/ContactInfo";
import ContactForm from "@/app/(public)/contact/_components/ContactForm";
import ContactMap from "@/app/(public)/contact/_components/ContactMap";
import ContactFAQ from "@/app/(public)/contact/_components/ContactFAQ";
import ContactCTA from "@/app/(public)/contact/_components/ContactCTA";
export const metadata: Metadata = createPageMetadata({
    title: "Contact Us",
    description: "Contact the AgroNexa team for assistance, marketplace inquiries, and agricultural support.",
    path: "/contact",
});
const Page = () => {
    return (
        <main className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">
            {/* Contact Hero Section */}
            <ContactHero />
            {/* Contact Information Section */}
            <ContactInfo />
            {/* Contact Form Section */}
            <ContactForm />
            {/* Contact Map Section */}
            <ContactMap />
            {/* Frequently Asked Questions */}
            <ContactFAQ />
            {/* Call To Action Section */}
            <ContactCTA />
        </main>
    );
};

export default Page;