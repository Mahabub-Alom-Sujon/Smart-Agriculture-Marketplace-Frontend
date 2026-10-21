// "use client";
// import { useState, type ReactNode } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//     LayoutDashboard,
//     Users,
//     Sprout,
//     CalendarCheck,
//     CreditCard,
//     Star,
//     Settings,
//     Shield,
//     Menu,
//     X,
//     BarChart3,
//     Package,
//     ShoppingCart,
//     Tractor,
//     Stethoscope,
//     ChevronRight,
//     Leaf,
// } from "lucide-react";
// import { cn } from "@/lib/utils";
// import type { User, Role } from "@/types/types.role";
// interface NavItem {
//     href: string;
//     label: string;
//     icon: ReactNode;
// }
// /* =========================================================
//    BUYER NAVIGATION
// ========================================================= */
// const buyerNavItems: NavItem[] = [
//     {
//         href: "/dashboard/buyer",
//         label: "Dashboard",
//         icon: <LayoutDashboard className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/buyer/orders",
//         label: "My Orders",
//         icon: <ShoppingCart className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/buyer/payments",
//         label: "Payments",
//         icon: <CreditCard className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/buyer/reviews",
//         label: "My Reviews",
//         icon: <Star className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/profile",
//         label: "Profile",
//         icon: <Settings className="h-[18px] w-[18px]" />,
//     },
// ];
//
// /* =========================================================
//    FARMER NAVIGATION
// ========================================================= */
//
// const farmerNavItems: NavItem[] = [
//     {
//         href: "/dashboard/farmer",
//         label: "Dashboard",
//         icon: <LayoutDashboard className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/farmer/farms",
//         label: "My Farms",
//         icon: <Tractor className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/farmer/crops",
//         label: "My Crops",
//         icon: <Sprout className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/farmer/orders",
//         label: "Orders",
//         icon: <Package className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/farmer/consultations",
//         label: "Consultations",
//         icon: <Stethoscope className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/farmer/reviews",
//         label: "Reviews",
//         icon: <Star className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/profile",
//         label: "Profile",
//         icon: <Settings className="h-[18px] w-[18px]" />,
//     },
// ];
//
// /* =========================================================
//    EXPERT NAVIGATION
// ========================================================= */
// const expertNavItems: NavItem[] = [
//     {
//         href: "/dashboard/expert",
//         label: "Dashboard",
//         icon: <LayoutDashboard className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/expert/consultations",
//         label: "Consultations",
//         icon: <Stethoscope className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/expert/appointments",
//         label: "Appointments",
//         icon: <CalendarCheck className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/expert/earnings",
//         label: "Earnings",
//         icon: <CreditCard className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/expert/reviews",
//         label: "Reviews",
//         icon: <Star className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/profile",
//         label: "Profile",
//         icon: <Settings className="h-[18px] w-[18px]" />,
//     },
// ];
//
// /* =========================================================
//    ADMIN NAVIGATION
// ========================================================= */
//
// const adminNavItems: NavItem[] = [
//     {
//         href: "/dashboard/admin",
//         label: "Dashboard",
//         icon: <LayoutDashboard className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/admin/users",
//         label: "Users",
//         icon: <Users className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/admin/categories",
//         label: "Categories",
//         icon: <Package className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/admin/products",
//         label: "Products",
//         icon: <ShoppingCart className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/admin/farmers",
//         label: "Farmers",
//         icon: <Tractor className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/admin/experts",
//         label: "Experts",
//         icon: <Stethoscope className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/admin/orders",
//         label: "Orders",
//         icon: <Package className="h-[18px] w-[18px]" />,
//     },
//     // {
//     //     href: "/dashboard/admin/analytics",
//     //     label: "Analytics",
//     //     icon: <BarChart3 className="h-[18px] w-[18px]" />,
//     // },
//     {
//         href: "/profile",
//         label: "Profile",
//         icon: <Settings className="h-[18px] w-[18px]" />,
//     },
// ];
//
// /* =========================================================
//    SUPER ADMIN NAVIGATION
// ========================================================= */
//
// const superAdminNavItems: NavItem[] = [
//     {
//         href: "/dashboard/super-admin",
//         label: "Dashboard",
//         icon: <LayoutDashboard className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/super-admin/users",
//         label: "Users",
//         icon: <Users className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/super-admin/farmers",
//         label: "Farmers",
//         icon: <Tractor className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/super-admin/experts",
//         label: "Experts",
//         icon: <Stethoscope className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/super-admin/categories",
//         label: "Categories",
//         icon: <Package className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/super-admin/products",
//         label: "Products",
//         icon: <ShoppingCart className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/super-admin/orders",
//         label: "Orders",
//         icon: <Package className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/super-admin/analytics",
//         label: "Analytics",
//         icon: <BarChart3 className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/dashboard/super-admin/settings",
//         label: "Settings",
//         icon: <Shield className="h-[18px] w-[18px]" />,
//     },
//     {
//         href: "/profile",
//         label: "Profile",
//         icon: <Settings className="h-[18px] w-[18px]" />,
//     },
// ];
//
// /* =========================================================
//    ROLE → NAVIGATION
// ========================================================= */
//
// const navItemsByRole: Record<Role, NavItem[]> = {
//     BUYER: buyerNavItems,
//     FARMER: farmerNavItems,
//     EXPERT: expertNavItems,
//     ADMIN: adminNavItems,
//     SUPER_ADMIN: superAdminNavItems,
// };
//
// /* =========================================================
//    ROLE LABEL
// ========================================================= */
//
// const getRoleLabel = (role: Role): string => {
//     return role
//         .toLowerCase()
//         .replace(/_/g, " ")
//         .replace(/\b\w/g, (char) => char.toUpperCase());
// };
//
// /* =========================================================
//    SIDEBAR PROPS
// ========================================================= */
//
// interface SidebarProps {
//     user: User;
//     className?: string;
// }
//
// /* =========================================================
//    SIDEBAR COMPONENT
// ========================================================= */
//
// export default function Sidebar({
//     user,
//     className,
// }: SidebarProps) {
//     const pathname = usePathname();
//     const [collapsed, setCollapsed] = useState(false);
//     const role = user.role;
//     const navItems = navItemsByRole[role];
//     const handleToggle = () => {
//         setCollapsed((prev) => !prev);
//     };
//     const handleMobileNavigation = () => {
//         if (window.innerWidth < 768) {
//             setCollapsed(true);
//         }
//     };
//     return (
//         <>
//             {/* =====================================================
//                 MOBILE OVERLAY
//             ===================================================== */}
//             <AnimatePresence>
//                 {!collapsed && (
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         transition={{ duration: 0.2 }}
//                         className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-[2px] md:hidden"
//                         onClick={() => setCollapsed(true)}
//                         aria-hidden="true"
//                     />
//                 )}
//             </AnimatePresence>
//             {/* =====================================================
//                 SIDEBAR
//             ===================================================== */}
//             <aside
//                 className={cn(
//                     "fixed left-0 top-16 z-50 flex h-[calc(100vh-4rem)] flex-col",
//                     "border-r border-emerald-100 bg-white",
//                     "shadow-[4px_0_24px_rgba(15,118,110,0.06)]",
//                     "transition-all duration-300 ease-in-out",
//                     "md:sticky md:top-16 md:z-30",
//                     "md:h-[calc(100vh-4rem)]",
//                     collapsed ? "-translate-x-full md:translate-x-0 md:w-[72px]" : "translate-x-0 w-[270px]",
//                     className
//                 )}
//             >
//                 {/* =================================================
//                     TOGGLE BUTTON
//                 ================================================= */}
//
//                 <button
//                     type="button"
//                     onClick={handleToggle}
//                     aria-label={ collapsed ? "Open sidebar" : "Collapse sidebar" }
//                     className={cn(
//                         "absolute -right-3 top-[76px] z-10",
//                         "hidden h-7 w-7 items-center justify-center",
//                         "rounded-full border border-green-100 bg-white",
//                         "text-slate-500 shadow-md",
//                         "transition-all duration-200",
//                         "hover:border-emerald-200 hover:bg-green-50 hover:text-green-700",
//                         "md:flex"
//                     )}
//                 >
//                     {collapsed ? (
//                         <ChevronRight className="h-3.5 w-3.5" />
//                     ) : (
//                         <ChevronRight className="h-3.5 w-3.5 rotate-180" />
//                     )}
//                 </button>
//
//                 {/* =================================================
//                     MOBILE CLOSE BUTTON
//                 ================================================= */}
//
//                 <button
//                     type="button"
//                     onClick={() => setCollapsed(true)}
//                     aria-label="Close sidebar"
//                     className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-emerald-50 hover:text-emerald-700 md:hidden"
//                 >
//                     <X className="h-5 w-5" />
//                 </button>
//
//                 {/* =================================================
//                     ROLE BADGE
//                 ================================================= */}
//
//                 {!collapsed && (
//                     <div className="px-4 pt-4">
//                         <div className="flex items-center gap-3 rounded-xl border border-green-100 bg-green-50/70 px-3 py-2.5">
//                             <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-green-700">
//                                 <Shield className="h-4 w-4" />
//                             </div>
//                             <div className="min-w-0">
//                                 <p className="truncate text-xs font-semibold text-slate-800">
//                                     {user.name}
//                                 </p>
//                                 <p className="mt-0.5 truncate text-[11px] font-medium text-green-600">
//                                     {getRoleLabel(role)}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//
//                 {/* =================================================
//                     NAVIGATION
//                 ================================================= */}
//
//                 <nav
//                     className={cn(
//                         "flex-1 overflow-y-auto",
//                         "scrollbar-thin scrollbar-thumb-green-200 scrollbar-track-transparent",
//                         collapsed ? "px-2 py-5" : "px-3 py-5"
//                     )}
//                 >
//                     {!collapsed && (
//                         <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
//                             Main Menu
//                         </p>
//                     )}
//
//                     <div className="space-y-1">
//                         {navItems.map((item) => {
//                             const isActive =
//                                 pathname === item.href ||
//                                 pathname.startsWith(`${item.href}/`);
//                             return (
//                                 <Link
//                                     key={item.href}
//                                     href={item.href}
//                                     onClick={
//                                         handleMobileNavigation
//                                     }
//                                     title={ collapsed ? item.label : undefined }
//                                     className={cn(
//                                         "group relative flex items-center rounded-xl",
//                                         "text-sm font-medium",
//                                         "transition-all duration-200",
//                                         collapsed ? "justify-center px-3 py-3" : "gap-3 px-3 py-2.5",
//
//                                         isActive
//                                             ? [
//                                                 "bg-green-600",
//                                                 "text-white",
//                                                 "shadow-md shadow-green-600/20",
//                                             ]
//                                             : [
//                                                 "text-slate-600",
//                                                 "hover:bg-green-50",
//                                                 "hover:text-green-700",
//                                             ]
//                                     )}
//                                 >
//                                     {/* Active indicator */}
//                                     {isActive && (
//                                         <motion.span
//                                             layoutId="active-sidebar-item"
//                                             className="absolute -left-3 top-1/2 hidden h-6 w-1 -translate-y-1/2 rounded-r-full bg-green-600 md:block"
//                                         />
//                                     )}
//                                     {/* Icon */}
//                                     <span
//                                         className={cn(
//                                             "flex shrink-0 items-center justify-center",
//                                             "transition-transform duration-200",
//                                             !isActive &&
//                                             "group-hover:scale-105"
//                                         )}
//                                     >
//                                         {item.icon}
//                                     </span>
//
//                                     {/* Label */}
//
//                                     <AnimatePresence mode="wait">
//                                         {!collapsed && (
//                                             <motion.span
//                                                 initial={{
//                                                     opacity: 0,
//                                                     width: 0,
//                                                 }}
//                                                 animate={{
//                                                     opacity: 1,
//                                                     width: "auto",
//                                                 }}
//                                                 exit={{
//                                                     opacity: 0,
//                                                     width: 0,
//                                                 }}
//                                                 transition={{
//                                                     duration: 0.15,
//                                                 }}
//                                                 className="flex-1 overflow-hidden whitespace-nowrap"
//                                             >
//                                                 {item.label}
//                                             </motion.span>
//                                         )}
//                                     </AnimatePresence>
//
//                                     {/* Active arrow */}
//
//                                     {!collapsed &&
//                                         isActive && (
//                                             <motion.div
//                                                 initial={{
//                                                     opacity: 0,
//                                                     x: -4,
//                                                 }}
//                                                 animate={{
//                                                     opacity: 1,
//                                                     x: 0,
//                                                 }}
//                                                 className="shrink-0"
//                                             >
//                                                 <ChevronRight className="h-4 w-4" />
//                                             </motion.div>
//                                         )}
//                                 </Link>
//                             );
//                         })}
//                     </div>
//                 </nav>
//             </aside>
//         </>
//     );
// }


