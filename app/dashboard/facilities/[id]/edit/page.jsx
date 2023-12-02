import React from "react";

import Breadcrumbs from "@/ui/dashboard/BreadCrumbs";

import { getSpecificFacility } from "@/lib/firebase/firestore";
import NewFacilityForm from "@/ui/dashboard/facilities/FacilityForm";

const EditFacility = async ({ params }) => {
  const facilityData = await getSpecificFacility(params.id);

  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Facilities", href: "/dashboard/facilities" },
          {
            label: "Edit Facility",
            href: "/dashboard/facilities/23432/edit",
            active: true,
          },
        ]}
      />
      <div className=" max-w-7xl mt-12">
        <NewFacilityForm facilityData={facilityData} id={params.id} />
      </div>
    </>
  );
};

export default EditFacility;
