
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    AlertCircle,
    ArrowLeft,
    LoaderCircle,
    MapPin,
    Mountain,
    Save,
    Sprout,
    Trees,
} from "lucide-react";
import { toast } from "sonner";

import { updateFarm } from "../_actions/updateFarm";
import {
    farmSchema,
    type FarmFormInput,
    type FarmFormValues,
} from "@/schemas/farm.schema";
import type { Farm } from "@/types/types.farm";

interface UpdateFarmFormProps {
    farm: Farm;
}

export default function UpdateFarmForm({
                                           farm,
                                       }: UpdateFarmFormProps) {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
    } = useForm<FarmFormInput, unknown, FarmFormValues>({
        resolver: zodResolver(farmSchema),
        defaultValues: {
            farmName: farm.farmName ?? "",
            location: farm.location ?? "",
            landSize: farm.landSize ?? "",
            soilType: farm.soilType ?? "",
        },
    });

    const inputClass =
        "mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 disabled:cursor-not-allowed disabled:bg-gray-50";

    const labelClass =
        "flex items-center gap-2 text-sm font-semibold text-gray-800";

    const onSubmit = async (values: FarmFormValues) => {
        setSubmitting(true);

        try {
            const result = await updateFarm(farm.id, {
                farmName: values.farmName.trim(),
                location: values.location.trim(),
                landSize: Number(values.landSize),
                soilType: values.soilType.trim(),
            });

            if (!result.success) {
                toast.error(result.message || "Failed to update farm");
                return;
            }

            toast.success(
                result.message || "Farm updated successfully",
            );

            router.push("/dashboard/farmer/farms");
            router.refresh();
        } catch {
            toast.error("Unable to update farm. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="mx-auto w-full max-w-4xl space-y-6 pb-10">
            {/* Header */}
            <div className="flex items-center gap-3">
                <Link
                    href="/dashboard/farmer/farms"
                    aria-label="Back to farms"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition hover:bg-gray-50"
                >
                    <ArrowLeft size={19} />
                </Link>

                <div>
                    <p className="text-sm font-medium text-emerald-600">
                        Farmer Dashboard
                    </p>

                    <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                        Update Farm
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Update your farm information and soil details.
                    </p>
                </div>
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-8"
            >
                <div className="mb-7 border-b border-gray-100 pb-5">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Farm Information
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Update the required fields and save your changes.
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Farm Name */}
                    <div>
                        <label htmlFor="farmName" className={labelClass}>
                            <Trees
                                size={17}
                                className="text-emerald-600"
                            />
                            Farm Name
                            <span className="text-red-500">*</span>
                        </label>

                        <input
                            id="farmName"
                            type="text"
                            maxLength={100}
                            placeholder="e.g. Green Valley Farm"
                            disabled={submitting}
                            aria-invalid={Boolean(errors.farmName)}
                            aria-describedby={
                                errors.farmName
                                    ? "farmName-error"
                                    : undefined
                            }
                            {...register("farmName")}
                            className={inputClass}
                        />

                        {errors.farmName?.message && (
                            <p
                                id="farmName-error"
                                role="alert"
                                className="mt-2 flex items-center gap-1.5 text-sm text-red-600"
                            >
                                <AlertCircle
                                    size={15}
                                    className="shrink-0"
                                />
                                {errors.farmName.message}
                            </p>
                        )}
                    </div>

                    {/* Location */}
                    <div>
                        <label htmlFor="location" className={labelClass}>
                            <MapPin
                                size={17}
                                className="text-emerald-600"
                            />
                            Farm Location
                            <span className="text-red-500">*</span>
                        </label>

                        <input
                            id="location"
                            type="text"
                            maxLength={255}
                            placeholder="e.g. Shariatpur, Bangladesh"
                            disabled={submitting}
                            aria-invalid={Boolean(errors.location)}
                            aria-describedby={
                                errors.location
                                    ? "location-error"
                                    : undefined
                            }
                            {...register("location")}
                            className={inputClass}
                        />

                        {errors.location?.message && (
                            <p
                                id="location-error"
                                role="alert"
                                className="mt-2 flex items-center gap-1.5 text-sm text-red-600"
                            >
                                <AlertCircle
                                    size={15}
                                    className="shrink-0"
                                />
                                {errors.location.message}
                            </p>
                        )}
                    </div>

                    {/* Land Size */}
                    <div>
                        <label htmlFor="landSize" className={labelClass}>
                            <Mountain
                                size={17}
                                className="text-emerald-600"
                            />
                            Land Size
                            <span className="text-red-500">*</span>
                        </label>

                        <input
                            id="landSize"
                            type="number"
                            min="0.01"
                            step="any"
                            inputMode="decimal"
                            placeholder="e.g. 2.5"
                            disabled={submitting}
                            aria-invalid={Boolean(errors.landSize)}
                            aria-describedby={
                                errors.landSize
                                    ? "landSize-error"
                                    : "landSize-help"
                            }
                            {...register("landSize")}
                            className={inputClass}
                        />

                        {errors.landSize?.message ? (
                            <p
                                id="landSize-error"
                                role="alert"
                                className="mt-2 flex items-center gap-1.5 text-sm text-red-600"
                            >
                                <AlertCircle
                                    size={15}
                                    className="shrink-0"
                                />
                                {errors.landSize.message}
                            </p>
                        ) : (
                            <p
                                id="landSize-help"
                                className="mt-2 text-xs leading-5 text-gray-400"
                            >
                                Enter a positive number using your farm&apos;s
                                land measurement unit.
                            </p>
                        )}
                    </div>

                    {/* Soil Type */}
                    <div>
                        <label htmlFor="soilType" className={labelClass}>
                            <Sprout
                                size={17}
                                className="text-emerald-600"
                            />
                            Soil Type
                            <span className="text-red-500">*</span>
                        </label>

                        <input
                            id="soilType"
                            type="text"
                            maxLength={100}
                            placeholder="e.g. Loamy, Clay, Sandy"
                            disabled={submitting}
                            aria-invalid={Boolean(errors.soilType)}
                            aria-describedby={
                                errors.soilType
                                    ? "soilType-error"
                                    : "soilType-help"
                            }
                            {...register("soilType")}
                            className={inputClass}
                        />

                        {errors.soilType?.message ? (
                            <p
                                id="soilType-error"
                                role="alert"
                                className="mt-2 flex items-center gap-1.5 text-sm text-red-600"
                            >
                                <AlertCircle
                                    size={15}
                                    className="shrink-0"
                                />
                                {errors.soilType.message}
                            </p>
                        ) : (
                            <p
                                id="soilType-help"
                                className="mt-2 text-xs leading-5 text-gray-400"
                            >
                                Specify the type of soil available on your farm.
                            </p>
                        )}
                    </div>

                    {/* Current farm status */}
                    <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-4">
                        <p className="text-sm font-medium text-gray-700">
                            Farm Record
                        </p>

                        <p className="mt-1 text-xs leading-5 text-gray-500">
                            Created on{" "}
                            {new Date(farm.createdAt).toLocaleDateString(
                                "en-GB",
                                {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                },
                            )}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-gray-500">
                            Updating this form changes the farm information,
                            not its ownership.
                        </p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-col-reverse gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:justify-end">
                    <Link
                        href="/dashboard/farmer/farms"
                        className="inline-flex min-h-11 items-center justify-center rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                    >
                        Cancel
                    </Link>

                    <button
                        type="submit"
                        disabled={submitting || !isDirty}
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {submitting ? (
                            <>
                                <LoaderCircle
                                    size={18}
                                    className="animate-spin"
                                />
                                Updating...
                            </>
                        ) : (
                            <>
                                <Save size={17} />
                                Save Changes
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