"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
    LayoutDashboard,
    Users,
    Sprout,
    CalendarCheck,
    CreditCard,
    Star,
    Settings,
    Shield,
    X,
    BarChart3,
    Package,
    ShoppingCart,
    Tractor,
    Stethoscope,
    ChevronRight,
} from "lucide-react";

import { cn } from "@/lib/utils";
import type { User, Role } from "@/types/types.role";

interface NavItem {
    href: string;
    label: string;
    icon: ReactNode;
}

/* =========================================================
   BUYER NAVIGATION
========================================================= */

const buyerNavItems: NavItem[] = [
    {
        href: "/dashboard/buyer",
        label: "Dashboard",
        icon: <LayoutDashboard className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/buyer/orders",
        label: "My Orders",
        icon: <ShoppingCart className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/buyer/payments",
        label: "Payments",
        icon: <CreditCard className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/buyer/reviews",
        label: "My Reviews",
        icon: <Star className="h-[18px] w-[18px]" />,
    },
    {
        href: "/profile",
        label: "Profile",
        icon: <Settings className="h-[18px] w-[18px]" />,
    },
];

/* =========================================================
   FARMER NAVIGATION
========================================================= */

const farmerNavItems: NavItem[] = [
    {
        href: "/dashboard/farmer",
        label: "Dashboard",
        icon: <LayoutDashboard className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/farmer/farms",
        label: "My Farms",
        icon: <Tractor className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/farmer/crops",
        label: "My Crops",
        icon: <Sprout className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/farmer/orders",
        label: "Orders",
        icon: <Package className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/farmer/consultations",
        label: "Consultations",
        icon: <Stethoscope className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/farmer/reviews",
        label: "Reviews",
        icon: <Star className="h-[18px] w-[18px]" />,
    },
    {
        href: "/profile",
        label: "Profile",
        icon: <Settings className="h-[18px] w-[18px]" />,
    },
];

