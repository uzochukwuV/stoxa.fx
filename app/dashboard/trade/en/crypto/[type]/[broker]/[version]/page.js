"use client";
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo, useState } from "react";
import TradingViewWidget from "./widget";

export default function Page({params}) {
  return (
    <>
      <div
        data-radix-scroll-area-viewport=""
        className="h-full w-full rounded-[inherit]"
        style={{overflow: "hidden scroll"}}
      >
        <div style={{minWidth: "100%", display: "table"}}>
          <div>
            <div className="pr-3 flex flex-col">
                <TradingViewWidget props={params} />
              <div>
                <div className="flex flex-col md:flex-row gap-y-2 md:gap-y-0 items-center">
                  <div className="buy-form p-3 w-full">
                    <label id="" className="text-sm font-bold">
                      Current Price
                    </label>
                    <div className="Price mb-2 mt-1 rounded text-sm bg-black/5 text-black/80">
                      <input
                        className="flex w-full rounded-md border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 border-0 font-bold h-11 bg-black/5"
                        readOnly=""
                        placeholder="Amount (USD)"
                        type="text"
                        defaultValue={`1 ${params.type} - $`+params.version}
                      />
                    </div>
                    <label id="" className="text-sm font-bold">
                      Trade Amount (USD)
                    </label>
                    <div className="Price mb-2 mt-1 pr-5 flex items-center justify-between rounded text-sm bg-black/5 text-black/80">
                      <div className="div">
                        <input
                          className="flex rounded-md border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 border-0 w-full font-bold h-11 ring-0 focus-within:ring-0 focus:ring-0 focus-visible:ring-0 bg-transparent"
                          placeholder="Amount (USD)"
                          type="number"
                        />
                      </div>
                      <div className="priceArea font-bold"> {params.type}</div>
                    </div>
                    <label id="" className="text-sm font-bold">
                      Lotsize
                    </label>
                    <div className="Lotsize mb-2 mt-1 rounded text-sm bg-transparent text-black/80">
                      <input
                        className="flex w-full border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 border-0 font-bold rounded h-11 bg-black/5"
                        placeholder="Lot size"
                        type="number"
                      />
                    </div>
                    <label id="" className="text-sm font-bold">
                      Entry Price
                    </label>
                    <div className="EntryPrice mb-2 mt-1 rounded text-sm bg-transparent text-black/80">
                      <input
                        className="flex w-full border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 border-0 font-bold rounded h-11 bg-black/5"
                        placeholder="Entry Price"
                        type="number"
                        defaultValue={params.version}
                      />
                    </div>
                    <label id="" className="text-sm font-bold">
                      Duration
                    </label>
                    <div className="EntryPrice mb-2 mt-1 rounded text-sm bg-black/5 text-black/80">
                      <button
                        type="button"
                        role="combobox"
                        aria-controls="radix-:rv:"
                        aria-expanded="false"
                        aria-autocomplete="none"
                        dir="ltr"
                        data-state="closed"
                        data-placeholder=""
                        className="flex h-12 w-full items-center justify-between border-input bg-transparent px-3 py-4 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring /focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-sm border-0"
                      >
                        <span style={{pointerEvents: "none"}}>
                          Select a duration
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 opacity-50"
                          aria-hidden="true"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                    </div>
                    <div className="checkbox my-2 flex items-center justify-end gap-x-2">
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked="false"
                        data-state="unchecked"
                        defaultValue="on"
                        className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                        id="advance"
                      ></button>
                      <label htmlFor="advance" className="text-sm font-bold">
                        Advanced
                      </label>
                    </div>
                    <div className="btn mt-3">
                      <button className="w-full bg-green-600 text-white font-bold text-sm disabled:bg-muted-foreground py-3 text-center rounded">
                        Buy {params.type}
                      </button>
                    </div>
                  </div>
                  <div className="sell-form p-3 w-full">
                    <label id="" className="text-sm font-bold">
                      Current Price
                    </label>
                    <div className="Price mb-2 rounded mt-1 text-sm bg-black/5 text-black/80">
                      <input
                        className="flex w-full rounded-md border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 border-0 font-bold h-11 bg-black/5"
                        readOnly=""
                        placeholder="Amount (USD)"
                        type="text"
                        defaultValue={`1 ${params.type} - $`+params.version}
                      />
                    </div>
                    <label id="" className="text-sm font-bold">
                      Trade Amount (USD)
                    </label>
                    <div className="Price mb-2 mt-1 pr-5 flex items-center justify-between rounded text-sm bg-black/5 text-black/80">
                      <div className="div">
                        <input
                          className="flex rounded-md border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 border-0 w-full font-bold h-11 ring-0 focus-within:ring-0 focus:ring-0 focus-visible:ring-0 bg-transparent"
                          placeholder="Amount (USD)"
                          type="number"
                        />
                      </div>
                      <div className="priceArea font-bold"> {params.type}</div>
                    </div>
                    <label id="" className="text-sm font-bold">
                      Lotsize
                    </label>
                    <div className="Lotsize mb-2 mt-1 rounded text-sm bg-transparent text-black/80">
                      <input
                        className="flex w-full border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 border-0 font-bold rounded h-11 bg-black/5"
                        placeholder="Lot size"
                        type="number"
                      />
                    </div>
                    <label id="" className="text-sm font-bold">
                      Entry Price
                    </label>
                    <div className="EntryPrice mb-2 mt-1 first-line:rounded text-sm bg-transparent text-black/80">
                      <input
                        className="flex w-full border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 border-0 font-bold rounded h-11 bg-black/5"
                        placeholder="Entry Price"
                        type="number"
                        defaultValue={params.version}
                      />
                    </div>
                    <label id="" className="text-sm font-bold">
                      Duration
                    </label>
                    <div className="EntryPrice mb-2 mt-1 rounded text-sm bg-black/5 text-black/80">
                      <button
                        type="button"
                        role="combobox"
                        aria-controls="radix-:r10:"
                        aria-expanded="false"
                        aria-autocomplete="none"
                        dir="ltr"
                        data-state="closed"
                        data-placeholder=""
                        className="flex h-12 w-full items-center justify-between border-input bg-transparent px-3 py-4 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring /focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-sm border-0"
                      >
                        <span style={{pointerEvents: "none"}}>
                          Select a duration
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 opacity-50"
                          aria-hidden="true"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                    </div>
                    <div className="checkbox my-2 flex items-center justify-end md:justify-start gap-x-2">
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked="false"
                        data-state="unchecked"
                        defaultValue="on"
                        className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                        id="advance1"
                      ></button>
                      <label htmlFor="advance1" className="text-sm font-bold">
                        Advanced
                      </label>
                    </div>
                    <div className="btn mt-3">
                      <button className="w-full bg-red-600 text-white font-bold text-sm disabled:bg-muted-foreground py-3 text-center rounded">
                        Sell {params.type}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
