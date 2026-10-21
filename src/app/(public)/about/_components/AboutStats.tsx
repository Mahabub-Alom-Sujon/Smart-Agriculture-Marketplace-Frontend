import {
  Award,
  CircleDollarSign,
  ShoppingBasket,
  Users,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "1,200+",
    label: "Registered Farmers",
    description: "Farmers growing and selling quality products",
  },
  {
    icon: ShoppingBasket,
    value: "8,500+",
    label: "Happy Buyers",
    description: "Customers buying fresh agricultural products",
  },
  {
    icon: CircleDollarSign,
    value: "25K+",
    label: "Products Sold",
    description: "Agricultural products reaching customers",
  },
  {
    icon: Award,
    value: "98%",
    label: "Customer Satisfaction",
    description: "Our commitment to quality and trust",
  },
];

const AboutStats = () => {
  return (
    <section className="border-y border-slate-200 bg-white text-slate-900 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group rounded-2xl border border-transparent p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-green-100 hover:bg-green-50/50 hover:shadow-lg hover:shadow-green-900/5 dark:hover:border-green-900/60 dark:hover:bg-slate-900 dark:hover:shadow-black/20"
              >
                {/* Icon */}
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 transition-all duration-300 group-hover:bg-green-600 dark:bg-green-950/60 dark:group-hover:bg-green-600">
                  <Icon className="h-7 w-7 text-green-600 transition-colors duration-300 group-hover:text-white dark:text-green-400 dark:group-hover:text-white" />
                </div>

                {/* Value */}
                <h3 className="text-3xl font-bold tracking-tight text-slate-900 transition-colors duration-300 dark:text-white">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="mt-1 font-semibold text-slate-800 transition-colors duration-300 dark:text-slate-200">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-500 transition-colors duration-300 dark:text-slate-400">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;