/* =========================================================
   EXPERT NAVIGATION
========================================================= */

const expertNavItems: NavItem[] = [
    {
        href: "/dashboard/expert",
        label: "Dashboard",
        icon: <LayoutDashboard className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/expert/consultations",
        label: "Consultations",
        icon: <Stethoscope className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/expert/appointments",
        label: "Appointments",
        icon: <CalendarCheck className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/expert/earnings",
        label: "Earnings",
        icon: <CreditCard className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/expert/reviews",
        label: "Reviews",
        icon: <Star className="h-[18px] w-[18px]" />,
    },
    {
        href: "/profile",
        label: "Profile",
        icon: <Settings className="h-[18px] w-[18px]" />,
    },
];

/* =========================================================
   ADMIN NAVIGATION
========================================================= */

const adminNavItems: NavItem[] = [
    {
        href: "/dashboard/admin",
        label: "Dashboard",
        icon: <LayoutDashboard className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/admin/users",
        label: "Users",
        icon: <Users className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/admin/categories",
        label: "Categories",
        icon: <Package className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/admin/products",
        label: "Products",
        icon: <ShoppingCart className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/admin/farmers",
        label: "Farmers",
        icon: <Tractor className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/admin/experts",
        label: "Experts",
        icon: <Stethoscope className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/admin/orders",
        label: "Orders",
        icon: <Package className="h-[18px] w-[18px]" />,
    },
    {
        href: "/profile",
        label: "Profile",
        icon: <Settings className="h-[18px] w-[18px]" />,
    },
];

