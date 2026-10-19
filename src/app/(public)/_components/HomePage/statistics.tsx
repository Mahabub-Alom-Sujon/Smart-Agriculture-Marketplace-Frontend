import {
  Users,
  Sprout,
  ShoppingBasket,
  GraduationCap,
  ArrowUpRight,
  Leaf,
} from "lucide-react";

const statistics = [
  {
    label: "Total Users",
    value: "150+",
    description: "Growing our farming community",
    icon: Users,
    accent: "from-emerald-400 to-green-500",
    iconBg: "bg-emerald-50 text-emerald-700",
  },
  {
    label: "Registered Farmers",
    value: "40+",
    description: "Empowering local farmers",
    icon: Sprout,
    accent: "from-lime-400 to-emerald-500",
    iconBg: "bg-lime-50 text-lime-700",
  },
  {
    label: "Available Products",
    value: "200+",
    description: "Fresh agricultural products",
    icon: ShoppingBasket,
    accent: "from-teal-400 to-emerald-500",
    iconBg: "bg-teal-50 text-teal-700",
  },
  {
    label: "Agricultural Experts",
    value: "15+",
    description: "Expert knowledge and guidance",
    icon: GraduationCap,
    accent: "from-green-400 to-teal-500",
    iconBg: "bg-green-50 text-green-700",
  },
];

export default function Statistics() {
  return (
    <section
      id="statistics"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#f5fbf5] via-white to-emerald-50 py-20 sm:py-24 lg:py-28 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-80 w-80 rounded-full bg-emerald-200/30 blur-[100px] dark:bg-emerald-500/10" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-lime-200/40 blur-[110px] dark:bg-lime-500/10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-600 bg-white/80 px-4 py-2 text-sm font-semibold text-green-600 shadow-sm dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
            <Leaf size={16} />
            Our Growing Impact
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            Growing Together,
            <span className="mt-2 block bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Naturally
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg dark:text-gray-300">
            Connecting farmers, buyers, and agricultural experts to build a
            smarter, greener, and more sustainable future for agriculture.
          </p>
        </div>

        {/* Statistics cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-3xl border border-emerald-100/80 bg-white/90 p-7 shadow-[0_8px_30px_rgba(16,185,129,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-[0_20px_45px_rgba(16,185,129,0.14)] dark:border-white/10 dark:bg-gray-900/80 dark:hover:border-emerald-700"
              >
                {/* Top accent */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent} opacity-80 transition-opacity group-hover:opacity-100`}
                />

                {/* Decorative circle */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-emerald-50 transition-transform duration-500 group-hover:scale-150 dark:bg-emerald-900/20" />

                <div className="relative flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconBg} transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110 dark:bg-emerald-900/40 dark:text-emerald-300`}
                  >
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-100 text-gray-400 transition-all duration-300 group-hover:border-emerald-200 group-hover:bg-emerald-50 group-hover:text-emerald-600 dark:border-white/10 dark:text-gray-500 dark:group-hover:bg-emerald-900/40">
                    <ArrowUpRight size={19} />
                  </div>
                </div>

                <div className="relative mt-7">
                  <p className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-[2.65rem] dark:text-white">
                    {item.value}
                  </p>

                  <h3 className="mt-3 text-lg font-bold text-gray-800 dark:text-gray-100">
                    {item.label}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>

                {/* Bottom detail */}
                <div className="relative mt-6 flex items-center gap-2 border-t border-gray-100 pt-4 dark:border-white/10">
                  <span
                    className={`h-2 w-2 rounded-full bg-gradient-to-r ${item.accent}`}
                  />
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Growing every day
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
