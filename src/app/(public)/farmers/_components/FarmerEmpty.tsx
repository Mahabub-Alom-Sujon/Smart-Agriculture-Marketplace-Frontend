import { Sprout } from "lucide-react";

export default function FarmerEmpty() {
    return (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 transition-colors duration-300 dark:bg-green-900/40 dark:text-green-400">
                <Sprout className="h-8 w-8" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-slate-100">
                No Farmers Available
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm text-gray-500 dark:text-slate-400">
                There are currently no registered farmers available.
                Please check back later.
            </p>
        </div>
    );
}