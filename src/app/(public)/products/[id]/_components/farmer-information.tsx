import {
    Award,
    Building2,
    MapPin,
    Ruler,
    Sprout,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Product } from "@/types/types.product";
interface FarmerInformationProps {
    product: Product;
}
export function FarmerInformation({
  product,
}: FarmerInformationProps) {
    const { farmer } = product;
    return (
        <Card className="rounded-2xl border-0 p-6 shadow-sm">
            {/* Header */}
            <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50">
                    <Sprout className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                    Farmer Information
                </h2>
            </div>
            {/* Farmer */}
            <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-xl font-bold text-green-600">
                    {farmer.name.charAt(0).toUpperCase()}
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900">
                        {farmer.name}
                    </h3>
                    <span className="mt-1 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-green-600">
                        Local Farmer
                    </span>
                </div>
            </div>
            {/* Certification */}
            <div className="mt-6 flex items-start gap-3">
                <Award className="mt-1 h-5 w-5 text-slate-500" />
                <div>
                    <p className="text-sm font-semibold text-slate-700">
                        Certification
                    </p>
                    <p className="text-sm text-slate-500">{farmer.certification ?? "Not provided"}</p>
                </div>
            </div>
            {/* Farms */}
            {farmer.farms.length > 0 && (
                <div className="mt-8 border-t pt-6">
                    <div className="mb-4 flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-green-600" />

                        <h3 className="text-lg font-bold text-slate-900">
                            Farms
                        </h3>
                    </div>
                    <div className="space-y-3">
                        {farmer.farms.map((farm) => (
                            <div
                                key={farm.id}
                                className="rounded-xl border p-4 transition hover:border-emerald-300"
                            >
                                <h4 className="font-semibold text-slate-900">
                                    {farm.farmName}
                                </h4>
                                <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                                    <MapPin className="h-4 w-4" />
                                    {farm.location}
                                </div>
                                <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-500">
                                    <span className="flex items-center gap-1">
                                        <Ruler className="h-4 w-4" />

                                        {farm.landSize} acres
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Sprout className="h-4 w-4" />

                                        {farm.soilType}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </Card>
    );
}