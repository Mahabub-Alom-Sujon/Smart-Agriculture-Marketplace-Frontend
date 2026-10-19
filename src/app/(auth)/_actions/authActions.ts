"use server";

import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";

type UserRole =
    | "FARMER"
    | "BUYER"
    | "EXPERT"
    | "ADMIN"
    | "SUPER_ADMIN";

type LoginData = {
    email: string;
    password: string;
    role?: "FARMER" | "BUYER" | null;
};

type AuthResult = {
    success: boolean;
    message?: string;
    data?: {
        accessToken: string;
        refreshToken: string;
    };
};

const setAuthCookies = async (
    accessToken: string,
    refreshToken: string
) => {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24, // 1 day
        sameSite: "lax",
        path: "/",
    });

    cookieStore.set("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        sameSite: "lax",
        path: "/",
    });
};

const getDashboardPath = (role?: string): string => {
    switch (role) {
        case "FARMER":
            return "/dashboard/farmer";

        case "BUYER":
            return "/dashboard/buyer";

        case "EXPERT":
            return "/dashboard/expert";

        case "ADMIN":
            return "/dashboard/admin";

        case "SUPER_ADMIN":
            return "/dashboard/super-admin";

        default:
            return "/dashboard";
    }
};

// ==============================
// Normal Login
// ==============================

export const loginAction = async (
    data: LoginData
): Promise<AuthResult & { redirectTo?: string }> => {
    try {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`;

        const res = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result: AuthResult = await res.json();

        if (!res.ok || !result.success || !result.data) {
            return result;
        }

        const { accessToken, refreshToken } = result.data;

        // Set cookies
        await setAuthCookies(accessToken, refreshToken);

        // Decode JWT
        const decodedToken = jwt.decode(accessToken) as JwtPayload | null;

        const role = decodedToken?.role as UserRole | undefined;

        const redirectTo = getDashboardPath(role);

        return {
            ...result,
            redirectTo,
        };
    } catch (error) {
        console.error("Login Server Action Error:", error);

        return {
            success: false,
            message: "Internal server error during login",
        };
    }
};

// ==============================
// Google Login
// ==============================

export const googleLoginAction = async (
    idToken: string,
    role: "FARMER" | "BUYER"
): Promise<AuthResult & { redirectTo?: string }> => {
    try {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/google`;

        const res = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idToken,
                role,
            }),
        });

        const result: AuthResult = await res.json();

        if (!res.ok || !result.success || !result.data) {
            return result;
        }

        const { accessToken, refreshToken } = result.data;

        // Set cookies
        await setAuthCookies(accessToken, refreshToken);

        // Google login role based redirect
        const redirectTo = getDashboardPath(role);

        return {
            ...result,
            redirectTo,
        };
    } catch (error) {
        console.error("Google Server Action Error:", error);

        return {
            success: false,
            message: "Internal server error during Google login",
        };
    }
};