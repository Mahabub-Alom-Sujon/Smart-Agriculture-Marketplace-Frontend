export type Role = "FARMER" | "BUYER" | "EXPERT" | "ADMIN" | "SUPER_ADMIN" ;
export type AuthProvider = "CREDENTIAL" | "GOOGLE";
export type UserStatus = "ACTIVE" | "INACTIVE" | "BLOCKED";

export interface  User {
    id: string;
    name: string;
    email: string;
    password?: string | null;
    phone?: string | null;
    address?: string | null;
    imageUrl?: string | null;
    imagePublicId: string;
    googleId?: string | null;
    authProvider: AuthProvider;
    emailVerified: boolean;
    role: Role;
    status: UserStatus;
    needPasswordChange: boolean;
    isDeleted: boolean;
    deletedAt?: string | null;
    createdAt: string;
    updatedAt: string;
}