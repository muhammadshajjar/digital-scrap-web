import { LuCalendarClock } from "react-icons/lu";
import { BsShopWindow } from "react-icons/bs";
import { TfiTrash } from "react-icons/tfi";
import { HiOutlineUsers } from "react-icons/hi2";
export const SERVICES = [
  {
    id: "1",
    name: "Schedule Pickups",
    desc: "Fixed your own convenient time with our Rider",
    icon: LuCalendarClock,
  },
  {
    id: "2",
    name: "Scrap Marketplace",
    desc: "Find the perfect scrap for your needs, through scrap listings",
    icon: BsShopWindow,
  },
  {
    id: "3",
    name: "Smart Trashbins",
    desc: "Monitor their fill levels and automatically notify you for pickup",
    icon: TfiTrash,
  },
  {
    id: "4",
    name: "Awareness",
    desc: "Our commitment to community well-being includes blogs",
    icon: HiOutlineUsers,
  },
];
