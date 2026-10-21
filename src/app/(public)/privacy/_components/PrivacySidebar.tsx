"use client";
import { List } from "lucide-react";
const sections = [
    {
        id: "introduction",
        title: "Introduction",
    },
    {
        id: "information",
        title: "Information We Collect",
    },
    {
        id: "usage",
        title: "How We Use Information",
    },
    {
        id: "sharing",
        title: "Information Sharing",
    },
    {
        id: "security",
        title: "Data Security",
    },
    {
        id: "cookies",
        title: "Cookies",
    },
    {
        id: "rights",
        title: "Your Privacy Rights",
    },
    {
        id: "children",
        title: "Children's Privacy",
    },
    {
        id: "updates",
        title: "Policy Updates",
    },
    {
        id: "contact",
        title: "Contact Us",
    },
];

const PrivacySidebar = () => {
    return (
        <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-gray-100 bg-white p-5 text-gray-900 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
                <div className="mb-4 flex items-center gap-2">
                    <List className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <h3 className="font-bold text-gray-900 dark:text-slate-100">
                        On this page
                    </h3>
                </div>
                <nav className="space-y-1">
                    {sections.map((section) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors duration-200 hover:bg-green-50 hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 dark:text-slate-400 dark:hover:bg-green-900/20 dark:hover:text-green-400 dark:focus-visible:ring-green-400"
                        >
                            {section.title}
                        </a>
                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default PrivacySidebar;