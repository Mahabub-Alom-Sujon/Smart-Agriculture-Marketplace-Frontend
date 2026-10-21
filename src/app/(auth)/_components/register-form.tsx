"use client";
import Link from "next/link";
import {
    Loader2,
    Mail,
    MapPin,
    Phone,
    User,
    Eye,
    EyeOff,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { registerAction } from "@/app/(auth)/_actions/registerAction";
import {
    registerSchema,
    type RegisterFormData,
} from "@/schemas/register.schema";
export function RegisterForm() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const {
        register,
        handleSubmit,
        setValue,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            address: "",
            imageUrl: "",
            password: "",
            confirmPassword: "",
            role: "BUYER",
        },
    });

    const onSubmit = async (data: RegisterFormData) => {
        try {
            // confirmPassword is only for frontend validation
            const { confirmPassword, ...registerData } = data;
            const result = await registerAction(registerData);
            if (result.success) {
                toast.success("Registration successful!");
                setTimeout(() => {
                    router.push("/login");
                }, 1200);

                return;
            }

            toast.error(result.message || "Registration failed.");
        } catch (error) {
            toast.error(
                error instanceof Error ? error.message : "Something went wrong. Please try again.",
            );
        }
    };

    const inputClassName = "h-11 border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 transition-colors focus-visible:ring-green-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500";
    const labelClassName = "text-sm font-medium text-slate-700 dark:text-slate-300";
    const iconClassName = "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 dark:text-slate-500";
    const errorClassName = "text-xs text-red-500 dark:text-red-400";

    return (
        <Card className="border-slate-200 bg-white text-slate-900 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
            <CardContent className="p-6 sm:p-8">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    {/* Full Name */}
                    <div className="space-y-2">
                        <label htmlFor="name" className={labelClassName}>
                            Full Name
                        </label>

                        <div className="relative">
                            <User
                                aria-hidden="true"
                                className={iconClassName}
                            />

                            <Input
                                id="name"
                                autoComplete="name"
                                {...register("name")}
                                placeholder="Your full name"
                                className={`pl-10 ${inputClassName} ${
                                errors.name
                                ? "border-red-500 focus-visible:ring-red-500 dark:border-red-400" : ""
                                }`}
                            />
                        </div>

                        {errors.name && (
                            <p className={errorClassName}>
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label htmlFor="email" className={labelClassName}>
                            Email Address
                        </label>
                        <div className="relative">
                            <Mail
                                aria-hidden="true"
                                className={iconClassName}
                            />

                            <Input
                                id="email"
                                {...register("email")}
                                type="email"
                                autoComplete="email"
                                placeholder="you@example.com"
                                className={`pl-10 ${inputClassName} ${
                                errors.email
                                ? "border-red-500 focus-visible:ring-red-500 dark:border-red-400" : ""
                            }`}
                            />
                        </div>
                        {errors.email && (
                            <p className={errorClassName}>
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    {/* Phone */}
                    <div className="space-y-2">
                        <label htmlFor="phone" className={labelClassName}>
                            Phone Number
                        </label>
                        <div className="relative">
                            <Phone
                                aria-hidden="true"
                                className={iconClassName}
                            />
                            <Input
                                id="phone"
                                {...register("phone")}
                                type="tel"
                                autoComplete="tel"
                                placeholder="+880 1700 000000"
                                className={`pl-10 ${inputClassName} ${
                                errors.phone
                                ? "border-red-500 focus-visible:ring-red-500 dark:border-red-400" : ""
                            }`}
                            />
                        </div>
                        {errors.phone && (
                            <p className={errorClassName}>
                                {errors.phone.message}
                            </p>
                        )}
                    </div>
                    {/* Address */}
                    <div className="space-y-2">
                        <label htmlFor="address" className={labelClassName}>
                            Address
                        </label>

                        <div className="relative">
                            <MapPin
                                aria-hidden="true"
                                className={iconClassName}
                            />

                            <Input
                                id="address"
                                {...register("address")}
                                autoComplete="street-address"
                                placeholder="Your address"
                                className={`pl-10 ${inputClassName} ${
                                errors.address
                                ? "border-red-500 focus-visible:ring-red-500 dark:border-red-400" : ""
                            }`}
                            />
                        </div>
                        {errors.address && (
                            <p className={errorClassName}>
                                {errors.address.message}
                            </p>
                        )}
                    </div>
                    {/* Account Type */}
                    <div className="space-y-2">
                        <label htmlFor="role" className={labelClassName}>
                            Account Type
                        </label>
                        <Select
                            defaultValue="BUYER"
                            onValueChange={(value) =>
                                setValue(
                                    "role",
                                    value as RegisterFormData["role"],
                                    {
                                        shouldValidate: true,
                                        shouldDirty: true,
                                    },
                                )
                            }
                        >
                            <SelectTrigger
                                id="role"
                                className="h-11 w-full border-slate-200 bg-white text-slate-900 transition-colors focus:ring-green-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                            >
                                <SelectValue placeholder="Select account type" />
                            </SelectTrigger>

                            <SelectContent className="border-slate-200 bg-white text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                                <SelectItem
                                    value="BUYER"
                                    className="focus:bg-slate-100 focus:text-slate-900 dark:focus:bg-slate-800 dark:focus:text-slate-100"
                                >
                                    Buyer
                                </SelectItem>

                                <SelectItem
                                    value="FARMER"
                                    className="focus:bg-slate-100 focus:text-slate-900 dark:focus:bg-slate-800 dark:focus:text-slate-100"
                                >
                                    Farmer
                                </SelectItem>

                                <SelectItem
                                    value="EXPERT"
                                    className="focus:bg-slate-100 focus:text-slate-900 dark:focus:bg-slate-800 dark:focus:text-slate-100"
                                >
                                    Agriculture Expert
                                </SelectItem>
                            </SelectContent>
                        </Select>

                        {errors.role && (
                            <p className={errorClassName}>
                                {errors.role.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                        <label htmlFor="password" className={labelClassName}>
                            Password
                        </label>

                        <div className="relative">
                            <Input
                                id="password"
                                {...register("password")}
                                type={showPassword ? "text" : "password"}
                                autoComplete="new-password"
                                placeholder="Create a strong password"
                                className={`pr-10 ${inputClassName} ${
                                errors.password
                                ? "border-red-500 focus-visible:ring-red-500 dark:border-red-400" : ""
                            }`}
                            />
                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword((prev) => !prev)
                                }
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 dark:text-slate-500 dark:hover:text-slate-300"
                                aria-label={ showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? (
                                    <EyeOff className="h-4 w-4" />
                                ) : (
                                    <Eye className="h-4 w-4" />
                                )}
                            </button>
                        </div>

                        {errors.password && (
                            <p className={errorClassName}>
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                        <label
                            htmlFor="confirmPassword"
                            className={labelClassName}
                        >
                            Confirm Password
                        </label>

                        <div className="relative">
                            <Input
                                id="confirmPassword"
                                {...register("confirmPassword")}
                                type={ showConfirmPassword ? "text" : "password"}
                                autoComplete="new-password"
                                placeholder="Confirm your password"
                                className={`pr-10 ${inputClassName} ${
                                errors.confirmPassword
                                ? "border-red-500 focus-visible:ring-red-500 dark:border-red-400" : ""
                            }`}
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowConfirmPassword((prev) => !prev)
                                }
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 dark:text-slate-500 dark:hover:text-slate-300"
                                aria-label={ showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                            >
                                {showConfirmPassword ? (
                                    <EyeOff className="h-4 w-4" />
                                ) : (
                                    <Eye className="h-4 w-4" />
                                )}
                            </button>
                        </div>

                        {errors.confirmPassword && (
                            <p className={errorClassName}>
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="h-11 w-full bg-green-600 font-medium text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-green-600 dark:hover:bg-green-500"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Creating account...
                            </>
                        ) : (
                            "Create Account"
                        )}
                    </Button>
                </form>

                {/* Login Link */}
                <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
                    Already have an account?{" "}

                    <Link
                        href="/login"
                        className="font-semibold text-green-700 transition-colors hover:text-green-800 hover:underline dark:text-green-400 dark:hover:text-green-300"
                    >
                        Sign in
                    </Link>
                </p>
            </CardContent>
        </Card>
    );
}