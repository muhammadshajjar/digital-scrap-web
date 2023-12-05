import CategoryBox from "@/ui/categories/CategoryBox";
import SubCategoryBox from "@/ui/categories/SubCategoryBox";
import Breadcrumbs from "@/ui/dashboard/BreadCrumbs";
import AllCategories from "@/app/dashboard/categories/AllCategories";

export const metadata = {
  title: "Categories",
};

const CATEGORIESDATA = [
  {
    id: "112",
    name: "Metals",
    iconURl: "",
    iamgeURl: "",
    subcategories: [
      { name: "Aluminum cans", price: "222" },
      { name: "Copper wire", price: "222" },
      { name: "Brass fixtures", price: "222" },
      { name: "Aluminum siding", price: "222" },
      { name: "Beverage Cans", price: "222" },
    ],
  },
  {
    id: "113",
    name: "Plastics",
    subcategories: [
      { name: " Plastics ", price: "222" },
      { name: "Plastics ", price: "222" },
      { name: "Plastics", price: "222" },
      { name: "Plastics  ", price: "222" },
      { name: "Plastics  ", price: "222" },
    ],
  },
  {
    id: "114",
    name: "Paper",
    subcategories: [
      { name: " Paper  ", price: "222" },
      { name: "Paper  ", price: "222" },
      { name: "Paper  ", price: "222" },
      { name: "Paper  ", price: "222" },
      { name: "Paper  ", price: "222" },
    ],
  },
  {
    id: "115",
    name: "E-Waste",
    subcategories: [
      { name: "Waste  cans", price: "222" },
      { name: "Waste  wire", price: "222" },
      { name: "Waste  fixtures", price: "222" },
      { name: "Waste  siding", price: "222" },
      { name: "Waste  Cans", price: "222" },
    ],
  },
  {
    id: "116",
    name: "Glass",
    subcategories: [
      { name: "Glass  cans", price: "222" },
      { name: "Glass  wire", price: "222" },
      { name: "Glass Brass ", price: "222" },
      { name: "Glass  siding", price: "222" },
      { name: "Glass Beverage ", price: "222" },
    ],
  },
];
const Categories = () => {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Categories", href: "/dashboard/categories", active: true },
        ]}
      />

      <AllCategories categoriesData={CATEGORIESDATA} />
    </>
  );
};

export default Categories;
