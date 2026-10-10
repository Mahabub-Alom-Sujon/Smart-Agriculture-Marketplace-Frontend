import {
    ShoppingCart,
} from "lucide-react";

export default function OrdersHeader() {
    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <ShoppingCart className="h-5 w-5" />
                </div>

                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                        Orders
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Manage and track agricultural marketplace orders.
                    </p>
                </div>
            </div>
        </div>
    );
}