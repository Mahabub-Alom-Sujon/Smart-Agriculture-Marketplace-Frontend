import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import HeroSection from "@/app/(public)/_components/HomePage/hero-section";
import FeaturedProducts from "@/app/(public)/_components/HomePage/featured-products";
import Testimonials from "@/app/(public)/_components/HomePage/testimonials";
import CallToAction from "@/app/(public)/_components/HomePage/call-to-action";
import Experts from "@/app/(public)/_components/HomePage/experts";
import Categories from "@/app/(public)/_components/HomePage/categories";
import { getAllFeatureProducts } from "@/app/(public)/_actions/getFeatureProducts";
import { getAllCategories } from "@/app/(public)/_actions/getAllCategories";
import { getHomeFarmer } from "@/app/(public)/_actions/getHomeFarmer"
import Highlights from "@/app/(public)/_components/HomePage/highlights";
import Statistics from "@/app/(public)/_components/HomePage/statistics";
import FAQs from "@/app/(public)/_components/HomePage/FAQs";
import FarmersSection from "@/app/(public)/_components/HomePage/FarmersSection";

export const metadata: Metadata = createPageMetadata({
    title: "Home",
    description:
        "Explore fresh agricultural products and connect with farmers and experts on AgroMart.",
    path: "/",
});

export default async function Home() {
    const [productsResponse, categoriesResponse, farmerResponse ] = await Promise.all([
        getAllFeatureProducts(),
        getAllCategories(),
        getHomeFarmer()
    ]);

    const products = productsResponse.data ?? [];
    const categories = categoriesResponse.data ?? [];
    const farmers = farmerResponse.data ?? [];

    // Shuffle products to display a random selection on each render.
    const shuffledProducts = [...products];

    for (let i = shuffledProducts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffledProducts[i], shuffledProducts[j]] = [
            shuffledProducts[j],
            shuffledProducts[i],
        ];
    }

    return (
        <>
            <main className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
                <HeroSection />
                <Categories categories={categories} />
                <FeaturedProducts
                    products={shuffledProducts.slice(0, 4)}
                />
                <FarmersSection farmers={ farmers }/>
                {/*<Experts />*/}
                <Testimonials />
                <Highlights/>
                <Statistics/>
                <FAQs/>
                <CallToAction />
            </main>
        </>
    );
}
