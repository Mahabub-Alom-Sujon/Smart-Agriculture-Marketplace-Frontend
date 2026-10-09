import Link from "next/link";
import { ArrowLeft, Plus } from "lucide-react";
import CreateCategoryForm from "@/app/dashboard/admin/categories/create/_components/CreateCategoryForm";
const Page = () => {
    return (
        <main className="min-h-screen bg-slate-50">
            <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-6">
                    <div className="mb-4">
                        <Link
                            href="/dashboard/admin/categories"
                            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-emerald-600"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Categories
                        </Link>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                                Create Category
                            </h1>
                            <p className="mt-1 max-w-2xl text-sm text-slate-500">
                                Create a new product category for your
                                marketplace.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Form Card */}
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                    <div className="border-b border-slate-100 bg-slate-50/50 px-6 py-4">
                        <p className="text-sm text-slate-500">
                            Fill in the information below and click{" "}
                            <span className="font-medium text-slate-700">
                                Create Category
                            </span>{" "}
                            to save.
                        </p>
                    </div>
                    <div className="p-6 sm:p-8">
                        <CreateCategoryForm />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Page;