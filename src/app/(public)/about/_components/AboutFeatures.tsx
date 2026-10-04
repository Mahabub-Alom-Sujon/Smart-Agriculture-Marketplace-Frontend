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
        description: "Create your digital presence, showcase products, and reach more customers without complicated processes.",
    },
    {
        icon: ShoppingCart,
        title: "For Buyers",
        description: "Discover fresh agricultural products and connect with trusted farmers from one convenient marketplace.",
    },
    {
        icon: Users,
        title: "For Experts",
        description: "Share agricultural knowledge, offer professional services, and help farmers make better decisions.",
    },
    {
        icon: ShieldCheck,
        title: "Trusted Platform",
        description: "We focus on transparency, secure interactions, and creating a trustworthy agricultural ecosystem.",
    },
    {
        icon: TrendingUp,
        title: "Grow Together",
        description: "Help farmers expand their reach while giving buyers better access to quality agricultural products.",
    },
    {
        icon: Handshake,
        title: "Strong Community",
        description: "Build meaningful connections between farmers, buyers, experts, and the wider agricultural community.",
    },
];

const AboutFeatures = () => {
    return (
        <section className="bg-white py-20 lg:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-green-600">
                        What We Offer
                    </span>
                    <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                        One platform, many possibilities
                    </h2>
                    <p className="mt-4 leading-7 text-gray-600">
                        AgroNexa brings together the essential tools and
                        connections needed to build a smarter agricultural
                        marketplace.
                    </p>
                </div>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.title}
                                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-100 hover:shadow-lg"
                            >
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 transition-colors group-hover:bg-green-600">
                                    <Icon className="h-7 w-7 text-green-600 transition-colors group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">
                                    {feature.title}
                                </h3>
                                <p className="mt-3 leading-7 text-gray-600">
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

export default AboutFeatures;