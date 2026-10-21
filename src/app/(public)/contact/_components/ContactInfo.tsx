// import {
//     Clock3,
//     Mail,
//     MapPin,
//     Phone,
// } from "lucide-react";
//
// const contactItems = [
//     {
//         icon: Mail,
//         title: "Email Us",
//         description: "Send us an email anytime",
//         value: "support@agronexa.com",
//         href: "mailto:support@agronexa.com",
//     },
//     {
//         icon: Phone,
//         title: "Call Us",
//         description: "Mon - Fri, 9:00 AM - 6:00 PM",
//         value: "+880 1700-000000",
//         href: "tel:+8801700000000",
//     },
//     {
//         icon: MapPin,
//         title: "Visit Us",
//         description: "Come and meet our team",
//         value: "Dhaka, Bangladesh",
//         href: "#map",
//     },
//     {
//         icon: Clock3,
//         title: "Working Hours",
//         description: "Our support team is available",
//         value: "Sat - Thu: 9 AM - 6 PM",
//         href: "#",
//     },
// ];
//
// const ContactInfo = () => {
//     return (
//         <section className="bg-white py-16 lg:py-20">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//                     {contactItems.map((item) => {
//                         const Icon = item.icon;
//
//                         return (
//                             <a
//                                 key={item.title}
//                                 href={item.href}
//                                 className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-100 hover:shadow-lg"
//                             >
//                                 <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 transition-colors group-hover:bg-green-600">
//                                     <Icon className="h-6 w-6 text-green-600 transition-colors group-hover:text-white" />
//                                 </div>
//
//                                 <h3 className="mt-5 font-bold text-gray-900">
//                                     {item.title}
//                                 </h3>
//
//                                 <p className="mt-2 text-sm text-gray-500">
//                                     {item.description}
//                                 </p>
//
//                                 <p className="mt-3 font-medium text-green-600">
//                                     {item.value}
//                                 </p>
//                             </a>
//                         );
//                     })}
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export default ContactInfo;

"use client";
import {
    Clock3,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
const contactItems = [
    {
        icon: Mail,
        title: "Email Us",
        description: "Send us an email anytime",
        value: "support@agronexa.com",
        href: "mailto:support@agronexa.com",
    },
    {
        icon: Phone,
        title: "Call Us",
        description: "Mon - Fri, 9:00 AM - 6:00 PM",
        value: "+880 1700-000000",
        href: "tel:+8801700000000",
    },
    {
        icon: MapPin,
        title: "Visit Us",
        description: "Come and meet our team",
        value: "Dhaka, Bangladesh",
        href: "#map",
    },
    {
        icon: Clock3,
        title: "Working Hours",
        description: "Our support team is available",
        value: "Sat - Thu: 9 AM - 6 PM",
        href: "#",
    },
];
const ContactInfo = () => {
    return (
        <section className="bg-white py-16 transition-colors duration-300 dark:bg-gray-950 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {contactItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={item.title}
                                href={item.href}
                                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-800"
                            >
                                {/* Icon */}
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 transition-colors duration-300 group-hover:bg-green-600 dark:bg-green-900/30 dark:group-hover:bg-green-600">
                                    <Icon className="h-6 w-6 text-green-600 transition-colors duration-300 group-hover:text-white dark:text-green-400 dark:group-hover:text-white" />
                                </div>
                                {/* Title */}
                                <h3 className="mt-5 font-bold text-gray-900 transition-colors dark:text-white">
                                    {item.title}
                                </h3>
                                {/* Description */}
                                <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                                    {item.description}
                                </p>
                                {/* Contact Value */}
                                <p className="mt-3 break-words font-medium text-green-600 dark:text-green-400">
                                    {item.value}
                                </p>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;