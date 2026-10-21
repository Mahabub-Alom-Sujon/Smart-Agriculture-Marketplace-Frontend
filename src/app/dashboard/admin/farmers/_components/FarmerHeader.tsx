import { Sprout } from "lucide-react";

export default function FarmerHeader() {
    return (
        <div className="flex flex-col gap-4 transition-colors duration-300 sm:flex-row sm:items-center sm:justify-between">
            {/* Header Information */}
            <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600 transition-colors duration-300 dark:bg-green-900/30 dark:text-green-400">
                    <Sprout className="h-5 w-5" />
                </div>

                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                        Farmers
                    </h1>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Manage and monitor registered farmers in your
                        agricultural marketplace.
                    </p>
                </div>
            </div>
        </div>
    );
}
