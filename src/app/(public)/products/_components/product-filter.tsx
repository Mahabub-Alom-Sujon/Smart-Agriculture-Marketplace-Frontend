"use client";
import { useEffect, useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";
import {
    useRouter,
    useSearchParams,
} from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
interface ICategory {
    id: string;
    name: string;
}
const ProductFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    useEffect(() => {
        setMinPrice(searchParams.get("minPrice") ?? "");
        setMaxPrice(searchParams.get("maxPrice") ?? "");
    }, [searchParams]);
    useEffect(() => {
        const timer = setTimeout(() => {
            const currentMinPrice = searchParams.get("minPrice") ?? "";
            const currentMaxPrice = searchParams.get("maxPrice") ?? "";
            if (minPrice !== currentMinPrice) {
                updateQuery("minPrice", minPrice.trim());
            }
            if (maxPrice !== currentMaxPrice) {
                updateQuery("maxPrice", maxPrice.trim());
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [minPrice, maxPrice, searchParams]);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/categories`);
                const result = await res.json();
                if (result.success && result.data && Array.isArray(result.data.data)) {
                    setCategories(result.data.data);
                }
            } catch (error) {
                console.error("Failed to fetch categories:", error);
            }
        };
        fetchCategories();
    }, []);

    const updateQuery = (key: string, value: string | null) => {
        const params = new URLSearchParams(searchParams.toString());
        if (!value || value === "All") {
            params.delete(key);
        } else {
            params.set(key, value);
        }
        params.set("page", "1");
        router.replace(`/products?${params.toString()}`);
    };
    const updateSort = (value: string | null) => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete("sortBy");
        params.delete("sortOrder");
        switch (value) {
            case "newest":
                params.set("sortBy", "createdAt");
                params.set("sortOrder", "desc");
                break;

            case "priceAsc":
                params.set("sortBy", "price");
                params.set("sortOrder", "asc");
                break;

            case "priceDesc":
                params.set("sortBy", "price");
                params.set("sortOrder", "desc");
                break;

            case "rating":
                params.set("sortBy", "rating");
                params.set("sortOrder", "desc");
                break;
        }

        params.set("page", "1");

        router.replace(`/products?${params.toString()}`);
    };


    const sortValue = useMemo(() => {
        const sortBy = searchParams.get("sortBy");
        const sortOrder = searchParams.get("sortOrder");
        if (sortBy === "price" && sortOrder === "asc") return "priceAsc";
        if (sortBy === "price" && sortOrder === "desc") return "priceDesc";
        if (sortBy === "rating") return "rating";
        return "newest";
    }, [searchParams]);
    const resetFilters = () => {
        setMinPrice("");
        setMaxPrice("");
        router.replace("/products");
    };

    return (
        <Card className="sticky top-24">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">
                    Filters
                </CardTitle>
                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={resetFilters}
                    className="hover:bg-green-50 hover:text-green-700"
                    title="Reset filters"
                >
                    <RotateCcw className="h-4 w-4" />
                </Button>
            </CardHeader>

            <CardContent className="space-y-5">
                <div>
                    <label className="mb-2 block text-sm font-medium">Category</label>
                    <Select
                        value={searchParams.get("category") ?? "All"}
                        onValueChange={(value) => updateQuery("category", value)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="All Categories" />
                        </SelectTrigger>
                        <SelectContent>
                            <ScrollArea className="h-60">
                                <SelectItem value="All">All Categories</SelectItem>
                                {categories.map((category) => (
                                    <SelectItem key={category.id} value={category.name}>
                                        {category.name}
                                    </SelectItem>
                                ))}
                            </ScrollArea>
                        </SelectContent>
                    </Select>
                </div>

                {/* Status */}
                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Status
                    </label>

                    <Select
                        value={searchParams.get("status") ?? "All"}
                        onValueChange={(value) => updateQuery("status", value)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="All Status" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="All">
                                All Status
                            </SelectItem>
                            <SelectItem value="ACTIVE">
                                Active
                            </SelectItem>
                            <SelectItem value="SOLD_OUT">
                                Sold Out
                            </SelectItem>
                            <SelectItem value="INACTIVE">
                                Inactive
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Rating */}
                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Rating
                    </label>

                    <Select
                        value={searchParams.get("rating") ?? "All"}
                        onValueChange={(value) => updateQuery("rating", value)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="All Ratings" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="All">
                                All Ratings
                            </SelectItem>

                            <SelectItem value="5">
                                ⭐ 5.0 & above
                            </SelectItem>
                            <SelectItem value="4">
                                ⭐ 4.0 & above
                            </SelectItem>
                            <SelectItem value="3">
                                ⭐ 3.0 & above
                            </SelectItem>
                            <SelectItem value="2">
                                ⭐ 2.0 & above
                            </SelectItem>
                            <SelectItem value="1">
                                ⭐ 1.0 & above
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Price */}
                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Price Range
                    </label>

                    <div className="grid grid-cols-2 gap-3">
                        <Input
                            type="number"
                            min={0}
                            placeholder="Min Price"
                            value={minPrice}
                            onChange={(event) => {
                                const value =
                                    event.target.value;

                                if (
                                    value === "" ||
                                    Number(value) >= 0
                                ) {
                                    setMinPrice(value);
                                }
                            }}
                        />

                        <Input
                            type="number"
                            min={0}
                            placeholder="Max Price"
                            value={maxPrice}
                            onChange={(event) => {
                                const value =
                                    event.target.value;

                                if (
                                    value === "" ||
                                    Number(value) >= 0
                                ) {
                                    setMaxPrice(value);
                                }
                            }}
                        />
                    </div>
                </div>

                {/* Sort */}
                {/*<div>*/}
                {/*    <label className="mb-2 block text-sm font-medium">*/}
                {/*        Sort By*/}
                {/*    </label>*/}
                {/*    <Select*/}
                {/*        value={sortValue}*/}
                {/*        onValueChange={updateSort}*/}
                {/*    >*/}
                {/*        <SelectTrigger className="w-full">*/}
                {/*            <SelectValue />*/}
                {/*        </SelectTrigger>*/}
                {/*        <SelectContent>*/}
                {/*            <SelectItem value="newest">*/}
                {/*                Newest*/}
                {/*            </SelectItem>*/}
                {/*            <SelectItem value="priceAsc">*/}
                {/*                Price: Low to High*/}
                {/*            </SelectItem>*/}
                {/*            <SelectItem value="priceDesc">*/}
                {/*                Price: High to Low*/}
                {/*            </SelectItem>*/}
                {/*            <SelectItem value="rating">*/}
                {/*                Highest Rated*/}
                {/*            </SelectItem>*/}
                {/*        </SelectContent>*/}
                {/*    </Select>*/}
                {/*</div>*/}
            </CardContent>
        </Card>
    );
};

export default ProductFilter;