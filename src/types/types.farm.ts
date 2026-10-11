export interface Farm {
    id: string;
    farmName: string;
    location: string;
    landSize: number | null;
    soilType: string | null;
    farmerId: string;
    isDeleted: boolean;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
}

export interface CreateFarmInput {
    farmName: string;
    location: string;
    landSize: number;
    soilType: string;
}

export interface UpdateFarmInput {
    farmName?: string;
    location?: string;
    landSize?: number;
    soilType?: string;
}

export interface FarmMeta {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
}

export interface FarmApiResponse {
    success: boolean;
    message: string;
    data?: Farm;
}