import {
    CheckCircle2,
    Handshake,
    ShieldCheck,
} from "lucide-react";

const TermsOverview = () => {
    const items = [
        {
            icon: Handshake,
            title: "Fair Use",
            description:
                "Use AgroNexa responsibly and respect other members of the marketplace.",
        },
        {
            icon: ShieldCheck,
            title: "Stay Protected",
            description:
                "Follow our security, account, payment, and marketplace rules.",
        },
        {
            icon: CheckCircle2,
            title: "Be Responsible",
            description:
                "Provide accurate information and follow applicable laws.",
        },
    ];

    return (
        <section
            className="
                bg-white py-14
                transition-colors duration-300
                dark:bg-slate-950
            "
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-6 md:grid-cols-3">
                    {items.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="
                                    rounded-2xl border
                                    border-gray-100
                                    bg-green-50/50 p-6
                                    transition-all duration-300
                                    hover:-translate-y-1
                                    hover:border-green-200
                                    hover:shadow-md
                                    dark:border-slate-800
                                    dark:bg-slate-900
                                    dark:hover:border-green-800
                                    dark:hover:bg-slate-900
                                "
                            >
                                {/* Icon */}
                                <div
                                    className="
                                        flex h-12 w-12
                                        items-center justify-center
                                        rounded-xl bg-green-100
                                        transition-colors duration-300
                                        dark:bg-green-950
                                    "
                                >
                                    <Icon
                                        className="
                                            h-6 w-6
                                            text-green-600
                                            dark:text-green-400
                                        "
                                    />
                                </div>

                                {/* Title */}
                                <h3
                                    className="
                                        mt-5 font-bold
                                        text-gray-900
                                        dark:text-white
                                    "
                                >
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="
                                        mt-2 text-sm leading-6
                                        text-gray-600
                                        dark:text-slate-300
                                    "
                                >
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TermsOverview;