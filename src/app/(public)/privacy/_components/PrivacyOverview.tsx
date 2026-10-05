import {
    Eye,
    LockKeyhole,
    ShieldCheck,
} from "lucide-react";

const PrivacyOverview = () => {
    return (
        <section className="bg-white py-14">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-6 md:grid-cols-3">
                    <div className="rounded-2xl border border-gray-100 bg-green-50/50 p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                            <Eye className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="mt-5 font-bold text-gray-900">
                            Transparency
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-gray-600">
                            We clearly explain what information we collect
                            and why we need it.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-gray-100 bg-green-50/50 p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                            <LockKeyhole className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="mt-5 font-bold text-gray-900">
                            Data Protection
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-gray-600">
                            We take reasonable measures to protect your
                            information from unauthorized access.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-gray-100 bg-green-50/50 p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                            <ShieldCheck className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="mt-5 font-bold text-gray-900">
                            Your Control
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-gray-600">
                            You may have rights to access, update, or delete
                            certain personal information.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyOverview;