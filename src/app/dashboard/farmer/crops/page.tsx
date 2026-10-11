import { getAllCrop } from "@/app/dashboard/farmer/crops/_actions/getAllCrop";
import CropPage from "@/app/dashboard/farmer/crops/_components/CropPage";

interface CropsRouteProps {
    searchParams: Promise<{
        page?: string;
        searchTerm?: string;
    }>;
}
export default async function CropsRoute({
    searchParams,
}: CropsRouteProps) {
    const params = await searchParams;
    const searchTerm = params.searchTerm?.trim() ?? "";
    const page = Math.max(1, Number(params.page) || 1);
    const limit = 10;

    const response = await getAllCrop({
        page,
        limit,
        searchTerm,
    });
    const crops = response?.data ?? [];
    const meta = response?.meta ?? {
        total: 0,
        page: 1,
        limit,
        totalPage: 0,
    };
    return (
        <CropPage
            crops={crops}
            meta={meta}
            searchTerm={searchTerm}
        />
    );
}