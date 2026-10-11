import { getAllFarms } from "@/app/dashboard/farmer/farms/_actions/getAllFarms";
import FarmPage from "@/app/dashboard/farmer/farms/_components/FarmPage";
interface FarmsRouteProps {
    searchParams: Promise<{
        page?: string;
        searchTerm?: string;
    }>;
}
export default async function FarmersRoute({
    searchParams,
}: FarmsRouteProps) {
    const params = await searchParams;
    const searchTerm = params.searchTerm?.trim() ?? "";
    const page = Math.max(1, Number(params.page) || 1);
    const limit = 10;
    const response = await getAllFarms({
        page,
        limit,
        searchTerm,
    });
    const farms = response?.data ?? [];
    const meta = response?.meta ?? {
        total: 0,
        page: 1,
        limit,
        totalPage: 0,
    };
    return (
        <FarmPage
            farms={farms}
            meta={meta}
            searchTerm={searchTerm}
        />
    );
}
