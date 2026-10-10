import { getAllExpert } from "./_actions/getAllExpert";
import ExpertPage from "./_components/ExpertPage";
interface ExpertsRouteProps {
    searchParams: Promise<{
        page?: string;
        limit?: string;
        searchTerm?: string;
    }>;
}
export default async function ExpertsRoute({
    searchParams,
}: ExpertsRouteProps) {
    const params = await searchParams;
    const searchTerm = params.searchTerm?.trim() ?? "";
    const page = Math.max(1, Number(params.page) || 1);
    const limit = Math.max(1, Number(params.limit) || 10);
    const response = await getAllExpert({
        page,
        limit,
        searchTerm,
    });
    const experts = response?.data ?? [];
    const meta = response?.meta ?? {
        total: 0,
        page: 1,
        limit,
        totalPage: 0,
    };
    return (
        <ExpertPage
            experts={experts}
            meta={meta}
            searchTerm={searchTerm}
        />
    );
}