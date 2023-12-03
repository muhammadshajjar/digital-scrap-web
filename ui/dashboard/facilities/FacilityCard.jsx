import React from "react";
import Image from "next/image";

import { GrLocation } from "react-icons/gr";
import { GrPhone } from "react-icons/gr";
import { LiaUserEditSolid } from "react-icons/lia";

import {
  DeleteFacility,
  UpdateFacility,
} from "@/ui/dashboard/facilities/FacilityActions";

const FacilityCard = ({ facilityData }) => {
  const imageURL = facilityData?.pictures[0]?.url;

  return (
    <div className="bg-secondary-200 w-[355px] p-4 rounded-2xl">
      <Image
        src={imageURL}
        width={355}
        height={120}
        alt="Listing picture"
        className="rounded-2xl h-52 bg-white w-full "
      />

      <div>
        <div className="flex justify-between items-center my-3">
          <p className="text-lg">{facilityData?.title}</p>
          <div>
            <UpdateFacility id={facilityData?.id} />
            <DeleteFacility id={facilityData?.id} />
          </div>
        </div>
        <div className="w-5/6">
          <div className="flex items-center">
            <GrLocation style={{ fontSize: "28px", color: "#42A554" }} />
            <p className="text-sm ml-2 mt-2">{facilityData?.address}</p>
          </div>
          <div className="flex items-center ">
            <GrPhone style={{ fontSize: "26px", color: "#42A554" }} />
            <p className="text-sm ml-2 mt-2">
              <a href="tel:0321-2523296"> {facilityData?.phonenumber}</a>
            </p>
          </div>
          <div className="flex items-center">
            <LiaUserEditSolid style={{ fontSize: "26px", color: "#42A554" }} />
            <p className="text-sm ml-2 mt-2">{facilityData?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
