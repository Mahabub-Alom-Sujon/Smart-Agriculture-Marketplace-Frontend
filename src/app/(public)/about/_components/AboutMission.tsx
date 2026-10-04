import Image from "next/image";
import {
    CheckCircle2,
    Leaf,
    Target,
} from "lucide-react";

const AboutMission = () => {
    return (
        <section className="bg-gray-50 py-20 lg:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Images */}
                    <div className="relative">
                        <div className="overflow-hidden rounded-3xl">
                            <Image
                                src="https://images.unsplash.com/photo-1492496913980-501348b61469"
                                alt="Modern agriculture"
                                width={700}
                                height={600}
                                className="h-[500px] w-full object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-8 -right-4 max-w-xs rounded-2xl border bg-white p-5 shadow-xl sm:-right-8">
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100">
                                    <Target className="h-6 w-6 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Our Mission</h4>
                                    <p className="mt-1 text-sm leading-6 text-gray-500">
                                        Making agriculture more connected,
                                        transparent, and accessible.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Content */}
                    <div>
                        <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-green-600">
                            <Leaf className="h-5 w-5" />
                            About AgroNexa
                        </div>
                        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                            Technology that brings agriculture closer to people
                        </h2>
                        <p className="mt-6 leading-7 text-gray-600">
                            Agriculture is more than an industry. It is the
                            foundation of our communities and our everyday
                            lives. We believe technology can make the journey
                            from farm to customer simpler and more transparent.
                        </p>
                        <p className="mt-4 leading-7 text-gray-600">
                            AgroNexa creates a digital ecosystem where farmers
                            can showcase their products, buyers can discover
                            fresh produce, and agricultural experts can share
                            valuable knowledge.
                        </p>
                        <div className="mt-8 space-y-4">
                            {[
                                "Direct connection between farmers and buyers",
                                "Easy product discovery and marketplace access",
                                "Access to agricultural experts and services",
                                "Transparent and user-friendly experience",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMission;