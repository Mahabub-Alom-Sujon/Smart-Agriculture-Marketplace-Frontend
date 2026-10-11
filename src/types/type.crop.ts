import {Farm} from "@/types/types.farm";

export type CropStatus =
    | "PLANNED"
    | "GROWING"
    | "HARVESTED"

export interface CropFarm {
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

export interface Crop {
    id: string;
    name: string;
    variety: string | null;
    plantingDate: string | null;
    harvestDate: string | null;
    status: CropStatus;
    farmId: string;
    isDeleted: boolean;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
    farm: CropFarm;
}

// Create Crop Interface
export interface CreateCropInput {
    name: string;
    variety: string;
    plantingDate: string;
    harvestDate: string;
    status: CropStatus;
    farmId: string;
}

// Update Crop Interface
export interface UpdateCropInput {
    name?: string;
    variety?: string;
    plantingDate?: string;
    harvestDate?: string;
    status?: CropStatus;
}

export interface CropMeta {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
}

export interface CropResponse {
    success: boolean;
    message: string;
    meta?: CropMeta;
    data?: Crop | Crop[];
}