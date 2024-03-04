import React from "react";

const HoverCard = ({ name, areaName }) => {
  return (
    <>
      <div className="flex gap-2">
        <h2>Rider Name : </h2>
        <p>{name}</p>
      </div>
      <div className="flex gap-2">
        <h2>Assigned Area : </h2>
        <p>{areaName}</p>
      </div>
    </>
  );
};

export default HoverCard;
