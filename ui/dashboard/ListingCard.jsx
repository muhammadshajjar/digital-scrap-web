import React from "react";
import Image from "next/image";
import { DeleteListing, UpdateListing } from "@/ui/dashboard/ListingActions";

const ListingCard = ({ listingData }) => {
  const imageURL = listingData.pictures[0];

  return (
    <div className="bg-secondary-200 max-w-fit p-4 rounded-2xl">
      <Image
        src={imageURL}
        width={300}
        height={100}
        alt="Listing picture"
        className="rounded-2xl h-52 bg-white "
      />

      <div>
        <div className="flex justify-between items-center my-3">
          <p className="">{listingData?.title}</p>
          <div>
            <UpdateListing id={listingData?.id} />
            <DeleteListing id={listingData?.id} />
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <h2 className="font-bold text-lg">{`Rs. ${listingData?.price}`}</h2>
          <span className="text-sm">{`${listingData?.condition}/10`}</span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
