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
    return (
        <>
            <div className="mb-10 flex items-center justify-center gap-2">
                {/* Previous */}
                <Link
                    href={{
                        pathname: "/products",
                        query: {
                            ...cleanParams,
                            page: String(Math.max(page - 1, 1)),
                        },
                    }}
                    className={`rounded-md border px-4 py-2 text-sm transition ${
                        page === 1
                            ? "pointer-events-none bg-slate-50 text-slate-400 opacity-50"
                            : "text-slate-700 hover:bg-muted"
                    }`}
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
                        href={{
                            pathname: "/products",
                            query: {
                                ...cleanParams,
                                page: String(p),
                            },
                        }}
                        className={`rounded-md border px-4 py-2 text-sm font-medium transition ${
                            page === p
                                ? "pointer-events-none border-green-600 bg-green-600 text-white"
                                : "text-slate-700 hover:border-green-600 hover:bg-green-50 hover:text-green-700"
                        }`}
                    >
                        {p}
                    </Link>
                ))}

                {/* Next */}
                <Link
                    href={{
                        pathname: "/products",
                        query: {
                            ...cleanParams,
                            page: String(
                                Math.min(page + 1, totalPages),
                            ),
                        },
                    }}
                    className={`rounded-md border px-4 py-2 text-sm transition ${
                        page === totalPages
                            ? "pointer-events-none bg-slate-100 text-slate-400 opacity-50"
                            : "text-slate-700 hover:bg-muted"
                    }`}
                >
                    Next
                </Link>
            </div>
        </>
    );
}