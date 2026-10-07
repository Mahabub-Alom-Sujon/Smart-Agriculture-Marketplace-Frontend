"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import {
    Heart,
    Leaf,
    ShoppingCart,
    LayoutDashboard,
    LogOut,
    User,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuGroup,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/service/logout";
import { useCart } from "@/components/providers/CartProvider";
import { useWishlist } from "@/components/providers/WishlistProvider";
type UserRole = | "FARMER" | "BUYER" | "EXPERT" | "ADMIN" | "SUPER_ADMIN";
type IUser = {
    success: boolean;
    message: string;
    data?: {
        id: string;
        name: string;
        email: string;
        phone: string | null;
        address: string | null;
        imageUrl: string | null;
        imagePublicId: string | null;
        googleId: string | null;
        authProvider: string;
        emailVerified: boolean;
        role: UserRole;
        status: string;
        farmer?: null;
        buyer?: null;
    };
};
type NavbarProps = {
    user: IUser;
};
const Navbar = ({ user }: NavbarProps) => {
    const router = useRouter();
    const { cartCount } = useCart();
    const { wishlistCount } = useWishlist();
    const profile = user?.data;
    const isLoggedIn = Boolean(user?.success && profile);
    const initials = useMemo(() => {
        if (!profile?.name) {
            return "U";
        }
        return (
            profile.name
                .trim()
                .split(/\s+/)
                .map((name) => name.charAt(0))
                .join("")
                .slice(0, 2)
                .toUpperCase() || "U"
        );
    }, [profile?.name]);
    const getDashboardHref = (): string => {
        if (!profile) {
            return "/login";
        }
        switch (profile.role) {
            case "SUPER_ADMIN":
                return "/dashboard/super-admin";
            case "ADMIN":
                return "/dashboard/admin";
            case "FARMER":
                return "/dashboard/farmer";
            case "BUYER":
                return "/dashboard/buyer";
            case "EXPERT":
                return "/dashboard/expert";
            default:
                return "/login";
        }
    };

    const handleLogout = async () => {
        try {
            toast.loading("Logging out...", { id: "logout" });
            await logout();
            toast.success("Logged out successfully!", {
                id: "logout",
                description: "See you soon 👋",
            });
            router.replace("/login");
            router.refresh();
        } catch (error) {
            console.error("Logout error:", error);
            toast.error("Failed to logout", { id: "logout", description: "Please try again",});
        }
    };

    return (
        <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
            <div className="container mx-auto flex h-18 items-center justify-between px-4 lg:px-8">
                {/* ========================================= */}
                {/* Logo */}
                {/* ========================================= */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white">
                        <Leaf className="h-6 w-6" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold tracking-tight text-green-700">
                            AgroNexa
                        </h1>
                        <p className="hidden text-[10px] font-medium text-slate-500 sm:block">
                            Smart Agriculture Marketplace
                        </p>
                    </div>
                </Link>
                {/* ========================================= */}
                {/* Desktop Navigation */}
                {/* ========================================= */}
                <nav className="hidden items-center gap-7 lg:flex">
                    <Link
                        href="/"
                        className="text-sm font-semibold text-green-700"
                    >
                        Home
                    </Link>

                    <Link
                        href="/products"
                        className="text-sm font-medium text-slate-600 transition hover:text-green-700"
                    >
                        Marketplace
                    </Link>

                    <Link
                        href="/farmers"
                        className="text-sm font-medium text-slate-600 transition hover:text-green-700"
                    >
                        Farmers
                    </Link>

                    <Link
                        href="/experts"
                        className="text-sm font-medium text-slate-600 transition hover:text-green-700"
                    >
                        Experts
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm font-medium text-slate-600 transition hover:text-green-700"
                    >
                        About
                    </Link>
                </nav>
                {/* ========================================= */}
                {/* Right Side Actions */}
                {/* ========================================= */}
                <div className="flex items-center gap-2">
                    {/* ===================================== */}
                    {/* Wishlist */}
                    {/* ===================================== */}
                    <Link
                        href="/wishlist"
                        aria-label="Wishlist"
                        className="relative inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-700 transition-colors hover:bg-slate-100 hover:text-green-700"
                    >
                        <Heart className="h-5 w-5" />
                        {wishlistCount > 0 && (
                            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
                                {wishlistCount > 99 ? "99+" : wishlistCount}
                            </span>
                        )}
                    </Link>
                    {/* ===================================== */}
                    {/* Cart */}
                    {/* ===================================== */}
                    <Link
                        href="/cart"
                        aria-label="Shopping cart"
                        className="relative inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-700 transition-colors hover:bg-slate-100 hover:text-green-700"
                    >
                        <ShoppingCart className="h-5 w-5" />
                        {cartCount > 0 && (
                            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-[9px] font-bold text-white">
                                {cartCount > 99 ? "99+" : cartCount}
                            </span>
                        )}
                    </Link>
                    {/* ===================================== */}
                    {/* Logged In User */}
                    {/* ===================================== */}
                    {isLoggedIn && profile ? (
                        <DropdownMenu>
                            {/* User Avatar Trigger */}
                            <DropdownMenuTrigger
                                render={
                                    <button
                                        type="button"
                                        className="relative flex h-9 w-9 items-center justify-center rounded-full outline-none transition-colors hover:bg-slate-100 focus:ring-2 focus:ring-green-500/20"
                                        aria-label="Open user menu"
                                    />
                                }
                            >
                                <Avatar className="h-9 w-9">
                                    <AvatarImage
                                        src={
                                            profile.imageUrl ??
                                            "https://github.com/shadcn.png"
                                        }
                                        alt={profile.name}
                                    />

                                    <AvatarFallback>
                                        {initials}
                                    </AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            {/* Dropdown Content */}
                            <DropdownMenuContent
                                className="w-65 px-4 py-4"
                                align="end"
                            >
                                {/* ================================= */}
                                {/* User Information */}
                                {/* ================================= */}

                                <DropdownMenuGroup>
                                    <DropdownMenuLabel className="font-normal">
                                        <div className="flex flex-col space-y-1">
                                            <p className="text-sm font-medium leading-none">
                                                {profile.name}
                                            </p>
                                            {/*<p className="text-xs leading-none text-muted-foreground">*/}
                                            {/*    {profile.email}*/}
                                            {/*</p>*/}
                                            <p className="pt-1 text-[10px] font-medium uppercase text-green-600">
                                                {profile.role}
                                            </p>
                                        </div>
                                    </DropdownMenuLabel>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                {/* ================================= */}
                                {/* Navigation */}
                                {/* ================================= */}
                                <DropdownMenuGroup>
                                    {/* Dashboard */}
                                    <DropdownMenuItem
                                        render={
                                            <Link
                                                href={getDashboardHref()}
                                                className="flex w-full cursor-pointer items-center"
                                            />
                                        }
                                    >
                                        <LayoutDashboard className="mr-2 h-4 w-4" />
                                        Dashboard
                                    </DropdownMenuItem>
                                    {/* Profile */}
                                    <DropdownMenuItem
                                        render={
                                            <Link
                                                href="/profile"
                                                className="flex w-full cursor-pointer items-center"
                                            />
                                        }
                                    >
                                        <User className="mr-2 h-4 w-4" />
                                        Profile
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                {/* ================================= */}
                                {/* Logout */}
                                {/* ================================= */}
                                <DropdownMenuGroup>
                                    <DropdownMenuItem
                                        onClick={handleLogout}
                                        className="cursor-pointer text-destructive focus:text-destructive"
                                    >
                                        <LogOut className="mr-2 h-4 w-4" />
                                        Log out
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        /* ===================================== */
                        /* Not Logged In */
                        /* ===================================== */
                        <>
                            {/* Login */}
                            <Link
                                href="/login"
                                className="hidden h-9 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground sm:inline-flex"
                            >
                                Login
                            </Link>
                            {/* Get Started */}
                            <Link
                                href="/register"
                                className="inline-flex h-9 items-center justify-center rounded-md bg-green-600 px-4 text-sm font-medium text-white shadow-xs transition-colors hover:bg-green-700"
                            >
                                Get Started
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;