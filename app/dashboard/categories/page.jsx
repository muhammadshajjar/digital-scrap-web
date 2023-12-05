import Breadcrumbs from "@/ui/dashboard/BreadCrumbs";
import AllCategories from "@/app/dashboard/categories/AllCategories";
import { getAllSubCategories } from "@/lib/firebase/firestore";

export const metadata = {
  title: "Categories",
};

const Categories = async () => {
  const subCategoriesData = await getAllSubCategories();

  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Categories", href: "/dashboard/categories", active: true },
        ]}
      />

      <AllCategories subCategoriesData={subCategoriesData} />
    </>
  );
};

export default Categories;
