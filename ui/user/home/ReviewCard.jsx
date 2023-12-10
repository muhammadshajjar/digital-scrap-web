import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { IoIosQuote } from "react-icons/io";
import { Avatar } from "antd";

const ReviewCard = ({ reviewData }) => {
  return (
    <div className="bg-white mx-9 p-5 rounded-lg shadow-md text-left mb-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar size="large" icon={<UserOutlined />} />
          <div>
            <h3 className="font-semibold">{reviewData?.name}</h3>
            <span className="text-sm font-light block mt-[-4px]">Customer</span>
          </div>
        </div>
        <IoIosQuote style={{ fontSize: "24px", color: "#42A554" }} />
      </div>

      <p className="text-sm my-3 leading-snug">{reviewData?.message}</p>
    </div>
  );
};

export default ReviewCard;
