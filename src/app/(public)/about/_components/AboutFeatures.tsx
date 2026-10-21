import {
  Handshake,
  ShieldCheck,
  ShoppingCart,
  Sprout,
  TrendingUp,
  Users,
} from "lucide-react";
const features = [
  {
    icon: Sprout,
    title: "For Farmers",
    description:
      "Create your digital presence, showcase products, and reach more customers without complicated processes.",
  },
  {
    icon: ShoppingCart,
    title: "For Buyers",
    description:
      "Discover fresh agricultural products and connect with trusted farmers from one convenient marketplace.",
  },
  {
    icon: Users,
    title: "For Experts",
    description:
      "Share agricultural knowledge, offer professional services, and help farmers make better decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Platform",
    description:
      "We focus on transparency, secure interactions, and creating a trustworthy agricultural ecosystem.",
  },
  {
    icon: TrendingUp,
    title: "Grow Together",
    description:
      "Help farmers expand their reach while giving buyers better access to quality agricultural products.",
  },
  {
    icon: Handshake,
    title: "Strong Community",
    description:
      "Build meaningful connections between farmers, buyers, experts, and the wider agricultural community.",
  },
];
const AboutFeatures = () => {
  return (
    <section className="bg-white py-20 text-slate-900 transition-colors duration-300 sm:py-24 lg:py-28 dark:bg-slate-950 dark:text-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-green-700 transition-colors duration-300 dark:border-green-800 dark:bg-green-950/50 dark:text-green-400">
            What We Offer
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 transition-colors duration-300 sm:text-4xl dark:text-white">
            One platform, many possibilities
          </h2>
          <p className="mt-4 leading-7 text-slate-600 transition-colors duration-300 dark:text-slate-400">
            AgroNexa brings together the essential tools and connections
            needed to build a smarter agricultural marketplace.
          </p>
        </div>
        {/* Features Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl hover:shadow-green-900/5 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20 dark:hover:border-green-800 dark:hover:shadow-black/30"
              >
                {/* Decorative Top Border */}
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-green-500 to-emerald-500 transition-transform duration-300 group-hover:scale-x-100" />
                {/* Icon */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 transition-all duration-300 group-hover:bg-green-600 dark:bg-green-950/60 dark:group-hover:bg-green-600">
                  <Icon className="h-7 w-7 text-green-600 transition-colors duration-300 group-hover:text-white dark:text-green-400 dark:group-hover:text-white" />
                </div>
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-green-700 dark:text-slate-100 dark:group-hover:text-green-400">
                  {feature.title}
                </h3>
                {/* Description */}
                <p className="mt-3 leading-7 text-slate-600 transition-colors duration-300 dark:text-slate-400">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;