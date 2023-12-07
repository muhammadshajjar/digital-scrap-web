import React from "react";

const StatsCard = ({ title, desc }) => {
  return (
    <div className="bg-secondary-200 rounded-lg py-4 px-6 w-[300px] border-b-4 border-primary-800">
      <h2 className="text-xl font-medium">{title}</h2>
      <p className="text-center text-lg tracking-wide font-semibold mt-3 text-[rgb(123,123,123)]">
        {desc}
      </p>
    </div>
  );
};

export default StatsCard;
