export type ConsultationStatus =
    | "PENDING"
    | "ACCEPTED"
    | "COMPLETED"
    | "CANCELLED";

export interface ConsultationFarmer {
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

export interface ConsultationExpert {
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
}

export interface ConsultationAdvice {
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
    expert: ConsultationExpert | null;
}

export interface Consultation {
    id: string;
    cropName: string;
    problem: string;
    image: string | null;
    status: ConsultationStatus;
    farmerId: string;
    isDeleted: boolean;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
    farmer: ConsultationFarmer | null;
    advice: ConsultationAdvice | null;
}

export interface ConsultationMeta {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
}

export interface CreateConsultationInput {
    cropName?: string;
    problem: string;
    image?: string;
}

export type UpdateConsultationInput = CreateConsultationInput;

// export interface GetAllConsultationsResponse {
//     success: boolean;
//     message: string;
//     meta: ConsultationMeta;
//     data: Consultation[];
// }
//
// export interface GetAllConsultationsParams {
//     page?: number;
//     limit?: number;
//     searchTerm?: string;
// }

export interface ConsultationActionResponse {
    success: boolean;
    message: string;
    data?: Consultation;
}