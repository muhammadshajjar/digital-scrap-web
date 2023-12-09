import React from "react";
import { getAllSubCategories } from "@/lib/firebase/firestore";
import ScrapItemsList from "@/ui/user/scraprates/ScrapItemsList";

const GetScrapRates = async () => {
  const subCategoriesData = await getAllSubCategories();
  return <ScrapItemsList subCategoriesData={subCategoriesData} />;
};

export default GetScrapRates;
