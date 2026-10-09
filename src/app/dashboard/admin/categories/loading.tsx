function Skeleton({
    className = "",
}: {
    className?: string;
}) {
    return (
        <div
            className={`animate-pulse rounded-lg bg-slate-200 ${className}`}
        />
    );
}

export default function CategoriesLoading() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                    <Skeleton className="h-11 w-11 rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-7 w-40" />
                        <Skeleton className="h-4 w-64" />
                    </div>
                </div>
                <Skeleton className="h-10 w-36" />
            </div>
            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({
                    length: 3,
                }).map((_, index) => (
                    <div
                        key={index}
                        className="rounded-xl border border-slate-200 bg-white p-5"
                    >
                        <div className="flex items-center justify-between">
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-28" />
                                <Skeleton className="h-8 w-16" />
                            </div>

                            <Skeleton className="h-10 w-10 rounded-lg" />
                        </div>
                    </div>
                ))}
            </div>
            {/* Search */}
            <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex flex-col gap-3 sm:flex-row">
                    <Skeleton className="h-11 flex-1" />
                    <Skeleton className="h-11 w-28" />
                </div>
            </div>
            {/* Table */}
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="border-b border-slate-200 p-5">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="mt-2 h-3 w-48" />
                </div>
                <div className="space-y-0">
                    {Array.from({
                        length: 7,
                    }).map((_, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 border-b border-slate-100 px-5 py-4"
                        >
                            <Skeleton className="h-11 w-11 shrink-0 rounded-lg" />
                            <Skeleton className="h-5 w-40" />
                            <Skeleton className="hidden h-4 flex-1 sm:block" />
                            <Skeleton className="h-6 w-16" />
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-9 w-9" />
                        </div>
                    ))}
                </div>
            </div>
            {/* Pagination */}
            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-9 w-64" />
            </div>
        </div>
    );
}