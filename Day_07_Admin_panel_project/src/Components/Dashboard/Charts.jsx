import React from "react";
import {
  LineChart,
  Line,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
const data = [
  { day: "Mon", Sales: "19", InStore: "33" },
  { day: "Tue", Sales: "28", InStore: "44" },
  { day: "Wed", Sales: "40", InStore: "56" },
  { day: "Thu", Sales: "25", InStore: "30" },
  { day: "Fri", Sales: "44", InStore: "50" },
  { day: "Sat", Sales: "35", InStore: "40" },
  { day: "Sun", Sales: "60", InStore: "63" },
];

const Charts = () => {
  return (
    <div className=" shadow-lg mt-10 w-fit rounded-2xl p-3 pr-10 ">
      {" "}
      <h2 className="text-2xl font-medium p-4 mb-3">Sales Overview</h2>
      <LineChart margin={{ bottom: 20 }} width={670} height={400} data={data}>
        <CartesianGrid />
        <Line type="monotone" dataKey="Sales" strokeWidth={2} />
        <Line
          type="monotone"
          dataKey="InStore"
          strokeWidth={2}
          stroke="#FFA500"
        />
        <XAxis dataKey="day" tick={{ dy: 15 }} />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top"
        align="right "
        wrapperStyle={{marginBottom:30}}
        height={36} />
      </LineChart>
    </div>
  );
};

export default Charts;
