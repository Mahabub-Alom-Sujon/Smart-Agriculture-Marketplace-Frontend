"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
    ArrowLeft,
    Loader2,
    Save,
    Package,
} from "lucide-react";
import Link from "next/link";
import {
    productSchema,
    type ProductFormValues,
    type ProductValidatedValues,
} from "@/schemas/product.schema";
import { createProduct } from "@/app/dashboard/admin/products/_actions/createProduct";

interface CategoryOption {
    id: string;
    name: string;
}
interface FarmerOption {
    id: string;
    name: string;
}

interface CreateProductFormProps {
    categories: CategoryOption[];
    farmers: FarmerOption[];
}

const CreateProductForm = ({
    categories,
    farmers,
}: CreateProductFormProps) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<
        ProductFormValues,
        unknown,
        ProductValidatedValues
    >({
        resolver: zodResolver(productSchema),
        defaultValues: {
            name: "",
            description: "",
            price: 0,
            quantity: 1,
            unit: "KG",
            image: "",
            status: "ACTIVE",
            categoryId: "",
            farmerId: "",
        },
    });

    const onSubmit = async (data: ProductValidatedValues) => {
        try {
            const result = await createProduct({
                name: data.name,
                description: data.description || undefined,
                price: data.price,
                quantity: data.quantity,
                unit: data.unit,
                image: data.image || undefined,
                status: data.status,
                categoryId: data.categoryId,
                farmerId: data.farmerId,
            });

            toast.success(
                result?.message || "Product created successfully!"
            );

            reset();
        } catch {
            toast.error("Failed to create product. Please try again.");
        }
    };

    const inputClass = (hasError: boolean) =>
        `h-12 w-full rounded-lg border bg-white px-4 text-sm text-slate-900 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:ring-4 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 ${
    hasError
        ? "border-red-300 focus:border-red-500 focus:ring-red-500/10 dark:border-red-500/50 dark:focus:border-red-400"
        : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/10 dark:border-slate-700 dark:focus:border-emerald-400"
}`;

    const labelClass = "block text-sm font-medium text-slate-700 dark:text-slate-300";
    const errorClass = "text-xs font-medium text-red-500 dark:text-red-400";
    const sectionTitleClass = "text-lg font-semibold text-slate-900 dark:text-white";
    const helperClass = "text-sm text-slate-500 dark:text-slate-400";
    const secondaryButtonClass = "inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800";
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
        >
            {/* Basic Information */}
            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                        <Package className="h-5 w-5" />
                    </div>

                    <div>
                        <h2 className={sectionTitleClass}>
                            Basic Information
                        </h2>
                        <p className={helperClass}>
                            Enter your product details.
                        </p>
                    </div>
                </div>

                {/* Product Name */}
                <div className="space-y-2">
                    <label htmlFor="name" className={labelClass}>
                        Product Name <span className="text-red-500">*</span>
                    </label>

                    <input
                        id="name"
                        type="text"
                        placeholder="e.g. Fresh Organic Tomatoes"
                        {...register("name")}
                        className={inputClass(!!errors.name)}
                    />

                    {errors.name && (
                        <p className={errorClass}>
                            {errors.name.message}
                        </p>
                    )}
                </div>

                {/* Description */}
                <div className="space-y-2">
                    <label
                        htmlFor="description"
                        className={labelClass}
                    >
                        Description
                    </label>

                    <textarea
                        id="description"
                        rows={5}
                        placeholder="Describe the product, its quality, and freshness..."
                        {...register("description")}
                        className={`w-full resize-none rounded-lg border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:ring-4 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 ${
                        errors.description
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500/10 dark:border-red-500/50"
                            : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/10 dark:border-slate-700 dark:focus:border-emerald-400"
                        }`}
                    />

                    {errors.description && (
                        <p className={errorClass}>
                            {errors.description.message}
                        </p>
                    )}
                </div>
            </section>

            {/* Pricing and Inventory */}
            <section className="space-y-6">
                <div>
                    <h2 className={sectionTitleClass}>
                        Pricing & Inventory
                    </h2>
                    <p className={`mt-1 ${helperClass}`}>
                        Set the product price and available quantity.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Price */}
                    <div className="space-y-2">
                        <label htmlFor="price" className={labelClass}>
                            Price (৳) <span className="text-red-500">*</span>
                        </label>

                        <input
                            id="price"
                            type="number"
                            min="1"
                            step="1"
                            {...register("price", {
                                valueAsNumber: true,
                            })}
                            className={inputClass(!!errors.price)}
                        />

                        {errors.price && (
                            <p className={errorClass}>
                                {errors.price.message}
                            </p>
                        )}
                    </div>

                    {/* Quantity */}
                    <div className="space-y-2">
                        <label htmlFor="quantity" className={labelClass}>
                            Quantity <span className="text-red-500">*</span>
                        </label>

                        <input
                            id="quantity"
                            type="number"
                            min="0.01"
                            step="any"
                            {...register("quantity", {
                                valueAsNumber: true,
                            })}
                            className={inputClass(!!errors.quantity)}
                        />

                        {errors.quantity && (
                            <p className={errorClass}>
                                {errors.quantity.message}
                            </p>
                        )}
                    </div>

                    {/* Unit */}
                    <div className="space-y-2">
                        <label htmlFor="unit" className={labelClass}>
                            Measurement Unit
                        </label>

                        <select
                            id="unit"
                            {...register("unit")}
                            className={inputClass(!!errors.unit)}
                        >
                            <option value="KG">Kilogram (KG)</option>
                            <option value="GRAM">Gram (GRAM)</option>
                            <option value="LITRE">Litre (LITRE)</option>
                            <option value="PIECE">Piece (PIECE)</option>
                            <option value="BAG">Bag (BAG)</option>
                            <option value="DOZEN">Dozen (DOZEN)</option>
                            <option value="TON">Ton (TON)</option>
                        </select>

                        {errors.unit && (
                            <p className={errorClass}>
                                {errors.unit.message}
                            </p>
                        )}
                    </div>

                    {/* Status */}
                    <div className="space-y-2">
                        <label htmlFor="status" className={labelClass}>
                            Product Status
                        </label>

                        <select
                            id="status"
                            {...register("status")}
                            className={inputClass(!!errors.status)}
                        >
                            <option value="ACTIVE">Active</option>
                            <option value="SOLD_OUT">Sold Out</option>
                            <option value="INACTIVE">Inactive</option>
                        </select>

                        {errors.status && (
                            <p className={errorClass}>
                                {errors.status.message}
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* Category and Farmer */}
            <section className="mt-3 space-y-6">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Category */}
                    <div className="space-y-2">
                        <label
                            htmlFor="categoryId"
                            className={labelClass}
                        >
                            Category <span className="text-red-500">*</span>
                        </label>

                        <select
                            id="categoryId"
                            {...register("categoryId")}
                            className={inputClass(!!errors.categoryId)}
                        >
                            <option value="">Select category</option>

                            {categories.map((category) => (
                                <option
                                    key={category.id}
                                    value={category.id}
                                >
                                    {category.name}
                                </option>
                            ))}
                        </select>

                        {errors.categoryId && (
                            <p className={errorClass}>
                                {errors.categoryId.message}
                            </p>
                        )}

                        {categories.length === 0 && (
                            <p className="text-xs text-amber-600 dark:text-amber-400">
                                No categories available. Create a category first.
                            </p>
                        )}
                    </div>

                    {/* Farmer */}
                    <div className="space-y-2">
                        <label
                            htmlFor="farmerId"
                            className={labelClass}
                        >
                            Farmer <span className="text-red-500">*</span>
                        </label>

                        <select
                            id="farmerId"
                            {...register("farmerId")}
                            className={inputClass(!!errors.farmerId)}
                        >
                            <option value="">Select farmer</option>

                            {farmers.map((farmer) => (
                                <option
                                    key={farmer.id}
                                    value={farmer.id}
                                >
                                    {farmer.name}
                                </option>
                            ))}
                        </select>

                        {errors.farmerId && (
                            <p className={errorClass}>
                                {errors.farmerId.message}
                            </p>
                        )}

                        {farmers.length === 0 && (
                            <p className="text-xs text-amber-600 dark:text-amber-400">
                                No farmers available.
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* Image */}
            <section className="space-y-6">
                <div className="mt-2 space-y-2">
                    <label htmlFor="image" className={labelClass}>
                        Image URL
                    </label>

                    <input
                        id="image"
                        type="url"
                        placeholder="https://example.com/product.jpg"
                        {...register("image")}
                        className={inputClass(!!errors.image)}
                    />

                    {errors.image && (
                        <p className={errorClass}>
                            {errors.image.message}
                        </p>
                    )}

                    <p className="text-xs text-slate-400 dark:text-slate-500">
                        Use a valid, publicly accessible image URL.
                    </p>
                </div>
            </section>

            {/* Actions */}
            <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
                <Link
                    href="/dashboard/admin/products"
                    className={secondaryButtonClass}
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Products
                </Link>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        disabled={isSubmitting}
                        onClick={() => reset()}
                        className={secondaryButtonClass}
                    >
                        Reset
                    </button>

                    <button
                        type="submit"
                        disabled={
                            isSubmitting ||
                            categories.length === 0 ||
                            farmers.length === 0
                        }
                        className="inline-flex h-11 min-w-[150px] items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-emerald-600 dark:hover:bg-emerald-500 dark:focus-visible:ring-offset-slate-950"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Creating...
                            </>
                        ) : (
                            <>
                                <Save className="h-4 w-4" />
                                Create Product
                            </>
                        )}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CreateProductForm;