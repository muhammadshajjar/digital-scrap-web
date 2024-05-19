import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";
import { Divider } from "antd";

const Footer = () => {
  return (
    <footer className="bg-primary-100 mt-12">
      <div className="container m-auto pt-14 pb-3 px-2">
        <div className="m-auto max-w-md ">
          <Image
            src="/images/logo-bg-removed.png"
            width={285}
            height={35}
            alt="Company Logo"
            className="m-auto"
          />

          <p className="text-center my-6">
            Empowering individuals, businesses, and communities to embrace
            environmental responsibility through our platform.
          </p>
          <div>
            <ul className="flex justify-center items-center gap-4 ">
              <li>
                <a
                  href="https://web.facebook.com/people/Digital-Scrap/61559295926965/"
                  target="_blank"
                  className="bg-primary-800 block p-3 rounded-full"
                >
                  <FaFacebookF style={{ color: "white", fontSize: "20px" }} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/digital_scrap_pk/"
                  target="_blank"
                  className="bg-primary-800 block p-3 rounded-full"
                >
                  <FaInstagram style={{ color: "white", fontSize: "20px" }} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/digital-scrap/"
                  target="_blank"
                  className="bg-primary-800 block p-3 rounded-full"
                >
                  <FaLinkedinIn style={{ color: "white", fontSize: "20px" }} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/digital_scrappk"
                  target="_blank"
                  className="bg-primary-800 block p-3 rounded-full"
                >
                  <FaXTwitter style={{ color: "white", fontSize: "20px" }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Divider style={{ marginTop: "50px" }} />
          <div className="flex justify-between items-center flex-col lg:flex-row gap-2">
            <p className="text-[#858585] flex-1">
              @2023 DigitalScrap | All rights reserved.
            </p>
            <div className="flex items-center flex-1 justify-center">
              <p>We Accepet Payment:</p>
              <Image
                src="/images/stripelogo.png"
                alt="Strip Company Logo"
                height={20}
                width={80}
              />
              <Image
                src="/images/easypaisalogo.png"
                alt="Strip Company Logo"
                height={35}
                width={35}
              />
            </div>
            <div className="flex items-center flex-1 justify-end">
              <BsGlobe />
              <p className="underline ml-2 cursor-pointer">English</p>
            </div>
          </div>

          <Divider style={{ marginBottom: "10px" }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
