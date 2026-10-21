"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
interface FarmerSearchProps {
    value: string;
    onChange: (value: string) => void;
}
export default function FarmerSearch({
    value,
    onChange,
}: FarmerSearchProps) {
    return (
        <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-slate-500" />

            <Input
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder="Search farmers..."
                className="h-11 rounded-xl border-gray-200 bg-white pl-10 pr-4 text-gray-900 placeholder:text-gray-400 transition-colors duration-300 focus-visible:ring-green-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus-visible:ring-green-400"
            />
        </div>
    );
}