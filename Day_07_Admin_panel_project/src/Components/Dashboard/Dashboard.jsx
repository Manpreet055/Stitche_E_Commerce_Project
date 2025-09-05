import React from "react";
import SalesOverview from "./SalesOverview";
import OverviewCard from "./OverviewCard";
import Analytics from "./Analytics";
import Revenue from "./Revenue";
import { HandCoins, BookText, Users, Clock } from "lucide-react";
import Orders from "./Orders";

const Dashboard = () => {
  return (
    <div className=" w-full lg:p-4 py-6 h-screen overflow-scroll scrollbar-hidden ">
      <h2 className="text-4xl font-medium mb-6">Dashboard</h2>
      {/* This is the Overview Card Container which show KPI's information like Revenue ,Users etc. */}
      <div className="w-full flex gap-8 flex-wrap justify-between">
        <OverviewCard
          cash={true}
          icon={<HandCoins />}
          number="23388"
          title="Total Revenue"
        />
        <OverviewCard icon={<BookText />} number="2690" title="Total Sales" />
        <OverviewCard icon={<Users />} number="1453" title="Active Users" />
        <OverviewCard icon={<Clock />} number="187" title="Pending Orders" />
      </div>

      {/* This container contains linechart and barchart */}
      <div className="flex flex-wrap mt-7 grow w-full justify-between">
        <SalesOverview />
        <Analytics />
      </div>
      <Revenue />
      <Orders />
    </div>
  );
};

export default Dashboard;
