"use client";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface ProductBreadcrumbProps {
    categoryName: string;
    productName: string;
}
const ProductBreadcrumb = ({
   categoryName,
   productName,
}: ProductBreadcrumbProps) => {
    return (
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link
                href="/"
                className="flex items-center gap-1 transition-colors hover:text-green-600"
            >
                <Home className="h-4 w-4" />
                <span>Home</span>
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
                href="/products"
                className="transition-colors hover:text-green-600"
            >
                Products
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
                href={`/products?category=${categoryName}`}
                className="transition-colors hover:text-green-600"
            >
                {categoryName}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-foreground">
                {productName}
            </span>
        </nav>
    );
};

export default ProductBreadcrumb;