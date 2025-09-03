import React from "react";
import {
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
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
const Analytics = () => {
  return (
    <div className=" overflow-x-auto scrollbar-hidden w-full h-full 2xl:w-[760px] rounded-2xl">
      <div
        className="
    chart-card-style 
    "
      >
        <h2 className="text-2xl font-medium p-4 mb-3">Analytics</h2>
        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={data} margin={{ bottom: 20, right: 20 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <Bar fill="#9F1239" dataKey="InStore" />
            <Bar fill="#E3DAB7" dataKey="Sales" />
            <XAxis tick={{ dy: 15 }} dataKey="day" />
            <YAxis />
            <Legend
              verticalAlign="top"
              align="right "
              wrapperStyle={{ marginBottom: 30 }}
              height={36}
            />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
