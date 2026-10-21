"use client";
import { FormEvent, useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
interface ExpertSearchProps {
    initialSearchTerm: string;
}
export default function ExpertSearch({
    initialSearchTerm,
}: ExpertSearchProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

    useEffect(() => {
        setSearchTerm(initialSearchTerm);
    }, [initialSearchTerm]);

    const handleSubmit = (
        event: FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        const params = new URLSearchParams(
            searchParams.toString()
        );

        const value = searchTerm.trim();

        if (value) {
            params.set("searchTerm", value);
        } else {
            params.delete("searchTerm");
        }

        // Search always starts from page 1
        params.set("page", "1");

        const query = params.toString();

        router.push(
            query ? `/experts?${query}` : "/experts"
        );
    };

    const handleClear = () => {
        setSearchTerm("");

        const params = new URLSearchParams(
            searchParams.toString()
        );

        params.delete("searchTerm");
        params.set("page", "1");

        const query = params.toString();

        router.push(
            query ? `/experts?${query}` : "/experts"
        );
    };

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-colors duration-300 sm:p-5 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/10">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 sm:flex-row"
            >
                {/* Search Input */}
                <div className="relative flex-1">
                    <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 dark:text-slate-500" />

                    <input
                        type="search"
                        value={searchTerm}
                        onChange={(event) =>
                            setSearchTerm(event.target.value)
                        }
                        placeholder="Search experts by name, specialization, city..."
                        className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-11 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-emerald-500 dark:focus:bg-slate-800 dark:focus:ring-emerald-500/10"
                        aria-label="Search agricultural experts"
                    />

                    {/* Clear Button */}
                    {searchTerm && (
                        <button
                            type="button"
                            onClick={handleClear}
                            className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 dark:text-slate-500 dark:hover:bg-slate-700 dark:hover:text-slate-200"
                            aria-label="Clear search"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    )}
                </div>

                {/* Search Button */}
                <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-green-600 px-6 text-sm font-semibold text-white transition-all duration-200 hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 dark:bg-emerald-600 dark:hover:bg-emerald-500 dark:focus-visible:ring-offset-slate-900"
                >
                    <Search className="h-4 w-4" />
                    Search Experts
                </button>
            </form>

            {/* Search Results Message */}
            {initialSearchTerm && (
                <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                    Showing results for{" "}
                    <span className="font-semibold text-green-700 dark:text-emerald-400">
                        &quot;{initialSearchTerm}&quot;
                    </span>
                </p>
            )}
        </div>
    );
}