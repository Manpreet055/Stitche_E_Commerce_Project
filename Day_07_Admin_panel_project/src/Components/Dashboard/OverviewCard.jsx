import React from "react";
import CountUp from "react-countup";

const OverviewCard = ({ number, title }) => {
  return (
    <div className=" p-5 gap-3 shadow-md flex flex-col rounded-lg w-55 lg:w-xs">
      <div className="text-xl lg:text-3xl font-medium"><CountUp end={number}/></div>
      <div className="text-neutral-600">{title}</div>
    </div>
  );
};

export default OverviewCard;
