import { notFound } from "next/navigation";
import { getProductSingle } from "@/app/(public)/products/[id]/_actions/getProductSingle"; // আপনার server action ফাইলের সঠিক পাথ দিন
import { ProductDetails } from "@/app/(public)/products/[id]/_components/product-details";
interface ProductPageProps {
    params: Promise<{ id: string }>;
}
export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    const result = await getProductSingle(id);
    if (!result?.success || !result.data) {
        notFound();
    }

    return (
        <ProductDetails
            product={result.data}
            relatedProducts={[]}
        />
    );
}