/* =========================================================
   SUPER ADMIN NAVIGATION
========================================================= */

const superAdminNavItems: NavItem[] = [
    {
        href: "/dashboard/super-admin",
        label: "Dashboard",
        icon: <LayoutDashboard className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/super-admin/users",
        label: "Users",
        icon: <Users className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/super-admin/farmers",
        label: "Farmers",
        icon: <Tractor className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/super-admin/experts",
        label: "Experts",
        icon: <Stethoscope className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/super-admin/categories",
        label: "Categories",
        icon: <Package className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/super-admin/products",
        label: "Products",
        icon: <ShoppingCart className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/super-admin/orders",
        label: "Orders",
        icon: <Package className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/super-admin/analytics",
        label: "Analytics",
        icon: <BarChart3 className="h-[18px] w-[18px]" />,
    },
    {
        href: "/dashboard/super-admin/settings",
        label: "Settings",
        icon: <Shield className="h-[18px] w-[18px]" />,
    },
    {
        href: "/profile",
        label: "Profile",
        icon: <Settings className="h-[18px] w-[18px]" />,
    },
];

/* =========================================================
   ROLE → NAVIGATION
========================================================= */

const navItemsByRole: Record<Role, NavItem[]> = {
    BUYER: buyerNavItems,
    FARMER: farmerNavItems,
    EXPERT: expertNavItems,
    ADMIN: adminNavItems,
    SUPER_ADMIN: superAdminNavItems,
};

