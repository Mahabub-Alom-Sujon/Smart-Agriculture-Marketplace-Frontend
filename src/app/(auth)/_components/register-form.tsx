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
import { useRouter } from "next/navigation";
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

    const onSubmit = async (
        data: RegisterFormData
    ) => {
        try {
            // confirmPassword is only for frontend validation
            const {confirmPassword, ...registerData} = data;
            const result =
                await registerAction(registerData);
            if (result.success) {
                //toast.success( result.message || "Registration successful!");
                toast.success( "Registration successful!");
                setTimeout(() => {
                    router.push("/login");
                }, 1200);
                return;
            }
            toast.error( result.message || "Registration failed.");
        } catch (error) {
            toast.error(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again."
            );
        }
    };

    return (
        <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-6 sm:p-8">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    {/* Name */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Full Name
                        </label>

                        <div className="relative">
                            <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                            <Input
                                {...register("name")}
                                placeholder="Your full name"
                                className="h-11 pl-10"
                            />
                        </div>
                        {errors.name && (
                            <p className="text-xs text-red-500">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Email Address
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <Input
                                {...register("email")}
                                type="email"
                                placeholder="you@example.com"
                                className="h-11 pl-10"
                            />
                        </div>
                        {errors.email && (
                            <p className="text-xs text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    {/* Phone */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Phone Number
                        </label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <Input
                                {...register("phone")}
                                type="tel"
                                placeholder="+880 1700 000000"
                                className="h-11 pl-10"
                            />
                        </div>
                        {errors.phone && (
                            <p className="text-xs text-red-500">
                                {errors.phone.message}
                            </p>
                        )}
                    </div>
                    {/* Address */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Address
                        </label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <Input
                                {...register("address")}
                                placeholder="Your address"
                                className="h-11 pl-10"
                            />
                        </div>
                        {errors.address && (
                            <p className="text-xs text-red-500">
                                {errors.address.message}
                            </p>
                        )}
                    </div>
                    {/* Image URL */}
                    {/*<div className="space-y-2">*/}
                    {/*    <label className="text-sm font-medium">*/}
                    {/*        Profile Image URL*/}
                    {/*        <span className="ml-1 text-xs text-slate-400">*/}
                    {/*            (Optional)*/}
                    {/*        </span>*/}
                    {/*    </label>*/}

                    {/*    <Input*/}
                    {/*        {...register("imageUrl")}*/}
                    {/*        type="url"*/}
                    {/*        placeholder="https://example.com/profile.jpg"*/}
                    {/*        className="h-11"*/}
                    {/*    />*/}

                    {/*    {errors.imageUrl && (*/}
                    {/*        <p className="text-xs text-red-500">*/}
                    {/*            {errors.imageUrl.message}*/}
                    {/*        </p>*/}
                    {/*    )}*/}
                    {/*</div>*/}
                    {/* Role */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
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
                                    }
                                )
                            }
                        >
                            <SelectTrigger className="h-11 w-full">
                                <SelectValue placeholder="Select account type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="BUYER">
                                    Buyer
                                </SelectItem>

                                <SelectItem value="FARMER">
                                    Farmer
                                </SelectItem>

                                <SelectItem value="EXPERT">
                                    Agriculture Expert
                                </SelectItem>
                            </SelectContent>
                        </Select>

                        {errors.role && (
                            <p className="text-xs text-red-500">
                                {errors.role.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Password
                        </label>

                        <div className="relative">
                            <Input
                                {...register("password")}
                                type={showPassword ? "text" : "password"}
                                placeholder="Create a strong password"
                                className="h-11 pr-10"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword((prev) => !prev)
                                }
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                aria-label={
                                    showPassword
                                        ? "Hide password"
                                        : "Show password"
                                }
                            >
                                {showPassword ? (
                                    <EyeOff className="h-4 w-4" />
                                ) : (
                                    <Eye className="h-4 w-4" />
                                )}
                            </button>
                        </div>

                        {errors.password && (
                            <p className="text-xs text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Confirm Password
                        </label>

                        <div className="relative">
                            <Input
                                {...register("confirmPassword")}
                                type={
                                    showConfirmPassword
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Confirm your password"
                                className="h-11 pr-10"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowConfirmPassword(
                                        (prev) => !prev
                                    )
                                }
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                aria-label={
                                    showConfirmPassword
                                        ? "Hide confirm password"
                                        : "Show confirm password"
                                }
                            >
                                {showConfirmPassword ? (
                                    <EyeOff className="h-4 w-4" />
                                ) : (
                                    <Eye className="h-4 w-4" />
                                )}
                            </button>
                        </div>

                        {errors.confirmPassword && (
                            <p className="text-xs text-red-500">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>

                    {/* Submit */}
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="h-11 w-full bg-green-600 hover:bg-green-700"
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

                <p className="mt-6 text-center text-sm text-slate-500">
                    Already have an account?{" "}

                    <Link
                        href="/login"
                        className="font-semibold text-green-600 hover:text-green-700"
                    >
                        Sign in
                    </Link>
                </p>
            </CardContent>
        </Card>
    );
}