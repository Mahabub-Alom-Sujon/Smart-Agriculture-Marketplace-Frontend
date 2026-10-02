export interface Category {
    id: string;
    name: string;
    description: string;
    image: string;
    isDeleted: boolean;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
}

export interface Farmer {
    id: string;
    name: string;
    email: string;
    certification: string | null;
    userId: string;
    isDeleted: boolean;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
}

export interface ProductCount {
    reviews: number;
    orderItems: number;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    unit: string;
    image: string;
    status: "ACTIVE" | "INACTIVE";
    farmerId: string;
    categoryId: string;
    isDeleted: boolean;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
    category: Category;
    farmer: Farmer;
    _count: ProductCount;
}
