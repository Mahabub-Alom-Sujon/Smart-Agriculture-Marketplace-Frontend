import { getAllCategory } from "./_actions/getAllCategory";
import CategoriesPage from "./_components/CategoriesPage";

interface CategoriesRouteProps {
    searchParams: Promise<{
        page?: string;
        searchTerm?: string;
    }>;
}

export default async function CategoriesRoute({
    searchParams,
}: CategoriesRouteProps) {
    const params = await searchParams;

    const searchTerm = params.searchTerm?.trim() ?? "";
    const page = Math.max(1, Number(params.page) || 1);
    const limit = 10;

    const response = await getAllCategory({
        page,
        limit,
        searchTerm,
    });

    const categories = response?.data?.data ?? [];

    const meta = response?.data?.meta ?? {
        total: 0,
        page: 1,
        limit,
        totalPage: 0,
    };

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-6 transition-colors duration-300 dark:bg-slate-950 sm:px-6 lg:px-8 rounded-2xl">
            <CategoriesPage
                categories={categories}
                meta={meta}
                searchTerm={searchTerm}
            />
        </main>
    );
}