import React from "react";

import { fredoka } from "@/ui/fonts";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "@/lib/Services";
const Services = () => {
  return (
    <section className="container m-auto my-12 md:my-20">
      <div className="rounded-[35px] bg-primary-100 p-10 shadow-md">
        <div className="text-center max-w-2xl m-auto">
          <span
            className={`${fredoka.className} font-bold text-primary-800 text-lg sm:text-2xl`}
          >
            Services
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-[38px] font-semibold !leading-tight">
            We try our best to make our customers feels comfortable.
          </h2>
          <p className="max-w-xl m-auto my-6">
            Experience the convenience of our comprehensive services delivered
            right to your doorstep, making sustainability
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-8 mt-14 mb-8">
          {SERVICES.map((service) => (
            <ServiceCard serviceData={service} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
