import React from "react";
import Link from "next/link";

function Market() {
  return (
    <div className="text-white/80 p-4">
      <div className="title mt-3 text-xl font-bold">Markets</div>
      <div className="currency-tabs-container w-full font-bold">
        <div className="flex items-center mt-4">
          <Link href="/dashboard/markets">
            <div className="py-2 px-3 e rounded-sm font-bold bg-[#222] mr-1 text-sm cursor-pointer hover:bg-[#333] transition-all">
              Crypto
            </div>
          </Link >
          <Link href="/dashboard/markets/stock">
            <div className="py-2 px-3 rounded-sm mx-1 text-sm cursor-pointer hover:bg-[#333] transition-all">
              Stock
            </div>
          </Link >
          <Link href="/dashboard/markets/currencies">
            <div className="py-2 px-3 rounded-sm mx-1 text-sm cursor-pointer hover:bg-[#333] transition-all">
              Forex
            </div>
          </Link >
          <Link href="/dashboard/markets/mytrades">
            <div className="py-2 px-3 rounded-sm mx-1 text-sm cursor-pointer hover:bg-[#333] transition-all">
              My Trades
            </div>
          </Link >
        </div>
      </div>
    </div>
  );
}

export default Market;
