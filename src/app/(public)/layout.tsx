import { ReactNode } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { getMe } from "@/service/getMe";
export default async function PublicLayout({children,}: { children: ReactNode; }) {
    const user = await getMe();
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar user={user}/>
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}