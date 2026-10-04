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
        description: "Create your account as a farmer, buyer, or agricultural expert.",
    },
    {
        number: "02",
        icon: Search,
        title: "Discover",
        description: "Explore agricultural products, farmers, and expert services.",
    },
    {
        number: "03",
        icon: ShoppingCart,
        title: "Connect & Buy",
        description: "Connect with sellers and purchase quality agricultural products.",
    },
    {
        number: "04",
        icon: CheckCircle2,
        title: "Grow Together",
        description: "Build trusted relationships and contribute to a stronger farming community.",
    },
];

const AboutHowItWorks = () => {
    return (
        <section className="bg-green-50/60 py-20 lg:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-green-600">
                        Simple Process
                    </span>
                    <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                        How AgroNexa works
                    </h2>
                    <p className="mt-4 text-gray-600">
                        We make the agricultural marketplace simple,
                        accessible, and convenient for everyone.
                    </p>
                </div>
                <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={step.number} className="relative">
                                <div className="rounded-2xl bg-white p-7 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                                            <Icon className="h-6 w-6 text-green-600" />
                                        </div>
                                        <span className="text-4xl font-black text-green-100">
                                            {step.number}
                                        </span>
                                    </div>
                                    <h3 className="mt-6 text-xl font-bold text-gray-900">
                                        {step.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">
                                        {step.description}
                                    </p>
                                </div>
                                {index !== steps.length - 1 && (
                                    <ArrowRight className="absolute -right-6 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-green-300 lg:block" />
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