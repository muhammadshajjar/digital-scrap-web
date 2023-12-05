import clsx from "clsx";
import React from "react";

const CategoryBox = ({ category, onCategorySelection, selectedId }) => {
  const listingClickHandler = () => {
    onCategorySelection(category?.id);
  };
  return (
    <div
      className={clsx(
        "flex items-center w-40 py-2 pl-4 pr-6 rounded cursor-pointer",
        selectedId === category?.id ? "bg-primary-800" : "bg-secondary-200"
      )}
      onClick={listingClickHandler}
    >
      <div className="bg-black rounded-3xl h-8 w-8 flex justify-center items-center">
        <category.icon style={{ color: "white", fontSize: "18px" }} />
      </div>
      <p
        className={clsx(
          "ml-2 font-semibold",
          selectedId === category?.id && "text-white"
        )}
      >
        {category?.name}
      </p>
    </div>
  );
};

export default CategoryBox;
