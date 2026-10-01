import {LoginForm } from "@/app/(auth)/_components/login-form";
import {AuthPageLayout} from "@/app/(auth)/_components/auth-layout";;
export default function LoginPage() {
    return (
        <AuthPageLayout
            title="Welcome back"
            description="Sign in to your AgroNexa account and continue your agriculture journey."
        >
            <LoginForm />
        </AuthPageLayout>

    );
}