import type { Expert } from "@/types/types.expert";
import ExpertCard from "./ExpertCard";
import ExpertEmpty from "./ExpertEmpty";
interface ExpertsGridProps {
    experts: Expert[];
}

export default function ExpertsGrid({
    experts,
}: ExpertsGridProps) {
    if (experts.length === 0) {
        return <ExpertEmpty />;
    }
    return (
        <div
            id="experts"
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
            {experts.map((expert) => (
                <ExpertCard
                    key={expert.id}
                    expert={expert}
                />
            ))}
        </div>
    );
}