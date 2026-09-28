import React from 'react';
import Link from "next/link";
import {
    Leaf,
} from "lucide-react";
const Footer = () => {
    return (
        <>
            <footer className="border-t bg-slate-950 text-slate-300">
                <div className="container mx-auto px-4 py-14 lg:px-8">
                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <Link href="/" className="flex items-center gap-2">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white">
                                    <Leaf className="h-6 w-6" />
                                </div>
                                <span className="text-xl font-bold text-white">AgroNexa</span>
                            </Link>
                            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
                                A smart agriculture marketplace connecting farmers, buyers
                                and agriculture experts.
                            </p>
                        </div>
                        <FooterColumn
                            title="Marketplace"
                            links={[
                                ["Products", "/products"],
                                ["Categories", "/categories"],
                                ["Farmers", "/farmers"],
                                ["Experts", "/experts"],
                            ]}
                        />
                        <FooterColumn
                            title="Company"
                            links={[
                                ["About Us", "/about"],
                                ["Contact", "/contact"],
                                ["Privacy Policy", "/privacy"],
                                ["Terms & Conditions", "/terms"],
                            ]}
                        />
                        <div>
                            <h3 className="font-semibold text-white">Contact</h3>

                            <div className="mt-5 space-y-3 text-sm text-slate-400">
                                <p>Dhaka, Bangladesh</p>
                                <p>support@agromart.com</p>
                                <p>+880 1700-000000</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 flex flex-col justify-between gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row">
                        <p>© {new Date().getFullYear()} AgroMart. All rights reserved.</p>
                        <p>Built for a smarter agriculture ecosystem.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};
export default Footer;
function FooterColumn({title, links,}: {
    title: string;
    links: [string, string][];
}) {
    return (
        <div>
            <h3 className="font-semibold text-white">{title}</h3>

            <div className="mt-5 space-y-3">
                {links.map(([label, href]) => (
                    <Link
                        key={label}
                        href={href}
                        className="block text-sm text-slate-400 transition hover:text-green-400"
                    >
                        {label}
                    </Link>
                ))}
            </div>
        </div>
    );
}