/* =========================================================
   ROLE LABEL
========================================================= */

const getRoleLabel = (role: Role): string => {
    return role
        .toLowerCase()
        .replace(/_/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
};

/* =========================================================
   SIDEBAR PROPS
========================================================= */

interface SidebarProps {
    user: User;
    className?: string;
}

/* =========================================================
   SIDEBAR COMPONENT
========================================================= */

export default function Sidebar({
    user,
    className,
}: SidebarProps) {
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);

    const role = user.role;
    const navItems = navItemsByRole[role];

    const handleToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const handleMobileNavigation = () => {
        if (window.innerWidth < 768) {
            setCollapsed(true);
        }
    };

    return (
        <>
            {/* Mobile Overlay */}
            <AnimatePresence>
                {!collapsed && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-[2px] md:hidden"
                        onClick={() => setCollapsed(true)}
                        aria-hidden="true"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed left-0 top-16 z-50 flex h-[calc(100vh-4rem)] flex-col",
                    "border-r border-emerald-100 bg-white text-slate-900",
                    "shadow-[4px_0_24px_rgba(15,118,110,0.06)]",
                    "transition-all duration-300 ease-in-out",
                    "dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100",
                    "dark:shadow-[4px_0_24px_rgba(0,0,0,0.2)]",
                    "md:sticky md:top-16 md:z-30",
                    "md:h-[calc(100vh-4rem)]",
                    collapsed ? "-translate-x-full md:translate-x-0 md:w-[72px]" : "translate-x-0 w-[270px]",
                    className
                )}
            >
                {/* Desktop Toggle Button */}
                <button
                    type="button"
                    onClick={handleToggle}
                    aria-label={
                        collapsed ? "Open sidebar" : "Collapse sidebar"
                    }
                    className={cn(
                        "absolute -right-3 top-[76px] z-10",
                        "hidden h-7 w-7 items-center justify-center",
                        "rounded-full border border-green-100 bg-white",
                        "text-slate-500 shadow-md transition-all duration-200",
                        "hover:border-emerald-200 hover:bg-green-50 hover:text-green-700",
                        "dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300",
                        "dark:hover:border-emerald-700 dark:hover:bg-slate-800 dark:hover:text-emerald-400",
                        "md:flex"
                    )}
                >
                    {collapsed ? (
                        <ChevronRight className="h-3.5 w-3.5" />
                    ) : (
                        <ChevronRight className="h-3.5 w-3.5 rotate-180" />
                    )}
                </button>
                {/* Mobile Close Button */}
                <button
                    type="button"
                    onClick={() => setCollapsed(true)}
                    aria-label="Close sidebar"
                    className={cn(
                        "absolute right-4 top-4 flex h-8 w-8 items-center justify-center",
                        "rounded-lg text-slate-400 transition-colors",
                        "hover:bg-emerald-50 hover:text-emerald-700",
                        "dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-emerald-400",
                        "md:hidden"
                    )}
                >
                    <X className="h-5 w-5" />
                </button>

                {/* Role Badge */}
                {!collapsed && (
                    <div className="px-4 pt-4">
                        <div
                            className={cn(
                                "flex items-center gap-3 rounded-xl border px-3 py-2.5",
                                "border-green-100 bg-green-50/70",
                                "dark:border-emerald-900/70 dark:bg-emerald-950/40"
                            )}
                        >
                            <div
                                className={cn(
                                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                                    "bg-emerald-100 text-green-700",
                                    "dark:bg-emerald-900/70 dark:text-emerald-300"
                                )}
                            >
                                <Shield className="h-4 w-4" />
                            </div>

                            <div className="min-w-0">
                                <p className="truncate text-xs font-semibold text-slate-800 dark:text-slate-100">
                                    {user.name}
                                </p>
                                <p className="mt-0.5 truncate text-[11px] font-medium text-green-600 dark:text-emerald-400">
                                    {getRoleLabel(role)}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Navigation */}
                <nav
                    className={cn(
                        "flex-1 overflow-y-auto",
                        "scrollbar-thin scrollbar-thumb-green-200 scrollbar-track-transparent",
                        "dark:scrollbar-thumb-slate-700",
                        collapsed ? "px-2 py-5" : "px-3 py-5"
                    )}
                >
                    {!collapsed && (
                        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">
                            Main Menu
                        </p>
                    )}

                    <div className="space-y-1">
                        {navItems.map((item) => {
                            const isActive =
                                pathname === item.href ||
                                pathname.startsWith(`${item.href}/`);

return (
    <Link
        key={item.href}
        href={item.href}
        onClick={handleMobileNavigation}
        title={ collapsed ? item.label : undefined }
        aria-current={ isActive ? "page" : undefined }
        className={cn(
            "group relative flex items-center rounded-xl",
            "text-sm font-medium transition-all duration-200",
            collapsed ? "justify-center px-3 py-3" : "gap-3 px-3 py-2.5",
            isActive
                ? [
                    "bg-green-600 text-white",
                    "shadow-md shadow-green-600/20",
                    "dark:bg-emerald-600 dark:text-white",
                    "dark:shadow-emerald-950/40",
                ]
                : [
                    "text-slate-600 hover:bg-green-50 hover:text-green-700",
                    "dark:text-slate-300 dark:hover:bg-slate-800",
                    "dark:hover:text-emerald-400",
                ]
        )}
    >
        {/* Active Indicator */}
        {isActive && (
            <motion.span
                layoutId="active-sidebar-item"
                className={cn(
                    "absolute -left-3 top-1/2 hidden h-6 w-1",
                    "-translate-y-1/2 rounded-r-full",
                    "bg-green-600 dark:bg-emerald-400",
                    "md:block"
                )}
            />
        )}

        {/* Icon */}
        <span
            className={cn(
                "flex shrink-0 items-center justify-center",
                "transition-transform duration-200",
                !isActive && "group-hover:scale-105"
            )}
        >
            {item.icon}
        </span>

        {/* Label */}
            <AnimatePresence mode="wait">
            {!collapsed && (
                <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex-1 overflow-hidden whitespace-nowrap"
                >
                    {item.label}
                </motion.span>
            )}
        </AnimatePresence>

            {/* Active Arrow */}
            {!collapsed && isActive && (
                <motion.div
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="shrink-0"
                >
                    <ChevronRight className="h-4 w-4" />
                </motion.div>
            )}
        </Link>
            );
        })}
                    </div>
                </nav>
            </aside>
        </>
    );
}