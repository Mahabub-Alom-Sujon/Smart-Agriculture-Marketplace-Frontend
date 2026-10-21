// import { FileText, ShieldCheck } from "lucide-react";
// const TermsHero = () => {
//     return (
//         <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
//             <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />
//             <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />
//             <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
//                 <div className="mx-auto max-w-3xl text-center">
//                     <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-700 shadow-sm">
//                         <ShieldCheck className="h-4 w-4" />
//                         Clear and transparent terms
//                     </div>
//                     <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
//                         Terms &{" "}
//                         <span className="text-green-600">
//                             Conditions
//                         </span>
//                     </h1>
//                     <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
//                         Please read these terms carefully before using the
//                         AgroNexa marketplace and its services.
//                     </p>
//                     <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-gray-500 shadow-sm">
//                         <FileText className="h-4 w-4 text-green-600" />
//                         Last updated: October 5, 2026
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export default TermsHero;

import { FileText, ShieldCheck } from "lucide-react";

const TermsHero = () => {
    return (
        <section
            className="
                relative overflow-hidden
                bg-gradient-to-br
                from-green-50 via-white to-emerald-50
                transition-colors duration-300
                dark:from-slate-950
                dark:via-slate-900
                dark:to-emerald-950
            "
        >
            {/* Background Decorations */}
            <div
                className="
                    absolute -left-24 top-10
                    h-72 w-72 rounded-full
                    bg-green-200/30 blur-3xl
                    dark:bg-green-500/10
                "
            />

            <div
                className="
                    absolute -right-24 bottom-0
                    h-80 w-80 rounded-full
                    bg-emerald-200/30 blur-3xl
                    dark:bg-emerald-500/10
                "
            />

            <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-3xl text-center">
                    {/* Trust Badge */}
                    <div
                        className="
                            mx-auto mb-5 flex w-fit items-center gap-2
                            rounded-full border border-green-200
                            bg-white px-4 py-2
                            text-sm font-medium text-green-700
                            shadow-sm
                            transition-colors duration-300
                            dark:border-green-800
                            dark:bg-slate-900
                            dark:text-green-400
                        "
                    >
                        <ShieldCheck className="h-4 w-4" />
                        Clear and transparent terms
                    </div>

                    {/* Heading */}
                    <h1
                        className="
                            text-4xl font-bold tracking-tight
                            text-gray-900
                            sm:text-5xl lg:text-6xl
                            dark:text-white
                        "
                    >
                        Terms{" "}&
                        {" "}
                        <span className="text-green-600 dark:text-green-400">
                            Conditions
                        </span>
                    </h1>

                    {/* Description */}
                    <p
                        className="
                            mx-auto mt-6 max-w-2xl
                            text-base leading-7 text-gray-600
                            sm:text-lg
                            dark:text-slate-300
                        "
                    >
                        Please read these terms carefully before using the
                        AgroNexa marketplace and its services.
                    </p>

                    {/* Last Updated */}
                    <div
                        className="
                            mt-8 inline-flex items-center gap-2
                            rounded-full bg-white px-4 py-2
                            text-sm text-gray-500 shadow-sm
                            transition-colors duration-300
                            dark:bg-slate-800
                            dark:text-slate-300
                        "
                    >
                        <FileText className="h-4 w-4 text-green-600 dark:text-green-400" />
                        Last updated: October 5, 2026
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsHero;