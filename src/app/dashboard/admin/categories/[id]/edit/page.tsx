import { notFound } from "next/navigation";
import { getCategoryById } from "../../_actions/getCategoryById";
import UpdateCategoryForm from "../../_components/UpdateCategoryForm";

interface EditCategoryPageProps {
    params: Promise<{
        id: string;
    }>;
}
export default async function EditCategoryPage({
   params,
}: EditCategoryPageProps) {
    const { id } = await params;
    if (!id) {
        notFound();
    }
    const result = await getCategoryById(id);
    if (!result.success || !result.data) {
        notFound();
    }
    return (
        <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
            <UpdateCategoryForm category={result.data} />
        </main>
    );
}