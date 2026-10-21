"use client";
import { MapPin, ExternalLink } from "lucide-react";
const ContactMap = () => {
    return (
        <section
            id="map"
            className="bg-white py-20 transition-colors duration-300 dark:bg-gray-950 lg:py-28"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-10 text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">
                        Find Us
                    </span>

                    <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                        Visit our location
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
                        We are based in Dhaka, Bangladesh. Feel free to reach
                        out before visiting us.
                    </p>
                </div>

                {/* Map Container */}
                <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900">
                    <div className="relative h-[400px] w-full sm:h-[450px] lg:h-[500px]">
                        {/* Google Maps */}
                        <iframe
                            title="AgroNexa location"
                            src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
                            className="absolute inset-0 h-full w-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />

                        {/* Location Information Card */}
                        <div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-2xl border border-gray-100 bg-white/95 p-4 shadow-xl backdrop-blur-md transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900/95 sm:bottom-6 sm:left-6">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40">
                                    <MapPin className="h-5 w-5 text-green-600 dark:text-green-400" />
                                </div>

                                <div className="min-w-0">
                                    <p className="font-bold text-gray-900 dark:text-white">
                                        AgroNexa
                                    </p>

                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                        Dhaka, Bangladesh
                                    </p>
                                </div>
                            </div>

                            {/* Open in Google Maps */}
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Dhaka%2CBangladesh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-green-600 transition-colors hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                            >
                                Open in Google Maps
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMap;