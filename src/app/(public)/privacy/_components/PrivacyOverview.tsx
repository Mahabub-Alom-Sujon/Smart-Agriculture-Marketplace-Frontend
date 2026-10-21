// import {
//     Eye,
//     LockKeyhole,
//     ShieldCheck,
// } from "lucide-react";
//
// const PrivacyOverview = () => {
//     return (
//         <section className="bg-white py-14">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="grid gap-6 md:grid-cols-3">
//                     <div className="rounded-2xl border border-gray-100 bg-green-50/50 p-6">
//                         <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
//                             <Eye className="h-6 w-6 text-green-600" />
//                         </div>
//                         <h3 className="mt-5 font-bold text-gray-900">
//                             Transparency
//                         </h3>
//                         <p className="mt-2 text-sm leading-6 text-gray-600">
//                             We clearly explain what information we collect
//                             and why we need it.
//                         </p>
//                     </div>
//                     <div className="rounded-2xl border border-gray-100 bg-green-50/50 p-6">
//                         <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
//                             <LockKeyhole className="h-6 w-6 text-green-600" />
//                         </div>
//                         <h3 className="mt-5 font-bold text-gray-900">
//                             Data Protection
//                         </h3>
//                         <p className="mt-2 text-sm leading-6 text-gray-600">
//                             We take reasonable measures to protect your
//                             information from unauthorized access.
//                         </p>
//                     </div>
//                     <div className="rounded-2xl border border-gray-100 bg-green-50/50 p-6">
//                         <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
//                             <ShieldCheck className="h-6 w-6 text-green-600" />
//                         </div>
//                         <h3 className="mt-5 font-bold text-gray-900">
//                             Your Control
//                         </h3>
//                         <p className="mt-2 text-sm leading-6 text-gray-600">
//                             You may have rights to access, update, or delete
//                             certain personal information.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export default PrivacyOverview;

import {
    Eye,
    LockKeyhole,
    ShieldCheck,
} from "lucide-react";

const privacyFeatures = [
    {
        icon: Eye,
        title: "Transparency",
        description:
            "We clearly explain what information we collect and why we need it.",
    },
    {
        icon: LockKeyhole,
        title: "Data Protection",
        description:
            "We take reasonable measures to protect your information from unauthorized access.",
    },
    {
        icon: ShieldCheck,
        title: "Your Control",
        description:
            "You may have rights to access, update, or delete certain personal information.",
    },
];

const PrivacyOverview = () => {
    return (
        <section className="bg-white py-14 text-gray-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-6 md:grid-cols-3">
                    {privacyFeatures.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="rounded-2xl border border-gray-100 bg-green-50/50 p-6 transition-colors duration-300 hover:border-green-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-green-800"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 transition-colors duration-300 dark:bg-green-900/40">
                                    <Icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                                </div>

                                <h3 className="mt-5 font-bold text-gray-900 dark:text-slate-100">
                                    {feature.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-slate-400">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PrivacyOverview;