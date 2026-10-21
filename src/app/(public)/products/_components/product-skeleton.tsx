import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
export function ProductSkeleton() {
    return (
        <Card
            className="
                group overflow-hidden p-0
                border border-slate-200 bg-white
                transition-colors duration-300
                dark:border-slate-800 dark:bg-slate-900
            "
        >
            {/* Image Skeleton */}
            <div
                className="
                    relative h-52 w-full overflow-hidden
                    bg-slate-100
                    dark:bg-slate-800
                "
            >
                <Skeleton
                    className="
                        h-full w-full rounded-none
                        bg-slate-200
                        dark:bg-slate-700
                    "
                />

                {/* Category Badge */}
                <div className="absolute left-3 top-3">
                    <Skeleton
                        className="
                            h-6 w-20 rounded-full
                            bg-slate-300
                            dark:bg-slate-600
                        "
                    />
                </div>

                {/* Wishlist Button */}
                <div className="absolute right-3 top-3">
                    <Skeleton
                        className="
                            h-9 w-9 rounded-full
                            bg-slate-300
                            dark:bg-slate-600
                        "
                    />
                </div>
            </div>

            {/* Content */}
            <CardContent className="p-4">
                {/* Review */}
                <div className="flex items-center gap-1.5">
                    <Skeleton className="h-4 w-4 rounded-full bg-slate-200 dark:bg-slate-700" />
                    <Skeleton className="h-3 w-8 bg-slate-200 dark:bg-slate-700" />
                    <Skeleton className="h-3 w-2 bg-slate-200 dark:bg-slate-700" />
                    <Skeleton className="h-3 w-20 bg-slate-200 dark:bg-slate-700" />
                </div>

                {/* Product Title */}
                <Skeleton
                    className="
                        mt-2 h-5 w-3/4
                        bg-slate-200
                        dark:bg-slate-700
                    "
                />

                {/* Description */}
                <div className="mt-2 space-y-1">
                    <Skeleton className="h-3 w-full bg-slate-200 dark:bg-slate-700" />
                    <Skeleton className="h-3 w-4/5 bg-slate-200 dark:bg-slate-700" />
                </div>

                {/* Farmer */}
                <div
                    className="
                        mt-4 flex items-center gap-2
                        border-t border-slate-100 pt-3
                        dark:border-slate-800
                    "
                >
                    <Skeleton className="h-6 w-6 rounded-full bg-slate-200 dark:bg-slate-700" />

                    <div className="flex-1 space-y-1">
                        <Skeleton className="h-3 w-28 bg-slate-200 dark:bg-slate-700" />
                    </div>
                </div>

                {/* Footer */}
                <div
                    className="
                        mt-4 flex items-center justify-between
                        border-t border-slate-100 pt-3
                        dark:border-slate-800
                    "
                >
                    <div className="space-y-1">
                        <Skeleton className="h-6 w-20 bg-slate-200 dark:bg-slate-700" />
                        <Skeleton className="h-3 w-12 bg-slate-200 dark:bg-slate-700" />
                    </div>

                    <Skeleton
                        className="
                            h-9 w-16 rounded-md
                            bg-slate-200
                            dark:bg-slate-700
                        "
                    />
                </div>
            </CardContent>
        </Card>
    );
}