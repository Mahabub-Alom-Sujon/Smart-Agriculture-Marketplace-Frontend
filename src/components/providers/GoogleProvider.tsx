"use client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ReactNode } from "react";
export function GoogleProvider({ children }: { children: ReactNode }) {
    const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";
    if (!googleClientId) {
        console.warn("Google Client ID is missing in environment variables.");
    }
    return (
        <GoogleOAuthProvider clientId={googleClientId}>
            {children}
        </GoogleOAuthProvider>
    );
}