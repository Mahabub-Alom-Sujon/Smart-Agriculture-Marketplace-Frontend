// "use client";
// import Link from "next/link";
// import { useMemo, useState } from "react";
// import { useRouter } from "next/navigation";
// import { useTheme } from "next-themes";
// import {
//   Heart,
//   Leaf,
//   ShoppingCart,
//   LayoutDashboard,
//   LogOut,
//   User,
//   Menu,
//   X,
//   Sprout,
// } from "lucide-react";
// import { toast } from "sonner";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { logout } from "@/service/logout";
// import { useCart } from "@/components/providers/CartProvider";
// import { useWishlist } from "@/components/providers/WishlistProvider";
// type UserRole = | "FARMER" | "BUYER" | "EXPERT" | "ADMIN" | "SUPER_ADMIN";
// type IUser = {
//   success: boolean;
//   message: string;
//   data?: {
//     id: string;
//     name: string;
//     email: string;
//     phone: string | null;
//     address: string | null;
//     imageUrl: string | null;
//     imagePublicId: string | null;
//     googleId: string | null;
//     authProvider: string;
//     emailVerified: boolean;
//     role: UserRole;
//     status: string;
//     farmer?: null;
//     buyer?: null;
//   };
// };
// type NavbarProps = {
//   user: IUser;
// };
// const navigationLinks = [
//   { href: "/", label: "Home" },
//   { href: "/products", label: "Marketplace" },
//   { href: "/farmers", label: "Farmers" },
//   { href: "/experts", label: "Experts" },
//   { href: "/about", label: "About" },
//   { href: "/contact", label: "Contact" },
// ];
// const Navbar = ({ user }: NavbarProps) => {
//   const { theme, setTheme, resolvedTheme } = useTheme();
//   const router = useRouter();
//   const { cartCount } = useCart();
//   const { wishlistCount } = useWishlist();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const profile = user?.data;
//   const isLoggedIn = Boolean(user?.success && profile);
//   useMemo(() => {
//     // No browser APIs or side effects here.
//     return true;
//   }, []);
//   const isDark = mounted && resolvedTheme === "dark";
//   const initials = useMemo(() => {
//     if (!profile?.name?.trim()) {
//       return "U";
//     }
//     return (
//       profile.name
//         .trim()
//         .split(/\s+/)
//         .map((name) => name.charAt(0))
//         .join("")
//         .slice(0, 2)
//         .toUpperCase() || "U"
//     );
//   }, [profile?.name]);
//
//   const getDashboardHref = (): string => {
//     if (!profile) {
//       return "/login";
//     }
//     switch (profile.role) {
//       case "SUPER_ADMIN":
//         return "/dashboard/super-admin";
//       case "ADMIN":
//         return "/dashboard/admin";
//       case "FARMER":
//         return "/dashboard/farmer";
//       case "BUYER":
//         return "/dashboard/buyer";
//       case "EXPERT":
//         return "/dashboard/expert";
//       default:
//         return "/login";
//     }
//   };
//   const handleLogout = async () => {
//     try {
//       toast.loading("Logging out...", { id: "logout" });
//       await logout();
//       setMobileMenuOpen(false);
//       toast.success("Logged out successfully!", {
//         id: "logout",
//         description: "See you soon 👋",
//       });
//       router.replace("/login");
//       router.refresh();
//     } catch (error) {
//       console.error("Logout error:", error);
//       toast.error("Failed to logout", {
//         id: "logout",
//         description: "Please try again",
//       });
//     }
//   };
//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//   };
//   const renderCartLink = () => (
//     <Link
//       href="/cart"
//       aria-label={`Shopping cart, ${cartCount} items`}
//       onClick={closeMobileMenu}
//       className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-700 transition hover:bg-green-50 hover:text-green-700"
//     >
//       <ShoppingCart className="h-5 w-5" />
//       {cartCount > 0 && (
//         <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-green-600 px-1 text-[9px] font-bold text-white">
//           {cartCount > 99 ? "99+" : cartCount}
//         </span>
//       )}
//     </Link>
//   );
//   const renderWishlistLink = () => (
//     <Link
//       href="/wishlist"
//       aria-label={`Wishlist, ${wishlistCount} items`}
//       onClick={closeMobileMenu}
//       className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-700 transition hover:bg-green-50 hover:text-green-700"
//     >
//       <Heart className="h-5 w-5" />
//       {wishlistCount > 0 && (
//         <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
//           {wishlistCount > 99 ? "99+" : wishlistCount}
//         </span>
//       )}
//     </Link>
//   );
//
//   return (
//     <header className="sticky top-0 z-50 border-b border-green-100 bg-white/95 shadow-sm backdrop-blur-md">
//       <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:h-18 lg:px-8">
//         {/* Logo */}
//         <Link
//           href="/"
//           onClick={closeMobileMenu}
//           className="flex shrink-0 items-center gap-2"
//         >
//           <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white shadow-sm">
//             <Leaf className="h-6 w-6" />
//           </div>
//           <div>
//             <h1 className="text-xl font-extrabold tracking-tight text-green-700">
//               AgroNexa
//             </h1>
//             <p className="hidden text-[10px] font-medium text-slate-500 sm:block">
//               Smart Agriculture Marketplace
//             </p>
//           </div>
//         </Link>
//         {/* Desktop Navigation */}
//         <nav
//           aria-label="Main navigation"
//           className="hidden items-center gap-5 lg:flex xl:gap-7"
//         >
//           {navigationLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={`text-sm font-medium transition-colors hover:text-green-700 ${
//                 link.href === "/" ?"font-semibold text-green-700" : "text-slate-600"
//                 }`}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>
//         {/* Right Side Actions */}
//         <div className="flex items-center gap-1 sm:gap-2">
//           {/* Wishlist and Cart */}
//           {renderWishlistLink()}
//           {renderCartLink()}
//           {/* Logged-in User */}
//           {isLoggedIn && profile ? (
//             <DropdownMenu>
//               <DropdownMenuTrigger
//                 render={
//                   <button
//                     type="button"
//                     className="flex h-10 w-10 items-center justify-center rounded-full outline-none transition hover:ring-2 hover:ring-green-500/30 focus-visible:ring-2 focus-visible:ring-green-500"
//                     aria-label="Open user menu"
//                   />
//                 }
//               >
//                 <Avatar className="h-9 w-9 border border-green-100">
//                   <AvatarImage
//                     src={profile.imageUrl ?? undefined}
//                     alt={profile.name}
//                   />
//                   <AvatarFallback className="bg-green-100 font-semibold text-green-700">
//                     {initials}
//                   </AvatarFallback>
//                 </Avatar>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent
//                 className="w-64 p-3"
//                 align="end"
//                 sideOffset={8}
//               >
//                 <DropdownMenuGroup>
//                   <DropdownMenuLabel className="font-normal">
//                     <div className="flex flex-col gap-1">
//                       <p className="truncate text-sm font-semibold text-slate-900">
//                         {profile.name}
//                       </p>
//                       <p className="truncate text-xs text-slate-500">
//                         {profile.email}
//                       </p>
//                       <p className="pt-1 text-[10px] font-semibold uppercase tracking-wider text-green-600">
//                         {profile.role.replace(/_/g, " ")}
//                       </p>
//                     </div>
//                   </DropdownMenuLabel>
//                 </DropdownMenuGroup>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuGroup>
//                   <DropdownMenuItem
//                     render={
//                       <Link
//                         href={getDashboardHref()}
//                         className="flex w-full cursor-pointer items-center"
//                       />
//                     }
//                   >
//                     <LayoutDashboard className="mr-2 h-4 w-4" />
//                     Dashboard
//                   </DropdownMenuItem>
//                   <DropdownMenuItem
//                     render={
//                       <Link
//                         href="/profile"
//                         className="flex w-full cursor-pointer items-center"
//                       />
//                     }
//                   >
//                     <User className="mr-2 h-4 w-4" />
//                     Profile
//                   </DropdownMenuItem>
//                 </DropdownMenuGroup>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem
//                   onClick={handleLogout}
//                   className="cursor-pointer text-destructive focus:text-destructive"
//                 >
//                   <LogOut className="mr-2 h-4 w-4" />
//                   Log out
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           ) : (
//             <div className="hidden items-center gap-2 sm:flex">
//               <Link
//                 href="/login"
//                 className="inline-flex h-9 items-center justify-center rounded-lg border border-slate-200 px-4 text-sm font-medium transition hover:border-green-600 hover:text-green-700"
//               >
//                 Login
//               </Link>
//               <Link
//                 href="/register"
//                 className="inline-flex h-9 items-center justify-center rounded-lg bg-green-600 px-4 text-sm font-semibold text-white transition hover:bg-green-700"
//               >
//                 Get Started
//               </Link>
//             </div>
//           )}
//           {/* Mobile Menu Toggle */}
//           <button
//             type="button"
//             aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
//             aria-expanded={mobileMenuOpen}
//             aria-controls="mobile-navigation"
//             onClick={() => setMobileMenuOpen((previous) => !previous)}
//             className="ml-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:border-green-500 hover:bg-green-50 hover:text-green-700 lg:hidden"
//           >
//             {mobileMenuOpen ? (
//               <X className="h-5 w-5" />
//             ) : (
//               <Menu className="h-5 w-5" />
//             )}
//           </button>
//         </div>
//       </div>
//       {/* Mobile Navigation */}
//       {mobileMenuOpen && (
//         <div
//           id="mobile-navigation"
//           className="border-t border-green-100 bg-white shadow-lg lg:hidden"
//         >
//           <div className="container mx-auto space-y-3 px-4 py-4">
//             {/* Mobile User Information */}
//             {isLoggedIn && profile && (
//               <div className="flex items-center gap-3 rounded-xl bg-green-50 p-3">
//                 <Avatar className="h-11 w-11 border border-green-200">
//                   <AvatarImage
//                     src={profile.imageUrl ?? undefined}
//                     alt={profile.name}
//                   />
//                   <AvatarFallback className="bg-green-100 font-semibold text-green-700">
//                     {initials}
//                   </AvatarFallback>
//                 </Avatar>
//
//                 <div className="min-w-0 flex-1">
//                   <p className="truncate text-sm font-semibold text-slate-900">
//                     {profile.name}
//                   </p>
//                   <p className="truncate text-xs text-slate-500">
//                     {profile.email}
//                   </p>
//                   <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-green-700">
//                     {profile.role.replace(/_/g, " ")}
//                   </p>
//                 </div>
//               </div>
//             )}
//             {/* Navigation Links */}
//             <nav
//               aria-label="Mobile navigation"
//               className="grid gap-1"
//             >
//               {navigationLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   onClick={closeMobileMenu}
//                   className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition ${
//                     link.href === "/"
//                     ? "bg-green-50 text-green-700"
//                     : "text-slate-700 hover:bg-green-50 hover:text-green-700"
//                     }`}
//                 >
//                   {link.href === "/" && (
//                     <Leaf className="h-4 w-4" />
//                   )}
//                   {link.href === "/products" && (
//                     <ShoppingCart className="h-4 w-4" />
//                   )}
//                   {link.href === "/farmers" && (
//                     <Sprout className="h-4 w-4" />
//                   )}
//                   {link.href !== "/" &&
//                     link.href !== "/products" &&
//                     link.href !== "/farmers" && (
//                       <span className="h-4 w-4" />
//                     )}
//                   {link.label}
//                 </Link>
//               ))}
//             </nav>
//             {/* Logged-in Actions */}
//             {isLoggedIn && profile ? (
//               <div className="space-y-1 border-t border-slate-100 pt-3">
//                 <Link
//                   href={getDashboardHref()}
//                   onClick={closeMobileMenu}
//                   className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-green-50 hover:text-green-700"
//                 >
//                   <LayoutDashboard className="h-4 w-4" />
//                   Dashboard
//                 </Link>
//                 <Link
//                   href="/profile"
//                   onClick={closeMobileMenu}
//                   className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-green-50 hover:text-green-700"
//                 >
//                   <User className="h-4 w-4" />
//                   My Profile
//                 </Link>
//                 <button
//                   type="button"
//                   onClick={handleLogout}
//                   className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-medium text-red-600 transition hover:bg-red-50"
//                 >
//                   <LogOut className="h-4 w-4" />
//                   Log out
//                 </button>
//               </div>
//             ) : (
//               <div className="grid grid-cols-2 gap-3 border-t border-slate-100 pt-3 sm:hidden">
//                 <Link
//                   href="/login"
//                   onClick={closeMobileMenu}
//                   className="flex h-11 items-center justify-center rounded-lg border border-green-600 text-sm font-semibold text-green-700 transition hover:bg-green-50"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   href="/register"
//                   onClick={closeMobileMenu}
//                   className="flex h-11 items-center justify-center rounded-lg bg-green-600 text-sm font-semibold text-white transition hover:bg-green-700"
//                 >
//                   Get Started
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };
//
// export default Navbar;


