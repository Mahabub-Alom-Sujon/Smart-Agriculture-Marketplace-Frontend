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

export interface CategoryResponse {
    success: boolean;
    message: string;
    // meta: CategoryMeta;
    data: Category[];
}