import React from "react";

import Breadcrumbs from "@/ui/dashboard/BreadCrumbs";
import ProfilesTable from "@/ui/dashboard/riderprofile/ProfilesTable";
export const metadata = {
  title: "Rider Profile",
};
const RiderProfile = () => {
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
      <ProfilesTable />
    </>
  );
};

export default RiderProfile;
