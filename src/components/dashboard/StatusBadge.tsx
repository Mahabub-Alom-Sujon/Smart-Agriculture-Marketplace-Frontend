import {
    CheckCircle2,
    Clock3,
    XCircle,
    AlertCircle,
    Ban,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
type StatusVariant =
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "neutral";
interface StatusConfig {
    label: string;
    variant: StatusVariant;
    icon: LucideIcon;
}
interface StatusBadgeProps {
    status: string;
    label?: string;
    className?: string;
}
const statusConfig: Record<string, StatusConfig> = {
    ACTIVE: {
        label: "Active",
        variant: "success",
        icon: CheckCircle2,
    },
    APPROVED: {
        label: "Approved",
        variant: "success",
        icon: CheckCircle2,
    },
    COMPLETED: {
        label: "Completed",
        variant: "success",
        icon: CheckCircle2,
    },

    PENDING: {
        label: "Pending",
        variant: "warning",
        icon: Clock3,
    },

    INACTIVE: {
        label: "Inactive",
        variant: "neutral",
        icon: Ban,
    },

    SOLD_OUT: {
        label: "Sold Out",
        variant: "danger",
        icon: XCircle,
    },

    REJECTED: {
        label: "Rejected",
        variant: "danger",
        icon: XCircle,
    },

    CANCELLED: {
        label: "Cancelled",
        variant: "danger",
        icon: XCircle,
    },

    DELETED: {
        label: "Deleted",
        variant: "danger",
        icon: XCircle,
    },

    FAILED: {
        label: "Failed",
        variant: "danger",
        icon: XCircle,
    },

    INFO: {
        label: "Info",
        variant: "info",
        icon: AlertCircle,
    },
};

const variantStyles: Record<StatusVariant, string> = {
    success:
        "bg-emerald-50 text-emerald-700 ring-emerald-600/20",

    warning:
        "bg-amber-50 text-amber-700 ring-amber-600/20",

    danger:
        "bg-red-50 text-red-700 ring-red-600/20",

    info:
        "bg-blue-50 text-blue-700 ring-blue-600/20",

    neutral:
        "bg-slate-100 text-slate-600 ring-slate-500/20",
};

export default function StatusBadge({
    status,
    label,
    className = "",
}: StatusBadgeProps) {
    const normalizedStatus = status.toUpperCase();

    const config =
        statusConfig[normalizedStatus] ?? {
            label: status,
            variant: "neutral" as StatusVariant,
            icon: AlertCircle,
        };

    const Icon = config.icon;

    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${variantStyles[config.variant]} ${className}`}
        >
            <Icon size={13} />
            {label ?? config.label}
        </span>
    );
}