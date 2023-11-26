import React from "react";

import Breadcrumbs from "@/ui/dashboard/BreadCrumbs";

import NewListingForm from "@/ui/dashboard/NewListingForm";

const EditListing = () => {
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
        <NewListingForm />
      </div>
    </>
  );
};

export default EditListing;
