import Link from "next/link";
import {
    Plus,
    ChevronRight,
} from "lucide-react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface DashboardHeaderProps {
    title: string;
    description?: string;
    breadcrumbs?: BreadcrumbItem[];
    actionLabel?: string;
    actionHref?: string;
    actionIcon?: boolean;
    className?: string;
}

export default function DashboardHeader({
    title,
    description,
    breadcrumbs = [],
    actionLabel,
    actionHref,
    actionIcon = true,
    className = "",
}: DashboardHeaderProps) {
    return (
        <div
            className={`mb-6 ${className}`}
        >
            {breadcrumbs.length > 0 && (
                <nav
                    aria-label="Breadcrumb"
                    className="mb-3 flex items-center gap-1.5 text-sm"
                >
                    {breadcrumbs.map(
                        (item, index) => (
                            <div
                                key={`${item.label}-${index}`}
                                className="flex items-center gap-1.5"
                            >
                                {item.href ? (
                                    <Link
                                        href={item.href}
                                        className="text-slate-500 transition hover:text-emerald-600"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className="font-medium text-slate-900">
                                        {item.label}
                                    </span>
                                )}

                                {index <
                                    breadcrumbs.length -
                                        1 && (
                                    <ChevronRight
                                        size={15}
                                        className="text-slate-400"
                                    />
                                )}
                            </div>
                        )
                    )}
                </nav>
            )}

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                        {title}
                    </h1>

                    {description && (
                        <p className="mt-1 text-sm text-slate-500">
                            {description}
                        </p>
                    )}
                </div>

                {actionLabel &&
                    actionHref && (
                        <Link
                            href={actionHref}
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
                        >
                            {actionIcon && (
                                <Plus size={18} />
                            )}

                            {actionLabel}
                        </Link>
                    )}
            </div>
        </div>
    );
}