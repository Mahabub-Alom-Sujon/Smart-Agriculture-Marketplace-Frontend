import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import HeroSection from "@/app/(public)/_components/HomePage/hero-section";
import FeaturedProducts from "@/app/(public)/_components/HomePage/featured-products";
import Farmers from "@/app/(public)/_components/HomePage/farmers";
import Testimonials from "@/app/(public)/_components/HomePage/testimonials";
import CallToAction from "@/app/(public)/_components/HomePage/call-to-action";
import Experts from "@/app/(public)/_components/HomePage/experts";
import Categories from "@/app/(public)/_components/HomePage/categories";
export const metadata: Metadata = createPageMetadata({
    title: "Home",
    description: "Explore fresh agricultural products and connect with farmers and experts on AgroMart.",
    path: "/",
});
export default function Home() {
  return (
    <>
        <HeroSection/>
        <Categories/>
        <FeaturedProducts/>
        <Farmers/>
        <Experts/>
        <Testimonials/>
        <CallToAction/>
    </>
  );
}
