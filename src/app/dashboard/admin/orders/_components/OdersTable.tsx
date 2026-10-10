"use client";
import { useState } from "react";
import {
    ShoppingCart,
    MoreHorizontal,
    Eye,
    MapPin,
    X,
} from "lucide-react";
import moment from "moment";
import { useRouter } from "next/navigation";
import type { Order, OrderStatus } from "@/types/types.order";

interface OrdersTableProps {
    orders: Order[];
}

const statusStyles: Record<OrderStatus, string> = {
    PENDING: "bg-amber-50 text-amber-700",
    PAYMENT_PENDING: "bg-orange-50 text-orange-700",
    PAID: "bg-blue-50 text-blue-700",
    CONFIRMED: "bg-sky-50 text-sky-700",
    PROCESSING: "bg-indigo-50 text-indigo-700",
    SHIPPED: "bg-purple-50 text-purple-700",
    COMPLETED: "bg-emerald-50 text-green-600",
    DELIVERED: "bg-green-50 text-green-700",
    CANCELLED: "bg-red-50 text-red-700",
    REFUNDED: "bg-rose-50 text-rose-700",
};

const formatStatus = (status: OrderStatus) =>
    status
        .toLowerCase()
        .replaceAll("_", " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

export default function OrdersTable({
    orders,
}: OrdersTableProps) {
    const router = useRouter();
    const [openActionId, setOpenActionId] = useState<string | null>(
        null
    );
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(
        null
    );
    const handleView = (order: Order) => {
        setOpenActionId(null);
        setSelectedOrder(order);
    };
    return (
        <>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                {/* Header */}
                <div className="border-b border-slate-200 px-5 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="font-semibold text-slate-900">
                                Order List
                            </h2>
                            <p className="mt-1 text-xs text-slate-500">
                                Manage and track marketplace orders
                            </p>
                        </div>
                        <ShoppingCart className="h-5 w-5 text-green-600" />
                    </div>
                </div>
                {/* Empty State */}
                {orders.length === 0 ? (
                    <div className="flex min-h-60 flex-col items-center justify-center px-6 text-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                            <ShoppingCart className="h-7 w-7 text-emerald-600" />
                        </div>

                        <h3 className="mt-4 font-semibold text-slate-900">
                            No orders found
                        </h3>

                        <p className="mt-1 max-w-sm text-sm text-slate-500">
                            No orders are available. Try changing your
                            search keyword.
                        </p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[1050px]">
                            <thead>
                            <tr className="border-b border-slate-200 bg-slate-50">
                                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Order
                                </th>

                                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Buyer
                                </th>

                                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Amount
                                </th>

                                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Delivery Address
                                </th>

                                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Status
                                </th>

                                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Created
                                </th>

                                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Action
                                </th>
                            </tr>
                            </thead>

                            <tbody className="divide-y divide-slate-100">
                            {orders.map((order) => (
                                <tr
                                    key={order.id}
                                    className="transition-colors hover:bg-slate-50"
                                >
                                    {/* Order Number */}
                                    <td className="px-5 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                                                <ShoppingCart className="h-5 w-5 text-emerald-600" />
                                            </div>

                                            <div>
                                                <p className="font-semibold text-slate-900">
                                                    {order.orderNumber}
                                                </p>
                                                <p className="mt-0.5 text-xs text-slate-400">
                                                    {order.id.slice(0, 8)}...
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Buyer */}
                                    <td className="px-5 py-4">
                                        <p className="font-medium text-slate-900">
                                            {order.buyer.name}
                                        </p>
                                        <p className="mt-0.5 text-xs text-slate-500">
                                            {order.buyer.email}
                                        </p>
                                    </td>

                                    {/* Amount */}
                                    <td className="whitespace-nowrap px-5 py-4">
                                            <span className="font-semibold text-slate-900">
                                                ৳{order.totalAmount.toLocaleString(
                                                "en-BD"
                                            )}
                                            </span>
                                    </td>

                                    {/* Delivery Address */}
                                    <td className="max-w-xs px-5 py-4">
                                        <div className="flex items-start gap-2">
                                            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                                            <p className="line-clamp-2 text-sm text-slate-600">
                                                {order.deliveryAddress ||
                                                    "No address available"}
                                            </p>
                                        </div>
                                    </td>

                                    {/* Status */}
                                    <td className="px-5 py-4">
                                            <span
                                                className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${
                                                    statusStyles[order.status]
                                                }`}
                                            >
                                                {formatStatus(order.status)}
                                            </span>
                                    </td>

                                    {/* Created */}
                                    <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-500">
                                        {moment(order.createdAt).format(
                                            "MMM Do, YYYY"
                                        )}
                                    </td>

                                    {/* Actions */}
                                    <td className="relative px-5 py-4 text-right">
                                        <button
                                            type="button"
                                            aria-label={`Actions for order ${order.orderNumber}`}
                                            aria-expanded={
                                                openActionId === order.id
                                            }
                                            onClick={() =>
                                                setOpenActionId(
                                                    openActionId === order.id
                                                        ? null
                                                        : order.id
                                                )
                                            }
                                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
                                        >
                                            <MoreHorizontal className="h-5 w-5" />
                                        </button>

                                        {openActionId === order.id && (
                                            <div className="absolute right-5 top-14 z-50 w-48 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 text-left shadow-lg">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleView(order)
                                                    }
                                                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                                                >
                                                    <Eye className="h-4 w-4" />
                                                    View Details
                                                </button>

                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setOpenActionId(null);
                                                        router.push(
                                                            `/dashboard/admin/orders/${order.id}`
                                                        );
                                                    }}
                                                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-50"
                                                >
                                                    <ShoppingCart className="h-4 w-4" />
                                                    Open Order
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Order Details Modal */}
            {selectedOrder && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 p-4"
                    onClick={() => setSelectedOrder(null)}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="order-details-title"
                        className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h2
                                    id="order-details-title"
                                    className="text-lg font-bold text-slate-900"
                                >
                                    Order Details
                                </h2>
                                <p className="mt-1 text-sm text-slate-500">
                                    {selectedOrder.orderNumber}
                                </p>
                            </div>

                            <button
                                type="button"
                                aria-label="Close order details"
                                onClick={() => setSelectedOrder(null)}
                                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="mt-6 space-y-4">
                            <div className="flex items-center justify-between gap-4">
                                <span className="text-sm text-slate-500">
                                    Buyer
                                </span>
                                <span className="text-right text-sm font-medium text-slate-900">
                                    {selectedOrder.buyer.name}
                                </span>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <span className="text-sm text-slate-500">
                                    Email
                                </span>
                                <span className="break-all text-right text-sm text-slate-700">
                                    {selectedOrder.buyer.email}
                                </span>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <span className="text-sm text-slate-500">
                                    Total Amount
                                </span>
                                <span className="text-sm font-bold text-green-700">
                                    ৳{selectedOrder.totalAmount.toLocaleString(
                                    "en-BD"
                                )}
                                </span>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <span className="text-sm text-slate-500">
                                    Status
                                </span>
                                <span
                                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                                        statusStyles[selectedOrder.status]
                                    }`}
                                >
                                    {formatStatus(selectedOrder.status)}
                                </span>
                            </div>

                            <div>
                                <p className="mb-1 text-sm text-slate-500">
                                    Delivery Address
                                </p>
                                <p className="rounded-lg bg-slate-50 p-3 text-sm leading-6 text-slate-700">
                                    {selectedOrder.deliveryAddress ||
                                        "No address available"}
                                </p>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <span className="text-sm text-slate-500">
                                    Order Date
                                </span>
                                <span className="text-right text-sm text-slate-700">
                                    {moment(
                                        selectedOrder.createdAt
                                    ).format("MMM Do, YYYY h:mm A")}
                                </span>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => setSelectedOrder(null)}
                            className="mt-6 w-full rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}