import React from "react";
import Market from "@/dynamic/livemarket/market";
import MarketBoard from "@/dynamic/livemarket/marketboard";
import MarketInput from "@/dynamic/livemarket/input";
import Crypto from "@/dynamic/livemarket/crypto";

function Markets() {
  return (
    <div>
      <Market />
      <MarketBoard />
      <div className="mt-4">
        <div>
          <div className="px-4 pb-2 text-white">
            <MarketInput />
            <Crypto />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Markets;
