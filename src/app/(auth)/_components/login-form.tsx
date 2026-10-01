"use client";
import Link from "next/link";
import {
    Eye,
    EyeOff,
    Loader2,
    Lock,
    Mail, ShoppingBag, User,
} from "lucide-react";
import { useState } from "react";
import {
    useForm,
    type SubmitErrorHandler,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
} from "@/components/ui/card";

import {
    loginSchema,
    type LoginFormValues,
} from "@/schemas/login.schema";

import { loginAction } from "@/app/(auth)/_actions/authActions";
import { GoogleLoginButton } from "@/app/(auth)/_components/GoogleLoginButton";
export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter(); // ২. রাউটার ইনিশিয়ালাইজ করুন
    const [selectedRole, setSelectedRole] = useState<"FARMER" | "BUYER" | null>(null);
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const onSubmit = async (data: LoginFormValues) => {
        try {
            const result = await loginAction({ ...data, role: selectedRole });
            if (!result?.success) {
                toast.error("Login failed", { description: result?.message || "Invalid credentials." });
                return;
            }
            toast.success("Login successful!");
            if (result.redirectTo) router.push(result.redirectTo);
        } catch (error) {
            toast.error("Something went wrong");
        }
    };
    const onInvalid: SubmitErrorHandler<LoginFormValues> = (
        formErrors
    ) => {
        if (formErrors.email) {
            toast.error("Email error", {
                description: formErrors.email.message,
            });
            return;
        }

        if (formErrors.password) {
            toast.error("Password error", {
                description: formErrors.password.message,
            });
            return;
        }
    };
    return (
        <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-6 sm:p-8">
                <form
                    onSubmit={handleSubmit(onSubmit, onInvalid)}
                    className="space-y-5"
                >
                    {/* Email */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-700">
                            Email Address
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                {...register("email")}
                                className={`h-11 pl-10 ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                            />
                        </div>
                        {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="text-sm font-medium text-slate-700">
                                Password
                            </label>
                            <Link href="/forgot-password" className="text-xs font-medium text-green-600 transition hover:text-green-700">
                                Forgot password?
                            </Link>
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                {...register("password")}
                                className={`h-11 px-10 pr-11 ${errors.password ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                        </div>
                        {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full h-11 bg-green-600 hover:bg-green-700 text-white font-medium transition" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Logging in...
                            </>
                        ) : (
                            "Sign In"
                        )}
                    </Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-3 text-muted-foreground">OR</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-lg mb-6">
                        <button
                            type="button"
                            onClick={() => setSelectedRole("FARMER")}
                            className={`flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-md transition-all ${
                                selectedRole === "FARMER"
                                    ? "bg-white text-green-700 shadow-sm"
                                    : "text-slate-600 hover:text-slate-900"
                            }`}
                        >
                            <User className="h-4 w-4" />
                            Farmer
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedRole("BUYER")}
                            className={`flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-md transition-all ${
                                selectedRole === "BUYER"
                                    ? "bg-white text-green-700 shadow-sm"
                                    : "text-slate-600 hover:text-slate-900"
                            }`}
                        >
                            <ShoppingBag className="h-4 w-4" />
                            Buyer
                        </button>
                    </div>
                    <GoogleLoginButton role={selectedRole} />
                </form>
            </CardContent>
        </Card>
    );
}
