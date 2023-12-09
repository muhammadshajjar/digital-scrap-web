import React from "react";
import SubCategoryBox from "@/ui/dashboard/categories/SubCategoryBox";
import { Divider } from "antd";
import Image from "next/image";

const CategoryInfo = ({ categoryData }) => {
  return (
    <>
      <div className="lg:flex gap-10">
        <div className="lg:max-w-[350px] px-4 m-auto">
          <Image
            src={categoryData?.imagePath}
            width={300}
            height={300}
            className="w-3/4 m-auto lg:w-full"
          />
          <h2 className="text-2xl font-semibold my-3">{categoryData?.name}</h2>
          <p className="lg:max-w-[360px] mb-4">{categoryData?.description}</p>
        </div>
        <div className="flex-1 flex gap-10 flex-wrap self-baseline justify-center md:justify-start px-4">
          {categoryData?.subcategories.map((category) => (
            <SubCategoryBox key={category?.id} data={category} />
          ))}
        </div>
      </div>
      <Divider />
    </>
  );
};

export default CategoryInfo;
