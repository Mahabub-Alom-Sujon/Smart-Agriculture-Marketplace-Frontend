export type ProductStatus = "ACTIVE" | "SOLD_OUT" | "INACTIVE";
export interface Category {
    id: string;
    name: string;
    description: string | null;
    image: string | null;
    isDeleted: boolean;
    deletedAt: string | Date | null;
    createdAt: string | Date;
    updatedAt: string | Date;
}
export interface Farm {
    id: string;
    farmName: string;
    location: string;
    landSize: number;
    soilType: string;
    farmerId: string;
    isDeleted: boolean;
    deletedAt: string | Date | null;
}

export interface Farmer {
    id: string;
    name: string;
    email: string;
    certification: string | null;
    isDeleted: boolean;
    deletedAt: string | Date | null;
    farms: Farm[];
}

export interface ProductCount {
    reviews: number;
    orderItems: number;
}

export interface ProductReview {
    id: string;
    rating: number;
    comment: string | null;
    userId: string;
    productId: string;
    createdAt: string | Date;
    updatedAt: string | Date;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    unit: string;
    image: string | null;
    status: ProductStatus,
    farmerId: string;
    categoryId: string;
    isDeleted: boolean;
    deletedAt: string | Date | null;
    createdAt: string | Date;
    updatedAt: string | Date;
    category: Category;
    farmer: Farmer;
    reviews: ProductReview[];
    _count: ProductCount;
}

/** Payload sent when creating a product */
export interface CreateProductPayload {
    name: string;
    description?: string;
    price: number;
    quantity: number;
    unit?: string;
    image?: string;
    status?: ProductStatus;
    farmerId: string;
    categoryId: string;
}

export interface ProductMeta {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
}

export interface ProductResponse {
    success: boolean;
    message: string;
    data: Product;
}
