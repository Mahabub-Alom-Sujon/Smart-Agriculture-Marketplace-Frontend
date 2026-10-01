import type { ReactNode } from "react";
import { Leaf, ShieldCheck, Tractor, Users } from "lucide-react";
import { AuthHeader } from "./auth-header";
interface AuthPageLayoutProps {
    children: ReactNode;
    title: string;
    description: string;
}
export function AuthPageLayout({
   children,
   title,
   description,
}: AuthPageLayoutProps) {
    return (
        <div className="min-h-screen lg:grid lg:grid-cols-2">
            {/* Left side */}
            <div className="relative hidden overflow-hidden bg-green-700 lg:flex">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_35%)]" />
                <div className="relative z-10 flex w-full flex-col justify-items-center p-12 xl:p-16">
                    <div>
                        <div className="flex items-center gap-3 text-white">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
                                <Leaf className="h-7 w-7" />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold">AgroNexa</h2>
                                <p className="text-xs text-green-100">
                                    Smart Agriculture Marketplace
                                </p>
                            </div>
                        </div>
                        <div className="mt-10 max-w-xl">
                            <p className="mb-4 font-semibold text-green-200">
                                Smart Agriculture Platform
                            </p>

                            <h2 className="text-5xl font-bold leading-tight text-white">
                                Connecting
                                <span className="block text-green-200">
                                    Farms & Communities
                                </span>
                            </h2>
                            <p className="mt-6 max-w-lg text-lg leading-8 text-green-100">
                                Buy fresh products, sell directly to customers, connect with
                                agriculture experts and grow your farming business.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-10">
                        <Feature
                            icon={<Tractor className="h-5 w-5" />}
                            title="Farmers"
                            value="1,200+"
                        />
                        <Feature
                            icon={<Users className="h-5 w-5" />}
                            title="Buyers"
                            value="8,500+"
                        />

                        <Feature
                            icon={<ShieldCheck className="h-5 w-5" />}
                            title="Trusted"
                            value="100%"
                        />
                    </div>
                </div>
            </div>
            {/* Right side */}
            <div className="flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 lg:px-12">
                <div className="w-full max-w-md">
                    <div className="lg:hidden">
                        <AuthHeader />
                    </div>
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                            {title}
                        </h1>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            {description}
                        </p>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}

function Feature({
    icon,
    title,
    value,
}: {
    icon: React.ReactNode;
    title: string;
    value: string;
}) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-green-100">
                {icon}
            </div>
            <p className="mt-3 text-lg font-bold text-white">{value}</p>
            <p className="text-xs text-green-100">{title}</p>
        </div>
    );
}