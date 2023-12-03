import React from "react";

import Breadcrumbs from "@/ui/dashboard/BreadCrumbs";

import { getSpecificListing } from "@/lib/firebase/firestore";
import ListingForm from "@/ui/dashboard/listings/ListingForm";

const EditListing = async ({ params }) => {
  const listingData = await getSpecificListing(params.id);

  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Listings", href: "/dashboard/listings" },
          {
            label: "Edit Listing",
            href: "/dashboard/listings/23432/edit",
            active: true,
          },
        ]}
      />
      <div className=" max-w-7xl mt-12">
        <ListingForm listingData={listingData} id={params.id} />
      </div>
    </>
  );
};

export default EditListing;
