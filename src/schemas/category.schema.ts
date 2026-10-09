import { z } from "zod";
export const categorySchema = z.object({
    name: z
        .string()
        .min(2, "Category name must be at least 2 characters")
        .max(100, "Category name cannot exceed 100 characters"),
    description: z
        .string()
        .max(500, "Description cannot exceed 500 characters")
        .optional(),
    image: z
        .url("Please enter a valid image URL")
        .optional()
        .or(z.literal("")),
});

export type CategoryFormValues = z.infer<typeof categorySchema>;