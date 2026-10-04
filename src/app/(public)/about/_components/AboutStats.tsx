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
        <section className="border-y bg-white">
            <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div key={stat.label} className="text-center">
                                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50">
                                    <Icon className="h-7 w-7 text-green-600" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900">
                                    {stat.value}
                                </h3>
                                <p className="mt-1 font-semibold text-gray-800">
                                    {stat.label}
                                </p>
                                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-gray-500">
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