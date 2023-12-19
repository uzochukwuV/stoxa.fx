"use client";

import React, { useEffect, useState } from "react";
import MarketBoard from "@/dynamic/livemarket/marketboard";
import Plans from "@/dynamic/dashboard/plans";
// import AccountInfo from "@/dynamic/account/accountinfo";
import AccountSetting from "@/dynamic/account/accountsetting";
import { url } from "@/utils/static";

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
