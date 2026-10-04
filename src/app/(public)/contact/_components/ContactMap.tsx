import { MapPin } from "lucide-react";

const ContactMap = () => {
    return (
        <section
            id="map"
            className="bg-white py-20 lg:py-28"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-green-600">
                        Find Us
                    </span>

                    <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                        Visit our location
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                        We are based in Dhaka, Bangladesh. Feel free to reach
                        out before visiting us.
                    </p>
                </div>

                <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-lg">
                    <div className="relative h-[400px] w-full">
                        <iframe
                            title="AgroNexa location"
                            src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
                            className="absolute inset-0 h-full w-full border-0"
                            loading="lazy"
                        />

                        <div className="absolute bottom-5 left-5 rounded-xl bg-white p-4 shadow-lg">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                                    <MapPin className="h-5 w-5 text-green-600" />
                                </div>

                                <div>
                                    <p className="text-sm font-bold text-gray-900">
                                        AgroNexa
                                    </p>

                                    <p className="text-xs text-gray-500">
                                        Dhaka, Bangladesh
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMap;