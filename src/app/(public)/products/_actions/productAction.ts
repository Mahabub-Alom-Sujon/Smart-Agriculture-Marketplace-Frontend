"use server";
export interface GetProductsQuery {
    [key: string]: string | string[] | undefined;
}
export const getProductsAction = async ({
    query,
}: {
    query?: GetProductsQuery;
} = {}) => {
    const params = new URLSearchParams();
    if (query) {
        Object.entries(query).forEach(([key, value]) => {
            if (value === undefined || value === "") return;

            if (Array.isArray(value)) {
                value.forEach((v) => {
                    if (v) {
                        params.append(key, v);
                    }
                });
            } else {
                params.set(key, value);
            }
        });
    }
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
        throw new Error("NEXT_PUBLIC_API_URL is not configured");
    }
    const url = `${apiUrl}/api/v1/products${ params.toString() ? `?${params.toString()}` : "" }`;
    const res = await fetch(url, {
        next: {
            revalidate: 60 * 60 * 6,
            tags: ["products"],
        },
    });
    if (!res.ok) {
        throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`,);
    }
    return res.json();
};

