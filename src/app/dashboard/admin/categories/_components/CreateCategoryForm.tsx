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
    ImagePlus,
    LoaderCircle,
    Plus,
    Save,
    Tags,
} from "lucide-react";
import { toast } from "sonner";
import { createCategory } from "@/app/dashboard/admin/categories/_actions/createCategory";
import {
    categorySchema,
    type  CategoryFormInput,
    type CategoryFormValues,
} from "@/schemas/category.schema";
export default function CreateCategoryForm() {
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<CategoryFormInput, unknown, CategoryFormValues>({
        resolver: zodResolver(categorySchema),
        defaultValues: {
            name: "",
            description: "",
            image: "",
        },
    });
    const onSubmit = async (values: CategoryFormValues) => {
        setSubmitting(true);
        try {
            const result = await createCategory({
                name: values.name.trim(),
                description: values.description?.trim() || undefined,
                image: values.image?.trim() || undefined,
            });
            if (!result.success) {
                toast.error(result.message);
                return;
            }
            toast.success(result.message || "Category created successfully");
            reset();
            router.push("/dashboard/admin/categories");
            router.refresh();
        } catch {
            toast.error("Unable to create category");
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
                    href="/dashboard/admin/categories"
                    aria-label="Back to categories"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition hover:bg-gray-50"
                >
                    <ArrowLeft size={19} />
                </Link>
                <div>
                    <p className="text-sm font-medium text-green-600">
                        Admin Dashboard
                    </p>
                    <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                        Create New Category
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Add a category to organize products in your
                        agricultural marketplace.
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
                <div className="space-y-6 p-5 sm:p-8">
                    {/* Category name */}
                    <div>
                        <label
                            htmlFor="name"
                            className={labelClass}
                        >
                            <Tags
                                size={17}
                                className="text-emerald-600"
                            />
                            Category Name
                            <span className="text-red-500">*</span>
                        </label>

                        <input
                            id="name"
                            type="text"
                            maxLength={100}
                            placeholder="e.g. Seeds, Fertilizers, Vegetables"
                            autoComplete="off"
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
                                role="alert"
                                className="mt-2 flex items-center gap-1.5 text-sm text-red-600"
                            >
                                <AlertCircle
                                    size={15}
                                    className="shrink-0"
                                />
                                <span>{errors.name.message}</span>
                            </p>
                        )}
                    </div>

                    {/* Description */}
                    <div>
                        <label
                            htmlFor="description"
                            className={labelClass}
                        >
                            <Plus
                                size={17}
                                className="text-emerald-600"
                            />
                            Description
                        </label>

                        <textarea
                            id="description"
                            rows={4}
                            maxLength={1000}
                            placeholder="Describe the category and the products it includes..."
                            disabled={submitting}
                            aria-invalid={Boolean(errors.description)}
                            aria-describedby={
                                errors.description
                                    ? "description-error"
                                    : "description-help"
                            }
                            {...register("description")}
                            className={`${inputClass} resize-y`}
                        />

                        {errors.description?.message ? (
                            <p
                                id="description-error"
                                role="alert"
                                className="mt-2 flex items-center gap-1.5 text-sm text-red-600"
                            >
                                <AlertCircle
                                    size={15}
                                    className="shrink-0"
                                />
                                <span>
                                    {errors.description.message}
                                </span>
                            </p>
                        ) : (
                            <p
                                id="description-help"
                                className="mt-2 text-xs leading-5 text-gray-400"
                            >
                                Provide a short description to help users
                                understand this category.
                            </p>
                        )}
                    </div>

                    {/* Image URL */}
                    <div>
                        <label
                            htmlFor="image"
                            className={labelClass}
                        >
                            <ImagePlus
                                size={17}
                                className="text-emerald-600"
                            />
                            Category Image URL
                        </label>

                        <input
                            id="image"
                            type="url"
                            maxLength={2048}
                            placeholder="https://example.com/category-image.jpg"
                            autoComplete="url"
                            disabled={submitting}
                            aria-invalid={Boolean(errors.image)}
                            aria-describedby={ errors.image ? "image-error" : "image-help" }
                            {...register("image")}
                            className={inputClass}
                        />

                        {errors.image?.message ? (
                            <p
                                id="image-error"
                                role="alert"
                                className="mt-2 flex items-center gap-1.5 text-sm text-red-600"
                            >
                                <AlertCircle size={15} className="shrink-0"/>
                                <span>{errors.image.message}</span>
                            </p>
                        ) : (
                            <p
                                id="image-help"
                                className="mt-2 text-xs leading-5 text-gray-400"
                            >
                                Enter a publicly accessible image URL.
                                This field is optional.
                            </p>
                        )}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col-reverse gap-3 border-t border-gray-100 bg-gray-50/60 px-5 py-5 sm:flex-row sm:justify-end sm:px-8">
                    <Link
                        href="/dashboard/admin/categories"
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
                                Creating Category...
                            </>
                        ) : (
                            <>
                                <Save size={17} />
                                Create Category
                                <CheckCircle2 size={16} />
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}