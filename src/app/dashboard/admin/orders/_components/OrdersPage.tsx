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
        <div className="space-y-6">
            <OrdersHeader />=
            <OrderSearch
                initialSearchTerm={searchTerm}
            />
            <OrdersTable
                orders={orders}
            />
            {meta.totalPage > 1 && (
                <OrderPagination
                    currentPage={meta.page}
                    totalPages={meta.totalPage}
                    searchTerm={searchTerm}
                />
            )}
        </div>
    );
}