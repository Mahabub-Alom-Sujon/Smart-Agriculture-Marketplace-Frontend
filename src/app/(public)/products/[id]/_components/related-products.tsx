import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Product } from "@/types/types.product";
interface RelatedProductsProps {
    products: Product[];
}
export function RelatedProducts({
    products,
}: RelatedProductsProps) {
    if (products.length === 0) {
        return null;
    }
    return (
        <section className="mt-10">
            {/* Header */}
            <div className="mb-5 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">
                    Related Products
                </h2>
                <Link
                    href="/products"
                    className="text-sm font-semibold text-green-600 hover:text-green-700"
                >
                    View All →
                </Link>
            </div>
            {/* Products */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {products.slice(0, 4).map((product) => (
                    <Card
                        key={product.id}
                        className="group overflow-hidden rounded-xl"
                    >
                        {/* Image */}
                        <Link
                            href={`/products/${product.id}`}
                        >
                            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                                <Image
                                    src={product.image ?? "/placeholder-image.png"}
                                    alt={product.name}
                                    fill
                                    unoptimized
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                        </Link>

                        {/* Content */}
                        <div className="p-4">
                            <Link
                                href={`/products/${product.id}`}
                            >
                                <h3 className="font-semibold text-slate-900 hover:text-green-600">
                                    {product.name}
                                </h3>
                            </Link>

                            <div className="mt-3 flex items-center justify-between gap-2">
                                <p className="font-bold text-green-600">
                                    ৳{" "}
                                    {product.price.toLocaleString()}
                                    <span className="ml-1 text-xs font-normal text-slate-500">
                                        / {product.unit}
                                    </span>
                                </p>

                                <Button
                                    type="button"
                                    size="icon"
                                    variant="outline"
                                    className="h-9 w-9 rounded-full hover:border-green-500 hover:text-green-600"
                                    onClick={() => console.log("Add to cart:", product.id)}
                                >
                                    <ShoppingCart className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}