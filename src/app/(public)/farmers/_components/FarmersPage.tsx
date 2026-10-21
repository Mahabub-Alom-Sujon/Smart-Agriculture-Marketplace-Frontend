"use client";
import { useMemo, useState } from "react";
import { Users } from "lucide-react";
import type { Farmer } from "@/types/types.farmer";
import FarmerSearch from "./FarmerSearch";
import FarmersGrid from "./FarmersGrid";
interface FarmersPageProps {
    farmers: Farmer[];
}

export default function FarmersPage({
    farmers,
}: FarmersPageProps) {
    const [search, setSearch] = useState("");
    const filteredFarmers = useMemo(() => {
        const query = search.trim().toLowerCase();
        if (!query) {
            return farmers;
        }
        return farmers.filter((farmer) => {
            const name = farmer.name.toLowerCase();
            const email = farmer.email.toLowerCase();
            const farms = farmer.farms ?? [];
            const locations = farms
                .map((farm) => farm.location.toLowerCase())
                .join(" ");

            const farmNames = farms
                .map((farm) => farm.farmName.toLowerCase())
                .join(" ");

            return (
                name.includes(query) ||
                email.includes(query) ||
                locations.includes(query) ||
                farmNames.includes(query)
            );
        });
    }, [farmers, search]);

    return (
        <section className="bg-gray-50 py-12 text-gray-900 transition-colors duration-300 sm:py-16 dark:bg-slate-950 dark:text-slate-100">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <div>
                        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-green-600 dark:text-green-400">
                            <Users className="h-4 w-4" />
                            Our Farmer Community
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-slate-100">
                            Meet Our Farmers
                        </h2>

                        <p className="mt-2 max-w-2xl text-gray-600 dark:text-slate-400">
                            Connect with trusted farmers and discover
                            where your food comes from.
                        </p>
                    </div>

                    {/* Search */}
                    <FarmerSearch
                        value={search}
                        onChange={setSearch}
                    />
                </div>

                {/* Result count */}
                <div className="mt-8 flex items-center justify-between">
                    <p className="text-sm text-gray-500 dark:text-slate-400">
                        Showing{" "}
                        <span className="font-semibold text-gray-900 dark:text-slate-100">
                            {filteredFarmers.length}
                        </span>{" "}
                        {filteredFarmers.length === 1
                            ? "farmer"
                            : "farmers"}
                    </p>
                </div>

                {/* Grid */}
                <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <FarmersGrid farmers={filteredFarmers} />
                </div>
            </div>
        </section>
    );
}
