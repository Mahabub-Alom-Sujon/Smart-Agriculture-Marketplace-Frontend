import { z } from "zod";
export const productSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Product name must be at least 2 characters")
        .max(100, "Product name cannot exceed 100 characters"),
    description: z
        .string()
        .trim()
        .max(1000, "Description cannot exceed 1000 characters")
        .optional(),
    price: z
        .number({
            error: "Price is required",
        })
        .int("Price must be a whole number")
        .positive("Price must be greater than 0"),
    quantity: z
        .number({
            error: "Quantity is required",
        })
        .positive("Quantity must be greater than 0"),
    unit: z
        .string()
        .trim()
        .min(1, "Please select a unit")
        .default("KG"),
    image: z
        .url("Please enter a valid image URL")
        .optional()
        .or(z.literal("")),
    status: z
        .enum(["ACTIVE", "SOLD_OUT", "INACTIVE"])
        .default("ACTIVE"),
    categoryId: z
        .string()
        .uuid("Please select a valid category"),

    farmerId: z
        .string()
        .uuid("Please select a valid farmer"),
});
// Form input type
export type ProductFormValues = z.input<typeof productSchema>;
// Validated output type
export type ProductValidatedValues = z.output<typeof productSchema>;

