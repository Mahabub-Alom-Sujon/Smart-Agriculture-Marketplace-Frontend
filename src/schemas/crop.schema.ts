// import { z } from "zod";
// import moment from "moment";
// export const CropSchema = z.object({
//     name: z
//         .string()
//         .min(1, "Crop name is required")
//         .max(100, "Crop name must not exceed 100 characters"),
//
//     variety: z
//         .string()
//         .min(1, "Crop variety is required")
//         .max(100, "Variety must not exceed 100 characters"),
//
//     plantingDate: z
//         .string()
//         .datetime({ offset: true }),
//
//     harvestDate: z
//         .string()
//         .datetime({ offset: true }),
//
//     status: z.enum([
//         "PLANNED",
//         "GROWING",
//         "HARVESTED",
//     ]),
//
//     farmId: z
//         .string()
//         .uuid("Invalid farm ID"),
// });
//
// export type CreateCropFormValues = z.infer<typeof CropSchema>;

import { z } from "zod";
import moment from "moment";

const cropDateSchema = z
    .string()
    .trim()
    .min(1, "Date is required")
    .refine(
        (value) => moment(value, "MM/DD/YY", true).isValid(),
        {
            message: "Date must be in MM/DD/YY format (e.g. 10/11/26)",
        },
    )
    .transform((value) =>
        moment(value, "MM/DD/YY", true).toISOString(),
    );

export const CropSchema = z
    .object({
        name: z
            .string()
            .trim()
            .min(1, "Crop name is required")
            .max(100, "Crop name must not exceed 100 characters"),

        variety: z
            .string()
            .trim()
            .min(1, "Crop variety is required")
            .max(100, "Variety must not exceed 100 characters"),

        plantingDate: cropDateSchema,

        harvestDate: cropDateSchema,

        status: z.enum([
            "PLANNED",
            "GROWING",
            "HARVESTED",
        ]),

        farmId: z
            .string()
            .uuid("Invalid farm ID"),
    })
    .refine(
        (values) =>
            moment(values.harvestDate).isSameOrAfter(
                moment(values.plantingDate),
            ),
        {
            message: "Harvest date must be on or after planting date",
            path: ["harvestDate"],
        },
    );

export type CropFormInput = z.input<typeof CropSchema>;
export type CreateCropInput = z.output<typeof CropSchema>;