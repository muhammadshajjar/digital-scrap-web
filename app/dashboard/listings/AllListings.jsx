import React from "react";

import { getAllListings } from "@/lib/firebase/firestore";
import ListingCard from "@/ui/dashboard/listings/ListingCard";

import { Empty } from "antd";

const AllListings = async () => {
  const listingData = await getAllListings();
  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 mt-10 ml-auto mr-auto max-w-6xl">
        {listingData?.map((listing) => (
          <ListingCard listingData={listing} key={listing.id} />
        ))}
      </div>

      {listingData.length === 0 && (
        <Empty description={<span>No Listing Found!</span>} />
      )}
    </>
  );
};

export default AllListings;
