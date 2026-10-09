import {
    Inbox,
    Plus,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
interface EmptyStateProps {
    title?: string;
    description?: string;
    icon?: LucideIcon;
    actionLabel?: string;
    onAction?: () => void;
    className?: string;
}
export default function EmptyState({
    title = "No data found",
    description = "There is no data available at the moment.",
    icon: Icon = Inbox,
    actionLabel,
    onAction,
    className = "",
}: EmptyStateProps) {
    return (
        <div
            className={`flex min-h-75 flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-white px-6 py-12 text-center ${className}`}
        >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <Icon size={26} />
            </div>

            <h3 className="text-base font-semibold text-slate-900">
                {title}
            </h3>

            <p className="mt-1 max-w-md text-sm text-slate-500">
                {description}
            </p>
            {actionLabel && onAction && (
                <button
                    type="button"
                    onClick={onAction}
                    className="mt-5 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700"
                >
                    <Plus size={17} />

                    {actionLabel}
                </button>
            )}
        </div>
    );
}