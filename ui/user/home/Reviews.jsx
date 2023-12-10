import React from "react";
import { fredoka } from "@/ui/fonts";
import ReviewsCarousel from "./ReviewsCarousel";
const Reviews = () => {
  return (
    <section className="bg-primary-100 py-12 px-4">
      <div className="container m-auto text-center">
        <span
          className={`${fredoka.className} font-bold text-primary-800 text-lg sm:text-2xl`}
        >
          Reviews
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-[38px] font-semibold !leading-tight">
          Discover Trusted Reviews
        </h2>
        <p className="my-2">
          Real stories, real experiences—because your feedback matters.
        </p>
        <div>
          <ReviewsCarousel />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
