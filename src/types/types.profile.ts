export type AuthProvider = "CREDENTIAL" | "GOOGLE";
export type UserRole = | "ADMIN" | "SUPER_ADMIN" | "FARMER" | "BUYER" | "EXPERT";
export type UserStatus = "ACTIVE" | "INACTIVE" | "BLOCKED";
export interface BuyerProfile {
    id?: string;
    name?: string;
    address?: string | null;
    city?: string | null;
    country?: string | null;
}

export interface FarmerProfile {
    id?: string;
    name?: string;
    certification?: string | null;
}

export interface ExpertProfile {
    id?: string;
    name?: string;
    city?: string | null;
    specialization?: string | null;
    qualification?: string | null;
    experience?: number;
}

export interface UserProfile {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string | null;
    imageUrl: string;
    imagePublicId: string;
    googleId: string | null;
    authProvider: AuthProvider;
    emailVerified: boolean;
    role: UserRole;
    status: UserStatus;
    needPasswordChange: boolean;
    isDeleted: boolean;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
    buyer: BuyerProfile | null;
    farmer: FarmerProfile | null;
    expert?: ExpertProfile | null;
}

export interface UpdateProfileInput {
    name?: string;
    phone?: string;
    address?: string | null;
    imageUrl?: string;
    imagePublicId?: string;
    // Buyer fields
    city?: string;
    country?: string;
    // Farmer fields
    certification?: string;
    // Expert fields
    specialization?: string;
    qualification?: string;
    experience?: number;
}

export interface UserProfileResponse {
    success: boolean;
    message: string;
    data?: UserProfile;
}