import React from "react";

const SubCategoryBox = ({ data }) => {
  return (
    <div className="bg-secondary-200 w-56 p-4 rounded">
      <p className="font-semibold text-lg">{data?.name}</p>
      <div className="flex items-baseline">
        <p className="text-primary-800 font-bold text-lg">Rs {data?.price}</p>
        <span className="text-[#858585] text-sm font-bold">/KG</span>
      </div>
    </div>
  );
};

export default SubCategoryBox;
