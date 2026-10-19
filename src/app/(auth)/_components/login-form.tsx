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
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    loginSchema,
    type LoginFormValues,
} from "@/schemas/login.schema";

import { loginAction } from "@/app/(auth)/_actions/authActions";
import { GoogleLoginButton } from "@/app/(auth)/_components/GoogleLoginButton";
export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const [selectedRole, setSelectedRole] = useState<"FARMER" | "BUYER" | null>(null);
    const {
        register,
        handleSubmit,
        setValue,
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

    const handleDemoLogin = (
        role: "ADMIN" | "FARMER"
    ) => {
        const demoCredentials = {
            ADMIN: {
                email: "testeradmin@gmail.com",
                password: "Tester@admin12345",
            },
            FARMER: {
                email: "test@gmail.com",
                password: "Password@123",
            },
        };
        const credentials = demoCredentials[role];
        setValue("email", credentials.email, {
            shouldValidate: true,
        });
        setValue("password", credentials.password, {
            shouldValidate: true,
        });
        toast.success(`${role} demo credentials filled`);
    };

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
                            {/*<Link href="/forgot-password" className="text-xs font-medium text-green-600 transition hover:text-green-700">*/}
                            {/*    Forgot password?*/}
                            {/*</Link>*/}
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
                    {/* Demo Login Buttons */}
                    <div className="space-y-3">
                        <p className="text-center text-sm font-medium text-slate-600">
                            Try Demo Account
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            <Button
                                type="button"
                                variant="outline"
                                className="h-11 border-purple-200 text-green-600 hover:text-white hover:bg-green-600"
                                onClick={() => handleDemoLogin("ADMIN")}
                            >
                                Demo Admin
                            </Button>

                            <Button
                                type="button"
                                variant="outline"
                                className="h-11 border-green-200 text-green-600 hover:bg-green-600 hover:text-white"
                                onClick={() => handleDemoLogin("FARMER")}
                            >
                                <User className="mr-2 h-4 w-4" />
                                Demo Farmer
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-3 text-muted-foreground">OR</span>
                        </div>
                    </div>
                    {/* Role Selection - Google Login Only */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">
                            Continue with Google as
                        </label>
                        <Select
                            value={selectedRole ?? ""}
                            onValueChange={(value) => setSelectedRole(value as "FARMER" | "BUYER")}
                        >
                            <SelectTrigger className="h-11 w-full">
                                <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="FARMER">
                                    <span className="flex items-center gap-2">
                                      <User className="h-4 w-4" />
                                      Farmer
                                    </span>
                                </SelectItem>
                                <SelectItem value="BUYER">
                                    <span className="flex items-center gap-2">
                                      <ShoppingBag className="h-4 w-4" />
                                      Buyer
                                    </span>
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <GoogleLoginButton role={selectedRole} />
                    <div className="text-center text-sm text-slate-600 pt-2">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/register"
                            className="font-medium text-green-600 transition hover:text-green-700 underline-offset-4 hover:underline"
                        >
                            Create a new account
                        </Link>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
