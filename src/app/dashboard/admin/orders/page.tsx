import { getAllOrder } from "./_actions/getAllOrder";
import OrdersPage from "./_components/OrdersPage";
interface OrdersRouteProps {
    searchParams: Promise<{
        page?: string;
        limit?: string;
        searchTerm?: string;
    }>;
}
export default async function OrdersRoute({
    searchParams,
}: OrdersRouteProps) {
    const params = await searchParams;
    const searchTerm = params.searchTerm?.trim() ?? "";
    const page = Math.max(1, Number(params.page) || 1);
    const limit = Math.max(1, Number(params.limit) || 10);
    const response = await getAllOrder({
        page,
        limit,
        searchTerm,
    });
    const orders = response?.data ?? [];
    const meta = response?.meta ?? {
        page: 1,
        limit,
        total: 0,
        totalPage: 0,
    };
    return (
        <OrdersPage
            orders={orders}
            meta={meta}
            searchTerm={searchTerm}
        />
    );
}