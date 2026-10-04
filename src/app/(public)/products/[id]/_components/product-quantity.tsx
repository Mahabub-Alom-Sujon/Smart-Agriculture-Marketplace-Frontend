"use client";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
interface ProductQuantityProps {
    quantity: number;
    maxQuantity: number;
    onChange: (quantity: number) => void;
}
export function ProductQuantity({
    quantity,
    maxQuantity,
    onChange,
}: ProductQuantityProps) {
    const decrease = () => {
        if (quantity > 1) {
            onChange(quantity - 1);
        }
    };
    const increase = () => {
        if (quantity < maxQuantity) {
            onChange(quantity + 1);
        }
    };
    return (
        <div className="flex h-12 items-center rounded-lg border">
            <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={decrease}
                disabled={quantity <= 1}
                className="h-full rounded-r-none"
            >
                <Minus className="h-4 w-4" />
            </Button>

            <div className="flex h-full min-w-12 items-center justify-center border-x px-4 font-semibold">
                {quantity}
            </div>
            <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={increase}
                disabled={quantity >= maxQuantity}
                className="h-full rounded-l-none"
            >
                <Plus className="h-4 w-4" />
            </Button>
        </div>
    );
}