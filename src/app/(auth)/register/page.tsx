import { AuthPageLayout } from "@/app/(auth)/_components/auth-layout";
import { RegisterForm } from "@/app/(auth)/_components/register-form";
export default function RegisterPage() {
    return (
        <AuthPageLayout
            title="Create your account"
            description="Join AgroNexa and become part of a smarter agriculture marketplace."
        >
            <RegisterForm />
        </AuthPageLayout>
    );
}