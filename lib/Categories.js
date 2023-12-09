import { GiMetalBar } from "react-icons/gi";
import { FaBottleWater } from "react-icons/fa6";
import { GiNewspaper } from "react-icons/gi";
import { FaMicrochip } from "react-icons/fa6";
import { GiBrokenBottle } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
export const CATEGORIESDATA = [
  {
    id: "all",
    name: "All",
    icon: RxHamburgerMenu,
  },
  {
    id: "112metal",
    name: "Metals",
    icon: GiMetalBar,
    imagePath: "/images/metals.png",
    description:
      "Metals are one of the most commonly recycled materials. This category includes a wide range of metal items, from aluminum cans to copper wire and brass fixtures",
  },
  {
    id: "113plastic",
    name: "Plastics",
    icon: FaBottleWater,
    imagePath: "/images/plastic.png",
    description:
      "Plastics are versatile materials used in numerous everyday items. This category encompasses plastic bottles, containers, and various plastic products",
  },
  {
    id: "114ewaste",
    name: "E-Waste",
    icon: FaMicrochip,
    imagePath: "/images/ewaste.png",
    description:
      "Electronics and electronic waste (e-waste) include items such as computers, mobile phones, televisions, and circuit boards",
  },
  {
    id: "115glass",
    name: "Glass",
    icon: GiBrokenBottle,
    imagePath: "/images/glass.png",
    description:
      "Glass is a common material used in containers, windows, and household products. This category includes glass bottles, jars, and various glass items",
  },
  {
    id: "116paper",
    name: "Paper",
    icon: GiNewspaper,
    imagePath: "/images/paper.png",
    description:
      "Paper and cardboard materials are widely used for packaging, printing, and writing. This category covers items like newspapers, cardboard boxes, magazines, and office paper",
  },
];
