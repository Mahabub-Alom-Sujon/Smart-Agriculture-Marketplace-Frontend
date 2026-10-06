import { Sprout } from "lucide-react";
export default function FarmerEmptyState() {
    return (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                <Sprout className="h-7 w-7" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-slate-900">
                No Registered Farms
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                This farmer does not have any registered farms
                available on AgroMart yet.
            </p>
        </div>
    );
}