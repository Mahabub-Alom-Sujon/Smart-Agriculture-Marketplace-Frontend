import type {
    Expert,
    ExpertMeta,
} from "@/types/types.expert";

import ExpertsHero from "./ExpertsHero";
import ExpertStats from "./ExpertStats";
import ExpertSearch from "./ExpertSearch";
import ExpertsGrid from "./ExpertsGrid";
import ExpertPagination from "./ExpertPagination";

interface ExpertsPageProps {
    experts: Expert[];
    meta: ExpertMeta;
    searchTerm: string;
}

export default function ExpertsPage({
                                        experts,
                                        meta,
                                        searchTerm,
                                    }: ExpertsPageProps) {
    return (
        <>
            <ExpertsHero />

            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <ExpertStats
                    total={meta.total}
                    currentPage={meta.page}
                    totalPages={meta.totalPage}
                />

                {/* Search */}
                <div className="mt-10">
                    <ExpertSearch
                        initialSearchTerm={searchTerm}
                    />
                </div>

                {/* Experts */}
                <div className="mt-10" id="experts">
                    <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                        <div>
                            <p className="text-sm font-semibold text-green-600">
                                EXPERT COMMUNITY
                            </p>

                            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                                Meet Our Agricultural Experts
                            </h2>

                            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                                Connect with experienced
                                agricultural professionals for
                                trusted farming guidance.
                            </p>
                        </div>

                        <p className="text-sm text-slate-400">
                            {meta.total}{" "}
                            {meta.total === 1
                                ? "expert"
                                : "experts"}{" "}
                            found
                        </p>
                    </div>

                    <ExpertsGrid experts={experts} />

                    {/* Pagination */}
                    {meta.totalPage > 1 && (
                        <div className="mt-10">
                            <ExpertPagination
                                currentPage={meta.page}
                                totalPages={meta.totalPage}
                                searchTerm={searchTerm}
                            />
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}