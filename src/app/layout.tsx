import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {Toaster} from "sonner";
import {GoogleProvider} from "@/components/providers/GoogleProvider";
import {CartProvider} from "@/components/providers/CartProvider";
import {WishlistProvider} from "@/components/providers/WishlistProvider";
import ThemeProvider from "@/components/providers/ThemeProvider";
const inter = Inter({subsets:['latin'],variable:'--font-sans'});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://smart-agriculture-marketplace-nine.vercel.app"),
  title: {
    default: "AgroMart | Smart Agriculture Marketplace",
    template: "%s | AgroMart",
  },
  description: "Buy fresh agricultural products, connect with farmers, discover farming experts, and grow your agricultural business with AgroMart.",
  applicationName: "AgroMart",

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AgroMart",
    title: "AgroMart | Smart Agriculture Marketplace",
    description:
        "Connect farmers, buyers, and agricultural experts in one marketplace.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AgroMart Smart Agriculture Marketplace",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AgroMart | Smart Agriculture Marketplace",
    description:
        "Discover agricultural products, farmers, and farming experts.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>)  {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
      <GoogleProvider>
        <CartProvider>
          <WishlistProvider>
            {children}
            <Toaster position="top-right" richColors />
          </WishlistProvider>
        </CartProvider>
      </GoogleProvider>
      </body>
    </html>
  );
}
