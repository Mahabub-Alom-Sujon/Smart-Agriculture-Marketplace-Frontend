"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    ArrowLeft,
    ImagePlus,
    LoaderCircle,
    Save,
    Tag,
    FileText,
} from "lucide-react";
import { toast } from "sonner";

import { updateCategory } from "../_actions/updateCategory";
import {
    categorySchema,
    type CategoryFormInput,
    type CategoryFormValues,
} from "@/schemas/category.schema";
import type { Category } from "@/types/types.category";

interface UpdateCategoryFormProps {
    category: Category;
}

export default function UpdateCategoryForm({
    category,
}: UpdateCategoryFormProps) {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
    } = useForm<CategoryFormInput, unknown, CategoryFormValues>({
        resolver: zodResolver(categorySchema),
        defaultValues: {
            name: category.name ?? "",
            description: category.description ?? "",
            image: category.image ?? "",
        },
    });

    const onSubmit = async (values: CategoryFormValues) => {
        setSubmitting(true);

        try {
            const result = await updateCategory(category.id, {
                name: values.name.trim(),
                description: values.description?.trim() || null,
                image: values.image?.trim() || null,
            });

            if (!result.success) {
                toast.error(result.message);
                return;
            }

            toast.success(
                result.message || "Category updated successfully"
            );

            router.push("/dashboard/admin/categories");
            router.refresh();
        } catch {
            toast.error("Unable to update category");
        } finally {
            setSubmitting(false);
        }
    };

    const inputClass =
        "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/20";

    const labelClass =
        "flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200";

    const iconClass =
        "text-emerald-600 dark:text-emerald-400";

    const errorClass =
        "mt-2 text-sm text-red-600 dark:text-red-400";

    const helperClass =
        "mt-2 text-xs text-slate-500 dark:text-slate-400";

    const secondaryButtonClass =
        "inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800";

    return (
        <div className="mx-auto w-full max-w-4xl space-y-6 pb-10">
            {/* Header */}
            <div className="flex items-center gap-3">
                <Link
                    href="/dashboard/admin/categories"
                    aria-label="Back to categories"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                    <ArrowLeft size={19} />
                </Link>

                <div>
                    <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        Admin Dashboard
                    </p>

                    <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                        Update Category
                    </h1>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Edit the category information below.
                    </p>
                </div>
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-200 dark:border-slate-700 dark:bg-slate-900 sm:p-8"
            >
                {/* Form Heading */}
                <div className="mb-7 border-b border-slate-100 pb-5 dark:border-slate-700">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Category Details
                    </h2>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Update the fields below and save your changes.
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Category Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className={labelClass}
                        >
                            <Tag
                                size={17}
                                className={iconClass}
                            />
                            Category Name *
                        </label>

                        <input
                            id="name"
                            type="text"
                            maxLength={100}
                            placeholder="e.g. Vegetables, Fruits, Grains"
                            disabled={submitting}
                            {...register("name")}
                            aria-invalid={!!errors.name}
                            aria-describedby={
                                errors.name ? "name-error" : undefined
                            }
                            className={inputClass}
                        />

                        {errors.name && (
                            <p
                                id="name-error"
                                role="alert"
                                className={errorClass}
                            >
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Description */}
                    <div>
                        <label
                            htmlFor="description"
                            className={labelClass}
                        >
                            <FileText
                                size={17}
                                className={iconClass}
                            />
                            Description
                            <span className="font-normal text-slate-400 dark:text-slate-500">
                                (Optional)
                            </span>
                        </label>

                        <textarea
                            id="description"
                            rows={5}
                            maxLength={500}
                            placeholder="Describe this category..."
                            disabled={submitting}
                            {...register("description")}
                            aria-invalid={!!errors.description}
                            aria-describedby={ errors.description ? "description-error" : "description-help" }
                            className={`${inputClass} min-h-32 resize-y`}
                        />

                        {errors.description ? (
                            <p
                                id="description-error"
                                role="alert"
                                className={errorClass}
                            >
                                {errors.description.message}
                            </p>
                        ) : (
                            <p
                                id="description-help"
                                className={helperClass}
                            >
                                Maximum 500 characters.
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
                                className={iconClass}
                            />
                            Category Image URL
                            <span className="font-normal text-slate-400 dark:text-slate-500">
                                (Optional)
                            </span>
                        </label>

                        <input
                            id="image"
                            type="url"
                            placeholder="https://example.com/category-image.jpg"
                            disabled={submitting}
                            {...register("image")}
                            aria-invalid={!!errors.image}
                            aria-describedby={ errors.image ? "image-error" : "image-help" }
                            className={inputClass}
                        />

                        {errors.image && (
                            <p
                                id="image-error"
                                role="alert"
                                className={errorClass}
                            >
                                {errors.image.message}
                            </p>
                        )}

                        <p
                            id="image-help"
                            className={helperClass}
                        >
                            Enter a valid image URL or leave it empty.
                        </p>

                        {/* Current Image Preview */}
                        {category.image && (
                            <div className="mt-4">
                                <p className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                                    Current Image
                                </p>

                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={category.image}
                                    alt={`${category.name} category`}
                                    className="h-28 w-28 rounded-xl border border-slate-200 bg-slate-50 object-cover dark:border-slate-700 dark:bg-slate-800"
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 dark:border-slate-700 sm:flex-row sm:justify-end">
                    <Link
                        href="/dashboard/admin/categories"
                        aria-disabled={submitting}
                        className={`${
                        secondaryButtonClass
                        } ${
                            submitting ? "pointer-events-none opacity-60" : ""
                        }`}
                    >
                        Cancel
                    </Link>

                    <button
                        type="submit"
                        disabled={submitting || !isDirty}
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-green-500 dark:hover:bg-green-600"
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