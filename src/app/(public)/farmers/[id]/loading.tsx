export default function FarmerDetailsLoading() {
    return (
        <main className="min-h-screen bg-slate-50 transition-colors duration-300 dark:bg-slate-950">
            {/* Profile Header Skeleton */}
            <section className="border-b border-slate-200 bg-white transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="h-5 w-32 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
                    <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
                        {/* Avatar Skeleton */}
                        <div className="h-24 w-24 animate-pulse rounded-3xl bg-slate-200 dark:bg-slate-700" />
                        {/* Farmer Information Skeleton */}
                        <div className="space-y-3">
                            <div className="h-8 w-56 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
                            <div className="h-4 w-72 max-w-full animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Stats and Farm Cards Skeleton */}
            <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {/* Stats Skeleton */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div
                            key={index}
                            className="h-28 animate-pulse rounded-2xl border border-slate-200 bg-white transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900"
                        />
                    ))}
                </div>

                {/* Farm Cards Skeleton */}
                <div className="mt-10 grid gap-5 md:grid-cols-2">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div
                            key={index}
                            className="h-64 animate-pulse rounded-2xl border border-slate-200 bg-white transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900"
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}