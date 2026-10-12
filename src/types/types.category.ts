export interface Category {
    id: string;
    name: string;
    description: string | null;
    image: string | null;
    isDeleted: boolean;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
}

export interface CategoryMeta {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
}

// Create category payload
export interface CreateCategoryInput {
    name: string;
    description?: string;
    image?: string;
}

// Update category payload
export interface UpdateCategoryInput {
    name?: string;
    description?: string | null;
    image?: string | null;
}

// API response
export interface CategoryResponse {
    success: boolean;
    message: string;
    data: Category[];
}

// Single category response
export interface SingleCategoryResponse {
    success: boolean;
    message: string;
    data?: Category;
}
