"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    GraduationCap,
    MoreHorizontal,
    Eye,
    Pencil,
    Trash2,
    Mail,
    MapPin,
    Award,
    BriefcaseBusiness,
} from "lucide-react";
import moment from "moment";
import { toast } from "sonner";
import type { Expert } from "@/types/types.expert";
import { DeleteAlert } from "@/lib/DeleteAlert";
import { deleteExpert } from "@/app/dashboard/admin/experts/_actions/deleteExpert";
interface ExpertsTableProps {
    experts: Expert[];
}

export default function ExpertsTable({
    experts,
}: ExpertsTableProps) {
    const router = useRouter();
    const [openActionId, setOpenActionId] = useState<
        string | null
    >(null);
    const handleView = (expertId: string) => {
        router.push(`/dashboard/admin/experts/${expertId}`);
    };

    const handleUpdate = (expertId: string) => {
        router.push(`/dashboard/admin/experts/${expertId}/edit`
    );
};

const handleDelete = async (id: string) => {
    try {
        const alertResult = await DeleteAlert();
        if (!alertResult.isConfirmed) {
            return;
        }
        const result = await deleteExpert(id);
        if (result.success) {
            toast.success(result.message);
            router.refresh();
        } else {
            toast.error(result.message);
        }
    } catch {
        toast.error("Failed to delete expert. Please try again.");
    }
};

return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {/* Header */}
        <div className="border-b border-slate-200 px-5 py-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="font-semibold text-slate-900">
                        Expert List
                    </h2>

                    <p className="mt-1 text-xs text-slate-500">
                        Manage agricultural experts and their
                        professional information.
                    </p>
                </div>

                <GraduationCap className="h-5 w-5 text-green-600" />
            </div>
        </div>

        {/* Empty State */}
        {experts.length === 0 ? (
            <div className="flex min-h-60 flex-col items-center justify-center px-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                    <GraduationCap className="h-7 w-7 text-emerald-600" />
                </div>

                <h3 className="mt-4 font-semibold text-slate-900">
                    No experts found
                </h3>

                <p className="mt-1 max-w-sm text-sm text-slate-500">
                    Try changing your search keyword or add a
                    new agricultural expert.
                </p>
            </div>
        ) : (
            <div className="overflow-x-auto">
                <table className="w-full min-w-[1100px]">
                    <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                        <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Expert
                        </th>

                        <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Specialization
                        </th>

                        <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Qualification
                        </th>

                        <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Experience
                        </th>

                        <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Location
                        </th>

                        <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Status
                        </th>

                        <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Created
                        </th>

                        <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Action
                        </th>
                    </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">
                    {experts.map((expert) => {
                        const isActive =
                            !expert.isDeleted &&
                            expert.user?.status === "ACTIVE";

                        return (
                            <tr
                                key={expert.id}
                                className="transition-colors hover:bg-slate-50"
                            >
                                {/* Expert */}
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                                            <GraduationCap className="h-5 w-5" />
                                        </div>

                                        <div>
                                            <p className="font-semibold text-slate-900">
                                                {expert.name}
                                            </p>

                                            <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                                                <Mail className="h-3.5 w-3.5 shrink-0" />
                                                {expert.email}
                                            </p>

                                            <p className="mt-1 text-xs text-slate-400">
                                                ID:{" "}
                                                {expert.id.slice(0, 8)}
                                                ...
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                {/* Specialization */}
                                <td className="max-w-xs px-5 py-4">
                                    <p className="text-sm font-medium text-slate-700">
                                        {expert.specialization ||
                                            "Not specified"}
                                    </p>
                                </td>

                                {/* Qualification */}
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                        <Award className="h-4 w-4 shrink-0 text-emerald-600" />
                                        <span>
                                                    {expert.qualification ||
                                                        "Not specified"}
                                                </span>
                                    </div>
                                </td>

                                {/* Experience */}
                                <td className="whitespace-nowrap px-5 py-4">
                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                        <BriefcaseBusiness className="h-4 w-4 text-slate-400" />
                                        {expert.experience}{" "}
                                        {expert.experience === 1
                                            ? "year"
                                            : "years"}
                                    </div>
                                </td>

                                {/* Location */}
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-1.5 text-sm text-slate-600">
                                        <MapPin className="h-4 w-4 shrink-0 text-slate-400" />
                                        {expert.city ||
                                            "Not specified"}
                                    </div>
                                </td>

                                {/* Status */}
                                <td className="px-5 py-4">
                                            <span
                                                className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                                                    isActive
                                                        ? "bg-emerald-50 text-green-700"
                                                        : "bg-red-50 text-red-600"
                                                }`}
                                            >
                                                {isActive
                                                    ? "Active"
                                                    : expert.isDeleted
                                                        ? "Deleted"
                                                        : expert.user?.status ??
                                                        "Inactive"}
                                            </span>
                                </td>

                                {/* Created */}
                                <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-500">
                                    {moment(
                                        expert.createdAt
                                    ).format("MMM Do, YYYY")}
                                </td>

                                {/* Actions */}
                                <td className="relative px-5 py-4 text-right">
                                    <button
                                        type="button"
                                        aria-label={`Actions for ${expert.name}`}
                                        aria-expanded={
                                            openActionId === expert.id
                                        }
                                        onClick={() =>
                                            setOpenActionId(
                                                openActionId ===
                                                expert.id
                                                    ? null
                                                    : expert.id
                                            )
                                        }
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
                                    >
                                        <MoreHorizontal className="h-5 w-5" />
                                    </button>

                                    {openActionId ===
                                        expert.id && (
                                            <div className="absolute right-5 top-14 z-50 w-52 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 text-left shadow-lg">
                                                {/* View */}
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setOpenActionId(null);
                                                        handleView(
                                                            expert.id
                                                        );
                                                    }}
                                                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-50"
                                                >
                                                    <Eye className="h-4 w-4 text-slate-500" />
                                                    <span>View</span>
                                                </button>

                                                {/* Update */}
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setOpenActionId(null);
                                                        handleUpdate(
                                                            expert.id
                                                        );
                                                    }}
                                                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                                                >
                                                    <Pencil className="h-4 w-4" />
                                                    <span>Update</span>
                                                </button>

                                                {/* Delete */}
                                                <button
                                                    type="button"
                                                    disabled={
                                                        expert.isDeleted
                                                    }
                                                    onClick={() => {
                                                        setOpenActionId(null);
                                                        void handleDelete(
                                                            expert.id
                                                        );
                                                    }}
                                                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 transition-colors hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                    <span>Delete</span>
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