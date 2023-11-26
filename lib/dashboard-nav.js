import { LuLayoutDashboard } from "react-icons/lu";
import { BsShop } from "react-icons/bs";
import { SiMedium } from "react-icons/si";
import { MdOutlineCategory } from "react-icons/md";
import { LuUserCog2 } from "react-icons/lu";
import { LuWarehouse } from "react-icons/lu";
import { TbMapStar } from "react-icons/tb";

export const DashboardNavLinks = [
  ["Dashboard", "/dashboard", LuLayoutDashboard],
  ["Active Listings", "/dashboard/listings", BsShop],
  ["Blogs", "/dashboard/blogs", SiMedium],
  ["Categories", "/dashboard/categories", MdOutlineCategory],
  ["Rider Profile", "/dashboard/rider-profile", LuUserCog2],
  ["Facilities", "/dashboard/facilities", LuWarehouse],
  ["Assign Areas", "/dashboard/assign-areas", TbMapStar],
];
