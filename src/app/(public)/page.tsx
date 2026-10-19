// import type { Metadata } from "next";
// import { createPageMetadata } from "@/lib/metadata";
// import HeroSection from "@/app/(public)/_components/HomePage/hero-section";
// import FeaturedProducts from "@/app/(public)/_components/HomePage/featured-products";
// import Farmers from "@/app/(public)/_components/HomePage/farmers";
// import Testimonials from "@/app/(public)/_components/HomePage/testimonials";
// import CallToAction from "@/app/(public)/_components/HomePage/call-to-action";
// import Experts from "@/app/(public)/_components/HomePage/experts";
// import Categories from "@/app/(public)/_components/HomePage/categories";
// import { getAllFeatureProducts } from "@/app/(public)/_actions/getFeatureProducts";
// import { getAllCategories } from "@/app/(public)/_actions/getAllCategories";
// export const metadata: Metadata = createPageMetadata({
//     title: "Home",
//     description: "Explore fresh agricultural products and connect with farmers and experts on AgroMart.",
//     path: "/",
// });
// export default async function Home() {
//     const response = await getAllFeatureProducts();
//     const categoriesResponse = await getAllCategories();
//     const categories = categoriesResponse.data
//     const products = response.data;
//     const shuffledProducts = [...products];
//     for (let i = shuffledProducts.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [shuffledProducts[i], shuffledProducts[j]] = [
//             shuffledProducts[j],
//             shuffledProducts[i],
//         ];
//     }
//   return (
//     <>
//         <>
//             <HeroSection/>
//             <Categories
//                 categories ={ categories }
//             />
//             <FeaturedProducts
//                 products={shuffledProducts.slice(0, 4)}
//             />
//             <Farmers/>
//             <Experts/>
//             <Testimonials/>
//             <CallToAction/>
//         </>
//
//     </>
//   );
// }

import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/metadata";

import HeroSection from "@/app/(public)/_components/HomePage/hero-section";
import FeaturedProducts from "@/app/(public)/_components/HomePage/featured-products";
import Farmers from "@/app/(public)/_components/HomePage/farmers";
import Testimonials from "@/app/(public)/_components/HomePage/testimonials";
import CallToAction from "@/app/(public)/_components/HomePage/call-to-action";
import Experts from "@/app/(public)/_components/HomePage/experts";
import Categories from "@/app/(public)/_components/HomePage/categories";

import { getAllFeatureProducts } from "@/app/(public)/_actions/getFeatureProducts";
import { getAllCategories } from "@/app/(public)/_actions/getAllCategories";

export const metadata: Metadata = createPageMetadata({
    title: "Home",
    description:
        "Explore fresh agricultural products and connect with farmers and experts on AgroMart.",
    path: "/",
});

export default async function Home() {
    const [productsResponse, categoriesResponse] = await Promise.all([
        getAllFeatureProducts(),
        getAllCategories(),
    ]);

    const products = productsResponse.data ?? [];
    const categories = categoriesResponse.data ?? [];

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
            <HeroSection />
            <Categories categories={categories} />
            <FeaturedProducts
                products={shuffledProducts.slice(0, 4)}
            />
            <Farmers />
            {/*<Experts />*/}
            <Testimonials />
            <CallToAction />
        </>
    );
}
