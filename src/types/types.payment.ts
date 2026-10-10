// export interface PaymentCustomer {
//     id: string;
//     name: string;
//     email: string;
//     phone: string | null;
//     address: string | null;
//     city: string | null;
//     country: string | null;
// }
//
// export interface BuyerProfile {
//     id: string;
//     name: string;
//     email: string;
//     address: string | null;
//     city: string | null;
//     country: string | null;
//     userId: string;
// }
//
// export interface PaymentUser {
//     id: string;
//     name: string;
//     email: string;
//     phone: string | null;
//     address: string | null;
//     role: string;
//     buyer: BuyerProfile | null;
// }
//
// export interface ApiResponse<T> {
//     success: boolean;
//     message: string;
//     data: T;
// }
//
// export interface PaymentFormValues {
//     name: string;
//     email: string;
//     phone: string;
//     address: string;
//     city: string;
//     country: string;
// }
//
// export interface PaymentCreateInput {
//     orderId: string;
// }
//
// export interface PaymentCreateResponse {
//     success: boolean;
//     message: string;
//     data?: {
//         checkoutUrl?: string;
//         url?: string;
//         sessionUrl?: string;
//         paymentId?: string;
//         orderId?: string;
//     };
// }
export interface PaymentCustomer {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    address: string | null;
    city: string | null;
    country: string | null;
}

export interface BuyerProfile {
    id: string;
    name: string;
    email: string;
    address: string | null;
    city: string | null;
    country: string | null;
    userId: string;
}

export interface PaymentUser {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    address: string | null;
    role: string;
    buyer: BuyerProfile | null;
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

export interface PaymentFormValues {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
}

/* -------------------- Order Types -------------------- */

export interface CreateOrderItemInput {
    productId: string;
    quantity: number;
}

export interface CreateOrderInput {
    deliveryAddress: string;
    items: CreateOrderItemInput[];
}

export interface CreateOrderData {
    id?: string;
    orderId?: string;
}

export interface CreateOrderResponse {
    success: boolean;
    message: string;
    data?: CreateOrderData;
}

/* -------------------- Payment Types -------------------- */

export interface PaymentCreateInput {
    orderId: string;
}

export interface PaymentCreateData {
    checkoutUrl?: string;
    paymentUrl?: string;
    url?: string;
    sessionUrl?: string;
    paymentId?: string;
    orderId?: string;
    sessionId?: string;
}

export interface PaymentCreateResponse {
    success: boolean;
    message: string;
    data?: PaymentCreateData;
}