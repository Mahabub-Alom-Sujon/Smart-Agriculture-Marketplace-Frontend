import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {Toaster} from "sonner";
import {GoogleProvider} from "@/components/providers/GoogleProvider";
import {CartProvider} from "@/components/providers/CartProvider";
import {WishlistProvider} from "@/components/providers/WishlistProvider";
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
  title: "AgroNexa",
  description: "Smart Agriculture Marketplace",
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
