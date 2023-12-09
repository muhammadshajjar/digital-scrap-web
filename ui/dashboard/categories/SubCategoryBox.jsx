import React from "react";

const SubCategoryBox = ({ data }) => {
  return (
    <div className="bg-secondary-200 w-56 p-4 rounded h-fit">
      <p className="font-semibold text-lg">{data?.name}</p>
      <div className="flex items-baseline">
        <p className="text-primary-800 font-semibold text-lg">
          Rs {data?.price}
        </p>
        <span className="text-[#858585] text-sm font-medium">/KG</span>
      </div>
    </div>
  );
};

export default SubCategoryBox;
