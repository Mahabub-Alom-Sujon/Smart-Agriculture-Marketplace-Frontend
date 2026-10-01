import React from 'react';
import {AuthPageLayout} from "@/app/(auth)/_components/auth-layout";
import {RegisterForm} from "@/app/(auth)/_components/register-form";

const Page = () => {
    return (
        <>
            <AuthPageLayout
                title="Create your account"
                description="Join AgroNexa and become part of a smarter agriculture marketplace."
            >
                <RegisterForm/>
            </AuthPageLayout>
        </>
    );
};

export default Page;