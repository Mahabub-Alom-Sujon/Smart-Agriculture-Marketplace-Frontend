"use client";

import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

import { googleLoginAction } from "@/app/(auth)/_actions/authActions";

interface GoogleLoginButtonProps {
    role: "FARMER" | "BUYER" | null;
}

export function GoogleLoginButton({
    role,
}: GoogleLoginButtonProps) {
    const router = useRouter();
    const { resolvedTheme } = useTheme();

    const handleSuccess = async (
        credentialResponse: CredentialResponse,
    ) => {
        if (!role) {
            toast.error("Please select a role", {
                description:
                    "You must choose whether you are a Farmer or a Buyer before continuing.",
            });
            return;
        }

        if (!credentialResponse.credential) {
            toast.error("Google authentication failed", {
                description: "No credential received from Google.",
            });
            return;
        }

        const toastId = toast.loading(
            "Authenticating with Google...",
        );

        try {
            const result = await googleLoginAction(
                credentialResponse.credential,
                role,
            );

            toast.dismiss(toastId);

            if (result?.success) {
                toast.success("Google login successful!");

                if (result.redirectTo) {
                    router.push(result.redirectTo);
                }
            } else {
                toast.error("Google authentication failed", {
                    description:
                        result?.message ||
                        "Could not login via Google.",
                });
            }
        } catch (error: unknown) {
            console.error("Google login error:", error);

            toast.dismiss(toastId);
            toast.error(
                "Something went wrong during Google login",
            );
        }
    };

    return (
        <div className="flex w-full justify-center rounded-xl transition-colors duration-300">
            <div className="w-full overflow-hidden rounded-lg border border-slate-200 bg-white p-1 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">
                <GoogleLogin
                    theme={
                        resolvedTheme === "dark"
                            ? "filled_black"
                            : "outline"
                    }
                    shape="rectangular"
                    size="large"
                    width="100%"
                    text="continue_with"
                    onSuccess={handleSuccess}
                    onError={() => {
                        toast.error("Google Login Failed");
                    }}
                />
            </div>
        </div>
    );
}