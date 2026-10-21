import { ShoppingCart } from "lucide-react";

export default function OrdersHeader() {
    return (
        <div className="flex flex-col gap-4 transition-colors duration-300 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600 transition-colors duration-300 dark:bg-green-500/15 dark:text-green-400">
                    <ShoppingCart className="h-5 w-5" />
                </div>

                {/* Heading and Description */}
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                        Orders
                    </h1>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Manage and track agricultural marketplace orders.
                    </p>
                </div>
            </div>
        </div>
    );
}