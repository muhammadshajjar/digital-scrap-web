import React from "react";

import Breadcrumbs from "@/ui/dashboard/BreadCrumbs";
import Image from "next/image";

export const metadata = {
  title: "Assign Areas",
};
const AssignAreas = () => {
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
      <div className="flex justify-center items-center flex-col">
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
      </div>
    </div>
  );
};

export default AssignAreas;
