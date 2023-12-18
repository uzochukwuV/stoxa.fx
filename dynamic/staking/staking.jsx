'use client'

import React, { useState } from "react";
import Image from "next/image";
import Stake from "./stake";
import { coinJson } from "@/utils/static";
import Link from "next/link";

function Staking() {
  const [item, setItem] = useState(null)
  const LoadCard = (item)=> {
    setItem(item)
  }
  return (
    <div style={{minWidth: "100%", display: "table"}}>
      <div>
        <div className="mt-6 px-4 text-black/70">
          <div>
            <div className="header text-xk font-bold">Staking</div>
            <p className="text-sm opacity-90">
              Lock up asset for a given period for a certain percentage to earn
              more
            </p>
          </div>
          <div className="currency-tabs-container w-full font-bold">
            <div className="flex items-center mt-4">
              <Link  href="/dashboard/stake">
                <div className="py-2 px-3 e rounded-sm font-bold bg-black/5 mr-1 text-sm cursor-pointer hover:bg-[#333] transition-all">
                  Crypto
                </div>
              </Link  >
              <Link  href="/dashboard/stake/stock">
                <div className="py-2 px-3 rounded-sm mx-1 text-sm cursor-pointer hover:bg-[#333] transition-all">
                  Stock
                </div>
              </Link  >
              <Link  href="/dashboard/stake/currencies">
                <div className="py-2 px-3 rounded-sm mx-1 text-sm cursor-pointer hover:bg-[#333] transition-all">
                  Currencies
                </div>
              </Link  >
              <Link  href="/dashboard/stake/mystakings">
                <div className="py-2 px-3 rounded-sm mx-1 text-sm cursor-pointer hover:bg-[#333] transition-all">
                  My stakings
                </div>
              </Link  >
            </div>
          </div>
        </div>
        {/*  */}
            {
              item && item.name && <Stake props={{item, setItem}} />
            }
        {/*  */}
        <div className="px-4">
          <div>
            <div className="">
              <div className="searchbar">
                <div className="input-region">
                  <div className="rounded-md mt-5 flex items-center px-3 capitalize w-full bg-black/5 border border-white/10 text-black/70">
                    <input
                      className="flex w-full bg-transparent rounded-md border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50  font-bold border-0 h-12 ring-0 hover:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:ring-0"
                      placeholder="Search Crypto Pool"
                      type="text"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 opacity-50"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="text-black/70">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-3 ">
                    
                    
                    {  coinJson.map((item)=> <div className="p-4 rounded-sm shadow-lg border bg-white border-white/5">
                      <div className="header-section flex gap-x-2 items-center justify-between">
                        <div className="header-section flex gap-x-3 items-center">
                          <div className="image rounded-full overflow-hidden">
                            <Image
                              alt=""
                              loading="lazy"
                              width="1000"
                              height="1000"
                              decoding="async"
                              data-nimg="1"
                              className="w-11 h-11"
                              src={`/assets/markets/crypto/${item.id}.svg`}
                              style={{color: "transparent"}}
                            />
                          </div>
                          <div className="description">
                            <div className="bigtext text-lg font-semibold">
                              {item.name}
                            </div>
                            <div className="smalltext font-bold opacity-60 text-sm">
                              {item.id}
                            </div>
                          </div>
                        </div>
                        <div className="price">
                          <div className="border bg-white text-black/70 border-white/5 font-bold text-sm py-1 px-2 rounded-sm">
                            ${item.rate}
                          </div>
                        </div>
                      </div>
                      <div className="detail-section mt-5">
                        <div className="deet-cont grid grid-cols-3 gap-x-3 md:grid-cols-2 md:gap-3 lg:grid-cols-3 mt-2">
                          <div className=" border border-white/5 rounded-sm p-3 /text-center">
                            <p className="font-bold text-sm">Minimum</p>
                            <p className="text-sm font-bold opacity-80">$100</p>
                          </div>
                          <div className=" border border-white/5 rounded-sm p-3 /text-center">
                            <p className="font-bold text-sm">ROI</p>
                            <p className="text-sm font-bold opacity-80">{item.roi}</p>
                          </div>
                          <div className=" border border-white/5 rounded-sm p-3 /text-center">
                            <p className="font-bold text-sm">Cycle</p>
                            <p className="text-sm font-bold opacity-80">Monthly</p>
                          </div>
                        </div>
                      </div>
                      <div className="btn-section mt-5">
                        <button
                          onClick={()=>LoadCard(item)}
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:rv:"
                          data-state="closed"
                          className="w-full"
                        >
                          <div className="btn rounded-sm cursor-pointer text-black/70 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-800 via-blue-600 to-blue-700 w-full py-3 text-center font-bold text-sm">
                            Stake {item.name}
                          </div>
                        </button>
                      </div>
                    </div>)
                    }
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staking;
