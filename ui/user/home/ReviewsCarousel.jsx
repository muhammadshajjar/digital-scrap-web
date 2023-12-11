"use client";
import React from "react";
import { Carousel } from "antd";

import ReviewCard from "./ReviewCard";
import { REVIEWS } from "@/lib/Reviews";
const ReviewsCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Carousel {...settings} className="mt-12 mb-8">
      {REVIEWS.map((review) => (
        <ReviewCard key={Math.random().toString()} reviewData={review} />
      ))}
    </Carousel>
  );
};

export default ReviewsCarousel;
