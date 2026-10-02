"use client";

import React, { useEffect, useRef, useState } from "react";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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

    useEffect(() => {
        return () => {
            if (debouncedReference.current) {
                clearTimeout(debouncedReference.current);
            }
        };
    }, []);

    return (
        <div className="relative flex w-full max-w-[400px] items-center">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

            <Input
                value={searchTerm}
                onChange={(event) => handleChange(event.target.value)}
                placeholder="Search Product..."
                className="h-12 w-full pl-10"
            />
        </div>
    );
};

export default ProductSearchBar;