import { Plus, Sprout } from "lucide-react";
import Link from "next/link";
export default function FarmerHeader() {
    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Header Information */}
            <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <Sprout className="h-5 w-5" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                        Farmers
                    </h1>
                    <p className="mt-1 text-sm text-slate-500">
                        Manage and monitor registered farmers in your
                        agricultural marketplace.
                    </p>
                </div>
            </div>
            {/* Add Farmer Button */}
            {/*<Link*/}
            {/*    href="/dashboard/admin/farmers/create"*/}
            {/*    className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-green-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"*/}
            {/*>*/}
            {/*    <Plus className="h-4 w-4" />*/}
            {/*    Add Farmer*/}
            {/*</Link>*/}
        </div>
    );
}
