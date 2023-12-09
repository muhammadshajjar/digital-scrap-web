import { Poppins, Fredoka } from "next/font/google";

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const fredoka = Fredoka({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});
