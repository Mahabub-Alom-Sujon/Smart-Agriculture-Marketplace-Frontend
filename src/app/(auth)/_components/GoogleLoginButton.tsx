"use client";

import { GoogleLogin, CredentialResponse } from "@react-oauth/google"; // ১. CredentialResponse টাইপটি ইম্পোর্ট করুন
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { googleLoginAction } from "@/app/(auth)/_actions/authActions";

interface GoogleLoginButtonProps {
    role: "FARMER" | "BUYER" | null;
}
export function GoogleLoginButton({ role }: GoogleLoginButtonProps) {
    const router = useRouter();

    const handleSuccess = async (credentialResponse: CredentialResponse) => {
        if (!role) {
            toast.error("Please select a role", {
                description: "You must choose whether you are a Farmer or a Buyer before continuing.",
            });
            return;
        }
        if (!credentialResponse.credential) {
            toast.error("Google authentication failed", {
                description: "No credential received from Google."
            });
            return;
        }
        const toastId = toast.loading("Authenticating with Google...");
        try {
            const result = await googleLoginAction(
                credentialResponse.credential,
                role
            );
            toast.dismiss(toastId);
            if (result?.success) {
                toast.success("Google login successful!");
                if (result.redirectTo) {
                    router.push(result.redirectTo);
                }
            } else {
                toast.error("Google authentication failed", {
                    description: result?.message || "Could not login via Google."
                });
            }
        } catch (err) {
            toast.dismiss(toastId);
            toast.error("Something went wrong during Google login");
        }
    };
    return (
        <div className="flex justify-center w-full">
            <GoogleLogin
                theme="outline"
                size="large"
                width="100%"
                onSuccess={handleSuccess}
                onError={() => toast.error("Google Login Failed")}
            />
        </div>
    );
}