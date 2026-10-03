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
    isHydrated: boolean; // UI Hydration mismatch হ্যান্ডেল করার জন্য এটি যুক্ত করা হয়েছে
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "agronexa-cart";

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isHydrated, setIsHydrated] = useState(false);

    // Load cart from localStorage
    useEffect(() => {
        try {
            const storedCart = localStorage.getItem(CART_STORAGE_KEY);
            if (storedCart) {
                const parsedCart: CartItem[] = JSON.parse(storedCart);
                if (Array.isArray(parsedCart)) {
                    setCartItems(parsedCart);
                }
            }
        } catch (error) {
            console.error("Failed to load cart:", error);
        } finally {
            setIsHydrated(true);
        }
    }, []);

    // Save cart to localStorage
    useEffect(() => {
        if (!isHydrated) return;

        try {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
        } catch (error) {
            console.error("Failed to save cart:", error);
        }
    }, [cartItems, isHydrated]);

    const addToCart = useCallback((product: Product) => {
        // প্রোডাক্ট স্টক জিরো বা নেগেটিভ হলে অ্যাড হবে না
        if (!product.quantity || product.quantity <= 0) {
            return;
        }

        setCartItems((currentItems) => {
            const existingItem = currentItems.find(
                (item) => item.product.id === product.id
            );

            if (existingItem) {
                const nextQuantity = Math.min(
                    existingItem.quantity + 1,
                    product.quantity
                );

                return currentItems.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: nextQuantity, product }
                        : item
                );
            }

            return [...currentItems, { product, quantity: 1 }];
        });
    }, []);

    const removeFromCart = useCallback((productId: string) => {
        setCartItems((currentItems) =>
            currentItems.filter((item) => item.product.id !== productId)
        );
    }, []);

    const updateCartQuantity = useCallback((productId: string, quantity: number) => {
        setCartItems((currentItems) => {
            if (quantity <= 0) {
                return currentItems.filter((item) => item.product.id !== productId);
            }

            return currentItems.map((item) => {
                if (item.product.id !== productId) {
                    return item;
                }

                const maxQuantity = item.product.quantity || 0;

                return {
                    ...item,
                    quantity: Math.min(quantity, maxQuantity),
                };
            });
        });
    }, []);

    const clearCart = useCallback(() => {
        setCartItems([]);
    }, []);

    const isInCart = useCallback(
        (productId: string) => {
            return cartItems.some((item) => item.product.id === productId);
        },
        [cartItems] // cartItems ডিপেন্ডেন্সি হিসেবে থাকা জরুরি
    );

    const cartCount = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }, [cartItems]);

    const cartTotal = useMemo(() => {
        return cartItems.reduce(
            (total, item) => total + Number(item.product.price || 0) * item.quantity,
            0
        );
    }, [cartItems]);

    const value = useMemo(
        () => ({
            cartItems,
            cartCount,
            cartTotal,
            addToCart,
            removeFromCart,
            updateCartQuantity,
            clearCart,
            isInCart,
            isHydrated, // এক্সপোর্ট করা হলো
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
        ]
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used inside CartProvider");
    }
    return context;
}