export const formateDateForBlogPost = (date) => {
  const options = { month: "short", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

export const mergeSubCategories = (CATEGORIESDATA, subCategoriesData) => {
  const mergedData = CATEGORIESDATA.map((category) => {
    const matchingSubcategory = subCategoriesData.find(
      (subcategory) => subcategory.id === category.id
    );

    if (matchingSubcategory) {
      return {
        ...category,
        subcategories: matchingSubcategory.subcategories,
      };
    }

    return category;
  });

  return mergedData;
};

export const convertToGeoJSON = (profilseData) => {
  return {
    type: "FeatureCollection",
    features: profilseData
      .filter((rider) => rider?.assignArea?.areaname !== " ")
      .map((rider) => ({
        type: "Feature",
        properties: {
          name: rider?.name,
          areaName: rider?.assignArea?.areaname,
        },
        geometry: {
          type: "Polygon",
          coordinates: [rider?.assignArea?.coordinates],
        },
      })),
  };
};