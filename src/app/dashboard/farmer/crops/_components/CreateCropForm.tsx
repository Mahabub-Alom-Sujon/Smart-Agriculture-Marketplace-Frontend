"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    AlertCircle,
    ArrowLeft,
    CalendarDays,
    CheckCircle2,
    LoaderCircle,
    Save,
    Sprout,
    Trees,
} from "lucide-react";
import { toast } from "sonner";

import { createCrop } from "../_actions/createCrop";
import {
    CropSchema,
    type CropFormInput,
    type CreateCropInput,
} from "@/schemas/crop.schema";
import type { CropStatus } from "@/types/type.crop";

interface FarmOption {
    id: string;
    farmName: string;
}

interface CreateCropFormProps {
    farms: FarmOption[];
}

const statusOptions: { label: string; value: CropStatus }[] = [
    { label: "Planned", value: "PLANNED" },
    { label: "Growing", value: "GROWING" },
    { label: "Harvested", value: "HARVESTED" },
];

export default function CreateCropForm({
    farms,
}: CreateCropFormProps) {
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<CropFormInput, unknown, CreateCropInput>({
        resolver: zodResolver(CropSchema),
        defaultValues: {
            name: "",
            variety: "",
            plantingDate: "",
            harvestDate: "",
            status: "PLANNED",
            farmId: "",
        },
    });

    const onSubmit = async (values: CreateCropInput) => {
        setSubmitting(true);

        try {
            // Dates are already converted to ISO strings by CropSchema.
            const payload: CreateCropInput = {
                name: values.name.trim(),
                variety: values.variety.trim(),
                plantingDate: values.plantingDate,
                harvestDate: values.harvestDate,
                status: values.status,
                farmId: values.farmId,
            };

            const result = await createCrop(payload);

            if (!result.success) {
                toast.error(result.message || "Failed to create crop");
                return;
            }

            toast.success(result.message || "Crop created successfully");
            reset();
            router.push("/dashboard/farmer/crops");
            router.refresh();
        } catch {
            toast.error("Unable to create your crop");
        } finally {
            setSubmitting(false);
        }
    };

    const inputClass =
        "mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 disabled:cursor-not-allowed disabled:bg-gray-50";

    const labelClass =
        "flex items-center gap-2 text-sm font-semibold text-gray-800";

    return (
        <div className="mx-auto w-full max-w-4xl space-y-6 pb-10">
            {/* Header */}
            <div className="flex items-center gap-3">
                <Link
                    href="/dashboard/farmer/crops"
                    aria-label="Back to crops"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition hover:bg-gray-50"
                >
                    <ArrowLeft size={19} />
                </Link>

                <div>
                    <p className="text-sm font-medium text-green-600">
                        Farmer Dashboard
                    </p>
                    <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                        Create New Crop
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Add crop details to manage your farming activities.
                    </p>
                </div>
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
            >
                <div className="border-b border-gray-100 px-5 py-6 sm:px-8">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                            <Sprout size={23} />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">
                                Crop Information
                            </h2>
                            <p className="mt-1 text-sm text-gray-500">
                                Enter the basic information about your crop.
                            </p>
                        </div>
                    </div>

                    <p className="mt-5 text-sm text-gray-500">
                        Fields marked with{" "}
                        <span className="font-semibold text-red-500">*</span>{" "}
                        are required.
                    </p>
                </div>

                <div className="space-y-6 p-5 sm:p-8">
                    {/* Crop Name */}
                    <div>
                        <label htmlFor="name" className={labelClass}>
                            <Sprout size={17} className="text-emerald-600" />
                            Crop Name
                            <span className="text-red-500">*</span>
                        </label>

                        <input
                            id="name"
                            type="text"
                            maxLength={100}
                            placeholder="e.g. Wheat, Rice, Potato"
                            disabled={submitting}
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={
                                errors.name ? "name-error" : undefined
                            }
                            {...register("name")}
                            className={inputClass}
                        />

                        {errors.name?.message && (
                            <p
                                id="name-error"
                                className="mt-2 flex items-center gap-1.5 text-sm text-red-600"
                            >
                                <AlertCircle size={15} />
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Variety */}
                    <div>
                        <label htmlFor="variety" className={labelClass}>
                            <Trees size={17} className="text-emerald-600" />
                            Crop Variety
                            <span className="text-red-500">*</span>
                        </label>

                        <input
                            id="variety"
                            type="text"
                            maxLength={100}
                            placeholder="e.g. BARI Gom-30"
                            disabled={submitting}
                            aria-invalid={Boolean(errors.variety)}
                            aria-describedby={
                                errors.variety ? "variety-error" : undefined
                            }
                            {...register("variety")}
                            className={inputClass}
                        />

                        {errors.variety?.message && (
                            <p
                                id="variety-error"
                                className="mt-2 flex items-center gap-1.5 text-sm text-red-600"
                            >
                                <AlertCircle size={15} />
                                {errors.variety.message}
                            </p>
                        )}
                    </div>

                    {/* Farm */}
                    <div>
                        <label htmlFor="farmId" className={labelClass}>
                            <Trees size={17} className="text-emerald-600" />
                            Select Farm
                            <span className="text-red-500">*</span>
                        </label>

                        <select
                            id="farmId"
                            disabled={submitting || farms.length === 0}
                            aria-invalid={Boolean(errors.farmId)}
                            aria-describedby={
                                errors.farmId ? "farmId-error" : undefined
                            }
                            {...register("farmId")}
                            className={inputClass}
                        >
                            <option value="">Select a farm</option>
                            {farms.map((farm) => (
                                <option key={farm.id} value={farm.id}>
                                    {farm.farmName}
                                </option>
                            ))}
                        </select>

                        {errors.farmId?.message ? (
                            <p
                                id="farmId-error"
                                className="mt-2 flex items-center gap-1.5 text-sm text-red-600"
                            >
                                <AlertCircle size={15} />
                                {errors.farmId.message}
                            </p>
                        ) : farms.length === 0 ? (
                            <p className="mt-2 text-xs text-amber-600">
                                No farms available. Create a farm before adding a crop.
                            </p>
                        ) : null}
                    </div>

                    {/* Planting and Harvest Dates */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label
                                htmlFor="plantingDate"
                                className={labelClass}
                            >
                                <CalendarDays
                                    size={17}
                                    className="text-emerald-600"
                                />
                                Planting Date
                                <span className="text-red-500">*</span>
                            </label>

                            <input
                                id="plantingDate"
                                type="text"
                                inputMode="numeric"
                                placeholder="MM/DD/YY"
                                autoComplete="off"
                                disabled={submitting}
                                aria-invalid={Boolean(errors.plantingDate)}
                                aria-describedby={
                                    errors.plantingDate
                                        ? "plantingDate-error"
                                        : "plantingDate-hint"
                                }
                                {...register("plantingDate")}
                                className={inputClass}
                            />

                            <p
                                id="plantingDate-hint"
                                className="mt-1 text-xs text-gray-500"
                            >
                                Format: MM/DD/YY (e.g. 10/11/26)
                            </p>

                            {errors.plantingDate?.message && (
                                <p
                                    id="plantingDate-error"
                                    className="mt-2 flex items-center gap-1.5 text-sm text-red-600"
                                >
                                    <AlertCircle size={15} />
                                    {errors.plantingDate.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="harvestDate"
                                className={labelClass}
                            >
                                <CalendarDays
                                    size={17}
                                    className="text-emerald-600"
                                />
                                Harvest Date
                                <span className="text-red-500">*</span>
                            </label>

                            <input
                                id="harvestDate"
                                type="text"
                                inputMode="numeric"
                                placeholder="MM/DD/YY"
                                autoComplete="off"
                                disabled={submitting}
                                aria-invalid={Boolean(errors.harvestDate)}
                                aria-describedby={
                                    errors.harvestDate
                                        ? "harvestDate-error"
                                        : "harvestDate-hint"
                                }
                                {...register("harvestDate")}
                                className={inputClass}
                            />

                            <p
                                id="harvestDate-hint"
                                className="mt-1 text-xs text-gray-500"
                            >
                                Format: MM/DD/YY (e.g. 12/20/26)
                            </p>

                            {errors.harvestDate?.message && (
                                <p
                                    id="harvestDate-error"
                                    className="mt-2 flex items-center gap-1.5 text-sm text-red-600"
                                >
                                    <AlertCircle size={15} />
                                    {errors.harvestDate.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Status */}
                    <div>
                        <label htmlFor="status" className={labelClass}>
                            Crop Status
                            <span className="text-red-500">*</span>
                        </label>

                        <select
                            id="status"
                            disabled={submitting}
                            aria-invalid={Boolean(errors.status)}
                            aria-describedby={
                                errors.status ? "status-error" : undefined
                            }
                            {...register("status")}
                            className={inputClass}
                        >
                            {statusOptions.map((status) => (
                                <option
                                    key={status.value}
                                    value={status.value}
                                >
                                    {status.label}
                                </option>
                            ))}
                        </select>

                        {errors.status?.message && (
                            <p
                                id="status-error"
                                className="mt-2 flex items-center gap-1.5 text-sm text-red-600"
                            >
                                <AlertCircle size={15} />
                                {errors.status.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col-reverse gap-3 border-t border-gray-100 bg-gray-50/60 px-5 py-5 sm:flex-row sm:justify-end sm:px-8">
                    <Link
                        href="/dashboard/farmer/crops"
                        aria-disabled={submitting}
                        className={`inline-flex min-h-11 items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 ${
    submitting
        ? "pointer-events-none opacity-60"
        : ""
}`}
                    >
                        Cancel
                    </Link>

                    <button
                        type="submit"
                        disabled={submitting || farms.length === 0}
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {submitting ? (
                            <>
                                <LoaderCircle
                                    size={18}
                                    className="animate-spin"
                                />
                                Creating Crop...
                            </>
                        ) : (
                            <>
                                <Save size={17} />
                                Create Crop
                                <CheckCircle2 size={16} />
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}