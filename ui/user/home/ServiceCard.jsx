import React from "react";
import { LuCalendarClock } from "react-icons/lu";
const ServiceCard = ({ serviceData }) => {
  return (
    <div className="bg-white py-8 px-8 w-fit rounded-lg shadow-md">
      {
        <serviceData.icon
          style={{ color: "#42A554", fontSize: "36px", marginTop: "24px" }}
        />
      }
      <h3 className="font-semibold text-lg my-4">{serviceData?.name}</h3>
      <p className="max-w-[200px] ">{serviceData?.desc}</p>
    </div>
  );
};

export default ServiceCard;
