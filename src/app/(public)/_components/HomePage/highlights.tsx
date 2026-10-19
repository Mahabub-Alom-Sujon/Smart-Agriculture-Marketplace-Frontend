import {
    ArrowUpRight,
    Headset,
    ShieldCheck,
    ShoppingBasket,
    Sprout,
    Truck,
    Users,
    Leaf,
} from "lucide-react";
const highlights = [
    {
        icon: Sprout,
        title: "Empowering Farmers",
        description:
            "Help farmers showcase their crops, reach more customers, and grow their agricultural businesses.",
        theme: "green",
        number: "01",
    },
    {
        icon: ShoppingBasket,
        title: "Fresh Farm Products",
        description:
            "Discover fresh vegetables, fruits, grains, and quality agricultural products directly from farmers.",
        theme: "emerald",
        number: "02",
    },
    {
        icon: ShieldCheck,
        title: "Trusted Marketplace",
        description:
            "Shop with confidence through transparent product information and convenient order management.",
        theme: "teal",
        number: "03",
    },
    {
        icon: Users,
        title: "Expert Consultation",
        description:
            "Connect with agricultural experts to improve farming techniques and crop management.",
        theme: "lime",
        number: "04",
    },
    {
        icon: Truck,
        title: "Easy Order Management",
        description:
            "Keep your agricultural purchases organized and manage your orders with ease.",
        theme: "orange",
        number: "05",
    },
    {
        icon: Headset,
        title: "Community Support",
        description:
            "Bring farmers, buyers, and experts together in one connected agricultural community.",
        theme: "blue",
        number: "06",
    },
];

const themes = {
    green: {
        icon: "bg-green-500/10 text-green-700 dark:bg-green-400/15 dark:text-green-400",
        border: "hover:border-green-400/70",
        glow: "bg-green-400/10",
        link: "text-green-700 dark:text-green-400",
        orb: "text-green-500/15",
    },
    emerald: {
        icon: "bg-emerald-500/10 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-400",
        border: "hover:border-emerald-400/70",
        glow: "bg-emerald-400/10",
        link: "text-emerald-700 dark:text-emerald-400",
        orb: "text-emerald-500/15",
    },
    teal: {
        icon: "bg-teal-500/10 text-teal-700 dark:bg-teal-400/15 dark:text-teal-400",
        border: "hover:border-teal-400/70",
        glow: "bg-teal-400/10",
        link: "text-teal-700 dark:text-teal-400",
        orb: "text-teal-500/15",
    },
    lime: {
        icon: "bg-lime-500/15 text-lime-700 dark:bg-lime-400/15 dark:text-lime-400",
        border: "hover:border-lime-400/70",
        glow: "bg-lime-400/10",
        link: "text-lime-700 dark:text-lime-400",
        orb: "text-lime-500/15",
    },
    orange: {
        icon: "bg-orange-500/10 text-orange-700 dark:bg-orange-400/15 dark:text-orange-400",
        border: "hover:border-orange-400/70",
        glow: "bg-orange-400/10",
        link: "text-orange-700 dark:text-orange-400",
        orb: "text-orange-500/15",
    },
    blue: {
        icon: "bg-sky-500/10 text-sky-700 dark:bg-sky-400/15 dark:text-sky-400",
        border: "hover:border-sky-400/70",
        glow: "bg-sky-400/10",
        link: "text-sky-700 dark:text-sky-400",
        orb: "text-sky-500/15",
    },
} as const;

export default function Highlights() {
    return (
        <section
            id="highlights"
            className="relative isolate overflow-hidden bg-gradient-to-b from-white via-green-50/40 to-white py-20 dark:from-gray-950 dark:via-green-950/10 dark:to-gray-950 sm:py-24 lg:py-28"
        >
            {/* Background decoration */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 top-10 -z-10 h-80 w-80 rounded-full bg-green-300/10 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-emerald-300/10 blur-3xl"
            />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section heading */}
                <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200/80 bg-green-50 px-4 py-2 text-sm font-semibold text-green-600 shadow-sm dark:border-green-800 dark:bg-green-950/60 dark:text-green-400">
                        <Leaf size={16} />
                        Why Choose AgroNexa?
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
                        Everything Agriculture Needs,
                        <span className="mt-2 block bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                            In One Place
                        </span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
                        A smarter way to connect farmers, buyers, and agricultural
                        experts. Discover the tools and services that help agriculture
                        grow.
                    </p>
                    <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-400" />
                </div>

                {/* Feature cards */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
                    {highlights.map((item) => {
                        const Icon = item.icon;
                        const theme = themes[item.theme as keyof typeof themes];
                        return (
                            <article
                                key={item.number}
                                className={`group relative isolate flex min-h-[290px] flex-col overflow-hidden rounded-3xl border border-gray-200/80 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-950/5 dark:border-gray-800 dark:bg-gray-900/80 dark:hover:shadow-black/20 sm:p-8 ${theme.border}`}
                            >
                                {/* Decorative glow */}
                                <div
                                    aria-hidden="true"
                                    className={`pointer-events-none absolute -right-12 -top-12 -z-10 h-36 w-36 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-150 ${theme.glow}`}
                                />
                                {/* Decorative number */}
                                <span aria-hidden="true" className="absolute right-6 top-5 text-5xl font-black tracking-tighter text-gray-100 transition-colors duration-300 group-hover:text-gray-200/80 dark:text-gray-800 dark:group-hover:text-gray-700/80">
                                    {item.number}
                                 </span>
                                {/* Icon */}
                                <div className={`mb-7 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:rotate-[-5deg] group-hover:scale-110 ${theme.icon}`}>
                                    <Icon size={28} strokeWidth={1.8} />
                                </div>

                                {/* Card content */}
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
                                    {item.title}
                                </h3>

                                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                                    {item.description}
                                </p>

                                {/* Visual footer */}
                                <div className={`mt-6 flex items-center justify-between border-t border-gray-100 pt-5 dark:border-gray-800 ${theme.link}`}>
                                      <span className="text-sm font-semibold">
                                        Explore benefits
                                      </span>
                                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-current/15 transition-all duration-300 group-hover:border-transparent group-hover:bg-current group-hover:text-white">
                                            <ArrowUpRight
                                                size={19}
                                                className="transition-transform duration-300 group-hover:rotate-45"
                                            />
                                        </span>
                                </div>

                                {/* Bottom accent */}
                                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-green-500 to-emerald-400 transition-transform duration-300 group-hover:scale-x-100" />
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
