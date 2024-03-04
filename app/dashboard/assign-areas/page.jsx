import React from "react";

import Breadcrumbs from "@/ui/dashboard/BreadCrumbs";
import Image from "next/image";

import AreaMap from "@/ui/dashboard/assign-areas/AreaMap";
import AllotAreas from "@/ui/dashboard/assign-areas/AllotAreas";
import { getRidersProfile } from "@/lib/firebase/firestore";

export const metadata = {
  title: "Assign Areas",
};

const AssignAreas = async () => {
  const profilesData = await getRidersProfile();
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "Assign Areas ",
            href: "/dashboard/assign-areas",
            active: true,
          },
        ]}
      />

      <div className="flex justify-center flex-wrap gap-10 mt-8 mb-12 ml-auto mr-auto max-w-7xl">
        {profilesData
          .filter((profile) => profile.status === "Approved")
          .map((profile) => (
            <AllotAreas key={profile} profileData={profile} />
          ))}
      </div>

      <div className="px-6 mt-8 rounded-2xl">
        <AreaMap profilseData={profilesData} />
      </div>

      {/* <div className="flex justify-center items-center flex-col">
        <Image
          src="/images/underworking.png"
          height={600}
          width={600}
          alt="underworking illustration"
        />
        <p className="max-w-md text-center">
          Oops! 😅 The feature you're looking for is in the final stages of
          development for mobile. Stay tuned, and we'll have it live for you as
          soon as it's ready!
        </p>
      </div> */}
    </div>
  );
};

export default AssignAreas;
