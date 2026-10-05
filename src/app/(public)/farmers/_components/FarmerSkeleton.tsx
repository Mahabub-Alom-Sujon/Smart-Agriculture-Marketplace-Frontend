export default function FarmerSkeleton() {
    return (
        <div className="overflow-hidden rounded-2xl border bg-white">
            <div className="h-28 animate-pulse bg-gray-200" />
            <div className="p-6">
                <div className="-mt-14 mb-5 h-20 w-20 animate-pulse rounded-2xl bg-gray-300" />
                <div className="h-5 w-36 animate-pulse rounded bg-gray-200" />
                <div className="mt-3 h-4 w-48 animate-pulse rounded bg-gray-200" />
                <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="h-20 animate-pulse rounded-xl bg-gray-100" />
                    <div className="h-20 animate-pulse rounded-xl bg-gray-100" />
                </div>
                <div className="mt-5 h-4 w-40 animate-pulse rounded bg-gray-200" />
                <div className="mt-5 h-11 animate-pulse rounded-xl bg-gray-200" />
            </div>
        </div>
    );
}