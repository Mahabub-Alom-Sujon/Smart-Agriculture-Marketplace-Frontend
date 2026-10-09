"use client";
import { Search, X } from "lucide-react";
import type { ChangeEvent } from "react";
interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
}
export default function SearchInput({
    value,
    onChange,
    placeholder = "Search...",
    className = "",
    disabled = false,
}: SearchInputProps) {
    const handleChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        onChange(event.target.value);
    };
    const handleClear = () => {
        onChange("");
    };

    return (
        <div
            className={`relative w-full max-w-md ${className}`}
        >
            <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
                type="search"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                disabled={disabled}
                className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-11 pr-10 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 disabled:cursor-not-allowed disabled:opacity-60"
            />
            {value && (
                <button
                    type="button"
                    onClick={handleClear}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 transition hover:bg-slate-200 hover:text-slate-700"
                >
                    <X size={17} />
                </button>
            )}
        </div>
    );
}