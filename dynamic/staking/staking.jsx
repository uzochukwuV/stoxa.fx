import React from "react";

function Staking() {
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
              <a href="/dashboard/stake">
                <div className="py-2 px-3 e rounded-sm font-bold bg-black/5 mr-1 text-sm cursor-pointer hover:bg-[#333] transition-all">
                  Crypto
                </div>
              </a>
              <a href="/dashboard/stake/stock">
                <div className="py-2 px-3 rounded-sm mx-1 text-sm cursor-pointer hover:bg-[#333] transition-all">
                  Stock
                </div>
              </a>
              <a href="/dashboard/stake/currencies">
                <div className="py-2 px-3 rounded-sm mx-1 text-sm cursor-pointer hover:bg-[#333] transition-all">
                  Currencies
                </div>
              </a>
              <a href="/dashboard/stake/mystakings">
                <div className="py-2 px-3 rounded-sm mx-1 text-sm cursor-pointer hover:bg-[#333] transition-all">
                  My stakings
                </div>
              </a>
            </div>
          </div>
        </div>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-3">
                    <div className="p-4 rounded-sm border bg-white border-white/5">
                      <div className="header-section flex gap-x-2 items-center justify-between">
                        <div className="header-section flex gap-x-3 items-center">
                          <div className="image rounded-full overflow-hidden">
                            <img
                              alt=""
                              loading="lazy"
                              width="1000"
                              height="1000"
                              decoding="async"
                              data-nimg="1"
                              className="w-11 h-11"
                              src="/assets/markets/crypto/BTC.svg"
                              style={{color: "transparent"}}
                            />
                          </div>
                          <div className="description">
                            <div className="bigtext text-lg font-semibold">
                              Bitcoin
                            </div>
                            <div className="smalltext font-bold opacity-60 text-sm">
                              BTC
                            </div>
                          </div>
                        </div>
                        <div className="price">
                          <div className="border bg-white text-black/70  border-white/5 font-bold text-sm py-1 px-2 rounded-sm">
                            $37,549
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
                            <p className="text-sm font-bold opacity-80">5% - 12%</p>
                          </div>
                          <div className=" border border-white/5 rounded-sm p-3 /text-center">
                            <p className="font-bold text-sm">Cycle</p>
                            <p className="text-sm font-bold opacity-80">Monthly</p>
                          </div>
                        </div>
                      </div>
                      <div className="btn-section mt-5">
                        <button
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:rm:"
                          data-state="closed"
                          className="w-full"
                        >
                          <div className="btn rounded-sm cursor-pointer text-black/70 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700 w-full py-3 text-center font-bold text-sm">
                            Stake Bitcoin
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="p-4 rounded-sm border bg-white border-white/5">
                      <div className="header-section flex gap-x-2 items-center justify-between">
                        <div className="header-section flex gap-x-3 items-center">
                          <div className="image rounded-full overflow-hidden">
                            <img
                              alt=""
                              loading="lazy"
                              width="1000"
                              height="1000"
                              decoding="async"
                              data-nimg="1"
                              className="w-11 h-11"
                              src="/assets/markets/crypto/ETH.svg"
                              style={{color: "transparent"}}
                            />
                          </div>
                          <div className="description">
                            <div className="bigtext text-lg font-semibold">
                              Ethereum
                            </div>
                            <div className="smalltext font-bold opacity-60 text-sm">
                              ETH
                            </div>
                          </div>
                        </div>
                        <div className="price">
                          <div className="border bg-white text-black/70 border-white/5 font-bold text-sm py-1 px-2 rounded-sm">
                            $2,068.96
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
                            <p className="text-sm font-bold opacity-80">4% - 10%</p>
                          </div>
                          <div className=" border border-white/5 rounded-sm p-3 /text-center">
                            <p className="font-bold text-sm">Cycle</p>
                            <p className="text-sm font-bold opacity-80">Monthly</p>
                          </div>
                        </div>
                      </div>
                      <div className="btn-section mt-5">
                        <button
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:rp:"
                          data-state="closed"
                          className="w-full"
                        >
                          <div className="btn rounded-sm cursor-pointer text-black/70 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700 w-full py-3 text-center font-bold text-sm">
                            Stake Ethereum
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="p-4 rounded-sm border bg-white border-white/5">
                      <div className="header-section flex gap-x-2 items-center justify-between">
                        <div className="header-section flex gap-x-3 items-center">
                          <div className="image rounded-full overflow-hidden">
                            <img
                              alt=""
                              loading="lazy"
                              width="1000"
                              height="1000"
                              decoding="async"
                              data-nimg="1"
                              className="w-11 h-11"
                              src="/assets/markets/crypto/SOL.svg"
                              style={{color: "transparent"}}
                            />
                          </div>
                          <div className="description">
                            <div className="bigtext text-lg font-semibold">
                              Solana
                            </div>
                            <div className="smalltext font-bold opacity-60 text-sm">
                              SOL
                            </div>
                          </div>
                        </div>
                        <div className="price">
                          <div className="border bg-white text-black/70 border-white/5 font-bold text-sm py-1 px-2 rounded-sm">
                            $57.93
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
                            <p className="text-sm font-bold opacity-80">4% - 9%</p>
                          </div>
                          <div className=" border border-white/5 rounded-sm p-3 /text-center">
                            <p className="font-bold text-sm">Cycle</p>
                            <p className="text-sm font-bold opacity-80">Monthly</p>
                          </div>
                        </div>
                      </div>
                      <div className="btn-section mt-5">
                        <button
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:rs:"
                          data-state="closed"
                          className="w-full"
                        >
                          <div className="btn rounded-sm cursor-pointer text-black/70 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700 w-full py-3 text-center font-bold text-sm">
                            Stake Solana
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="p-4 rounded-sm border bg-white border-white/5">
                      <div className="header-section flex gap-x-2 items-center justify-between">
                        <div className="header-section flex gap-x-3 items-center">
                          <div className="image rounded-full overflow-hidden">
                            <img
                              alt=""
                              loading="lazy"
                              width="1000"
                              height="1000"
                              decoding="async"
                              data-nimg="1"
                              className="w-11 h-11"
                              src="/assets/markets/crypto/DOGE.svg"
                              style={{color: "transparent"}}
                            />
                          </div>
                          <div className="description">
                            <div className="bigtext text-lg font-semibold">
                              Dogecoin
                            </div>
                            <div className="smalltext font-bold opacity-60 text-sm">
                              DOGE
                            </div>
                          </div>
                        </div>
                        <div className="price">
                          <div className="border bg-white text-black/70 border-white/5 font-bold text-sm py-1 px-2 rounded-sm">
                            $0.079
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
                            <p className="text-sm font-bold opacity-80">4% - 9%</p>
                          </div>
                          <div className=" border border-white/5 rounded-sm p-3 /text-center">
                            <p className="font-bold text-sm">Cycle</p>
                            <p className="text-sm font-bold opacity-80">Monthly</p>
                          </div>
                        </div>
                      </div>
                      <div className="btn-section mt-5">
                        <button
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:rv:"
                          data-state="closed"
                          className="w-full"
                        >
                          <div className="btn rounded-sm cursor-pointer text-black/70 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700 w-full py-3 text-center font-bold text-sm">
                            Stake Dogecoin
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="p-4 rounded-sm border bg-white border-white/5">
                      <div className="header-section flex gap-x-2 items-center justify-between">
                        <div className="header-section flex gap-x-3 items-center">
                          <div className="image rounded-full overflow-hidden">
                            <img
                              alt=""
                              loading="lazy"
                              width="1000"
                              height="1000"
                              decoding="async"
                              data-nimg="1"
                              className="w-11 h-11"
                              src="/assets/markets/crypto/ADA.svg"
                              style={{color: "transparent"}}
                            />
                          </div>
                          <div className="description">
                            <div className="bigtext text-lg font-semibold">
                              Cardano
                            </div>
                            <div className="smalltext font-bold opacity-60 text-sm">
                              ADA
                            </div>
                          </div>
                        </div>
                        <div className="price">
                          <div className="border bg-white text-black/70 border-white/5 font-bold text-sm py-1 px-2 rounded-sm">
                            $0.391
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
                            <p className="text-sm font-bold opacity-80">2% - 9%</p>
                          </div>
                          <div className=" border border-white/5 rounded-sm p-3 /text-center">
                            <p className="font-bold text-sm">Cycle</p>
                            <p className="text-sm font-bold opacity-80">Monthly</p>
                          </div>
                        </div>
                      </div>
                      <div className="btn-section mt-5">
                        <button
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:r12:"
                          data-state="closed"
                          className="w-full"
                        >
                          <div className="btn rounded-sm cursor-pointer text-black/70 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700 w-full py-3 text-center font-bold text-sm">
                            Stake Cardano
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="p-4 rounded-sm border bg-white border-white/5">
                      <div className="header-section flex gap-x-2 items-center justify-between">
                        <div className="header-section flex gap-x-3 items-center">
                          <div className="image rounded-full overflow-hidden">
                            <img
                              alt=""
                              loading="lazy"
                              width="1000"
                              height="1000"
                              decoding="async"
                              data-nimg="1"
                              className="w-11 h-11"
                              src="/assets/markets/crypto/USDT.svg"
                              style={{color: "transparent"}}
                            />
                          </div>
                          <div className="description">
                            <div className="bigtext text-lg font-semibold">
                              Tether
                            </div>
                            <div className="smalltext font-bold opacity-60 text-sm">
                              USDT
                            </div>
                          </div>
                        </div>
                        <div className="price">
                          <div className="border bg-white text-black/70 border-white/5 font-bold text-sm py-1 px-2 rounded-sm">
                            $1
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
                            <p className="text-sm font-bold opacity-80">2% - 9%</p>
                          </div>
                          <div className=" border border-white/5 rounded-sm p-3 /text-center">
                            <p className="font-bold text-sm">Cycle</p>
                            <p className="text-sm font-bold opacity-80">Monthly</p>
                          </div>
                        </div>
                      </div>
                      <div className="btn-section mt-5">
                        <button
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:r15:"
                          data-state="closed"
                          className="w-full"
                        >
                          <div className="btn rounded-sm cursor-pointer text-black/70 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700 w-full py-3 text-center font-bold text-sm">
                            Stake Tether
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="p-4 rounded-sm border bg-white border-white/5">
                      <div className="header-section flex gap-x-2 items-center justify-between">
                        <div className="header-section flex gap-x-3 items-center">
                          <div className="image rounded-full overflow-hidden">
                            <img
                              alt=""
                              loading="lazy"
                              width="1000"
                              height="1000"
                              decoding="async"
                              data-nimg="1"
                              className="w-11 h-11"
                              src="/assets/markets/crypto/TRX.svg"
                              style={{color: "transparent"}}
                            />
                          </div>
                          <div className="description">
                            <div className="bigtext text-lg font-semibold">
                              Tron
                            </div>
                            <div className="smalltext font-bold opacity-60 text-sm">
                              TRX
                            </div>
                          </div>
                        </div>
                        <div className="price">
                          <div className="border bg-white text-black/70 border-white/5 font-bold text-sm py-1 px-2 rounded-sm">
                            $0.108
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
                            <p className="text-sm font-bold opacity-80">2% - 9%</p>
                          </div>
                          <div className=" border border-white/5 rounded-sm p-3 /text-center">
                            <p className="font-bold text-sm">Cycle</p>
                            <p className="text-sm font-bold opacity-80">Monthly</p>
                          </div>
                        </div>
                      </div>
                      <div className="btn-section mt-5">
                        <button
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:r18:"
                          data-state="closed"
                          className="w-full"
                        >
                          <div className="btn rounded-sm cursor-pointer text-black/70 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700 w-full py-3 text-center font-bold text-sm">
                            Stake Tron
                          </div>
                        </button>
                      </div>
                    </div>
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
