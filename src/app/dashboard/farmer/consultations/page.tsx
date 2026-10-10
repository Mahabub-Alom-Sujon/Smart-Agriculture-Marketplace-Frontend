import { getAllConsultations } from "./_actions/getAllConsultations";
import ConsultationsPage from "@/app/dashboard/farmer/consultations/_components/ConsultationsPage";
interface ConsultationsRouteProps {
    searchParams: Promise<{
        page?: string;
        searchTerm?: string;
    }>;
}
export default async function ConsultationsRoute({
      searchParams,
}: ConsultationsRouteProps) {
    const params = await searchParams;
    const searchTerm = params.searchTerm?.trim() ?? "";
    const page = Math.max(1, Number(params.page) || 1);
    const limit = 10;
    const response = await getAllConsultations ({
        page,
        limit,
        searchTerm,
    });
    const consultations = response?.data ?? [];
    const meta = response?.data ?? {
        total: 0,
        page: 1,
        limit,
        totalPage: 0,
    };
    return (
        <ConsultationsPage
            consultations={consultations}
            meta={meta}
            searchTerm={searchTerm}
        />
    );
}