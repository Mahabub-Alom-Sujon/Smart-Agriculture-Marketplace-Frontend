import {
  ArrowRight,
  CheckCircle2,
  Search,
  ShoppingCart,
  UserPlus,
} from "lucide-react";
const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Join the Platform",
    description:
      "Create your account as a farmer, buyer, or agricultural expert.",
  },
  {
    number: "02",
    icon: Search,
    title: "Discover",
    description:
      "Explore agricultural products, farmers, and expert services.",
  },
  {
    number: "03",
    icon: ShoppingCart,
    title: "Connect & Buy",
    description:
      "Connect with sellers and purchase quality agricultural products.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Grow Together",
    description:
      "Build trusted relationships and contribute to a stronger farming community.",
  },
];

const AboutHowItWorks = () => {
  return (
    <section className="bg-green-50/60 py-20 text-slate-900 transition-colors duration-300 sm:py-24 lg:py-28 dark:bg-slate-950 dark:text-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-semibold uppercase tracking-wider text-green-700 transition-colors duration-300 dark:border-green-800 dark:bg-green-950/50 dark:text-green-400">
            Simple Process
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 transition-colors duration-300 sm:text-4xl dark:text-white">
            How AgroNexa Works
          </h2>

          <p className="mt-4 leading-7 text-slate-600 transition-colors duration-300 dark:text-slate-400">
            We make the agricultural marketplace simple, accessible, and
            convenient for everyone.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="group relative">
                {/* Step Card */}
                <div className="h-full rounded-2xl border border-green-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20 dark:hover:border-green-800 dark:hover:shadow-black/30">
                  {/* Icon and Number */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 transition-colors duration-300 group-hover:bg-green-600 dark:bg-green-950 dark:group-hover:bg-green-600">
                      <Icon className="h-6 w-6 text-green-600 transition-colors duration-300 group-hover:text-white dark:text-green-400 dark:group-hover:text-white" />
                    </div>

                    <span className="text-4xl font-black text-green-100 transition-colors duration-300 dark:text-green-950">
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-green-700 dark:text-slate-100 dark:group-hover:text-green-400">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-slate-600 transition-colors duration-300 dark:text-slate-400">
                    {step.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-6 h-1 w-10 rounded-full bg-green-200 transition-all duration-300 group-hover:w-16 group-hover:bg-green-600 dark:bg-green-900 dark:group-hover:bg-green-500" />
                </div>

                {/* Connector Arrow */}
                {index !== steps.length - 1 && (
                  <ArrowRight className="absolute -right-6 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-green-400 lg:block dark:text-green-700" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default AboutHowItWorks;