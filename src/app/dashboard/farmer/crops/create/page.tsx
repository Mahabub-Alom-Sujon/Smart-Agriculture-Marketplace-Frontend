import { getAllFarms } from "@/app/dashboard/farmer/farms/_actions/getAllFarms";
import CreateCropForm from "@/app/dashboard/farmer/crops/_components/CreateCropForm";
import type { Farm } from "@/types/types.farm";

export default async function CreateCropPage() {
    const result = await getAllFarms({
        page: 1,
        limit: 10,
    });

    const farms: Pick<Farm, "id" | "farmName">[] =
        result.success && Array.isArray(result.data)
            ? result.data.map(
                (farm: Farm): Pick<Farm, "id" | "farmName"> => ({
                    id: farm.id,
                    farmName: farm.farmName,
                }),
            )
            : [];

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 sm:py-8">
            <CreateCropForm farms={farms} />
        </main>
    );
}