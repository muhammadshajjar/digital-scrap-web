import React from "react";

import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/ui/dashboard/BreadCrumbs";

import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import {
  DeleteListing,
  UpdateListing,
} from "@/ui/dashboard/listings/ListingActions";
import ListingCard from "@/ui/dashboard/ListingCard";
import { getAllListings, test } from "@/lib/firebase/firestore";

export const metadata = {
  title: "Market Place",
};
const MarketPlace = async () => {
  const listingData = await getAllListings();

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

      <div className="flex flex-wrap justify-center gap-10 mt-10 ml-auto mr-auto max-w-6xl">
        {listingData?.map((listing) => (
          <ListingCard listingData={listing} key={listing.id} />
        ))}
      </div>
    </>
  );
};

export default MarketPlace;
