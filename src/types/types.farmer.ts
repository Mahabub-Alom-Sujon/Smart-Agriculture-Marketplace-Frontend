export interface Farm {
    id: string;
    farmName: string;
    location: string;
    landSize: number;
    soilType: string;
    farmerId: string;
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
    farms: Farm[];
}

export interface FarmerMeta {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
}

/**
 * GET /farmers
 */
export interface FarmerResponse {
    success: boolean;
    message: string;
    data: Farmer[];
}

/**
 * GET /farmers/:id
 */
export interface SingleFarmerResponse {
    success: boolean;
    message: string;
    data: Farmer;
}