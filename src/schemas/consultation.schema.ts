import { z } from "zod";
export const consultationSchema = z.object({
    cropName: z
        .string()
        .trim()
        .max(100, "Crop name must not exceed 100 characters")
        .optional()
        .or(z.literal("")),
    problem: z
        .string()
        .trim()
        .min(10, "Please describe the problem in at least 10 characters")
        .max(2000, "Problem must not exceed 2000 characters"),
    image: z
        .union([
            z.literal(""),
            z.url("Please enter a valid image URL"),
        ])
        .optional(),
});
export type ConsultationFormValues = z.infer<typeof consultationSchema>;
