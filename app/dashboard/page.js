import React from "react";
import Greeting from "@/dynamic/dashboard/greetings";
import AccountBoard from "@/dynamic/dashboard/accountboard";
import TradingProgress from "@/dynamic/dashboard/tradingProgress";
import DashCards from "@/dynamic/dashboard/dashcards";
import Plans from "@/dynamic/dashboard/plans";
import Staking from "@/dynamic/dashboard/staking";
import Trades from "@/dynamic/dashboard/trades";
import Assets from "@/dynamic/dashboard/assets";

import "@/css/tailwindcss.css";

function Dashboard() {
  return (
    <div>
      <Greeting />
      <AccountBoard />
      <TradingProgress />
      <DashCards />
      <Plans />
      <Staking />
      <Trades />
      <Assets />
    </div>
  );
}

export default Dashboard;
