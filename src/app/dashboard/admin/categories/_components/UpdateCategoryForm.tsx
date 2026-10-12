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
                result.message || "Category updated successfully",
            );
            router.push("/dashboard/admin/categories");
            router.refresh();
        } catch {
            toast.error("Unable to update category");
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
                    href="/dashboard/admin/categories"
                    aria-label="Back to categories"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition hover:bg-gray-50"
                >
                    <ArrowLeft size={19} />
                </Link>
                <div>
                    <p className="text-sm font-medium text-emerald-600">
                        Admin Dashboard
                    </p>

                    <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                        Update Category
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Edit the category information below.
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
                        Category Details
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                        Update the fields below and save your changes.
                    </p>
                </div>
                <div className="space-y-6">
                    {/* Category Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="flex items-center gap-2 text-sm font-semibold text-gray-800"
                        >
                            <Tag
                                size={17}
                                className="text-emerald-600"
                            />
                            Category Name *
                        </label>
                        <input
                            id="name"
                            type="text"
                            maxLength={100}
                            placeholder="e.g. Vegetables, Fruits, Grains"
                            {...register("name")}
                            aria-invalid={!!errors.name}
                            className={inputClass}
                        />

                        {errors.name && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.name.message}
                            </p>
                        )}
                    </div>
                    {/* Description */}
                    <div>
                        <label
                            htmlFor="description"
                            className="flex items-center gap-2 text-sm font-semibold text-gray-800"
                        >
                            <FileText
                                size={17}
                                className="text-emerald-600"
                            />
                            Description
                            <span className="font-normal text-gray-400">
                                (Optional)
                            </span>
                        </label>
                        <textarea
                            id="description"
                            rows={5}
                            maxLength={500}
                            placeholder="Describe this category..."
                            {...register("description")}
                            aria-invalid={!!errors.description}
                            className={`${inputClass} min-h-32 resize-y`}
                        />

                        {errors.description ? (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.description.message}
                            </p>
                        ) : (
                            <p className="mt-2 text-xs text-gray-400">
                                Maximum 500 characters.
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
                            Category Image URL
                            <span className="font-normal text-gray-400">
                                (Optional)
                            </span>
                        </label>

                        <input
                            id="image"
                            type="url"
                            placeholder="https://example.com/category-image.jpg"
                            {...register("image")}
                            aria-invalid={!!errors.image}
                            className={inputClass}
                        />

                        {errors.image && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors.image.message}
                            </p>
                        )}

                        <p className="mt-2 text-xs text-gray-400">
                            Enter a valid image URL or leave it empty.
                        </p>

                        {category.image && (
                            <div className="mt-4">
                                <p className="mb-2 text-sm font-medium text-gray-700">
                                    Current Image
                                </p>

                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={category.image}
                                    alt={`${category.name} category`}
                                    className="h-28 w-28 rounded-xl border border-gray-200 object-cover"
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-col-reverse gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:justify-end">
                    <Link
                        href="/dashboard/admin/categories"
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
                                <LoaderCircle size={18} className="animate-spin"/>
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