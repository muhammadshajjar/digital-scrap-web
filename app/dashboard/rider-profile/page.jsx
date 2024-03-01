import React from "react";

import Breadcrumbs from "@/ui/dashboard/BreadCrumbs";
import ProfilesTable from "@/ui/dashboard/riderprofile/ProfilesTable";
import { getRidersProfile } from "@/lib/firebase/firestore";
export const metadata = {
  title: "Rider Profile",
};
const RiderProfile = async () => {
  const profilesData = await getRidersProfile();
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "Rider Profiles",
            href: "/dashboard/rider-profile",
            active: true,
          },
        ]}
      />
      <ProfilesTable profilesData={profilesData} />
    </>
  );
};

export default RiderProfile;
