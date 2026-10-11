import { notFound, redirect } from "next/navigation";

import UpdateFarmForm from "../../_components/UpdateFarmForm";
import { getFarmById } from "../../_actions/getFarmById";

interface UpdateFarmPageProps {
    params: Promise<{ id: string }>;
}

export default async function UpdateFarmPage({
                                                 params,
                                             }: UpdateFarmPageProps) {
    const { id } = await params;
    const result = await getFarmById(id);

    if (!result.success || !result.data) {
        notFound();
    }

    return <UpdateFarmForm farm={result.data} />;
}