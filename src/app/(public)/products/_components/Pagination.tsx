// import Link from "next/link";
// import { getProductsAction } from "@/app/(public)/products/_actions/productAction";
//
// interface PaginationProps {
//     searchParams?: Promise<{
//         [key: string]: string | string[] | undefined;
//     }>;
// }
// export default async function Pagination({
//      searchParams,
// }: PaginationProps) {
//     const rawParams = await searchParams;
//     const params = rawParams ?? {};
//     const page = Number(params.page) || 1;
//     // Send query parameters to API
//     const result = await getProductsAction({
//         query: params,
//     });
//     const meta = result?.meta;
//     if (!result?.success || !meta) {
//         return null;
//     }
//     const totalPages = meta.totalPage || 1;
//     // Convert search params to Link query format
//     const cleanParams = Object.entries(params).reduce(
//         (acc, [key, value]) => {
//             if (value !== undefined) {
//                 acc[key] = Array.isArray(value)
//                     ? value.join(",")
//                     : value;
//             }
//
//             return acc;
//         },
//         {} as Record<string, string>,
//     );
//     return (
//         <>
//             <div className="mb-10 flex items-center justify-center gap-2">
//                 {/* Previous */}
//                 <Link
//                     href={{
//                         pathname: "/products",
//                         query: {
//                             ...cleanParams,
//                             page: String(Math.max(page - 1, 1)),
//                         },
//                     }}
//                     className={`rounded-md border px-4 py-2 text-sm transition ${
//                         page === 1
//                             ? "pointer-events-none bg-slate-50 text-slate-400 opacity-50"
//                             : "text-slate-700 hover:bg-muted"
//                     }`}
//                 >
//                     Previous
//                 </Link>
//
//                 {/* Page Numbers */}
//                 {Array.from(
//                     { length: totalPages },
//                     (_, index) => index + 1,
//                 ).map((p) => (
//                     <Link
//                         key={p}
//                         href={{
//                             pathname: "/products",
//                             query: {
//                                 ...cleanParams,
//                                 page: String(p),
//                             },
//                         }}
//                         className={`rounded-md border px-4 py-2 text-sm font-medium transition ${
//                             page === p
//                                 ? "pointer-events-none border-green-600 bg-green-600 text-white"
//                                 : "text-slate-700 hover:border-green-600 hover:bg-green-50 hover:text-green-700"
//                         }`}
//                     >
//                         {p}
//                     </Link>
//                 ))}
//
//                 {/* Next */}
//                 <Link
//                     href={{
//                         pathname: "/products",
//                         query: {
//                             ...cleanParams,
//                             page: String(
//                                 Math.min(page + 1, totalPages),
//                             ),
//                         },
//                     }}
//                     className={`rounded-md border px-4 py-2 text-sm transition ${
//                         page === totalPages
//                             ? "pointer-events-none bg-slate-100 text-slate-400 opacity-50"
//                             : "text-slate-700 hover:bg-muted"
//                     }`}
//                 >
//                     Next
//                 </Link>
//             </div>
//         </>
//     );
// }

import Link from "next/link";
import { getProductsAction } from "@/app/(public)/products/_actions/productAction";
interface PaginationProps {
    searchParams?: Promise<{
        [key: string]: string | string[] | undefined;
    }>;
}

export default async function Pagination({
    searchParams,
}: PaginationProps) {
    const rawParams = await searchParams;
    const params = rawParams ?? {};
    const page = Number(params.page) || 1;
    // Send query parameters to API
    const result = await getProductsAction({
        query: params,
    });
    const meta = result?.meta;

    if (!result?.success || !meta) {
        return null;
    }
    const totalPages = meta.totalPage || 1;
    // Convert search params to Link query format
    const cleanParams = Object.entries(params).reduce(
        (acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = Array.isArray(value)
                    ? value.join(",")
                    : value;
            }

            return acc;
        },
        {} as Record<string, string>,
    );

    // Previous button styles
    const previousClassName = `
        rounded-lg border border-slate-200
        bg-white px-4 py-2 text-sm font-medium
        text-slate-700 shadow-sm transition-colors duration-200
        hover:border-green-500 hover:bg-green-50 hover:text-green-700
        dark:border-slate-700 dark:bg-slate-900
        dark:text-slate-300 dark:hover:border-green-500
        dark:hover:bg-green-950 dark:hover:text-green-400
    `;

    // Next button styles
    const nextClassName = `
        rounded-lg border border-slate-200
        bg-white px-4 py-2 text-sm font-medium
        text-slate-700 shadow-sm transition-colors duration-200
        hover:border-green-500 hover:bg-green-50 hover:text-green-700
        dark:border-slate-700 dark:bg-slate-900
        dark:text-slate-300 dark:hover:border-green-500
        dark:hover:bg-green-950 dark:hover:text-green-400
    `;

    // Disabled button styles
    const disabledClassName = `
        pointer-events-none cursor-not-allowed
        border-slate-200 bg-slate-100 text-slate-400 opacity-60
        dark:border-slate-800 dark:bg-slate-900
        dark:text-slate-600 dark:opacity-50
    `;

    return (
        <nav
            aria-label="Product pagination"
            className="mb-10 flex flex-wrap items-center justify-center gap-2"
        >
            {/* Previous */}
            <Link
                aria-label="Previous page"
                aria-disabled={page <= 1}
                href={{
                    pathname: "/products",
                    query: {
                        ...cleanParams,
                        page: String(Math.max(page - 1, 1)),
                    },
                }}
                className={`
                    ${previousClassName}
                    ${page <= 1 ? disabledClassName : ""}
                `}
            >
                Previous
            </Link>

            {/* Page Numbers */}
            {Array.from(
                { length: totalPages },
                (_, index) => index + 1,
            ).map((p) => (
                <Link
                    key={p}
                    aria-label={`Page ${p}`}
                    aria-current={page === p ? "page" : undefined}
                    href={{
                        pathname: "/products",
                        query: {
                            ...cleanParams,
                            page: String(p),
                        },
                    }}
                    className={`rounded-lg border px-4 py-2 text-sm font-medium shadow-sm transition-colors duration-200
                    ${
                        page === p
                            ? "pointer-events-none border-green-600 bg-green-600 text-white dark:border-green-500 dark:bg-green-600 dark:text-white"
                            : "border-slate-200 bg-white text-slate-700 hover:border-green-500 hover:bg-green-50 hover:text-green-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-green-500 dark:hover:bg-green-950 dark:hover:text-green-400"
                    }
                `}
                >
                    {p}
                </Link>
            ))}

            {/* Next */}
            <Link
                aria-label="Next page"
                aria-disabled={page >= totalPages}
                href={{
                    pathname: "/products",
                    query: {
                        ...cleanParams,
                        page: String(
                            Math.min(page + 1, totalPages),
                        ),
                    },
                }}
                className={`
                    ${nextClassName}
                    ${page >= totalPages ? disabledClassName : ""}
                `}
            >
                Next
            </Link>
        </nav>
    );
}