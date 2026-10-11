import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import React from 'react';
export const metadata: Metadata = createPageMetadata({
    title: "Product Categories",
    description: "Browse agricultural product categories and discover products for your farming needs.",
    path: "/categories",
});
const Page = () => {
    return (
        <>

        </>
    );
};

export default Page;