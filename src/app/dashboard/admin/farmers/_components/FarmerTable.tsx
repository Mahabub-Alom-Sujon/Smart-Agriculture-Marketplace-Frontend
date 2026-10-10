"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Sprout,
    MoreHorizontal,
    Eye,
    Pencil,
    Trash2,
    Mail,
    Award,
    Tractor,
} from "lucide-react";
import moment from "moment";
import { toast } from "sonner";
import { DeleteAlert } from "@/lib/DeleteAlert";
import { deleteFarmer } from "@/app/dashboard/admin/farmers/_actions/deleteFarmer";
export interface Farmer {
    id: string;
    name: string;
    email: string;
    certification: string | null;
    userId: string;
    isDeleted: boolean;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
    farms: {
        id?: string;
        name?: string;
    }[];
}
interface FarmerTableProps {
    farmers: Farmer[];
}
export default function FarmerTable({
    farmers,
}: FarmerTableProps) {
    const router = useRouter();
    const [openActionId, setOpenActionId] = useState<
        string | null
    >(null);
    const handleView = (farmerId: string) => {
        router.push(
            `/dashboard/admin/farmers/${farmerId}`
        );
    };
    const handleUpdate = (farmerId: string) => {
        router.push(
            `/dashboard/admin/farmers/${farmerId}/edit`
        );
    };
    const handleDelete = async (id: string) => {
        try {
            const alertResult = await DeleteAlert();
            if (!alertResult.isConfirmed) {
                return;
            }
            const result = await deleteFarmer(id);
            if (result.success) {
                toast.success(result.message);
                router.refresh();
            } else {
                toast.error(result.message);
            }
        } catch {
            toast.error("Failed to delete farmer.");
        }
    };
    return (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            {/* Header */}
            <div className="border-b border-slate-200 px-5 py-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="font-semibold text-slate-900">
                            Farmer List
                        </h2>
                        <p className="mt-1 text-xs text-slate-500">
                            All registered farmers
                        </p>
                    </div>

                    <Sprout className="h-5 w-5 text-green-600" />
                </div>
            </div>

            {/* Empty State */}
            {farmers.length === 0 ? (
                <div className="flex min-h-60 flex-col items-center justify-center px-6 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                        <Sprout className="h-7 w-7 text-green-600" />
                    </div>
                    <h3 className="mt-4 font-semibold text-slate-900">
                        No farmers found
                    </h3>
                    <p className="mt-1 max-w-sm text-sm text-slate-500">
                        Try changing your search keyword or
                        add a new farmer.
                    </p>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[900px]">
                        <thead>
                        <tr className="border-b border-slate-200 bg-slate-50">
                            <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Farmer
                            </th>
                            <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Certification
                            </th>
                            <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Farms
                            </th>
                            <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Status
                            </th>
                            <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Joined
                            </th>
                            <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Action
                            </th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                        {farmers.map((farmer) => (
                            <tr
                                key={farmer.id}
                                className="transition-colors hover:bg-slate-50"
                            >
                                {/* Farmer Information */}
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                                            <Sprout className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900">
                                                {farmer.name}
                                            </p>
                                            <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                                                <Mail className="h-3.5 w-3.5" />
                                                {farmer.email}
                                            </p>
                                            <p className="mt-1 text-xs text-slate-400">
                                                ID: {farmer.id.slice(0, 8)}...
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                {/* Certification */}
                                <td className="px-5 py-4">
                                    {farmer.certification ? (
                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                                                <Award className="h-3.5 w-3.5" />
                                            {farmer.certification}
                                            </span>
                                    ) : (
                                        <span className="text-sm text-slate-400">Not certified</span>
                                    )}
                                </td>

                                {/* Farms */}
                                <td className="px-5 py-4">
                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-green-600">
                                            <Tractor className="h-3.5 w-3.5" />
                                            {farmer.farms.length}{" "}
                                            {farmer.farms.length === 1 ? "Farm" : "Farms"}
                                        </span>
                                </td>

                                {/* Status */}
                                <td className="px-5 py-4">
                                        <span
                                            className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                                                farmer.isDeleted ? "bg-red-50 text-red-600" : "bg-emerald-50 text-green-600"
                                            }`}
                                        >
                                            {farmer.isDeleted ? "Deleted" : "Active"}
                                        </span>
                                </td>

                                {/* Joined Date */}
                                <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-500">
                                    {moment(
                                        farmer.createdAt
                                    ).format("MMM Do, YYYY")}
                                </td>

                                {/* Actions */}
                                <td className="relative px-5 py-4 text-right">
                                    <button
                                        type="button"
                                        aria-label={`Actions for ${farmer.name}`}
                                        aria-expanded={
                                            openActionId === farmer.id
                                        }
                                        onClick={() =>
                                            setOpenActionId(
                                                openActionId === farmer.id
                                                    ? null
                                                    : farmer.id
                                            )
                                        }
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
                                    >
                                        <MoreHorizontal className="h-5 w-5" />
                                    </button>

                                    {openActionId === farmer.id && (
                                        <div className="absolute right-5 top-14 z-50 w-52 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 text-left shadow-lg">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setOpenActionId(null);
                                                    handleView(farmer.id);
                                                }}
                                                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
                                            >
                                                <Eye className="h-4 w-4 text-slate-500" />
                                                View
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setOpenActionId(null);
                                                    handleUpdate(farmer.id);
                                                }}
                                                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                                            >
                                                <Pencil className="h-4 w-4" />
                                                Update
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setOpenActionId(null);
                                                    void handleDelete(farmer.id);
                                                }}
                                                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 hover:bg-red-50"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                                Delete
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
