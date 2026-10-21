// import { HeartHandshake, Lightbulb, Shield, Sprout } from "lucide-react";
// const values = [
//     {
//         icon: HeartHandshake,
//         title: "Community First",
//         description: "We believe agriculture grows stronger when farmers, buyers, and experts work together.",
//     },
//     {
//         icon: Shield,
//         title: "Trust & Transparency",
//         description: "We aim to create an environment where every interaction is clear, reliable, and trustworthy.",
//     },
//     {
//         icon: Lightbulb,
//         title: "Innovation",
//         description: "We use modern technology to solve real agricultural challenges and improve everyday experiences.",
//     },
//     {
//         icon: Sprout,
//         title: "Sustainable Growth",
//         description: "Our goal is to support long-term growth for farmers, businesses, and agricultural communities.",
//     },
// ];
//
// const AboutValues = () => {
//     return (
//         <section className="bg-white py-20 lg:py-28">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
//                     <div>
//                         <span className="text-sm font-semibold uppercase tracking-wider text-green-600">
//                             Our Values
//                         </span>
//                         <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
//                             Built around people, trust, and growth
//                         </h2>
//                         <p className="mt-5 leading-7 text-gray-600">
//                             Everything we build is guided by a simple idea:
//                             technology should make agriculture easier,
//                             stronger, and more connected.
//                         </p>
//                     </div>
//                     <div className="grid gap-5 sm:grid-cols-2">
//                         {values.map((value) => {
//                             const Icon = value.icon;
//                             return (
//                                 <div
//                                     key={value.title}
//                                     className="rounded-2xl border border-gray-100 p-6 transition hover:border-green-200 hover:shadow-md"
//                                 >
//                                     <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50">
//                                         <Icon className="h-6 w-6 text-green-600" />
//                                     </div>
//                                     <h3 className="mt-5 font-bold text-gray-900">
//                                         {value.title}
//                                     </h3>
//                                     <p className="mt-2 text-sm leading-6 text-gray-600">
//                                         {value.description}
//                                     </p>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export default AboutValues;

import {
  HeartHandshake,
  Lightbulb,
  Shield,
  Sprout,
} from "lucide-react";
const values = [
  {
    icon: HeartHandshake,
    title: "Community First",
    description:
      "We believe agriculture grows stronger when farmers, buyers, and experts work together.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "We aim to create an environment where every interaction is clear, reliable, and trustworthy.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We use modern technology to solve real agricultural challenges and improve everyday experiences.",
  },
  {
    icon: Sprout,
    title: "Sustainable Growth",
    description:
      "Our goal is to support long-term growth for farmers, businesses, and agricultural communities.",
  },
];
const AboutValues = () => {
  return (
    <section className="bg-white py-20 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {/* Section Introduction */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">
              Our Values
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 transition-colors duration-300 dark:text-white sm:text-4xl">
              Built around people, trust, and growth
            </h2>

            <p className="mt-5 leading-7 text-gray-600 transition-colors duration-300 dark:text-slate-400">
              Everything we build is guided by a simple idea:
              technology should make agriculture easier,
              stronger, and more connected.
            </p>
          </div>
          {/* Values Cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg hover:shadow-green-900/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-green-800 dark:hover:bg-slate-900/80 dark:hover:shadow-black/20"
                >
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 transition-colors duration-300 group-hover:bg-green-600 dark:bg-green-950/60 dark:group-hover:bg-green-600">
                    <Icon className="h-6 w-6 text-green-600 transition-colors duration-300 group-hover:text-white dark:text-green-400 dark:group-hover:text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-bold text-gray-900 transition-colors duration-300 dark:text-slate-100">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-6 text-gray-600 transition-colors duration-300 dark:text-slate-400">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;