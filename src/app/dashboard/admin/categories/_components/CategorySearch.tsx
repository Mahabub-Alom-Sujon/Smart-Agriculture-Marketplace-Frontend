// "use client";
// import { Search } from "lucide-react";
// import {
//     useRouter,
//     useSearchParams,
// } from "next/navigation";
// import {
//     useEffect,
//     useState,
// } from "react";
// import type { FormEvent } from "react";
//
// interface CategorySearchProps {
//     initialSearchTerm: string;
// }
// export default function CategorySearch({
//     initialSearchTerm,
// }: CategorySearchProps) {
//     const router = useRouter();
//     const searchParams = useSearchParams();
//     const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
//     useEffect(() => {
//         setSearchTerm(initialSearchTerm);
//     }, [initialSearchTerm]);
//     const handleSubmit = (
//         event: FormEvent<HTMLFormElement>
//     ) => {
//         event.preventDefault();
//         const params = new URLSearchParams(
//             searchParams.toString()
//         );
//         const value = searchTerm.trim();
//         if (value) {
//             params.set("searchTerm", value);
//         } else {
//             params.delete("searchTerm");
//         }
//         params.set("page", "1");
//         const query = params.toString();
//         router.push( query ? `/dashboard/admin/categories?${query}` : "/dashboard/admin/categories" );
//     };
//
//     const handleChange = (
//         event: React.ChangeEvent<HTMLInputElement>
//     ) => {
//         const value = event.target.value;
//         setSearchTerm(value);
//         // Input empty হলে URL থেকেও searchTerm remove হবে
//         if (!value.trim()) {
//             const params = new URLSearchParams(
//                 searchParams.toString()
//             );
//             params.delete("searchTerm");
//             params.set("page", "1");
//             const query = params.toString();
//             router.push( query ? `/dashboard/admin/categories?${query}` : "/dashboard/admin/categories" );
//         }
//     };
//
//     return (
//         <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//             <form
//                 onSubmit={handleSubmit}
//                 className="flex flex-col gap-3 sm:flex-row"
//             >
//                 <div className="relative flex-1">
//                     <Search
//                         className="
//                             pointer-events-none
//                             absolute left-4 top-1/2
//                             h-5 w-5
//                             -translate-y-1/2
//                             text-slate-400
//                         "
//                     />
//
//                     <input
//                         type="search"
//                         value={searchTerm}
//                         onChange={handleChange}
//                         placeholder="Search categories..."
//                         className="
//                             h-11 w-full rounded-lg
//                             border border-slate-200
//                             bg-slate-50
//                             pl-12 pr-10
//                             text-sm text-slate-900
//                             outline-none
//                             transition-all
//                             placeholder:text-slate-400
//                             focus:border-emerald-500
//                             focus:bg-white
//                             focus:ring-4
//                             focus:ring-emerald-500/10
//                             [&::-webkit-search-cancel-button]:hidden
//                             [&::-webkit-search-decoration]:hidden
//                         "
//                     />
//                 </div>
//
//                 <button
//                     type="submit"
//                     className="
//                         inline-flex h-11
//                         items-center justify-center
//                         gap-2 rounded-lg
//                         bg-green-600 px-6
//                         text-sm font-semibold
//                         text-white
//                         transition-colors
//                         hover:bg-green-700
//                     "
//                 >
//                     <Search className="h-4 w-4" />
//                     Search
//                 </button>
//             </form>
//
//             {initialSearchTerm && (
//                 <p className="mt-3 text-xs text-slate-500">
//                     Showing results for{" "}
//                     <span className="font-semibold text-green-700">
//                         "{initialSearchTerm}"
//                     </span>
//                 </p>
//             )}
//         </div>
//     );
// }

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
import type { FormEvent, ChangeEvent } from "react";
interface CategorySearchProps {
    initialSearchTerm: string;
}
export default function CategorySearch({
    initialSearchTerm,
}: CategorySearchProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(
        initialSearchTerm
    );
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
        params.set("page", "1");
        const query = params.toString();
        router.push( query ? `/dashboard/admin/categories?${query}` : "/dashboard/admin/categories");
    };

    const handleChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        const value = event.target.value;
        setSearchTerm(value);
        // Remove searchTerm from URL when input becomes empty.
        if (!value.trim()) {
            const params = new URLSearchParams(
                searchParams.toString()
            );
            params.delete("searchTerm");
            params.set("page", "1");
            const query = params.toString();
            router.push( query ? `/dashboard/admin/categories?${query}` : "/dashboard/admin/categories");
        }
    };

    return (
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-colors duration-200 dark:border-slate-700 dark:bg-slate-900">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 sm:flex-row"
            >
                {/* Search Input */}
                <div className="relative flex-1">
                    <Search
                        className="
                            pointer-events-none
                            absolute left-4 top-1/2
                            h-5 w-5
                            -translate-y-1/2
                            text-slate-400
                            dark:text-slate-500
                        "
                    />

                    <input
                        type="search"
                        value={searchTerm}
                        onChange={handleChange}
                        placeholder="Search categories..."
                        aria-label="Search categories"
                        className="
                            h-11 w-full rounded-lg
                            border border-slate-200
                            bg-slate-50
                            pl-12 pr-4
                            text-sm text-slate-900
                            outline-none
                            transition-all duration-200
                            placeholder:text-slate-400
                            focus:border-emerald-500
                            focus:bg-white
                            focus:ring-4
                            focus:ring-emerald-500/10
                            dark:border-slate-700
                            dark:bg-slate-800
                            dark:text-slate-100
                            dark:placeholder:text-slate-500
                            dark:focus:border-emerald-500
                            dark:focus:bg-slate-800
                            dark:focus:ring-emerald-500/20
                            [&::-webkit-search-cancel-button]:hidden
                            [&::-webkit-search-decoration]:hidden
                        "
                    />
                </div>

                {/* Search Button */}
                <button
                    type="submit"
                    className="
                        inline-flex h-11
                        items-center justify-center
                        gap-2 rounded-lg
                        bg-green-600 px-6
                        text-sm font-semibold
                        text-white
                        transition-colors duration-200
                        hover:bg-green-700
                        focus-visible:outline-none
                        focus-visible:ring-4
                        focus-visible:ring-green-500/30
                        dark:bg-green-500
                        dark:hover:bg-green-600
                    "
                >
                    <Search className="h-4 w-4" />
                    Search
                </button>
            </form>

            {/* Search Result Information */}
            {initialSearchTerm && (
                <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                    Showing results for{" "}
                    <span className="font-semibold text-green-700 dark:text-green-400">
                        "{initialSearchTerm}"
                    </span>
                </p>
            )}
        </div>
    );
}