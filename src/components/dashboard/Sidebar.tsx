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
    Menu,
    X,
    BarChart3,
    Package,
    ShoppingCart,
    Tractor,
    Stethoscope,
    ChevronRight,
    Leaf,
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
        href: "/dashboard/farmer/farm",
        label: "My Farm",
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
    // {
    //     href: "/dashboard/admin/analytics",
    //     label: "Analytics",
    //     icon: <BarChart3 className="h-[18px] w-[18px]" />,
    // },
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
            {/* =====================================================
                MOBILE OVERLAY
            ===================================================== */}
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
            {/* =====================================================
                SIDEBAR
            ===================================================== */}
            <aside
                className={cn(
                    "fixed left-0 top-16 z-50 flex h-[calc(100vh-4rem)] flex-col",
                    "border-r border-emerald-100 bg-white",
                    "shadow-[4px_0_24px_rgba(15,118,110,0.06)]",
                    "transition-all duration-300 ease-in-out",
                    "md:sticky md:top-16 md:z-30",
                    "md:h-[calc(100vh-4rem)]",
                    collapsed ? "-translate-x-full md:translate-x-0 md:w-[72px]" : "translate-x-0 w-[270px]",
                    className
                )}
            >
                {/* =================================================
                    BRAND HEADER
                ================================================= */}

                {/*<div*/}
                {/*    className={cn(*/}
                {/*        "flex h-16 shrink-0 items-center border-b border-emerald-100",*/}
                {/*        "bg-gradient-to-r from-emerald-50 via-white to-green-50",*/}
                {/*        collapsed*/}
                {/*            ? "justify-center px-2"*/}
                {/*            : "justify-between px-4"*/}
                {/*    )}*/}
                {/*>*/}
                {/*    <AnimatePresence mode="wait">*/}
                {/*        {!collapsed ? (*/}
                {/*            <motion.div*/}
                {/*                key="expanded-brand"*/}
                {/*                initial={{*/}
                {/*                    opacity: 0,*/}
                {/*                    x: -10,*/}
                {/*                }}*/}
                {/*                animate={{*/}
                {/*                    opacity: 1,*/}
                {/*                    x: 0,*/}
                {/*                }}*/}
                {/*                exit={{*/}
                {/*                    opacity: 0,*/}
                {/*                    x: -10,*/}
                {/*                }}*/}
                {/*                transition={{*/}
                {/*                    duration: 0.2,*/}
                {/*                }}*/}
                {/*                className="flex min-w-0 items-center gap-3"*/}
                {/*            >*/}
                {/*                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">*/}
                {/*                    <Leaf className="h-5 w-5" />*/}
                {/*                </div>*/}

                {/*                <div className="min-w-0">*/}
                {/*                    <p className="truncate text-sm font-bold text-slate-900">*/}
                {/*                        AgroMart*/}
                {/*                    </p>*/}

                {/*                    <p className="truncate text-[10px] font-medium uppercase tracking-wider text-emerald-600">*/}
                {/*                        Agriculture*/}
                {/*                    </p>*/}
                {/*                </div>*/}
                {/*            </motion.div>*/}
                {/*        ) : (*/}
                {/*            <motion.div*/}
                {/*                key="collapsed-brand"*/}
                {/*                initial={{ opacity: 0 }}*/}
                {/*                animate={{ opacity: 1 }}*/}
                {/*                exit={{ opacity: 0 }}*/}
                {/*                className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"*/}
                {/*            >*/}
                {/*                <Leaf className="h-5 w-5" />*/}
                {/*            </motion.div>*/}
                {/*        )}*/}
                {/*    </AnimatePresence>*/}
                {/*</div>*/}

                {/* =================================================
                    TOGGLE BUTTON
                ================================================= */}

                <button
                    type="button"
                    onClick={handleToggle}
                    aria-label={ collapsed ? "Open sidebar" : "Collapse sidebar" }
                    className={cn(
                        "absolute -right-3 top-[76px] z-10",
                        "hidden h-7 w-7 items-center justify-center",
                        "rounded-full border border-green-100 bg-white",
                        "text-slate-500 shadow-md",
                        "transition-all duration-200",
                        "hover:border-emerald-200 hover:bg-green-50 hover:text-green-700",
                        "md:flex"
                    )}
                >
                    {collapsed ? (
                        <ChevronRight className="h-3.5 w-3.5" />
                    ) : (
                        <ChevronRight className="h-3.5 w-3.5 rotate-180" />
                    )}
                </button>

                {/* =================================================
                    MOBILE CLOSE BUTTON
                ================================================= */}

                <button
                    type="button"
                    onClick={() => setCollapsed(true)}
                    aria-label="Close sidebar"
                    className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-emerald-50 hover:text-emerald-700 md:hidden"
                >
                    <X className="h-5 w-5" />
                </button>

                {/* =================================================
                    ROLE BADGE
                ================================================= */}

                {!collapsed && (
                    <div className="px-4 pt-4">
                        <div className="flex items-center gap-3 rounded-xl border border-green-100 bg-green-50/70 px-3 py-2.5">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-green-700">
                                <Shield className="h-4 w-4" />
                            </div>
                            <div className="min-w-0">
                                <p className="truncate text-xs font-semibold text-slate-800">
                                    {user.name}
                                </p>
                                <p className="mt-0.5 truncate text-[11px] font-medium text-green-600">
                                    {getRoleLabel(role)}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* =================================================
                    NAVIGATION
                ================================================= */}

                <nav
                    className={cn(
                        "flex-1 overflow-y-auto",
                        "scrollbar-thin scrollbar-thumb-green-200 scrollbar-track-transparent",
                        collapsed ? "px-2 py-5" : "px-3 py-5"
                    )}
                >
                    {!collapsed && (
                        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
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
                                    onClick={
                                        handleMobileNavigation
                                    }
                                    title={ collapsed ? item.label : undefined }
                                    className={cn(
                                        "group relative flex items-center rounded-xl",
                                        "text-sm font-medium",
                                        "transition-all duration-200",
                                        collapsed ? "justify-center px-3 py-3" : "gap-3 px-3 py-2.5",

                                        isActive
                                            ? [
                                                "bg-green-600",
                                                "text-white",
                                                "shadow-md shadow-green-600/20",
                                            ]
                                            : [
                                                "text-slate-600",
                                                "hover:bg-green-50",
                                                "hover:text-green-700",
                                            ]
                                    )}
                                >
                                    {/* Active indicator */}
                                    {isActive && (
                                        <motion.span
                                            layoutId="active-sidebar-item"
                                            className="absolute -left-3 top-1/2 hidden h-6 w-1 -translate-y-1/2 rounded-r-full bg-green-600 md:block"
                                        />
                                    )}
                                    {/* Icon */}
                                    <span
                                        className={cn(
                                            "flex shrink-0 items-center justify-center",
                                            "transition-transform duration-200",
                                            !isActive &&
                                            "group-hover:scale-105"
                                        )}
                                    >
                                        {item.icon}
                                    </span>

                                    {/* Label */}

                                    <AnimatePresence mode="wait">
                                        {!collapsed && (
                                            <motion.span
                                                initial={{
                                                    opacity: 0,
                                                    width: 0,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    width: "auto",
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    width: 0,
                                                }}
                                                transition={{
                                                    duration: 0.15,
                                                }}
                                                className="flex-1 overflow-hidden whitespace-nowrap"
                                            >
                                                {item.label}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>

                                    {/* Active arrow */}

                                    {!collapsed &&
                                        isActive && (
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    x: -4,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
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

                {/* =================================================
                    SIDEBAR FOOTER
                ================================================= */}

                {/*<div className="shrink-0 border-t border-emerald-100 bg-gradient-to-r from-emerald-50/70 to-green-50/50">*/}
                {/*    {!collapsed ? (*/}
                {/*        <div className="p-4">*/}
                {/*            <div className="rounded-xl border border-emerald-100 bg-white p-3">*/}
                {/*                <div className="flex items-center gap-3">*/}
                {/*                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">*/}
                {/*                        <Sprout className="h-4 w-4" />*/}
                {/*                    </div>*/}

                {/*                    <div className="min-w-0">*/}
                {/*                        <p className="truncate text-xs font-semibold text-slate-800">*/}
                {/*                            AgroMart*/}
                {/*                        </p>*/}

                {/*                        <p className="mt-0.5 text-[10px] text-slate-500">*/}
                {/*                            Smart Agriculture*/}
                {/*                        </p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    ) : (*/}
                {/*        <div className="flex justify-center p-4">*/}
                {/*            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">*/}
                {/*                <Sprout className="h-4 w-4" />*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    )}*/}
                {/*</div>*/}
            </aside>
        </>
    );
}