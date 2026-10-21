import { getProductsAction } from "@/app/(public)/products/_actions/productAction";
import type { Product } from "@/types/types.product";
import { ProductCard } from "@/app/(public)/products/_components/product-card";
interface ProductListProps {
    searchParams?: Promise<{
        [key: string]: string | string[] | undefined;
    }>;
}
const ProductList = async ({
    searchParams,
}: ProductListProps) => {
    const query = await searchParams;
    const result = await getProductsAction({
        query,
    });
    const products: Product[] = result?.data ?? [];
    return (
        <section className="w-full text-slate-900 transition-colors duration-300 dark:text-slate-100">
            {result.success && products.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 dark:bg-green-950">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-green-600 dark:text-green-400"
                            aria-hidden="true"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.35-4.35" />
                            <path d="M8 11h6" />
                        </svg>
                    </div>

                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                        No Products Found
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
                        We couldn't find any products matching your
                        current filters. Try changing your search
                        or resetting the filters.
                    </p>
                </div>
            )}
        </section>
    );
};

export default ProductList;