"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Heart,
  Leaf,
  ShoppingCart,
  LayoutDashboard,
  LogOut,
  User,
  Menu,
  X,
  Sprout,
  Sun,
  Moon,
  Monitor,
  Check,
} from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Marketplace" },
  { href: "/farmers", label: "Farmers" },
  { href: "/experts", label: "Experts" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar = ({ user }: NavbarProps) => {
  const router = useRouter();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const profile = user?.data;
  const isLoggedIn = Boolean(user?.success && profile);
  const isDark = mounted && resolvedTheme === "dark";
  const initials = useMemo(() => {
    if (!profile?.name?.trim()) return "U";
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
  const closeMobileMenu = () => setMobileMenuOpen(false);
  const getDashboardHref = (): string => {
    if (!profile) return "/login";
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
      setMobileMenuOpen(false);
      toast.success("Logged out successfully!", {
        id: "logout",
        description: "See you soon 👋",
      });
      router.replace("/login");
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to logout", {
        id: "logout",
        description: "Please try again",
      });
    }
  };

  // Light / Dark / System theme menu
  const renderThemeMenu = () => (
      <DropdownMenu>
        <DropdownMenuTrigger
            render={
              <button
                  type="button"
                  aria-label="Choose color theme"
                  title="Choose theme"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-green-500 hover:bg-green-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              />
            }
        >
          {!mounted ? (
              <Sun className="h-5 w-5" />
          ) : isDark ? (
              <Moon className="h-5 w-5" />
          ) : (
              <Sun className="h-5 w-5" />
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent
            align="end"
            sideOffset={8}
            className="w-48 border-slate-200 bg-white p-2 text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        >
          <div className="px-2 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            Appearance
          </div>

          <DropdownMenuSeparator />

          <DropdownMenuItem
              onClick={() => setTheme("light")}
              className="flex cursor-pointer items-center gap-2"
          >
            <Sun className="h-4 w-4 text-amber-500" />
            <span className="flex-1">Light mode</span>
            {mounted && theme === "light" && (
                <Check className="h-4 w-4 text-green-600" />
            )}
          </DropdownMenuItem>

          <DropdownMenuItem
              onClick={() => setTheme("dark")}
              className="flex cursor-pointer items-center gap-2"
          >
            <Moon className="h-4 w-4 text-indigo-500" />
            <span className="flex-1">Dark mode</span>
            {mounted && theme === "dark" && (
                <Check className="h-4 w-4 text-green-600" />
            )}
          </DropdownMenuItem>

          <DropdownMenuItem
              onClick={() => setTheme("system")}
              className="flex cursor-pointer items-center gap-2"
          >
            <Monitor className="h-4 w-4 text-slate-500" />
            <span className="flex-1">System</span>
            {mounted && theme === "system" && (
                <Check className="h-4 w-4 text-green-600" />
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  );

  const renderCartLink = () => (
      <Link
          href="/cart"
          aria-label={`Shopping cart, ${cartCount} items`}
          onClick={closeMobileMenu}
          className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-700 transition hover:bg-green-50 hover:text-green-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-green-400"
      >
        <ShoppingCart className="h-5 w-5" />
        {cartCount > 0 && (
            <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-green-600 px-1 text-[9px] font-bold text-white">
          {cartCount > 99 ? "99+" : cartCount}
        </span>
        )}
      </Link>
  );

  const renderWishlistLink = () => (
      <Link
          href="/wishlist"
          aria-label={`Wishlist, ${wishlistCount} items`}
          onClick={closeMobileMenu}
          className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-700 transition hover:bg-green-50 hover:text-green-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-green-400"
      >
        <Heart className="h-5 w-5" />
        {wishlistCount > 0 && (
            <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
          {wishlistCount > 99 ? "99+" : wishlistCount}
        </span>
        )}
      </Link>
  );

  return (
      <header className="sticky top-0 z-50 border-b border-green-100 bg-white/95 text-slate-900 shadow-sm backdrop-blur-md transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/95 dark:text-slate-100">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:h-[72px] lg:px-8">
          {/* Logo */}
          <Link
              href="/"
              onClick={closeMobileMenu}
              className="flex shrink-0 items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white shadow-sm">
              <Leaf className="h-6 w-6" />
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-green-700 dark:text-green-400">
                AgroNexa
              </h1>
              <p className="hidden text-[10px] font-medium text-slate-500 dark:text-slate-400 sm:block">
                Smart Agriculture Marketplace
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
              aria-label="Main navigation"
              className="hidden items-center gap-5 lg:flex xl:gap-7"
          >
            {navigationLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-green-700 dark:hover:text-green-400 ${
                        link.href === "/"
                            ? "font-semibold text-green-700 dark:text-green-400"
                            : "text-slate-600 dark:text-slate-300"
                    }`}
                >
                  {link.label}
                </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            {renderThemeMenu()}
            {renderWishlistLink()}
            {renderCartLink()}

            {/* Logged-in User */}
            {isLoggedIn && profile ? (
                <DropdownMenu>
                  {/* User menu trigger */}
                  <DropdownMenuTrigger
                      render={
                        <button
                            type="button"
                            aria-label="Open account menu"
                            title={profile.name}
                            className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-2 transition hover:border-green-500 hover:bg-green-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
                        />
                      }
                  >
                    <Avatar className="h-7 w-7">
                      <AvatarImage
                          src={profile.imageUrl ?? undefined}
                          alt={profile.name}
                      />
                      <AvatarFallback className="bg-green-100 text-xs font-semibold text-green-700 dark:bg-green-900 dark:text-green-300">
                        {initials}
                      </AvatarFallback>
                    </Avatar>

                    <span className="hidden max-w-28 truncate text-sm font-medium text-slate-700 dark:text-slate-200 xl:block">
                {profile.name}
            </span>
                  </DropdownMenuTrigger>

                  {/* User dropdown content */}
                  <DropdownMenuContent
                      align="end"
                      sideOffset={8}
                      className="z-[60] w-64 border border-slate-200 bg-white p-2 text-slate-800 shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                  >
                    {/* User Information */}
                    <div className="flex flex-col gap-1 px-2 py-2">
                      <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {profile.name}
                      </p>

                      <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                        {profile.email}
                      </p>

                      <p className="pt-1 text-[10px] font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">
                        {profile.role.replace(/_/g, " ")}
                      </p>
                    </div>

                    <DropdownMenuSeparator />

                    {/* Dashboard */}
                    <DropdownMenuItem
                        render={
                          <Link
                              href={getDashboardHref()}
                              className="flex w-full cursor-pointer items-center gap-2 rounded-md"
                          />
                        }
                    >
                      <LayoutDashboard className="h-4 w-4" />
                      Dashboard
                    </DropdownMenuItem>

                    {/* Profile */}
                    <DropdownMenuItem
                        render={
                          <Link
                              href="/profile"
                              className="flex w-full cursor-pointer items-center gap-2 rounded-md"
                          />
                        }
                    >
                      <User className="h-4 w-4" />
                      Profile
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    {/* Logout */}
                    <DropdownMenuItem
                        onClick={handleLogout}
                        className="cursor-pointer rounded-md text-red-600 focus:text-red-600 dark:text-red-400 dark:focus:text-red-400"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <div className="hidden items-center gap-2 sm:flex">
                  <Link
                      href="/login"
                      className="inline-flex h-9 items-center justify-center rounded-lg border border-slate-200 px-4 text-sm font-medium transition hover:border-green-600 hover:text-green-700 dark:border-slate-700 dark:hover:border-green-500 dark:hover:text-green-400"
                  >
                    Login
                  </Link>

                  <Link
                      href="/register"
                      className="inline-flex h-9 items-center justify-center rounded-lg bg-green-600 px-4 text-sm font-semibold text-white transition hover:bg-green-700"
                  >
                    Get Started
                  </Link>
                </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
                type="button"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setMobileMenuOpen((previous) => !previous)}
                className="ml-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:border-green-500 hover:bg-green-50 hover:text-green-700 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 lg:hidden"
            >
              {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
              ) : (
                  <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
            <div
                id="mobile-navigation"
                className="border-t border-green-100 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-950 lg:hidden"
            >
              <div className="container mx-auto space-y-3 px-4 py-4">
                {/* Mobile Theme Menu */}
                <div className="flex items-center justify-between rounded-xl border border-slate-200 p-3 dark:border-slate-700">
                  <div className="flex items-center gap-2">
                    {isDark ? (
                        <Moon className="h-5 w-5 text-indigo-400" />
                    ) : (
                        <Sun className="h-5 w-5 text-amber-500" />
                    )}
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  Appearance
                </span>
                  </div>

                  {renderThemeMenu()}
                </div>

                {/* Mobile User Information */}
                {isLoggedIn && profile && (
                    <div className="flex items-center gap-3 rounded-xl bg-green-50 p-3 dark:bg-slate-900">
                      <Avatar className="h-11 w-11 border border-green-200 dark:border-slate-700">
                        <AvatarImage
                            src={profile.imageUrl ?? undefined}
                            alt={profile.name}
                        />
                        <AvatarFallback className="bg-green-100 font-semibold text-green-700 dark:bg-green-900 dark:text-green-300">
                          {initials}
                        </AvatarFallback>
                      </Avatar>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
                          {profile.name}
                        </p>
                        <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                          {profile.email}
                        </p>
                        <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-green-700 dark:text-green-400">
                          {profile.role.replace(/_/g, " ")}
                        </p>
                      </div>
                    </div>
                )}

                {/* Navigation Links */}
                <nav aria-label="Mobile navigation" className="grid gap-1">
                  {navigationLinks.map((link) => (
                      <Link
                          key={link.href}
                          href={link.href}
                          onClick={closeMobileMenu}
                          className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition ${
                              link.href === "/"
                                  ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                  : "text-slate-700 hover:bg-green-50 hover:text-green-700 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-green-400"
                          }`}
                      >
                        {link.href === "/" && <Leaf className="h-4 w-4" />}
                        {link.href === "/products" && (
                            <ShoppingCart className="h-4 w-4" />
                        )}
                        {link.href === "/farmers" && (
                            <Sprout className="h-4 w-4" />
                        )}
                        {link.href !== "/" &&
                            link.href !== "/products" &&
                            link.href !== "/farmers" && (
                                <span className="h-4 w-4" />
                            )}
                        {link.label}
                      </Link>
                  ))}
                </nav>

                {/* Logged-in Actions */}
                {isLoggedIn && profile ? (
                    <div className="space-y-1 border-t border-slate-200 pt-3 dark:border-slate-800">
                      <Link
                          href={getDashboardHref()}
                          onClick={closeMobileMenu}
                          className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-green-50 hover:text-green-700 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-green-400"
                      >
                        <LayoutDashboard className="h-4 w-4" />
                        Dashboard
                      </Link>

                      <Link
                          href="/profile"
                          onClick={closeMobileMenu}
                          className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-green-50 hover:text-green-700 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-green-400"
                      >
                        <User className="h-4 w-4" />
                        My Profile
                      </Link>

                      <button
                          type="button"
                          onClick={handleLogout}
                          className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-medium text-red-600 transition hover:bg-red-50 dark:hover:bg-red-950/30"
                      >
                        <LogOut className="h-4 w-4" />
                        Log out
                      </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-3 border-t border-slate-200 pt-3 dark:border-slate-800 sm:hidden">
                      <Link
                          href="/login"
                          onClick={closeMobileMenu}
                          className="flex h-11 items-center justify-center rounded-lg border border-green-600 text-sm font-semibold text-green-700 transition hover:bg-green-50 dark:text-green-400 dark:hover:bg-slate-900"
                      >
                        Login
                      </Link>

                      <Link
                          href="/register"
                          onClick={closeMobileMenu}
                          className="flex h-11 items-center justify-center rounded-lg bg-green-600 text-sm font-semibold text-white transition hover:bg-green-700"
                      >
                        Get Started
                      </Link>
                    </div>
                )}
              </div>
            </div>
        )}
      </header>
  );
};

export default Navbar;

