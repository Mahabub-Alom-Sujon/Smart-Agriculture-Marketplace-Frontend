import type {
    Order,
    OrderMeta,
} from "@/types/types.order";
import OrdersHeader from "./OrdersHeader";
import OrderSearch from "./OrderSearch";
import OrdersTable from "./OdersTable";
import OrderPagination from "./OrderPagination";
interface OrdersPageProps {
    orders: Order[];
    meta: OrderMeta;
    searchTerm: string;
}
export default function OrdersPage({
    orders,
    meta,
    searchTerm,
}: OrdersPageProps) {
    return (
        <div className="min-h-screen space-y-6 bg-slate-50 p-4 transition-colors duration-300 sm:p-6 dark:bg-slate-950">
            {/* Page Header */}
            <OrdersHeader />

            {/* Search Section */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-colors duration-300 sm:p-5 dark:border-slate-800 dark:bg-slate-900">
                <OrderSearch
                    initialSearchTerm={searchTerm}
                />
            </div>

            {/* Orders Table */}
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
                <OrdersTable orders={orders} />
            </div>

            {/* Pagination */}
            {meta.totalPage > 1 && (
                <div className="rounded-xl border border-slate-200 bg-white p-4 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
                    <OrderPagination
                        currentPage={meta.page}
                        totalPages={meta.totalPage}
                        searchTerm={searchTerm}
                    />
                </div>
            )}
        </div>
    );
}