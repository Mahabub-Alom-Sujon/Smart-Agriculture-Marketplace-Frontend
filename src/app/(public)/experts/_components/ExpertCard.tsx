import Link from "next/link";
import {
    ArrowUpRight,
    Award,
    BriefcaseBusiness,
    CalendarDays,
    CheckCircle2,
    GraduationCap,
    Mail,
    MapPin,
    MessageCircle,
    Stethoscope,
} from "lucide-react";
import type { Expert } from "@/types/types.expert";
interface ExpertCardProps {
    expert: Expert;
}
export default function ExpertCard({
    expert,
}: ExpertCardProps) {
    const initial = expert.name.trim().charAt(0).toUpperCase();
    const joinedDate = new Date(
        expert.createdAt
    ).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
    });

    return (
        <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-emerald-800 dark:hover:shadow-black/20">
            {/* Top Accent */}
            <div className="h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500" />

            {/* Profile Header */}
            <div className="px-5 pt-5">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                        {/* Avatar */}
                        <div className="relative shrink-0">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 text-xl font-bold text-green-700 ring-4 ring-green-50 dark:from-green-950 dark:to-emerald-950 dark:text-emerald-300 dark:ring-slate-800">
                                {initial}
                            </div>
                            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500 dark:border-slate-900" />
                        </div>
                        <div className="min-w-0">
                            <h3 className="truncate text-lg font-bold text-slate-900 transition-colors group-hover:text-green-700 dark:text-slate-100 dark:group-hover:text-emerald-400">
                                {expert.name}
                            </h3>
                            <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                                <MapPin className="h-3.5 w-3.5 shrink-0 text-green-500 dark:text-emerald-400" />
                                <span className="truncate">
                                    {expert.city}
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Verified Badge */}
                    <div className="flex shrink-0 items-center gap-1 rounded-full bg-green-50 px-2.5 py-1.5 text-[10px] font-semibold text-green-700 dark:bg-green-950/70 dark:text-green-300">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Verified
                    </div>
                </div>
            </div>
            {/* Specialization */}
            <div className="mx-5 mt-5 rounded-xl border border-green-100 bg-green-50/70 p-4 dark:border-green-900/60 dark:bg-green-950/30">
                <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-green-600 shadow-sm dark:bg-slate-800 dark:text-emerald-400">
                        <Stethoscope className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-green-600 dark:text-emerald-400">
                            Specialization
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {expert.specialization}
                        </p>
                    </div>
                </div>
            </div>
            {/* Qualification + Experience */}
            <div className="mx-5 mt-4 grid grid-cols-2 overflow-hidden rounded-xl border border-slate-100 dark:border-slate-800">
                <div className="border-r border-slate-100 p-4 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-green-600 dark:text-emerald-400" />

                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                            Qualification
                        </span>
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm font-bold text-slate-900 dark:text-slate-100">
                        {expert.qualification}
                    </p>
                </div>
                <div className="p-4">
                    <div className="flex items-center gap-2">
                        <BriefcaseBusiness className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                            Experience
                        </span>
                    </div>
                    <p className="mt-2 text-xl font-bold text-slate-900 dark:text-slate-100">
                        {expert.experience}
                        <span className="ml-1 text-xs font-medium text-slate-400 dark:text-slate-500">
                            years
                        </span>
                    </p>
                </div>
            </div>
            {/* Email */}
            <div className="mx-5 mt-4 flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2.5 text-xs text-slate-500 dark:bg-slate-800/70 dark:text-slate-400">
                <Mail className="h-3.5 w-3.5 shrink-0 text-slate-400 dark:text-slate-500" />
                <span className="truncate">
                    {expert.email}
                </span>
            </div>
            {/* Advice Information */}
            <div className="mx-5 mt-4 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <Award className="h-4 w-4 shrink-0 text-amber-500" />
                    <span>
                        {expert.expertAdvices.length}{" "}
                        {expert.expertAdvices.length === 1 ? "Expert Advice" : "Expert Advices"}
                    </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                    <CalendarDays className="h-3.5 w-3.5 shrink-0" />
                    <span>{joinedDate}</span>
                </div>
            </div>
            {/* Actions */}
            <div className="mx-5 mt-5 flex gap-2 border-t border-slate-100 pb-5 pt-4 dark:border-slate-800">
                <Link
                    href={`/experts/${expert.id}`}
                    className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
                >
                    View Profile
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>

                <button
                    type="button"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-all hover:border-green-200 hover:bg-green-50 hover:text-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 dark:border-slate-700 dark:text-slate-400 dark:hover:border-emerald-800 dark:hover:bg-emerald-950/50 dark:hover:text-emerald-400"
                    aria-label={`Contact ${expert.name}`}
                >
                    <MessageCircle className="h-4 w-4" />
                </button>
            </div>
        </article>
    );
}