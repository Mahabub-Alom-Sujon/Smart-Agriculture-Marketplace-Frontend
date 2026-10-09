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
        toast.success(result?.message || "Product created successfully!"
        );
        reset();
    };
    const inputClass = (hasError: boolean) =>
        `h-12 w-full rounded-lg border bg-white px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:ring-4 ${
            hasError ? "border-red-300 focus:border-red-500 focus:ring-red-500/10"
                : "border-slate-200 focus:border-emerald-500 focus:ring-green-500/10"
        }`;
    const labelClass = "block text-sm font-medium text-slate-700";
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
        >
            {/* Basic Information */}
            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-green-600">
                        <Package className="h-5 w-5" />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-slate-900">
                            Basic Information
                        </h2>
                        <p className="text-sm text-slate-500">
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
                        <p className="text-xs font-medium text-red-500">
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
                        className={`w-full resize-none rounded-lg border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:ring-4 ${
                            errors.description
                                ? "border-red-300 focus:border-red-500 focus:ring-red-500/10"
                                : "border-slate-200 focus:border-green-500 focus:ring-green-500/10"
                        }`}
                    />

                    {errors.description && (
                        <p className="text-xs font-medium text-red-500">
                            {errors.description.message}
                        </p>
                    )}
                </div>
            </section>

            {/* Price and Quantity */}
            <section className="space-y-6">
                <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                        Pricing & Inventory
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
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
                            <p className="text-xs font-medium text-red-500">
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
                            <p className="text-xs font-medium text-red-500">
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
                            <p className="text-xs font-medium text-red-500">
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
                            <p className="text-xs font-medium text-red-500">
                                {errors.status.message}
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* Category and Farmer */}
            <section className="space-y-6 mt-3">
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
                            <p className="text-xs font-medium text-red-500">
                                {errors.categoryId.message}
                            </p>
                        )}

                        {categories.length === 0 && (
                            <p className="text-xs text-amber-600">
                                No categories available. Create a category first.
                            </p>
                        )}
                    </div>

                    {/* Farmer */}
                    <div className="space-y-2">
                        <label htmlFor="farmerId" className={labelClass}>
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
                            <p className="text-xs font-medium text-red-500">
                                {errors.farmerId.message}
                            </p>
                        )}

                        {farmers.length === 0 && (
                            <p className="text-xs text-amber-600">
                                No farmers available.
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* Image */}
            <section className="space-y-6">
                <div className="space-y-2 mt-2">
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
                        <p className="text-xs font-medium text-red-500">
                            {errors.image.message}
                        </p>
                    )}

                    <p className="text-xs text-slate-400">
                        Use a valid, publicly accessible image URL.
                    </p>
                </div>
            </section>

            {/* Actions */}
            <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <Link
                    href="/dashboard/admin/products"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Products
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
                        disabled={
                            isSubmitting ||
                            categories.length === 0 ||
                            farmers.length === 0
                        }
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
