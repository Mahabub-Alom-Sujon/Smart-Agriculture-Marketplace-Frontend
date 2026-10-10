
"use client";

import Image from "next/image";
import { useState } from "react";
import {
    Stethoscope,
    MoreHorizontal,
    Eye,
    Pencil,
    Trash2,
    UserRound,
    Sprout,
} from "lucide-react";
import moment from "moment";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import type { Consultation } from "@/types/types.consultation";
import { DeleteAlert } from "@/lib/DeleteAlert";
import { deleteConsultation } from "@/app/dashboard/farmer/consultations/_actions/deleteConsultation";

interface ConsultationTableProps {
    consultations: Consultation[];
}

const statusStyles: Record<string, string> = {
    PENDING: "bg-amber-50 text-amber-700",
    ACCEPTED: "bg-blue-50 text-blue-700",
    COMPLETED: "bg-emerald-50 text-emerald-700",
    CANCELLED: "bg-red-50 text-red-600",
};

export default function ConsultationTable({
                                              consultations,
                                          }: ConsultationTableProps) {
    const router = useRouter();

    const [openActionId, setOpenActionId] = useState<string | null>(null);
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const handleView = (id: string) => {
        router.push(`/dashboard/farmer/consultations/${id}`);
    };

    const handleUpdate = (id: string) => {
        router.push(`/dashboard/farmer/consultations/${id}/edit`);
    };

    const handleDelete = async (id: string) => {
        const alertResult = await DeleteAlert();

        if (!alertResult.isConfirmed) {
            return;
        }

        setDeletingId(id);

        try {
            const result = await deleteConsultation(id);

            if (!result.success) {
                toast.error(result.message);
                return;
            }

            toast.success(result.message);
            router.refresh();
        } catch {
            toast.error("Failed to delete consultation");
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
                            Consultation List
                        </h2>
                        <p className="mt-1 text-xs text-slate-500">
                            All farmer consultations and expert advice
                        </p>
                    </div>

                    <Stethoscope className="h-5 w-5 text-green-600" />
                </div>
            </div>

            {/* Empty State */}
            {consultations.length === 0 ? (
                <div className="flex min-h-60 flex-col items-center justify-center px-6 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                        <Stethoscope className="h-7 w-7 text-emerald-600" />
                    </div>

                    <h3 className="mt-4 font-semibold text-slate-900">
                        No consultations found
                    </h3>

                    <p className="mt-1 max-w-sm text-sm text-slate-500">
                        Consultations will appear here when available.
                    </p>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[1100px]">
                        <thead>
                        <tr className="border-b border-slate-200 bg-slate-50">
                            {[
                                "Crop",
                                "Farmer",
                                "Problem",
                                "Expert Advice",
                                "Status",
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
                        {consultations.map((consultation) => (
                            <tr
                                key={consultation.id}
                                className="transition-colors hover:bg-slate-50"
                            >
                                {/* Crop */}
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-emerald-50">
                                            {consultation.image ? (
                                                <Image
                                                    src={consultation.image}
                                                    alt={
                                                        consultation.cropName ??
                                                        "Crop image"
                                                    }
                                                    fill
                                                    sizes="44px"
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            ) : (
                                                <Sprout className="h-5 w-5 text-emerald-600" />
                                            )}
                                        </div>

                                        <div>
                                            <p className="font-semibold text-slate-900">
                                                {consultation.cropName ||
                                                    "Unknown Crop"}
                                            </p>
                                            <p className="mt-0.5 text-xs text-slate-400">
                                                {consultation.id.slice(0, 8)}...
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                {/* Farmer */}
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100">
                                            <UserRound className="h-4 w-4 text-slate-500" />
                                        </div>

                                        <div>
                                            <p className="font-medium text-slate-800">
                                                {consultation.farmer?.name ??
                                                    "Unknown Farmer"}
                                            </p>
                                            <p className="mt-0.5 text-xs text-slate-500">
                                                {consultation.farmer?.email ??
                                                    "No email"}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                {/* Problem */}
                                <td className="max-w-xs px-5 py-4">
                                    <p className="line-clamp-2 text-sm text-slate-600">
                                        {consultation.problem ||
                                            "No problem description"}
                                    </p>
                                </td>

                                {/* Expert Advice */}
                                <td className="max-w-xs px-5 py-4">
                                    <p className="line-clamp-2 text-sm font-medium text-slate-700">
                                        {consultation.advice?.diagnosis ??
                                            "No diagnosis yet"}
                                    </p>
                                    <p className="mt-1 text-xs text-slate-500">
                                        {consultation.advice?.expert?.name ??
                                            "No expert assigned"}
                                    </p>
                                </td>

                                {/* Status */}
                                <td className="px-5 py-4">
                                        <span
                                            className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${
                                                statusStyles[
                                                    consultation.status
                                                    ] ??
                                                "bg-slate-100 text-slate-600"
                                            }`}
                                        >
                                            {consultation.status.replace(
                                                /_/g,
                                                " ",
                                            )}
                                        </span>
                                </td>

                                {/* Created */}
                                <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-500">
                                    {moment(
                                        consultation.createdAt,
                                    ).format("MMM Do, YYYY")}
                                </td>

                                {/* Actions */}
                                <td className="relative px-5 py-4 text-right">
                                    <button
                                        type="button"
                                        aria-label={`Actions for ${consultation.cropName ?? "crop"} consultation`}
                                        aria-expanded={
                                            openActionId === consultation.id
                                        }
                                        disabled={
                                            deletingId === consultation.id
                                        }
                                        onClick={() =>
                                            setOpenActionId((current) =>
                                                current === consultation.id
                                                    ? null
                                                    : consultation.id,
                                            )
                                        }
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 disabled:opacity-50"
                                    >
                                        <MoreHorizontal className="h-5 w-5" />
                                    </button>

                                    {openActionId === consultation.id && (
                                        <div className="absolute right-5 top-14 z-50 w-48 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 text-left shadow-lg">
                                            {/* View */}
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setOpenActionId(null);
                                                    handleView(
                                                        consultation.id,
                                                    );
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
                                                    handleUpdate(
                                                        consultation.id,
                                                    );
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
                                                    deletingId ===
                                                    consultation.id
                                                }
                                                onClick={() => {
                                                    setOpenActionId(null);
                                                    void handleDelete(
                                                        consultation.id,
                                                    );
                                                }}
                                                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 transition-colors hover:bg-red-50 disabled:opacity-50"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                                <span>
                                                        {deletingId ===
                                                        consultation.id
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
