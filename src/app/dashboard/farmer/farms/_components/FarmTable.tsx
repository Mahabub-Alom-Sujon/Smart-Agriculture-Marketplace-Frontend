"use client";

import { useState } from "react";
import {
    Sprout,
    MoreHorizontal,
    Eye,
    Pencil,
    Trash2,
    MapPin,
    Ruler,
    Layers3,
} from "lucide-react";
import moment from "moment";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import type { Farm } from "@/types/types.farm";
import { DeleteAlert } from "@/lib/DeleteAlert";
import { deleteFarm } from "@/app/dashboard/farmer/farms/_actions/deleteFarm";

interface FarmTableProps {
    farms: Farm[];
}

export default function FarmTable({
    farms,
}: FarmTableProps) {
    const router = useRouter();

    const [openActionId, setOpenActionId] = useState<string | null>(null);
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const handleView = (id: string): void => {
        router.push(`/dashboard/farmer/farms/${id}`);
    };

    const handleUpdate = (id: string): void => {
        router.push(`/dashboard/farmer/farms/${id}/edit`);
};

const handleDelete = async (id: string): Promise<void> => {
    const alertResult = await DeleteAlert();

    if (!alertResult.isConfirmed) {
        return;
    }

    setDeletingId(id);

    try {
        const result = await deleteFarm(id);

        if (!result.success) {
            toast.error(result.message);
            return;
        }

        toast.success(result.message);
        router.refresh();
    } catch {
        toast.error("Failed to delete farm");
    } finally {
        setDeletingId(null);
    }
};

return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {/* Header */}
        <div className="border-b border-slate-200 px-5 py-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="font-semibold text-slate-900">
                        Farm List
                    </h2>

                    <p className="mt-1 text-xs text-slate-500">
                        Manage your registered farms and land information
                    </p>
                </div>

                <Sprout className="h-5 w-5 text-green-600" />
            </div>
        </div>

        {/* Empty State */}
        {farms.length === 0 ? (
            <div className="flex min-h-60 flex-col items-center justify-center px-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                    <Sprout className="h-7 w-7 text-emerald-600" />
                </div>

                <h3 className="mt-4 font-semibold text-slate-900">
                    No farms found
                </h3>

                <p className="mt-1 max-w-sm text-sm text-slate-500">
                    Your registered farms will appear here when available.
                </p>
            </div>
        ) : (
            <div className="overflow-x-auto">
                <table className="w-full min-w-[1000px]">
                    <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                        {[
                            "Farm",
                            "Location",
                            "Land Size",
                            "Soil Type",
                            "Created",
                            "Action",
                        ].map((heading) => (
                            <th
                                key={heading}
                                className={`px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 ${
                                    heading === "Action"
                                        ? "text-right"
                                        : ""
                                }`}
                            >
                                {heading}
                            </th>
                        ))}
                    </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">
                    {farms.map((farm) => (
                        <tr
                            key={farm.id}
                            className="transition-colors hover:bg-slate-50"
                        >
                            {/* Farm Name */}
                            <td className="px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                                        <Sprout className="h-5 w-5 text-emerald-600" />
                                    </div>

                                    <div>
                                        <p className="font-semibold text-slate-900">
                                            {farm.farmName}
                                        </p>

                                        <p className="mt-0.5 text-xs text-slate-400">
                                            {farm.id.slice(0, 8)}...
                                        </p>
                                    </div>
                                </div>
                            </td>

                            {/* Location */}
                            <td className="px-5 py-4">
                                <div className="flex max-w-xs items-start gap-2">
                                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />

                                    <span className="line-clamp-2 text-sm text-slate-600">
                                                {farm.location || "No location"}
                                            </span>
                                </div>
                            </td>

                            {/* Land Size */}
                            <td className="whitespace-nowrap px-5 py-4">
                                <div className="flex items-center gap-2">
                                    <Ruler className="h-4 w-4 text-slate-400" />

                                    <span className="text-sm font-medium text-slate-700">
                                                {farm.landSize != null
                                                    ? `${farm.landSize.toLocaleString()} acres`
                                                    : "Not specified"}
                                            </span>
                                </div>
                            </td>

                            {/* Soil Type */}
                            <td className="px-5 py-4">
                                {farm.soilType ? (
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                                                <Layers3 className="h-3.5 w-3.5" />
                                        {farm.soilType}
                                            </span>
                                ) : (
                                    <span className="text-sm text-slate-400">
                                                Not specified
                                            </span>
                                )}
                            </td>

                            {/* Created Date */}
                            <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-500">
                                {moment(farm.createdAt).isValid()
                                    ? moment(farm.createdAt).format(
                                        "MMM Do, YYYY",
                                    )
                                    : "—"}
                            </td>

                            {/* Actions */}
                            <td className="relative px-5 py-4 text-right">
                                <button
                                    type="button"
                                    aria-label={`Actions for ${farm.farmName}`}
                                    aria-expanded={
                                        openActionId === farm.id
                                    }
                                    disabled={
                                        deletingId === farm.id
                                    }
                                    onClick={() =>
                                        setOpenActionId((current) =>
                                            current === farm.id
                                                ? null
                                                : farm.id,
                                        )
                                    }
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 disabled:opacity-50"
                                >
                                    <MoreHorizontal className="h-5 w-5" />
                                </button>

                                {openActionId === farm.id && (
                                    <div className="absolute right-5 top-14 z-50 w-48 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 text-left shadow-lg">
                                        {/* View Details */}
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setOpenActionId(null);
                                                handleView(farm.id);
                                            }}
                                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-50"
                                        >
                                            <Eye className="h-4 w-4 text-slate-500" />
                                            <span>View Details</span>
                                        </button>

                                        {/* Update */}
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setOpenActionId(null);
                                                handleUpdate(farm.id);
                                            }}
                                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-emerald-700 transition-colors hover:bg-emerald-50"
                                        >
                                            <Pencil className="h-4 w-4" />
                                            <span>Update</span>
                                        </button>

                                        {/* Delete */}
                                        <button
                                            type="button"
                                            disabled={
                                                deletingId === farm.id
                                            }
                                            onClick={() => {
                                                setOpenActionId(null);
                                                void handleDelete(farm.id);
                                            }}
                                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 transition-colors hover:bg-red-50 disabled:opacity-50"
                                        >
                                            <Trash2 className="h-4 w-4" />

                                            <span>
                                                        {deletingId === farm.id
                                                            ? "Deleting..."
                                                            : "Delete"}
                                                    </span>
                                        </button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )}
    </div>
);
}