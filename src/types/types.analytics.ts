export interface DashboardStats {
    totalUsers: number;
    totalFarmers: number;
    totalBuyers: number;
    totalExperts: number;
    totalProducts: number;
    totalCategories: number;
    totalOrders: number;
    activeProducts: number;
    soldOutProducts: number;
}

export interface DashboardStatsResponse {
    success: boolean;
    message: string;
    data: DashboardStats;
}

export interface DashboardStatsActionResult {
    success: boolean;
    message: string;
    data: DashboardStats | null;
}