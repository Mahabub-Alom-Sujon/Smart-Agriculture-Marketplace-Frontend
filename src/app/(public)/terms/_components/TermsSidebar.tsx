"use client";
import { List } from "lucide-react";
const sections = [
    {
        id: "acceptance",
        title: "Acceptance of Terms",
    },
    {
        id: "eligibility",
        title: "Eligibility",
    },
    {
        id: "accounts",
        title: "User Accounts",
    },
    {
        id: "marketplace",
        title: "Marketplace Rules",
    },
    {
        id: "farmers",
        title: "Farmer Responsibilities",
    },
    {
        id: "buyers",
        title: "Buyer Responsibilities",
    },
    {
        id: "products",
        title: "Products & Listings",
    },
    {
        id: "payments",
        title: "Orders & Payments",
    },
    {
        id: "prohibited",
        title: "Prohibited Activities",
    },
    {
        id: "intellectual",
        title: "Intellectual Property",
    },
    {
        id: "third-party",
        title: "Third-Party Services",
    },
    {
        id: "liability",
        title: "Limitation of Liability",
    },
    {
        id: "termination",
        title: "Account Termination",
    },
    {
        id: "changes",
        title: "Changes to Terms",
    },
    {
        id: "contact",
        title: "Contact Us",
    },
];
const TermsSidebar = () => {
    return (
        <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                    <List className="h-5 w-5 text-green-600" />

                    <h3 className="font-bold text-gray-900">
                        On this page
                    </h3>
                </div>
                <nav className="max-h-[70vh] space-y-1 overflow-y-auto pr-1">
                    {sections.map((section) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition hover:bg-green-50 hover:text-green-700"
                        >
                            {section.title}
                        </a>
                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default TermsSidebar;