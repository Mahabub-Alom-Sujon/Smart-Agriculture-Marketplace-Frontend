export type OrderStatus =
    | "PENDING"
    | "PAYMENT_PENDING"
    | "PAID"
    | "PROCESSING"
    | "SHIPPED"
    | "COMPLETED"
    | "DELIVERED"
    | "CANCELLED"
    | "REFUNDED"
    | "CONFIRMED";

export interface Buyer {
    id: string;
    name: string;
    email: string;
    address: string | null;
    city: string | null;
    country: string | null;
    userId: string;
    isDeleted: boolean;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
}

export interface Order {
    id: string;
    orderNumber: string;
    totalAmount: number;
    deliveryAddress: string;
    status: OrderStatus;
    buyerId: string;
    farmerId: string;
    isDeleted: boolean;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
    buyer: Buyer;
}

export interface OrderMeta {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
}

export interface OrderResponse {
    success: boolean;
    message: string;
    meta: OrderMeta;
    data: Order[];
}