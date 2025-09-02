import React from "react";
import {
  LineChart,
  Line,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
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

const SalesOverview = () => {
  return (
    <div className="overflow-x-auto scrollbar-hidden h-full w-full 2xl:w-[760px] rounded-2xl">
      <div className="chart-card-style ">
      {" "}
      <h2 className="text-2xl font-medium p-4 mb-3">Sales Overview</h2>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart margin={{ bottom: 20,right:20 }} data={data}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Line stroke="#1c1cf4" strokeWidth={3} dataKey="Sales" />
          <Line stroke="#FFA500" strokeWidth={3} dataKey="InStore" />

          <XAxis dataKey="day" tick={{ dy: 15 }} />
          <YAxis />
          <Tooltip />
          <Legend
            verticalAlign="top"
            align="right "
            wrapperStyle={{ marginBottom: 30 }}
            height={36}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default SalesOverview;
