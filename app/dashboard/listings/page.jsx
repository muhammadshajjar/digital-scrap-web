import React, { Suspense } from "react";

import Link from "next/link";
import Breadcrumbs from "@/ui/dashboard/BreadCrumbs";

import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AllListings from "./AllListings";

import { Listings } from "@/ui/dashboard/Skeletons";

export const metadata = {
  title: "Market Place",
};

const MarketPlace = async () => {
  return (
    <>
      <div className="flex justify-between items-center ">
        <Breadcrumbs
          breadcrumbs={[
            {
              label: "Active Listings",
              href: "/dashboard/listings",
              active: true,
            },
          ]}
        />
        <Link href="/dashboard/listings/new">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="large"
            className="bg-primary-800"
          >
            Create New
          </Button>
        </Link>
      </div>

      <Suspense fallback={<Listings />}>
        <AllListings />
      </Suspense>
    </>
  );
};

export default MarketPlace;
