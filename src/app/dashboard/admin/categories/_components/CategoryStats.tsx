import {
    FolderTree,
    FileCheck2,
    Layers3,
} from "lucide-react";

import StatCard from "@/components/dashboard/StatCard";

interface CategoryStatsProps {
    total: number;
    currentPage: number;
    totalPages: number;
}

export default function CategoryStats({
  total,
  currentPage,
  totalPages,
}: CategoryStatsProps) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <StatCard
                title="Total Categories"
                value={total}
                icon={FolderTree}
                description="All categories"
            />
            <StatCard
                title="Current Page"
                value={currentPage}
                icon={FileCheck2}
                description={`of ${totalPages} pages`}
            />
            <StatCard
                title="Total Pages"
                value={totalPages}
                icon={Layers3}
                description="Available pages"
            />
        </div>
    );
}