export interface ExpertAdvice {
    id: string;
    diagnosis: string;
    recommendation: string;
    fertilizer: string | null;
    pesticide: string | null;
    consultationId: string;
    expertId: string;
    isDeleted: boolean;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
}

export interface Expert {
    id: string;
    name: string;
    email: string;
    city: string;
    specialization: string;
    qualification: string;
    experience: number;
    userId: string;
    isDeleted: boolean;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
    expertAdvices: ExpertAdvice[];
}

export interface ExpertMeta {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
}

export interface ExpertResponse {
    success: boolean;
    message: string;
    meta: ExpertMeta;
    data: Expert[];
}