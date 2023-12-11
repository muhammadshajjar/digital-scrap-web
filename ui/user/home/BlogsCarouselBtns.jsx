import React from "react";
import { Button } from "antd";
import { IoArrowForwardOutline, IoArrowBackOutline } from "react-icons/io5";
const BlogsCarouselBtns = ({ slider }) => {
  return (
    <div className="flex justify-center items-center gap-3">
      <Button
        type="primary"
        shape="circle"
        icon={<IoArrowBackOutline />}
        size="large"
        className="!bg-primary-800"
        onClick={() => slider.current.prev()}
      />
      <Button
        type="primary"
        shape="circle"
        icon={<IoArrowForwardOutline />}
        size="large"
        className="!bg-primary-800"
        onClick={() => slider.current.next()}
      />
    </div>
  );
};

export default BlogsCarouselBtns;
