import type { Farmer } from "@/types/types.farmer";
import FarmerCard from "./FarmerCard";
interface FarmersGridProps {
    farmers: Farmer[];
}
export default function FarmersGrid({
    farmers,
}: FarmersGridProps) {
    if (farmers.length === 0) {
        return (
            <div className="col-span-full rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
                <p className="text-lg font-semibold text-gray-700">
                    No farmers found
                </p>
                <p className="mt-2 text-sm text-gray-500">
                    Try searching with a different farmer name or email.
                </p>
            </div>
        );
    }
    return (
        <>
            {farmers.map((farmer) => (
                <FarmerCard key={farmer.id}
                    farmer={farmer}
                />
            ))}
        </>
    );
}