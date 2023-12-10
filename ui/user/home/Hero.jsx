import React from "react";
import Image from "next/image";

import { Button } from "antd";

const Hero = () => {
  return (
    <section className="container m-auto px-4 mt-12 md:mt-36 text-center md:flex justify-between md:text-left">
      <div className="md:max-w-lg">
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl !leading-tight">
          Your One-Stop Scrap Management Solution!
        </h1>
        <p className="text-sm md:text-base lg:text-lg my-5">
          Welcome to DigitalScrap, your gateway to a more sustainable,
          efficient, and transparent scrap collection. Explore, trade, and
          recycle with confidence, all in one place.
        </p>

        <Button
          type="primary"
          shape="round"
          size="large"
          className="!bg-primary-800 !h-12 mb-8"
        >
          Download the app
        </Button>
      </div>

      <Image
        src="/images/heroillustration.png"
        height={500}
        width={500}
        alt="Hero Image Illustration"
        className="m-auto md:w-[640px] md:mt-14"
      />
    </section>
  );
};

export default Hero;
