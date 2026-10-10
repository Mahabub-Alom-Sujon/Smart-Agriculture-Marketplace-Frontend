"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
    Save,
    RotateCcw,
    UserRound,
    ShieldCheck,
    CalendarDays,
    Mail,
    Phone,
    MapPin,
    BriefcaseBusiness,
} from "lucide-react";
import { toast } from "sonner";

import type {
    UserProfile,
    UpdateProfileInput,
} from "@/types/types.profile";

import { updateProfile } from "@/app/profile/_actions/updateProfile";
import ProfileImageUpload from "@/app/profile/_components/ProfileImageUpload";

interface ProfileSettingsProps {
    initialProfile: UserProfile;
}

interface ProfileFormValues {
    name: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    certification: string;
    specialization: string;
    qualification: string;
    experience: string;
}

export default function ProfileSettings({
    initialProfile,
}: ProfileSettingsProps) {
    const [profile, setProfile] = useState(initialProfile);
    const [saving, setSaving] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isDirty },
    } = useForm<ProfileFormValues>({
        defaultValues: {
            name: initialProfile.name ?? "",
            phone: initialProfile.phone ?? "",
            address: initialProfile.address ?? "",
            city: initialProfile.buyer?.city ?? initialProfile.expert?.city ?? "",
            country: initialProfile.buyer?.country ?? "",
            certification: initialProfile.farmer?.certification ?? "",
            specialization: initialProfile.expert?.specialization ?? "",
            qualification: initialProfile.expert?.qualification ?? "",
            experience: initialProfile.expert?.experience != null
                ? String(initialProfile.expert.experience)
                    : "",
        },
    });

    const onSubmit = async (values: ProfileFormValues) => {
        const payload: UpdateProfileInput = {
            name: values.name.trim(),
            phone: values.phone.trim(),
            address: values.address.trim() || null,
        };

        // Buyer-specific fields
        if (profile.role === "BUYER") {
            Object.assign(payload, {
                city: values.city.trim(),
                country: values.country.trim(),
            });
        }

        // Farmer-specific fields
        if (profile.role === "FARMER") {
            Object.assign(payload, {
                certification: values.certification.trim(),
            });
        }

        // Expert-specific fields
        if (profile.role === "EXPERT") {
            Object.assign(payload, {
                city: values.city.trim(),
                specialization: values.specialization.trim(),
                qualification: values.qualification.trim(),
                experience:
                    values.experience.trim() === ""
                        ? undefined
                        : Number(values.experience),
            });
        }

        if (
            values.experience.trim() !== "" &&
            profile.role === "EXPERT" &&
            (!Number.isFinite(Number(values.experience)) ||
                Number(values.experience) < 0)
        ) {
            toast.error("Please enter a valid experience value.");
            return;
        }

        setSaving(true);

        try {
            const result = await updateProfile(payload);

            if (!result.success || !result.data) {
                toast.error(result.message || "Failed to update profile.");
                return;
            }

            setProfile(result.data);

            reset({
                name: result.data.name ?? "",
                phone: result.data.phone ?? "",
                address: result.data.address ?? "",
                city:
                    result.data.buyer?.city ??
                    result.data.expert?.city ??
                    "",
                country: result.data.buyer?.country ?? "",
                certification:
                    result.data.farmer?.certification ?? "",
                specialization:
                    result.data.expert?.specialization ?? "",
                qualification:
                    result.data.expert?.qualification ?? "",
                experience:
                    result.data.expert?.experience != null
                        ? String(result.data.expert.experience)
                        : "",
            });

            toast.success(
                result.message || "Profile updated successfully."
            );
        } catch {
            toast.error("Something went wrong while updating your profile.");
        } finally {
            setSaving(false);
        }
    };

    const handleReset = () => {
        reset({
            name: profile.name ?? "",
            phone: profile.phone ?? "",
            address: profile.address ?? "",
            city:
                profile.buyer?.city ??
                profile.expert?.city ??
                "",
            country: profile.buyer?.country ?? "",
            certification: profile.farmer?.certification ?? "",
            specialization: profile.expert?.specialization ?? "",
            qualification: profile.expert?.qualification ?? "",
            experience:
                profile.expert?.experience != null
                    ? String(profile.expert.experience)
                    : "",
        });

        toast.info("Form reset to the current profile.");
    };

    const inputClassName =
        "mt-2 h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10";

    const labelClassName =
        "text-sm font-medium text-slate-700";

    return (
        <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                {/* Page header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3">
                        <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                            <UserRound className="size-6" />
                        </div>

                        <div>
                            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                                Profile Settings
                            </h1>
                            <p className="mt-1 text-sm text-slate-500">
                                Manage your personal information and account details.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
                    {/* Left profile card */}
                    <aside className="space-y-6 lg:col-span-1">
                        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                            <div className="h-24 bg-gradient-to-r from-emerald-600 to-teal-500" />

                            <div className="px-6 pb-6">
                                <div className="-mt-12">
                                    <ProfileImageUpload
                                        name={profile.name}
                                        imageUrl={profile.imageUrl ?? ""}
                                        onUploaded={(
                                            imageUrl,
                                            imagePublicId
                                        ) => {
                                            setProfile((previous) => ({
                                                ...previous,
                                                imageUrl,
                                                imagePublicId,
                                            }));
                                        }}
                                    />
                                </div>

                                <div className="mt-5">
                                    <h2 className="break-words text-xl font-bold text-slate-900">
                                        {profile.name}
                                    </h2>

                                    <p className="mt-1 break-all text-sm text-slate-500">
                                        {profile.email}
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold capitalize text-emerald-700">
                                            <ShieldCheck className="size-3.5" />
                                            {profile.role
                                                .toLowerCase()
                                                .replaceAll("_", " ")}
                                        </span>

                                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                                            {profile.status}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-6 space-y-4 border-t border-slate-100 pt-5">
                                    <div className="flex items-start gap-3">
                                        <Mail className="mt-0.5 size-4 shrink-0 text-slate-400" />
                                        <div className="min-w-0">
                                            <p className="text-xs text-slate-400">
                                                Email address
                                            </p>
                                            <p className="mt-1 break-all text-sm text-slate-700">
                                                {profile.email}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Phone className="mt-0.5 size-4 shrink-0 text-slate-400" />
                                        <div className="min-w-0">
                                            <p className="text-xs text-slate-400">
                                                Phone number
                                            </p>
                                            <p className="mt-1 text-sm text-slate-700">
                                                {profile.phone || "Not provided"}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <CalendarDays className="mt-0.5 size-4 shrink-0 text-slate-400" />
                                        <div>
                                            <p className="text-xs text-slate-400">
                                                Member since
                                            </p>
                                            <p className="mt-1 text-sm text-slate-700">
                                                {new Date(
                                                    profile.createdAt
                                                ).toLocaleDateString("en-GB", {
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric",
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Account status */}
                        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                            <h3 className="font-semibold text-slate-900">
                                Account Security
                            </h3>

                            <div className="mt-4 flex items-center justify-between gap-3">
                                <span className="text-sm text-slate-600">
                                    Email verification
                                </span>

                                <span
                                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
    profile.emailVerified
        ? "bg-emerald-50 text-emerald-700"
        : "bg-amber-50 text-amber-700"
}`}
                                >
                                    {profile.emailVerified
                                        ? "Verified"
                                        : "Not verified"}
                                </span>
                            </div>

                            <div className="mt-3 flex items-center justify-between gap-3">
                                <span className="text-sm text-slate-600">
                                    Authentication
                                </span>
                                <span className="text-xs font-medium text-slate-700">
                                    {profile.authProvider}
                                </span>
                            </div>
                        </section>
                    </aside>

                    {/* Right settings form */}
                    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm lg:col-span-2">
                        <div className="border-b border-slate-100 px-5 py-5 sm:px-8">
                            <h2 className="text-lg font-bold text-slate-900">
                                Personal Information
                            </h2>
                            <p className="mt-1 text-sm text-slate-500">
                                Update the information associated with your account.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-8 p-5 sm:p-8"
                        >
                            {/* Common fields */}
                            <div>
                                <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-800">
                                    <UserRound className="size-4 text-emerald-600" />
                                    Basic Information
                                </h3>

                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className={labelClassName}
                                        >
                                            Full name
                                        </label>

                                        <input
                                            id="name"
                                            {...register("name", {
                                                required: "Name is required.",
                                                minLength: {
                                                    value: 2,
                                                    message:
                                                        "Name must be at least 2 characters.",
                                                },
                                            })}
                                            placeholder="Enter your full name"
                                            className={inputClassName}
                                        />

                                        {errors.name && (
                                            <p className="mt-1 text-xs text-red-600">
                                                {errors.name.message}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className={labelClassName}
                                        >
                                            Phone number
                                        </label>

                                        <input
                                            id="phone"
                                            {...register("phone", {
                                                required:
                                                    "Phone number is required.",
                                            })}
                                            placeholder="Enter phone number"
                                            className={inputClassName}
                                        />

                                        {errors.phone && (
                                            <p className="mt-1 text-xs text-red-600">
                                                {errors.phone.message}
                                            </p>
                                        )}
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="address"
                                            className={labelClassName}
                                        >
                                            Address
                                        </label>

                                        <textarea
                                            id="address"
                                            rows={3}
                                            {...register("address")}
                                            placeholder="Enter your address"
                                            className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Buyer fields */}
                            {profile.role === "BUYER" && (
                                <div className="border-t border-slate-100 pt-6">
                                    <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-800">
                                        <MapPin className="size-4 text-emerald-600" />
                                        Location Information
                                    </h3>

                                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                        <div>
                                            <label
                                                htmlFor="city"
                                                className={labelClassName}
                                            >
                                                City
                                            </label>
                                            <input
                                                id="city"
                                                {...register("city")}
                                                placeholder="Enter city"
                                                className={inputClassName}
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="country"
                                                className={labelClassName}
                                            >
                                                Country
                                            </label>
                                            <input
                                                id="country"
                                                {...register("country")}
                                                placeholder="Enter country"
                                                className={inputClassName}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Farmer fields */}
                            {profile.role === "FARMER" && (
                                <div className="border-t border-slate-100 pt-6">
                                    <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-800">
                                        <BriefcaseBusiness className="size-4 text-emerald-600" />
                                        Farmer Information
                                    </h3>

                                    <div>
                                        <label
                                            htmlFor="certification"
                                            className={labelClassName}
                                        >
                                            Certification
                                        </label>

                                        <input
                                            id="certification"
                                            {...register("certification")}
                                            placeholder="Enter certification details"
                                            className={inputClassName}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Expert fields */}
                            {profile.role === "EXPERT" && (
                                <div className="border-t border-slate-100 pt-6">
                                    <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-800">
                                        <BriefcaseBusiness className="size-4 text-emerald-600" />
                                        Expert Information
                                    </h3>

                                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                        <div>
                                            <label
                                                htmlFor="specialization"
                                                className={labelClassName}
                                            >
                                                Specialization
                                            </label>
                                            <input
                                                id="specialization"
                                                {...register("specialization")}
                                                placeholder="e.g. Crop science"
                                                className={inputClassName}
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="qualification"
                                                className={labelClassName}
                                            >
                                                Qualification
                                            </label>
                                            <input
                                                id="qualification"
                                                {...register("qualification")}
                                                placeholder="Enter qualification"
                                                className={inputClassName}
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="city"
                                                className={labelClassName}
                                            >
                                                City
                                            </label>
                                            <input
                                                id="city"
                                                {...register("city")}
                                                placeholder="Enter city"
                                                className={inputClassName}
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="experience"
                                                className={labelClassName}
                                            >
                                                Experience (years)
                                            </label>
                                            <input
                                                id="experience"
                                                type="number"
                                                min="0"
                                                step="1"
                                                {...register("experience")}
                                                placeholder="e.g. 5"
                                                className={inputClassName}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Read-only account details */}
                            <div className="border-t border-slate-100 pt-6">
                                <h3 className="mb-4 text-sm font-semibold text-slate-800">
                                    Account Details
                                </h3>

                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className={labelClassName}
                                        >
                                            Email address
                                        </label>
                                        <input
                                            id="email"
                                            value={profile.email}
                                            readOnly
                                            className={`${inputClassName} cursor-not-allowed bg-slate-50 text-slate-500`}
                                        />
                                        <p className="mt-1 text-xs text-slate-400">
                                            Email cannot be changed here.
                                        </p>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="role"
                                            className={labelClassName}
                                        >
                                            Account role
                                        </label>
                                        <input
                                            id="role"
                                            value={profile.role}
                                            readOnly
                                            className={`${inputClassName} cursor-not-allowed bg-slate-50 text-slate-500`}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Form actions */}
                            <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">
                                <button
                                    type="button"
                                    onClick={handleReset}
                                    disabled={saving || !isDirty}
                                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <RotateCcw className="size-4" />
                                    Reset
                                </button>

                                <button
                                    type="submit"
                                    disabled={saving}
                                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {saving ? (
                                        <>
                                            <span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                            Saving...
                                        </>
                                    ) : (
                                        <>
                                            <Save className="size-4" />
                                            Save Changes
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
}