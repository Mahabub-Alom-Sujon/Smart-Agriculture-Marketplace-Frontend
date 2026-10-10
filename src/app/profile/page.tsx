import React from "react";
import { getProfile } from "@/app/profile/_actions/getProfile";
import ProfileSettings from "./_components/ProfileSettings";
import { redirect } from "next/navigation";
export default async function Page() {
    const result = await getProfile();
    if (!result || !result.success || !result.data) {
        redirect("/profile");
    }
    return (
        <ProfileSettings initialProfile={result.data} />
    );
}

// import React from "react";
// import { getProfile } from "@/app/profile/_actions/getProfile";
// import ProfileSettings from "./_components/ProfileSettings";
//
// export default async function Page() {
//     const result = await getProfile();
//     const fallbackProfile = {
//         name: "",
//         email: "",
//         phone: "",
//         image: "",
//         address: "",
//     };
//
//     const profileData = result?.success && result?.data ? result.data : fallbackProfile;
//
//     return (
//         <ProfileSettings initialProfile={profileData} />
//     );
// }
