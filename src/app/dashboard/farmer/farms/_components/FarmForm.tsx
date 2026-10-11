// "use client";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { MapPin, Sprout, Ruler, LoaderCircle, Save } from "lucide-react";
// import {
//     farmSchema,
//     type FarmFormValues,
// } from "@/schemas/farm.schema";
//
// interface FarmFormProps {
//     initialValues?: FarmFormValues;
//     submitLabel: string;
//     submittingLabel: string;
//     onSubmit: (values: FarmFormValues) => Promise<void>;
// }
//
// const inputClass =
//     "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10";
//
// export default function FarmForm({
//                                      initialValues,
//                                      submitLabel,
//                                      submittingLabel,
//                                      onSubmit,
//                                  }: FarmFormProps) {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors, isSubmitting },
//     } = useForm<FarmFormValues>({
//         resolver: zodResolver(farmSchema),
//         defaultValues: initialValues ?? {
//             farmName: "",
//             location: "",
//             landSize: "",
//             soilType: "",
//         },
//     });
//
//     return (
//         <form
//             onSubmit={handleSubmit(onSubmit)}
//             noValidate
//             className="space-y-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
//         >
//             <div className="border-b border-slate-100 pb-5">
//                 <h2 className="text-lg font-bold text-slate-900">
//                     Farm Information
//                 </h2>
//                 <p className="mt-1 text-sm text-slate-500">
//                     Enter your farm details below.
//                 </p>
//             </div>
//
//             {/* Farm name */}
//             <div>
//                 <label
//                     htmlFor="farmName"
//                     className="text-sm font-semibold text-slate-700"
//                 >
//                     Farm Name *
//                 </label>
//                 <div className="relative">
//                     <Sprout className="absolute left-3 top-5 h-4 w-4 text-emerald-600" />
//                     <input
//                         id="farmName"
//                         {...register("farmName")}
//                         placeholder="e.g. Green Valley Farm"
//                         maxLength={100}
//                         aria-invalid={!!errors.farmName}
//                         className={`${inputClass} pl-10`}
//                     />
//                 </div>
//                 {errors.farmName && (
//                     <p className="mt-1 text-sm text-red-600">
//                         {errors.farmName.message}
//                     </p>
//                 )}
//             </div>
//
//             {/* Location */}
//             <div>
//                 <label
//                     htmlFor="location"
//                     className="text-sm font-semibold text-slate-700"
//                 >
//                     Farm Location *
//                 </label>
//                 <div className="relative">
//                     <MapPin className="absolute left-3 top-5 h-4 w-4 text-emerald-600" />
//                     <input
//                         id="location"
//                         {...register("location")}
//                         placeholder="Village, Upazila, District"
//                         maxLength={255}
//                         aria-invalid={!!errors.location}
//                         className={`${inputClass} pl-10`}
//                     />
//                 </div>
//                 {errors.location && (
//                     <p className="mt-1 text-sm text-red-600">
//                         {errors.location.message}
//                     </p>
//                 )}
//             </div>
//
//             <div className="grid gap-6 sm:grid-cols-2">
//                 {/* Land size */}
//                 <div>
//                     <label
//                         htmlFor="landSize"
//                         className="text-sm font-semibold text-slate-700"
//                     >
//                         Land Size (acres)
//                         <span className="ml-1 font-normal text-slate-400">
//                             Optional
//                         </span>
//                     </label>
//                     <div className="relative">
//                         <Ruler className="absolute left-3 top-5 h-4 w-4 text-emerald-600" />
//                         <input
//                             id="landSize"
//                             type="number"
//                             min="0.01"
//                             step="any"
//                             {...register("landSize")}
//                             placeholder="e.g. 2.5"
//                             aria-invalid={!!errors.landSize}
//                             className={`${inputClass} pl-10`}
//                         />
//                     </div>
//                     {errors.landSize && (
//                         <p className="mt-1 text-sm text-red-600">
//                             {errors.landSize.message}
//                         </p>
//                     )}
//                 </div>
//
//                 {/* Soil type */}
//                 <div>
//                     <label
//                         htmlFor="soilType"
//                         className="text-sm font-semibold text-slate-700"
//                     >
//                         Soil Type
//                         <span className="ml-1 font-normal text-slate-400">
//                             Optional
//                         </span>
//                     </label>
//                     <select
//                         id="soilType"
//                         {...register("soilType")}
//                         className={inputClass}
//                     >
//                         <option value="">Select soil type</option>
//                         <option value="Clay">Clay</option>
//                         <option value="Sandy">Sandy</option>
//                         <option value="Silty">Silty</option>
//                         <option value="Loamy">Loamy</option>
//                         <option value="Peaty">Peaty</option>
//                         <option value="Chalky">Chalky</option>
//                         <option value="Alluvial">Alluvial</option>
//                         <option value="Other">Other</option>
//                     </select>
//                     {errors.soilType && (
//                         <p className="mt-1 text-sm text-red-600">
//                             {errors.soilType.message}
//                         </p>
//                     )}
//                 </div>
//             </div>
//
//             <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
//                 <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                     {isSubmitting ? (
//                         <>
//                             <LoaderCircle className="h-4 w-4 animate-spin" />
//                             {submittingLabel}
//                         </>
//                     ) : (
//                         <>
//                             <Save className="h-4 w-4" />
//                             {submitLabel}
//                         </>
//                     )}
//                 </button>
//             </div>
//         </form>
//     );
// }
