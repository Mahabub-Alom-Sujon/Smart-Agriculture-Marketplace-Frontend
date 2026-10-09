"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
    ArrowLeft,
    Image as ImageIcon,
    Loader2,
    Save,
    Tag,
} from "lucide-react";
import Link from "next/link";
import {
    categorySchema,
    CategoryFormValues,
} from "@/schemas/category.schema";
import { createCategory } from "@/app/dashboard/admin/categories/_actions/createCategory";
const CreateCategoryForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<CategoryFormValues>({
        resolver: zodResolver(categorySchema),
        defaultValues: {
            name: "",
            description: "",
            image: "",
        },
    });

    const onSubmit = async (data: CategoryFormValues) => {
        try {
            const result = await createCategory({
                name: data.name.trim(),
                description: data.description?.trim() || undefined,
                image: data.image?.trim() || undefined,
            });
            toast.success(
                result?.message || "Category created successfully!"
            );
            reset();
        } catch (error) {
            const message = error instanceof Error ? error.message : "Something went wrong. Please try again.";
            toast.error(message);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
        >
            {/* Basic Information */}
            <div className="space-y-6">
                {/* Category Name */}
                <div className="space-y-2">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700"
                    >
                        Category Name
                        <span className="ml-1 text-red-500">*</span>
                    </label>

                    <input
                        id="name"
                        type="text"
                        placeholder="e.g. Vegetables"
                        {...register("name")}
                        className={`h-12 w-full rounded-lg border bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:ring-4 ${
                            errors.name
                                ? "border-red-300 focus:border-red-500 focus:ring-red-500/10"
                                : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/10"
                        }`}
                    />

                    {errors.name && (
                        <p className="text-xs font-medium text-red-500">
                            {errors.name.message}
                        </p>
                    )}
                </div>
                {/* Description */}
                <div className="space-y-2">
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-slate-700"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        rows={5}
                        placeholder="Write a short description about this category..."
                        {...register("description")}
                        className={`w-full resize-none rounded-lg border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:ring-4 ${
                            errors.description
                                ? "border-red-300 focus:border-red-500 focus:ring-red-500/10"
                                : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/10"
                        }`}
                    />
                    {errors.description && (
                        <p className="text-xs font-medium text-red-500">
                            {errors.description.message}
                        </p>
                    )}
                </div>
            </div>

            {/* Image Section */}
            <div className="space-y-6">
                <div className="space-y-2">
                    <label
                        htmlFor="image"
                        className="block text-sm font-medium text-slate-700"
                    >
                        Image URL
                    </label>

                    <input
                        id="image"
                        type="url"
                        placeholder="https://example.com/category.jpg"
                        {...register("image")}
                        className={`h-12 w-full rounded-lg border bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:ring-4 ${
                            errors.image ? "border-red-300 focus:border-red-500 focus:ring-red-500/10" : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/10"
                        }`}
                    />
                    {errors.image && (
                        <p className="text-xs font-medium text-red-500">
                            {errors.image.message}
                        </p>
                    )}
                    <p className="text-xs text-slate-400">
                        Use a publicly accessible image URL.
                    </p>
                </div>
            </div>
            {/* Actions */}
            <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <Link
                    href="/dashboard/admin/categories"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Categories
                </Link>
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        disabled={isSubmitting}
                        onClick={() => reset()}
                        className="h-11 rounded-lg border border-slate-200 px-5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex h-11 min-w-[150px] items-center justify-center gap-2 rounded-lg bg-green-600 px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Creating...
                            </>
                        ) : (
                            <>
                                <Save className="h-4 w-4" />
                                Create Category
                            </>
                        )}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CreateCategoryForm;