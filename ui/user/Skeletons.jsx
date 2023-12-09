"use client";

import { Skeleton, Divider } from "antd";
import { CategoriesCard } from "../dashboard/Skeletons";
export const ScrapList = () => {
  return (
    <div className="container m-auto">
      <div className="flex gap-14 flex-wrap mb-16 mt-12  ">
        {[1, 1, 1, 1, 1, 1].map((_, index) => (
          <CategoriesCard key={index} />
        ))}
      </div>

      <Divider />
      <div className="flex gap-8">
        <div className="max-w-[350px]">
          <Skeleton.Image
            active
            block
            style={{ width: "300px", height: "200px", marginBottom: "20px" }}
          />
          <Skeleton active />
        </div>
        <div className="flex gap-10 flex-wrap self-baseline">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
            <CategoriesCard key={index} />
          ))}
        </div>
      </div>
      <Divider />
    </div>
  );
};
