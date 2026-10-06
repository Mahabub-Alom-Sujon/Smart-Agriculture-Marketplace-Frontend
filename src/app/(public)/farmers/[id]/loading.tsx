export default function FarmerDetailsLoading() {
    return (
        <main className="min-h-screen bg-slate-50">
            <section className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="h-5 w-32 animate-pulse rounded bg-slate-200" />

                    <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
                        <div className="h-24 w-24 animate-pulse rounded-3xl bg-slate-200" />

                        <div className="space-y-3">
                            <div className="h-8 w-56 animate-pulse rounded bg-slate-200" />
                            <div className="h-4 w-72 animate-pulse rounded bg-slate-200" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div
                            key={index}
                            className="h-28 animate-pulse rounded-2xl bg-white"
                        />
                    ))}
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div
                            key={index}
                            className="h-64 animate-pulse rounded-2xl bg-white"
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}