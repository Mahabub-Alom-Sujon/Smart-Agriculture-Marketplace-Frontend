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
export interface CartItem {
    product: Product;
    quantity: number;
}
interface CartContextType {
    cartItems: CartItem[];
    cartCount: number;
    cartTotal: number;
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateCartQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    isInCart: (productId: string) => boolean;
    isHydrated: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "agronexa-cart";

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isHydrated, setIsHydrated] = useState(false);

    // Load cart from localStorage on mount.
    useEffect(() => {
        try {
            const storedCart = localStorage.getItem(CART_STORAGE_KEY);

            if (storedCart) {
                const parsed: unknown = JSON.parse(storedCart);

                if (Array.isArray(parsed)) {
                    const validItems = parsed.filter(
                        (item: unknown): item is CartItem => {
                            if (
                                typeof item !== "object" ||
                                item === null
                            ) {
                                return false;
                            }

                            const candidate = item as Record<string, unknown>;

                            if (
                                typeof candidate.product !== "object" ||
                                candidate.product === null ||
                                typeof candidate.quantity !== "number" ||
                                !Number.isInteger(candidate.quantity) ||
                                candidate.quantity < 1
                            ) {
                                return false;
                            }

                            const product = candidate.product as Record<
                                string,
                                unknown
                            >;

                            return (
                                typeof product.id === "string" &&
                                product.id.length > 0
                            );
                        },
                    );

                    setCartItems(validItems);
                }
            }
        } catch (error: unknown) {
            console.error("Failed to load cart:", error);
        } finally {
            setIsHydrated(true);
        }
    }, []);

    // Persist cart changes.
    useEffect(() => {
        if (!isHydrated) return;

        try {
            localStorage.setItem(
                CART_STORAGE_KEY,
                JSON.stringify(cartItems),
            );
        } catch (error: unknown) {
            console.error("Failed to save cart:", error);
        }
    }, [cartItems, isHydrated]);

    const addToCart = useCallback((product: Product) => {
        const stock = Number(product.quantity);

        if (!Number.isFinite(stock) || stock < 1) return;

        setCartItems((currentItems) => {
            const existingItem = currentItems.find(
                (item) => item.product.id === product.id,
            );

            if (existingItem) {
                return currentItems.map((item) =>
                    item.product.id === product.id
                        ? {
                              ...item,
                              product,
                              quantity: Math.min(
                                  item.quantity + 1,
                                  stock,
                              ),
                          }
                        : item,
                );
            }
            return [
                ...currentItems,
                {
                    product,
                    quantity: 1,
                },
            ];
        });
    }, []);
    const removeFromCart = useCallback((productId: string) => {
        setCartItems((currentItems) =>
            currentItems.filter(
                (item) => item.product.id !== productId,
            ),
        );
    }, []);
    const updateCartQuantity = useCallback(
        (productId: string, quantity: number) => {
            setCartItems((currentItems) =>
                currentItems.flatMap((item) => {
                    if (item.product.id !== productId) {
                        return [item];
                    }
                    if (
                        !Number.isFinite(quantity) ||
                        quantity <= 0
                    ) {
                        return [];
                    }
                    const stock = Number(item.product.quantity);
                    if (!Number.isFinite(stock) || stock < 1) {
                        return [];
                    }
                    return [
                        {
                            ...item,
                            quantity: Math.min(
                                Math.floor(quantity),
                                stock,
                            ),
                        },
                    ];
                }),
            );
        },
        [],
    );
    // Clear React state and localStorage immediately.
    const clearCart = useCallback(() => {
        setCartItems([]);
        try {
            localStorage.removeItem(CART_STORAGE_KEY);
        } catch (error: unknown) {
            console.error("Failed to clear cart storage:", error);
        }
    }, []);
    const isInCart = useCallback(
        (productId: string) =>
            cartItems.some(
                (item) => item.product.id === productId,
            ),
        [cartItems],
    );
    const cartCount = useMemo(
        () =>
            cartItems.reduce(
                (total, item) => total + item.quantity,
                0,
            ),
        [cartItems],
    );
    const cartTotal = useMemo(
        () =>
            cartItems.reduce(
                (total, item) =>
                    total +
                    Number(item.product.price || 0) * item.quantity,
                0,
            ),
        [cartItems],
    );
    const value = useMemo<CartContextType>(
        () => ({
            cartItems,
            cartCount,
            cartTotal,
            addToCart,
            removeFromCart,
            updateCartQuantity,
            clearCart,
            isInCart,
            isHydrated,
        }),
        [
            cartItems,
            cartCount,
            cartTotal,
            addToCart,
            removeFromCart,
            updateCartQuantity,
            clearCart,
            isInCart,
            isHydrated,
        ],
    );
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
export function useCart(): CartContextType {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error(
            "useCart must be used inside CartProvider",
        );
    }
    return context;
}