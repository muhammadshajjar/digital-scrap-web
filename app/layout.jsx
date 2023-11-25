import "./globals.css";
import { Poppins } from "next/font/google";

import StyledComponentsRegistry from "@/lib/AntdRegistry";

import { ConfigProvider } from "antd";
import theme from "@/themeConfig";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | Digital Scrap",
    default: "Digital Scrap",
  },
  description: "A web app to optimize scrap collection",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={poppins.className}>
      <ConfigProvider theme={theme}>
        <body className={`${poppins.className} antialiased box-border`}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </ConfigProvider>
    </html>
  );
};

export default RootLayout;
