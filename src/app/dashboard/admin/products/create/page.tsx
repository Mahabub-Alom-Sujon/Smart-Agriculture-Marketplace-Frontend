import { getAllCategory } from "@/app/dashboard/admin/products/_actions/getAllCategory";
import { getAllFarmers } from "@/app/dashboard/admin/products/_actions/getAllFarmer";
import CreateProductForm from "@/app/dashboard/admin/products/_components/CreateProductForm";

const Page = async () => {
    const [categoryResponse, farmerResponse] = await Promise.all([
        getAllCategory(),
        getAllFarmers(),
    ]);

    const categories = categoryResponse?.data ?? [];
    const farmers = farmerResponse?.data ?? [];

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-8 transition-colors duration-300 dark:bg-slate-950 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                {/* Page Header */}
                <div className="mb-8">
                    <p className="text-sm font-medium text-green-600 dark:text-green-400">
                        Admin Dashboard / Products
                    </p>

                    <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
                        Create New Product
                    </h1>

                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                        Add a new agricultural product to your marketplace.
                    </p>
                </div>

                {/* Create Product Form */}
                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
                    <CreateProductForm
                        categories={categories}
                        farmers={farmers}
                    />
                </section>
            </div>
        </main>
    );
};

export default Page;