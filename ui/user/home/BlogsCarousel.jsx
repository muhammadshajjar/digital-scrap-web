"use client";
import React, { useRef } from "react";
import { Carousel } from "antd";
import BlogCard from "./BlogCard";
import BlogsCarouselBtns from "./BlogsCarouselBtns";

const BlogsCarousel = ({ blogPosts }) => {
  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    // autoplay: true,
    // autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Carousel ref={slider} {...settings} className="mt-14 mb-8">
        {blogPosts.map((post) => (
          <BlogCard key={post?.id} blogPostData={post} />
        ))}
      </Carousel>
      <BlogsCarouselBtns slider={slider} />
    </>
  );
};

export default BlogsCarousel;
