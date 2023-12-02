"use client";

import { Skeleton } from "antd";
export const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <Skeleton
        active
        size="large"
        paragraph={{
          rows: 0,
        }}
        title={{
          width: 200,
        }}
      />
      <Skeleton.Button active />
    </div>
  );
};

export const Listings = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-10 ml-auto mr-auto max-w-6xl">
      <div className="bg-secondary-200 p-4 rounded-2xl w-64 flex justify-center flex-col items-center">
        <Skeleton.Image active block />
        <Skeleton
          active
          block
          paragraph={{ rows: 2 }}
          style={{ marginTop: "20px" }}
        />
      </div>
      <div className="bg-secondary-200 p-4 rounded-2xl w-64 flex justify-center flex-col items-center">
        <Skeleton.Image active block />
        <Skeleton
          active
          block
          paragraph={{ rows: 2 }}
          style={{ marginTop: "20px" }}
        />
      </div>
      <div className="bg-secondary-200 p-4 rounded-2xl w-64 flex justify-center flex-col items-center">
        <Skeleton.Image active block />
        <Skeleton
          active
          block
          paragraph={{ rows: 2 }}
          style={{ marginTop: "20px" }}
        />
      </div>
    </div>
  );
};

export const ListingForm = () => {
  return (
    <div className="max-w-7xl mt-16">
      <div className="flex justify-between mt-12">
        <div className="w-[48%] ">
          <Skeleton.Input active size="large" block />
        </div>
        <div className="w-[48%]">
          <Skeleton.Input active size="large" block />
        </div>
      </div>
      <div className="flex justify-between mt-12">
        <div className="w-[48%]">
          <Skeleton.Input active size="large" block />
        </div>
        <div className="w-[48%]">
          <Skeleton.Input active size="large" block />
        </div>
      </div>
      <div className="flex justify-between mt-12">
        <div className="w-[100%]">
          <Skeleton.Input
            active
            size="large"
            block
            style={{ height: "200px" }}
          />
        </div>
      </div>

      <div className="flex justify-between mt-12">
        <div className="w-[48%]">
          <Skeleton.Button active size="large" block />
        </div>
        <div className="w-[28%]">
          <Skeleton.Button active size="large" block />
        </div>
      </div>
    </div>
  );
};
