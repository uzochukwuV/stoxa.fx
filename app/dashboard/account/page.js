import React from "react";
import MarketBoard from "@/dynamic/livemarket/marketboard";
import Plans from "@/dynamic/dashboard/plans";
import AccountInfo from "@/dynamic/account/accountinfo";
import AccountSetting from "@/dynamic/account/accountsetting";

function Account() {
  return (
    <div>
      <MarketBoard />
      <Plans />
      <div>
        <AccountInfo />
        <AccountSetting />
      </div>
    </div>
  );
}

export default Account;
