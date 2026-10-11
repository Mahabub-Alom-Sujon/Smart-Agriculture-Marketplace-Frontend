"use client";

import { useState } from "react";
import {
    Sprout,
    MoreHorizontal,
    Eye,
    Pencil,
    Trash2,
    CalendarDays,
    Wheat,
    Tractor,
} from "lucide-react";
import moment from "moment";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import type { Crop, CropStatus } from "@/types/type.crop";
import { DeleteAlert } from "@/lib/DeleteAlert";
import { deleteCrop } from "@/app/dashboard/farmer/crops/_actions/deleteCrop";

interface CropTableProps {
    crops: Crop[];
}

const statusStyles: Record<
    CropStatus,
    { label: string; className: string }
> = {
    PLANNED: {
        label: "Planned",
        className: "bg-blue-50 text-blue-700",
    },
    GROWING: {
        label: "Growing",
        className: "bg-emerald-50 text-emerald-700",
    },
    HARVESTED: {
        label: "Harvested",
        className: "bg-green-100 text-green-800",
    },
};

export default function CropTable({ crops }: CropTableProps) {
    const router = useRouter();

    const [openActionId, setOpenActionId] = useState<string | null>(null);
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const handleView = (id: string): void => {
        router.push(`/dashboard/farmer/crops/${id}`);
    };
    const handleUpdate = (id: string): void => {
        router.push(`/dashboard/farmer/crops/${id}/edit`);
};
const handleDelete = async (id: string): Promise<void> => {
    const alertResult = await DeleteAlert();

    if (!alertResult.isConfirmed) {
        return;
    }

    setDeletingId(id);

    try {
        const result = await deleteCrop(id);

        if (!result.success) {
            toast.error(result.message);
            return;
        }

        toast.success(result.message);
        router.refresh();
    } catch {
        toast.error("Failed to delete crop");
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
                        Crop List
                    </h2>

                    <p className="mt-1 text-xs text-slate-500">
                        Manage your crops, planting schedules, harvest
                        dates, and crop status
                    </p>
                </div>

                <Sprout className="h-5 w-5 text-green-600" />
            </div>
        </div>

        {/* Empty State */}
        {crops.length === 0 ? (
            <div className="flex min-h-60 flex-col items-center justify-center px-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                    <Wheat className="h-7 w-7 text-emerald-600" />
                </div>

                <h3 className="mt-4 font-semibold text-slate-900">
                    No crops found
                </h3>

                <p className="mt-1 max-w-sm text-sm text-slate-500">
                    Your registered crops will appear here when available.
                </p>
            </div>
        ) : (
            <div className="overflow-x-auto">
                <table className="w-full min-w-[1100px]">
                    <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                        {[
                            "Crop",
                            "Farm",
                            "Planting Date",
                            "Harvest Date",
                            "Status",
                            "Created",
                            "Action",
                        ].map((heading) => (
                            <th
                                key={heading}
                                className={`px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 ${
                                    heading === "Action" ? "text-right" : ""
                                }`}
                            >
                                {heading}
                            </th>
                        ))}
                    </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">
                    {crops.map((crop) => {
                        const status = statusStyles[crop.status];

                        return (
                            <tr
                                key={crop.id}
                                className="transition-colors hover:bg-slate-50"
                            >
                                {/* Crop Name */}
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                                            <Sprout className="h-5 w-5 text-emerald-600" />
                                        </div>

                                        <div>
                                            <p className="font-semibold text-slate-900">
                                                {crop.name}
                                            </p>

                                            <p className="mt-0.5 text-xs text-slate-500">
                                                {crop.variety || "No variety"}
                                            </p>

                                            <p className="mt-0.5 text-xs text-slate-400">
                                                {crop.id.slice(0, 8)}...
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                {/* Farm Information */}
                                <td className="px-5 py-4">
                                    <div className="flex items-start gap-2">
                                        <Tractor className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />

                                        <div>
                                            <p className="text-sm font-medium text-slate-700">
                                                {crop.farm?.farmName || "Unknown farm"}
                                            </p>

                                            <p className="mt-0.5 text-xs text-slate-500">
                                                {crop.farm?.location || "No location"}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                {/* Planting Date */}
                                <td className="whitespace-nowrap px-5 py-4">
                                    <div className="flex items-center gap-2">
                                        <CalendarDays className="h-4 w-4 text-slate-400" />

                                        <span className="text-sm text-slate-600">
                                                    {crop.plantingDate &&
                                                    moment(crop.plantingDate).isValid()
                                                        ? moment(crop.plantingDate).format(
                                                            "MMM Do, YYYY",
                                                        )
                                                        : "Not specified"}
                                                </span>
                                    </div>
                                </td>

                                {/* Harvest Date */}
                                <td className="whitespace-nowrap px-5 py-4">
                                    <div className="flex items-center gap-2">
                                        <CalendarDays className="h-4 w-4 text-slate-400" />

                                        <span className="text-sm text-slate-600">
                                                    {crop.harvestDate &&
                                                    moment(crop.harvestDate).isValid()
                                                        ? moment(crop.harvestDate).format(
                                                            "MMM Do, YYYY",
                                                        )
                                                        : "Not specified"}
                                                </span>
                                    </div>
                                </td>

                                {/* Crop Status */}
                                <td className="px-5 py-4">
                                            <span
                                                className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                                                    status?.className ??
                                                    "bg-slate-100 text-slate-700"
                                                }`}
                                            >
                                                {status?.label ?? crop.status}
                                            </span>
                                </td>

                                {/* Created Date */}
                                <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-500">
                                    {moment(crop.createdAt).isValid()
                                        ? moment(crop.createdAt).format(
                                            "MMM Do, YYYY",
                                        )
                                        : "—"}
                                </td>

                                {/* Actions */}
                                <td className="relative px-5 py-4 text-right">
                                    <button
                                        type="button"
                                        aria-label={`Actions for ${crop.name}`}
                                        aria-expanded={
                                            openActionId === crop.id
                                        }
                                        disabled={
                                            deletingId === crop.id
                                        }
                                        onClick={() =>
                                            setOpenActionId((current) =>
                                                current === crop.id
                                                    ? null
                                                    : crop.id,
                                            )
                                        }
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 disabled:opacity-50"
                                    >
                                        <MoreHorizontal className="h-5 w-5" />
                                    </button>

                                    {openActionId === crop.id && (
                                        <div className="absolute right-5 top-14 z-50 w-48 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 text-left shadow-lg">
                                            {/* View Details */}
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setOpenActionId(null);
                                                    handleView(crop.id);
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
                                                    handleUpdate(crop.id);
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
                                                    deletingId === crop.id
                                                }
                                                onClick={() => {
                                                    setOpenActionId(null);
                                                    void handleDelete(crop.id);
                                                }}
                                                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 transition-colors hover:bg-red-50 disabled:opacity-50"
                                            >
                                                <Trash2 className="h-4 w-4" />

                                                <span>
                                                            {deletingId === crop.id
                                                                ? "Deleting..."
                                                                : "Delete"}
                                                        </span>
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        )}
    </div>
);
}