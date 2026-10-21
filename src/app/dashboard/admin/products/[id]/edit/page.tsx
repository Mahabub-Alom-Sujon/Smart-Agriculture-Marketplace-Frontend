import { notFound } from "next/navigation";
import UpdateProductForm from "@/app/dashboard/admin/products/_components/UpdateProductForm";
import { getProductById } from "@/app/dashboard/admin/products/_actions/getProductById";
import { getAllCategory } from "@/app/dashboard/admin/products/_actions/getAllCategory";
import { getAllFarmers } from "@/app/dashboard/admin/products/_actions/getAllFarmer";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

const Page = async ({ params }: PageProps) => {
    const { id } = await params;

    const [productResult, categoriesResult, farmersResult] =
        await Promise.all([
            getProductById(id),
            getAllCategory(),
            getAllFarmers(),
        ]);

    const product = productResult?.data;
    const categories = categoriesResult?.data ?? [];
    const farmers = farmersResult?.data ?? [];

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-8 transition-colors duration-300 dark:bg-slate-950 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-5xl space-y-8">
                {/* Page Header */}
                <div className="mb-8">
                    <p className="text-sm font-medium text-green-600 dark:text-green-400">
                        Admin Dashboard / Products
                    </p>

                    <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
                        Update Product
                    </h1>

                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                        Update product information, pricing, inventory, and
                        category.
                    </p>
                </div>

                {/* Update Product Form */}
                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
                    <UpdateProductForm
                        product={product}
                        categories={categories}
                        farmers={farmers}
                    />
                </section>
            </div>
        </main>
    );
};

export default Page;