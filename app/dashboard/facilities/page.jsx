import React from "react";

import { getAllListings, test } from "@/lib/firebase/firestore";
import Test from "@/ui/dashboard/Test";
export const metadata = {
  title: "Facilities",
};
const Facilities = async () => {
  const listing = await getAllListings();
  console.log(listing);

  return (
    <>
      <div>Facilities</div>
      <Test />
    </>
  );
};

export default Facilities;
