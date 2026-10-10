import ProfileSettings from "@/app/profile/_components/ProfileSettings";
import { getProfile } from "@/app/profile/_actions/getProfile";
export default async function ProfilePage() {
    const result = await getProfile();

    return (
        <main className="min-h-screen bg-slate-50">
            {result.success && result.data ? (
                <ProfileSettings initialProfile={result.data} />
            ) : (
                <p className="p-6 text-center text-red-500">
                    Failed to load profile. Please try again.
                </p>
            )}
        </main>
    );
}