import type { Metadata } from "next";
const siteUrl = "https://smart-agriculture-marketplace-nine.vercel.app";
interface PageMetadataProps {
    title: string;
    description: string;
    path: string;
}
export function createPageMetadata({
   title,
   description,
   path,
}: PageMetadataProps): Metadata {
    const url = `${siteUrl}${path}`;

    return {
        title,
        description,

        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: "AgroMart",
            locale: "en_US",
            type: "website",
            images: [
                {
                    url: "/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: "AgroMart - Smart Agriculture Marketplace",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/og-image.png"],
        },
    };
}