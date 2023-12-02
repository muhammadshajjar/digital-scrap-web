import React from "react";

import { getAllFacilities } from "@/lib/firebase/firestore";

import FacilityCard from "@/ui/dashboard/facilities/FacilityCard";

import { Empty } from "antd";

const AllListings = async () => {
  const facilitiesData = await getAllFacilities();

  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 mt-10 ml-auto mr-auto max-w-7xl">
        {facilitiesData?.map((facility) => (
          <FacilityCard facilityData={facility} key={facility.id} />
        ))}
      </div>

      {facilitiesData.length === 0 && (
        <Empty description={<span>No Listing Found!</span>} />
      )}
    </>
  );
};

export default AllListings;
