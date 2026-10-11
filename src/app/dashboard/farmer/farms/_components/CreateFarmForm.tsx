"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    AlertCircle,
    ArrowLeft,
    CheckCircle2,
    LoaderCircle,
    MapPin,
    Mountain,
    Save,
    Sprout,
    Trees,
} from "lucide-react";
import { toast } from "sonner";

import { createFarm } from "../_actions/createFarm";
import {
    farmSchema,
    type FarmFormInput,
    type FarmFormValues,
} from "@/schemas/farm.schema";
export default function CreateFarmForm() {
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FarmFormInput, unknown, FarmFormValues>({
        resolver: zodResolver(farmSchema),
        defaultValues: {
            farmName: "",
            location: "",
            landSize: "",
            soilType: "",
        },
    });
    const onSubmit = async (values: FarmFormValues) => {
        setSubmitting(true);

        try {
            const result = await createFarm({
                farmName: values.farmName.trim(),
                location: values.location.trim(),
                landSize: Number(values.landSize),
                soilType: values.soilType.trim(),
            });

            if (!result.success) {
                toast.error(result.message);
                return;
            }

            toast.success(result.message || "Farm created successfully",);
            reset();
            router.push("/dashboard/farmer/farms");
            router.refresh();
        } catch {
            toast.error("Unable to create your farm");
        } finally {
            setSubmitting(false);
        }
    };
    const inputClass = "mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 disabled:cursor-not-allowed disabled:bg-gray-50";
    const labelClass = "flex items-center gap-2 text-sm font-semibold text-gray-800";
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
                    <p className="text-sm font-medium text-green-600">
                        Farmer Dashboard
                    </p>

                    <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                        Create New Farm
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Add your farm details to manage your agricultural
                        activities.
                    </p>
                </div>
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
            >
                {/* Form heading */}
                <div className="border-b border-gray-100 px-5 py-6 sm:px-8">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                            <Sprout size={23} />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">
                                Farm Information
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Enter the basic information about your farm.
                            </p>
                        </div>
                    </div>

                    <p className="mt-5 text-sm text-gray-500">
                        Fields marked with{" "}
                        <span className="font-semibold text-red-500">
                            *
                        </span>{" "}
                        are required.
                    </p>
                </div>

                <div className="space-y-6 p-5 sm:p-8">
                    {/* Farm name */}
                    <div>
                        <label
                            htmlFor="farmName"
                            className={labelClass}
                        >
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
                            autoComplete="organization"
                            disabled={submitting}
                            aria-invalid={!!errors.farmName}
                            aria-describedby={
                                errors.farmName
                                    ? "farmName-error"
                                    : undefined
                            }
                            {...register("farmName")}
                            className={inputClass}
                        />

                        {errors.farmName && (
                            <p
                                id="farmName-error"
                                className="mt-2 flex items-center gap-1.5 text-sm text-red-600"
                            >
                                <AlertCircle size={15} />
                                {errors.farmName.message}
                            </p>
                        )}
                    </div>

                    {/* Farm location */}
                    <div>
                        <label
                            htmlFor="location"
                            className={labelClass}
                        >
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
                            autoComplete="street-address"
                            disabled={submitting}
                            aria-invalid={!!errors.location}
                            aria-describedby={
                                errors.location
                                    ? "location-error"
                                    : undefined
                            }
                            {...register("location")}
                            className={inputClass}
                        />

                        {errors.location ? (
                            <p
                                id="location-error"
                                className="mt-2 flex items-center gap-1.5 text-sm text-red-600"
                            >
                                <AlertCircle size={15} />
                                {errors.location.message}
                            </p>
                        ) : (
                            <p className="mt-2 text-xs text-gray-400">
                                Enter the district, village, or area where
                                your farm is located.
                            </p>
                        )}
                    </div>

                    {/* Land size */}
                    <div>
                        <label htmlFor="landSize" className={labelClass}>
                            <Mountain size={17} className="text-emerald-600" />
                            Land Size
                            <span className="text-red-500">*</span>
                        </label>

                        <div className="relative">
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
                                className={`${inputClass} pr-20`}
                            />

                            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                                    Land size
                            </span>
                        </div>


                        {errors.landSize?.message ? (
                            <p
                                id="landSize-error"
                                role="alert"
                                className="mt-2 flex items-center gap-1.5 text-sm text-red-600"
                            >
                                <AlertCircle size={15} className="shrink-0" />
                                <span>{errors.landSize.message}</span>
                            </p>
                        ) : (
                            <p
                                id="landSize-help"
                                className="mt-2 text-xs leading-5 text-gray-400"
                            >
                                Enter a positive number, such as 2.5 acres.
                            </p>
                        )}
                    </div>

                    {/* Soil type */}
                    <div>
                        <label htmlFor="soilType" className={labelClass}>
                            <Sprout size={17} className="text-emerald-600" />
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
                                <AlertCircle size={15} className="shrink-0" />
                                <span>{errors.soilType.message}</span>
                            </p>
                        ) : (
                            <p
                                id="soilType-help"
                                className="mt-2 text-xs leading-5 text-gray-400"
                            >
                                Specify the soil type available on your farm.
                            </p>
                        )}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col-reverse gap-3 border-t border-gray-100 bg-gray-50/60 px-5 py-5 sm:flex-row sm:justify-end sm:px-8">
                    <Link
                        href="/dashboard/farmer/farms"
                        aria-disabled={submitting}
                        className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 ${
                        submitting ? "pointer-events-none opacity-60" : ""
                    }`}
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {submitting ? (
                            <>
                                <LoaderCircle
                                    size={18}
                                    className="animate-spin"
                                />
                                Creating Farm...
                            </>
                        ) : (
                            <>
                                <Save size={17} />
                                Create Farm
                                <CheckCircle2 size={16} />
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}