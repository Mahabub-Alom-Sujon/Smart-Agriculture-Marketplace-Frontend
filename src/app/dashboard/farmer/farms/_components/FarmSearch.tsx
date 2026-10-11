"use client";
import { Search } from "lucide-react";
import {
    useRouter,
    useSearchParams,
} from "next/navigation";
import {
    useEffect,
    useState,
} from "react";
import type {
    FormEvent,
    ChangeEvent,
} from "react";

interface FarmSearchProps {
    initialSearchTerm: string;
}

export default function FarmSearch({
    initialSearchTerm,
}: FarmSearchProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [searchTerm, setSearchTerm] = useState(
        initialSearchTerm,
    );

    useEffect(() => {
        setSearchTerm(initialSearchTerm);
    }, [initialSearchTerm]);

    const updateSearchUrl = (value: string): void => {
        const params = new URLSearchParams(
            searchParams.toString(),
        );

        const trimmedValue = value.trim();

        if (trimmedValue) {
            params.set("searchTerm", trimmedValue);
        } else {
            params.delete("searchTerm");
        }

        // Reset pagination when search changes.
        params.set("page", "1");

        const query = params.toString();

        router.push(
            query ? `/dashboard/farmer/farms?${query}` : "/dashboard/farmer/farms",
        );
    };

    const handleSubmit = (
        event: FormEvent<HTMLFormElement>,
    ): void => {
        event.preventDefault();
        updateSearchUrl(searchTerm);
    };

    const handleChange = (
        event: ChangeEvent<HTMLInputElement>,
    ): void => {
        const value = event.target.value;

        setSearchTerm(value);

        // Clear search from URL when input becomes empty.
        if (
            !value.trim() &&
            searchParams.has("searchTerm")
        ) {
            updateSearchUrl("");
        }
    };

    return (
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 sm:flex-row"
            >
                <div className="relative flex-1">
                    <Search
                        aria-hidden="true"
                        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                    />

                    <input
                        type="search"
                        value={searchTerm}
                        onChange={handleChange}
                        placeholder="Search farms by name, location, or soil type..."
                        aria-label="Search farms"
                        className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
                    />
                </div>

                <button
                    type="submit"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-green-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500/20"
                >
                    <Search
                        aria-hidden="true"
                        className="h-4 w-4"
                    />
                    Search
                </button>
            </form>

            {initialSearchTerm && (
                <p className="mt-3 text-xs text-slate-500">
                    Showing results for{" "}
                    <span className="font-semibold text-green-700">
                        &quot;{initialSearchTerm}&quot;
                    </span>
                </p>
            )}
        </div>
    );
}