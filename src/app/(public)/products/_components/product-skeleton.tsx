import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProductSkeleton() {
    return (
        <Card className="group overflow-hidden border-slate-200 bg-white p-0">
            {/* Image Skeleton */}
            <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <Skeleton className="h-full w-full rounded-none" />
                {/* Category Badge */}
                <div className="absolute left-3 top-3">
                    <Skeleton className="h-6 w-20 rounded-full" />
                </div>
                {/* Wishlist Button */}
                <div className="absolute right-3 top-3">
                    <Skeleton className="h-9 w-9 rounded-full" />
                </div>
            </div>
            {/* Content */}
            <CardContent className="p-4">
                {/* Review */}
                <div className="flex items-center gap-1.5">
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-3 w-8" />
                    <Skeleton className="h-3 w-2" />
                    <Skeleton className="h-3 w-20" />
                </div>
                {/* Product Title */}
                <Skeleton className="mt-2 h-5 w-3/4" />
                {/* Description */}
                <div className="mt-2 space-y-1">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-4/5" />
                </div>
                {/* Farmer */}
                <div className="mt-4 flex items-center gap-2 border-t border-slate-50 pt-3">
                    <Skeleton className="h-6 w-6 rounded-full" />
                    <div className="flex-1 space-y-1">
                        <Skeleton className="h-3 w-28" />
                    </div>
                </div>
                {/* Footer */}
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                    <div className="space-y-1">
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-3 w-12" />
                    </div>
                    <Skeleton className="h-9 w-16 rounded-md" />
                </div>
            </CardContent>
        </Card>
    );
}