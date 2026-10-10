"use client";
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";

import type { Product } from "@/types/types.product";

interface WishlistContextType {
    wishlistItems: Product[];
    wishlistCount: number;
    addToWishlist: (product: Product) => void;
    removeFromWishlist: (productId: string) => void;
    toggleWishlist: (product: Product) => void;
    isInWishlist: (productId: string) => boolean;
    clearWishlist: () => void;
}

const WishlistContext = createContext<
    WishlistContextType | undefined
>(undefined);

const WISHLIST_STORAGE_KEY = "agronexa-wishlist";

export function WishlistProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
    const [isHydrated, setIsHydrated] = useState(false);

    // Load wishlist from localStorage.
    useEffect(() => {
        try {
            const storedWishlist = localStorage.getItem(
                WISHLIST_STORAGE_KEY,
            );

            if (storedWishlist) {
                const parsed: unknown = JSON.parse(storedWishlist);

                if (Array.isArray(parsed)) {
                    const validProducts = parsed.filter(
                        (item: unknown): item is Product =>
                            typeof item === "object" &&
                            item !== null &&
                            "id" in item &&
                            typeof item.id === "string",
                    );

                    setWishlistItems(validProducts);
                }
            }
        } catch (error: unknown) {
            console.error("Failed to load wishlist:", error);
        } finally {
            setIsHydrated(true);
        }
    }, []);

    // Persist wishlist changes.
    useEffect(() => {
        if (!isHydrated) return;

        try {
            localStorage.setItem(
                WISHLIST_STORAGE_KEY,
                JSON.stringify(wishlistItems),
            );
        } catch (error: unknown) {
            console.error("Failed to save wishlist:", error);
        }
    }, [wishlistItems, isHydrated]);

    const addToWishlist = useCallback((product: Product) => {
        setWishlistItems((currentItems) => {
            const exists = currentItems.some(
                (item) => item.id === product.id,
            );

            return exists
                ? currentItems
                : [...currentItems, product];
        });
    }, []);

    const removeFromWishlist = useCallback(
        (productId: string) => {
            setWishlistItems((currentItems) =>
                currentItems.filter(
                    (item) => item.id !== productId,
                ),
            );
        },
        [],
    );

    const toggleWishlist = useCallback((product: Product) => {
        setWishlistItems((currentItems) => {
            const exists = currentItems.some(
                (item) => item.id === product.id,
            );

            return exists
                ? currentItems.filter(
                      (item) => item.id !== product.id,
                  )
                : [...currentItems, product];
        });
    }, []);

    const isInWishlist = useCallback(
        (productId: string) =>
            wishlistItems.some(
                (item) => item.id === productId,
            ),
        [wishlistItems],
    );

    // Clear React state and localStorage.
    const clearWishlist = useCallback(() => {
        setWishlistItems([]);

        try {
            localStorage.removeItem(WISHLIST_STORAGE_KEY);
        } catch (error: unknown) {
            console.error("Failed to clear wishlist:", error);
        }
    }, []);

    const wishlistCount = wishlistItems.length;

    const value = useMemo<WishlistContextType>(
        () => ({
            wishlistItems,
            wishlistCount,
            addToWishlist,
            removeFromWishlist,
            toggleWishlist,
            isInWishlist,
            clearWishlist,
        }),
        [
            wishlistItems,
            wishlistCount,
            addToWishlist,
            removeFromWishlist,
            toggleWishlist,
            isInWishlist,
            clearWishlist,
        ],
    );

    return (
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist(): WishlistContextType {
    const context = useContext(WishlistContext);

    if (!context) {
        throw new Error(
            "useWishlist must be used inside WishlistProvider",
        );
    }

    return context;
}