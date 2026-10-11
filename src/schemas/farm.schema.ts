import { z } from "zod";
export const farmSchema = z.object({
    farmName: z
        .string()
        .trim()
        .min(2, "Farm name must be at least 2 characters")
        .max(100, "Farm name must not exceed 100 characters"),

    location: z
        .string()
        .trim()
        .min(3, "Please enter a valid farm location")
        .max(255, "Location must not exceed 255 characters"),

    landSize: z.coerce
        .number()
        .positive("Land size must be greater than zero"),

    soilType: z
        .string()
        .trim()
        .min(2, "Soil type must be at least 2 characters")
        .max(100, "Soil type must not exceed 100 characters"),
});
export type FarmFormInput = z.input<typeof farmSchema>;
export type FarmFormValues = z.output<typeof farmSchema>;