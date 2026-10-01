import { z } from "zod";

export const registerSchema = z
    .object({
        name: z
            .string()
            .min(3, "Name must be at least 3 characters"),

        email: z
            .email("Please enter a valid email"),

        phone: z
            .string()
            .min(11, "Invalid phone number"),

        address: z
            .string()
            .min(5, "Address must be at least 5 characters"),

        imageUrl: z
            .string()
            .url("Please enter a valid image URL")
            .optional()
            .or(z.literal("")),

        password: z
            .string()
            .min(6, "Password must be at least 6 characters"),

        confirmPassword: z
            .string()
            .min(6, "Please confirm your password"),

        role: z.enum([
            "FARMER",
            "BUYER",
            "EXPERT",
        ]),
    })
    .refine(
        (data) => data.password === data.confirmPassword,
        {
            message: "Passwords do not match",
            path: ["confirmPassword"],
        }
    );

export type RegisterFormData = z.infer<
    typeof registerSchema
>;