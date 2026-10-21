export default function FarmerSkeleton() {
    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
            {/* Header Skeleton */}
            <div className="h-28 animate-pulse bg-gray-200 dark:bg-slate-800" />

            <div className="p-6">
                {/* Profile Skeleton */}
                <div className="-mt-14 mb-5 h-20 w-20 animate-pulse rounded-2xl bg-gray-300 ring-4 ring-white dark:bg-slate-700 dark:ring-slate-900" />

                {/* Name Skeleton */}
                <div className="h-5 w-36 animate-pulse rounded bg-gray-200 dark:bg-slate-700" />

                {/* Email Skeleton */}
                <div className="mt-3 h-4 w-48 animate-pulse rounded bg-gray-200 dark:bg-slate-700" />

                {/* Stats Skeleton */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="h-20 animate-pulse rounded-xl bg-gray-100 dark:bg-slate-800" />

                    <div className="h-20 animate-pulse rounded-xl bg-gray-100 dark:bg-slate-800" />
                </div>

                {/* Farm Details Skeleton */}
                <div className="mt-5 h-4 w-40 animate-pulse rounded bg-gray-200 dark:bg-slate-700" />

                {/* Button Skeleton */}
                <div className="mt-5 h-11 animate-pulse rounded-xl bg-gray-200 dark:bg-slate-700" />
            </div>
        </div>
    );
}