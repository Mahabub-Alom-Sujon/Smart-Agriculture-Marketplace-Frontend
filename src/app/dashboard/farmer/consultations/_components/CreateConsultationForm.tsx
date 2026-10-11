"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    AlertCircle,
    ArrowLeft,
    ImagePlus,
    Leaf,
    LoaderCircle,
    Send,
    Sprout,
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { createConsultation } from "../_actions/createConsultation";
import {
    consultationSchema,
    type ConsultationFormValues,
} from "@/schemas/consultation.schema";
export default function CreateConsultationForm() {
    const [submitting, setSubmitting] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ConsultationFormValues>({
        resolver: zodResolver(consultationSchema),
        defaultValues: {
            cropName: "",
            problem: "",
            image: "",
        },
    });
    const onSubmit = async (values: ConsultationFormValues) => {
        setSubmitting(true);
        try {
            const result = await createConsultation({
                cropName: values.cropName?.trim() || undefined,
                problem: values.problem.trim(),
                image: values.image?.trim() || undefined,
            });
            if (!result.success) {
                toast.error(result.message);
                return;
            }
            toast.success(
                result.message || "Consultation submitted successfully",
            );

            reset();
        } catch {
            toast.error("Unable to submit your consultation");
        } finally {
            setSubmitting(false);
        }
    };
    const inputClass = "mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10";
    return (
        <div className="mx-auto w-full max-w-4xl space-y-6 pb-10">
            {/* Header */}
            <div className="flex items-center gap-3">
                <Link
                    href="/farmer/consultations"
                    aria-label="Back to consultations"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition hover:bg-gray-50"
                >
                    <ArrowLeft size={19} />
                </Link>
                <div>
                    <p className="text-sm font-medium text-emerald-600">
                        Farmer Dashboard
                    </p>
                    <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                        Ask an Expert
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Describe your crop problem and get expert advice.
                    </p>
                </div>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-8"
            >
                <div className="mb-7 border-b border-gray-100 pb-5">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Consultation Details
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                        Fields marked with * are required.
                    </p>
                </div>
                <div className="space-y-6">
                    {/* Crop name */}
                    <div>
                        <label
                            htmlFor="cropName"
                            className="flex items-center gap-2 text-sm font-semibold text-gray-800"
                        >
                            <Leaf size={17} className="text-emerald-600" />
                            Crop Name
                            <span className="font-normal text-gray-400">
                                (Optional)
                            </span>
                        </label>
                        <input
                            id="cropName"
                            type="text"
                            maxLength={100}
                            placeholder="e.g. Rice, Tomato, Potato"
                            {...register("cropName")}
                            aria-invalid={!!errors.cropName}
                            className={inputClass}
                        />
                        {errors.cropName && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.cropName.message}
                            </p>
                        )}
                    </div>
                    {/* Problem */}
                    <div>
                        <label
                            htmlFor="problem"
                            className="text-sm font-semibold text-gray-800"
                        >
                            Describe Your Crop Problem *
                        </label>
                        <textarea
                            id="problem"
                            rows={6}
                            maxLength={2000}
                            placeholder="Describe the symptoms, when the problem started, affected plants, and any treatment you have tried..."
                            {...register("problem")}
                            aria-invalid={!!errors.problem}
                            className={`${inputClass} min-h-36 resize-y`}
                        />
                        {errors.problem ? (
                            <p className="mt-2 flex items-center gap-1.5 text-sm text-red-600">
                                <AlertCircle size={15} />
                                {errors.problem.message}
                            </p>
                        ) : (
                            <p className="mt-2 text-xs text-gray-400">
                                Minimum 10 characters, maximum 2000.
                            </p>
                        )}
                    </div>
                    {/* Image URL */}
                    <div>
                        <label
                            htmlFor="image"
                            className="flex items-center gap-2 text-sm font-semibold text-gray-800"
                        >
                            <ImagePlus
                                size={17}
                                className="text-emerald-600"
                            />
                            Crop Image URL
                            <span className="font-normal text-gray-400">
                                (Optional)
                            </span>
                        </label>
                        <input
                            id="image"
                            type="url"
                            placeholder="https://example.com/crop-image.jpg"
                            {...register("image")}
                            aria-invalid={!!errors.image}
                            className={inputClass}
                        />
                        {errors.image && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.image.message}
                            </p>
                        )}
                        <p className="mt-2 text-xs leading-5 text-gray-400">
                            Provide a publicly accessible image URL if
                            you have a photo of the affected crop.
                        </p>
                    </div>
                </div>
                {/* Actions */}
                <div className="mt-8 flex flex-col-reverse gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:justify-end">
                    <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {submitting ? (
                            <>
                                <LoaderCircle
                                    size={18}
                                    className="animate-spin"
                                />
                                Submitting...
                            </>
                        ) : (
                            <>
                                <Send size={17} />
                                Submit Consultation
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
