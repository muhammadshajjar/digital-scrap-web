"use client";
import { useState } from "react";
import { Divider } from "antd";

import CategoryBox from "@/ui/dashboard/categories/CategoryBox";

import { CATEGORIESDATA } from "@/lib/Categories";
import CategoryInfo from "./CategoryInfo";
import { mergeSubCategories } from "@/helper/utilityFunctions";

const ScrapItemsList = ({ subCategoriesData }) => {
  const [selectedCategoryId, setSelectedCategoryID] = useState("all");
  const mergedData = mergeSubCategories(CATEGORIESDATA, subCategoriesData);

  const categorySelectionHandler = (id) => {
    setSelectedCategoryID(id);
  };

  // Filtered category JSX
  const filteredCategoryContent =
    selectedCategoryId === "all"
      ? mergedData
          .filter((category) => category.id !== "all")
          .map((category) => <CategoryInfo categoryData={category} />)
      : mergedData
          .filter((category) => category.id === selectedCategoryId)
          .map((category) => <CategoryInfo categoryData={category} />);

  return (
    <div className="container m-auto">
      <div className="flex gap-4 sm:gap-8 md:gap-14 flex-wrap justify-center sm:justify-start mb-10 mt-8">
        {CATEGORIESDATA.map((category) => (
          <CategoryBox
            key={category.id}
            category={category}
            onCategorySelection={categorySelectionHandler}
            selectedId={selectedCategoryId}
          />
        ))}
      </div>
      <Divider />
      {filteredCategoryContent}
    </div>
  );
};

export default ScrapItemsList;
