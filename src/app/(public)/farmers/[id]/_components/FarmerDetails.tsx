import type { Farmer } from "@/types/types.farmer";
import FarmerProfileHeader from "./FarmerProfileHeader";
import FarmerStats from "./FarmerStats";
import FarmerFarmCard from "./FarmerFarmCard";
import FarmerEmptyState from "./FarmerEmptyState";
interface FarmerDetailsProps {
    farmer: Farmer;
}
export default function FarmerDetails({
    farmer,
}: FarmerDetailsProps) {
    const totalLand = farmer.farms.reduce(
        (total, farm) => total + farm.landSize,
        0
    );
    const locations = Array.from(
        new Set( farmer.farms.map((farm) => farm.location))
    );
    return (
        <>
            <FarmerProfileHeader farmer={farmer} />
            <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <FarmerStats
                    farmCount={farmer.farms.length}
                    totalLand={totalLand}
                    locationCount={locations.length}
                />
                <div className="mt-12">
                    <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                        <div>
                            <div className="flex items-center gap-2 text-sm font-semibold text-green-600">
                                <span className="h-2 w-2 rounded-full bg-green-500" />
                                Agricultural Properties
                            </div>
                            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                                {farmer.name}&apos;s Farms
                            </h2>
                            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                                Explore the farms, locations, land size
                                and soil information associated with
                                this farmer.
                            </p>
                        </div>
                        <div className="text-sm text-slate-400">
                            {farmer.farms.length}{" "}
                            {farmer.farms.length === 1 ? "Farm" : "Farms"}
                        </div>
                    </div>
                    {farmer.farms.length > 0 ? (
                        <div className="grid gap-5 md:grid-cols-2">
                            {farmer.farms.map((farm) => (
                                <FarmerFarmCard
                                    key={farm.id}
                                    farm={farm}
                                />
                            ))}
                        </div>
                    ) : (
                        <FarmerEmptyState />
                    )}
                </div>
            </section>
        </>
    );
}