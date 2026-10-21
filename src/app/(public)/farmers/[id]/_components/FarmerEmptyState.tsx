import { Sprout } from "lucide-react";
export default function FarmerEmptyState() {
    return (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-600 transition-colors duration-300 dark:bg-green-900/30 dark:text-green-400">
                <Sprout className="h-7 w-7" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-slate-100">
                No Registered Farms
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
                This farmer does not have any registered farms
                available on AgroMart yet.
            </p>
        </div>
    );
}