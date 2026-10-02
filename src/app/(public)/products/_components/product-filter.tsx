"use client";
import { useEffect, useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
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
// enum ProductStatus {
//     ACTIVE = "active",
//     SOLD_OUT = "sold_out",
//     INACTIVE = "inactive"
// }
const ProductFilter = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [isLoadingCategories, setIsLoadingCategories] = useState(true);

    useEffect(() => {
        setMinPrice(searchParams.get("minPrice") ?? "");
        setMaxPrice(searchParams.get("maxPrice") ?? "");
    }, [searchParams]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setIsLoadingCategories(true);
                const apiUrl = process.env.NEXT_PUBLIC_API_URL;
                if (!apiUrl) {
                    throw new Error("NEXT_PUBLIC_API_URL is not configured");
                }
                const response = await fetch(`${apiUrl}/api/v1/categories`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch categories: ${response.status}`,);
                }
                const result: {
                    success: boolean;
                    data: ICategory[];
                } = await response.json();
                if (result.success) {
                    setCategories(result.data ?? []);
                } else {
                    setCategories([]);
                }
            } catch (error) {
                console.error(
                    "Failed to fetch categories:",
                    error,
                );
                setCategories([]);
            } finally {
                setIsLoadingCategories(false);
            }
        };
        fetchCategories();
    }, []);

    const updateQuery = ( key: string, value: string | null) => {
        const params = new URLSearchParams( searchParams.toString(),);
        const trimmedValue = (value ?? "").trim();
        if ( !trimmedValue || trimmedValue === "all") {
            params.delete(key);
        } else {
            params.set(key, trimmedValue);
        }
        // Filter change => page 1
        params.set("page", "1");
        // Default limit
        if (!params.get("limit")) {
            params.set("limit", "9");
        }
        router.replace(`${pathname}?${params.toString()}`, { scroll: false,});
    };

    useEffect(() => {
        const currentMinPrice = searchParams.get("minPrice") ?? "";
        const currentMaxPrice = searchParams.get("maxPrice") ?? "";
        if ( minPrice === currentMinPrice && maxPrice === currentMaxPrice) {
            return;
        }
        const timer = setTimeout(() => {
            const params = new URLSearchParams( searchParams.toString());
            if (minPrice.trim()) {
                params.set("minPrice", minPrice.trim());
            } else {
                params.delete("minPrice");
            }
            if (maxPrice.trim()) {
                params.set("maxPrice", maxPrice.trim());
            } else {
                params.delete("maxPrice");
            }

            params.set("page", "1");

            if (!params.get("limit")) {
                params.set("limit", "9");
            }
            router.replace(`${pathname}?${params.toString()}`, { scroll: false},
            );
        }, 500);

        return () => clearTimeout(timer);
    }, [
        minPrice,
        maxPrice,
        searchParams,
        pathname,
        router,
    ]);

    const statusValue = searchParams.get("status") ?? "All Status";
    const categoryValue = searchParams.get("category") ?? "All Categories";
    const updateSort = (value: string | null ) => {
        const params = new URLSearchParams( searchParams.toString());
        params.delete("sortBy");
        params.delete("sortOrder");
        switch (value) {
            case "newest":
                params.set("sortBy", "createdAt");
                params.set("sortOrder", "desc");
                break;
            case "oldest":
                params.set("sortBy", "createdAt");
                params.set("sortOrder", "asc");
                break;
            case "priceAsc":
                params.set("sortBy", "price");
                params.set("sortOrder", "asc");
                break;
            case "priceDesc":
                params.set("sortBy", "price");
                params.set("sortOrder", "desc");
                break;
            default:
                params.set("sortBy", "createdAt");
                params.set("sortOrder", "desc");
                break;
        }
        params.set("page", "1");
        if (!params.get("limit")) {
            params.set("limit", "10");
        }
        router.replace(`${pathname}?${params.toString()}`, { scroll: false});
    };

    const sortValue = useMemo(() => {
        const sortBy = searchParams.get("sortBy") ?? "createdAt";
        const sortOrder = searchParams.get("sortOrder") ?? "desc";
        if (sortBy === "price" && sortOrder === "asc") {
            return "priceAsc";
        }
        if ( sortBy === "price" && sortOrder === "desc") {
            return "priceDesc";
        }
        if ( sortBy === "createdAt" && sortOrder === "asc") {
            return "oldest";
        }
        return "newest";
    }, [searchParams]);

    const resetFilters = () => {
        setMinPrice("");
        setMaxPrice("");
        const params = new URLSearchParams();
        // Keep default API pagination/sorting
        params.set("page", "1");
        params.set("limit", "10");
        params.set("sortBy", "createdAt");
        params.set("sortOrder", "desc");
        router.replace(`${pathname}?${params.toString()}`, { scroll: false});
    };

    return (
        <Card className="sticky top-24">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg"> Filters</CardTitle>
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
                    <label className="mb-2 block text-sm font-medium">
                        Category
                    </label>
                    <Select
                        value={categoryValue}
                        onValueChange={(value) => updateQuery("category", value)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="All Categories" />
                        </SelectTrigger>
                        <SelectContent>
                            <ScrollArea className="h-60">
                                <SelectItem value="all">
                                    All Categories
                                </SelectItem>

                                {isLoadingCategories ? (
                                    <SelectItem value="loading" disabled>
                                        Loading...
                                    </SelectItem>
                                ) : (
                                    categories.map((category) => (
                                        <SelectItem
                                            key={category.id}
                                            value={category.name}
                                        >
                                            {category.name}
                                        </SelectItem>
                                    ))
                                )}
                            </ScrollArea>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className="mb-2 block text-sm font-medium"> Status </label>
                    <Select
                        value={statusValue}
                        onValueChange={(value) => updateQuery("status", value)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="All Status" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="all">
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
                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Rating
                    </label>

                    <Select
                        value={searchParams.get("rating") ?? "All Rating"}
                        onValueChange={(value) =>
                            updateQuery("rating", value)
                        }
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="All Ratings" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">
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
                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Price Range
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <Input
                                type="number"
                                min={0}
                                placeholder="Min Price"
                                value={minPrice}
                                onChange={(event) => {
                                    const value =
                                        event.target
                                            .value;

                                    if (
                                        value === "" ||
                                        Number(value) >= 0
                                    ) {
                                        setMinPrice(
                                            value,
                                        );
                                    }
                                }}
                            />
                        </div>
                        <div>
                            <Input
                                type="number"
                                min={0}
                                placeholder="Max Price"
                                value={maxPrice}
                                onChange={(event) => {
                                    const value = event.target.value;
                                    if ( value === "" || Number(value) >= 0) {
                                        setMaxPrice( value);
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Sort By
                    </label>
                    <Select value={sortValue} onValueChange={updateSort}>
                        <SelectTrigger className="w-full">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="newest">
                                Newest
                            </SelectItem>
                            <SelectItem value="oldest">
                                Oldest
                            </SelectItem>
                            <SelectItem value="priceAsc">
                                Price: Low to High
                            </SelectItem>
                            <SelectItem value="priceDesc">
                                Price: High to Low
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductFilter;