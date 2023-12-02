import React from "react";

import Breadcrumbs from "@/ui/dashboard/BreadCrumbs";
import NewListingForm from "@/ui/dashboard/listings/NewListingForm";

const NewListing = () => {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Listings", href: "/dashboard/listings" },
          {
            label: "Create new Listing",
            href: "/dashboard/listings/new-listing",
            active: true,
          },
        ]}
      />
      <div className="max-w-7xl mt-12 bg-500">
        <NewListingForm />
      </div>
    </>
  );
};

export default NewListing;
