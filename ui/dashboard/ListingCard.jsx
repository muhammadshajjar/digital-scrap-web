import React from "react";
import Image from "next/image";
import { DeleteListing, UpdateListing } from "@/ui/dashboard/ListingActions";

const ListingCard = () => {
  return (
    <div className="bg-secondary-200 max-w-fit p-4 rounded-2xl">
      <Image
        src="/images/testlistingimage.jpg"
        width={300}
        height={30}
        alt="Company Logo"
        className="rounded-2xl"
      />
      <div>
        <div className="flex justify-between items-center my-3">
          <p className="">Antique Keys</p>
          <div>
            <UpdateListing id="test123" />
            <DeleteListing id="test123" />
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <h2 className="font-bold text-lg">Rs. 5000</h2>
          <span className="text-sm">10/10</span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
