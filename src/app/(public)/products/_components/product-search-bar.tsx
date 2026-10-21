"use client";
import React, { useEffect, useRef, useState } from "react";
import { SearchIcon } from "lucide-react";
import {
    usePathname,
    useRouter,
    useSearchParams,
} from "next/navigation";

import { Input } from "@/components/ui/input";

const ProductSearchBar = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const debouncedReference = useRef<ReturnType<typeof setTimeout> | null>(
        null,
    );

    const [searchTerm, setSearchTerm] = useState(
        searchParams.get("searchTerm") ?? "",
    );

    // Sync input with URL
    useEffect(() => {
        setSearchTerm(searchParams.get("searchTerm") ?? "");
    }, [searchParams]);

    const handleChange = (value: string) => {
        setSearchTerm(value);

        if (debouncedReference.current) {
            clearTimeout(debouncedReference.current);
        }

        debouncedReference.current = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());

            if (value.trim()) {
                params.set("searchTerm", value.trim());
            } else {
                params.delete("searchTerm");
            }

            // Search করলে প্রথম page-এ ফিরে যাবে
            params.set("page", "1");

            router.replace(`${pathname}?${params.toString()}`);
        }, 500);
    };

    // Cleanup debounce timer
    useEffect(() => {
        return () => {
            if (debouncedReference.current) {
                clearTimeout(debouncedReference.current);
            }
        };
    }, []);

    return (
        <div className="relative flex w-full max-w-[400px] items-center">
            <SearchIcon
                className="
                    pointer-events-none absolute left-3 top-1/2
                    h-5 w-5 -translate-y-1/2
                    text-slate-400
                    transition-colors duration-200
                    dark:text-slate-500
                "
                aria-hidden="true"
            />

            <Input
                type="search"
                value={searchTerm}
                onChange={(event) => handleChange(event.target.value)}
                placeholder="Search Product..."
                aria-label="Search products"
                className="
                    h-12 w-full rounded-xl pl-10 pr-4
                    border border-slate-200
                    bg-white text-slate-900
                    placeholder:text-slate-400
                    shadow-sm
                    transition-all duration-200
                    hover:border-green-300
                    focus-visible:border-green-500
                    focus-visible:ring-2
                    focus-visible:ring-green-500/20
                    focus-visible:ring-offset-0
                    dark:border-slate-700
                    dark:bg-slate-900
                    dark:text-slate-100
                    dark:placeholder:text-slate-500
                    dark:hover:border-green-700
                    dark:focus-visible:border-green-500
                    dark:focus-visible:ring-green-500/20
                "
            />
        </div>
    );
};

export default ProductSearchBar;