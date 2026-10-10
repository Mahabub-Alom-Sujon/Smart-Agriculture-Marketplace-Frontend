
import { notFound, redirect } from "next/navigation";
import { getConsultationById } from "../../_actions/getConsultationById";
import UpdateConsultationForm from "../../_components/UpdateConsultationForm";

interface UpdateConsultationPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function UpdateConsultationPage({
    params,
 }: UpdateConsultationPageProps) {
    const { id } = await params;
    const result = await getConsultationById(id);
    if (!result.success || !result.data) {
        if (result.message === "Please log in to continue") {
            redirect("/login");
        }
        if (
            result.message === "Consultation not found" ||
            result.message === "Failed to load consultation"
        ) {
            notFound();
        }
        throw new Error(result.message);
    }
    return (
        <main className="min-h-screen bg-gray-50/70 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
            <UpdateConsultationForm consultation={result.data}/>
        </main>
    );
}
