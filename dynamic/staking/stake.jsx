'use client'

import React from "react";
import { useContext } from "react";
import { userAccountContext } from "@/app/dashboard/context";
import Link from "next/link";


function Stake({props}) {
    const {item, setItem} = props
    let {user, setUser, account, setAccount} = useContext(userAccountContext)

    
  return (
    <div
      role="dialog"
      id="radix-:rg:"
      aria-describedby="radix-:ri:"
      aria-labelledby="radix-:rh:"
      data-state="open"
      className="fixed transition-all left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full"
      side="bottom"
      tabIndex="-1"
      style={{pointerEvents: "auto"}}
    >
      <div className="">
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
                style={{color: 'transparent'}}
              />
            </div>
            <div className="description">
              <div className="bigtext text-lg font-semibold">{item.name}</div>
              <div className="smalltext font-bold opacity-60 text-sm">BTC</div>
            </div>
          </div>
          <div className="price">
            <div className="/bg-black/10 font-bold text-sm p-2 rounded-sm">
              1 {item.id} ~ {item.rate}
            </div>
          </div>
        </div>
        <div className="demacator mt-3 rounded-full w-1/2 mx-auto h-0.5 px-10 bg-black/10"></div>
        <div className="form-section mt-6">
          <div className="amount-form">
            <label for="amount" className="text-sm font-bold pb-4">
              Staking Amount (USD)
            </label>
            <input
              className="flex w-full border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 mt-2 text-sm rounded-sm h-12"
              id="amount"
              placeholder="Enter amount to Stake"
              type="number"
            />
          </div>
          <div className="font-bold mt-3 text-sm /md:flex /items-center gap-x-2">
            <div>
              Balance: 0.000 BTC
              <Link
                className="rounded py-1 px-2 pr-2 bg-black/5"
                href="/dashboard/deposits"
              >
                Deposit
              </Link >
            </div>
          </div>
          <div className="flex items-center gap-x-3 w-full">
            <div className="duration mt-4 w-full">
              <label for="duration" className="text-sm font-bold pb-4">
                Staking Duration
              </label>
              <button
                type="button"
                role="combobox"
                aria-controls="radix-:r15:"
                aria-expanded="false"
                aria-autocomplete="none"
                dir="ltr"
                data-state="closed"
                data-placeholder=""
                className="flex w-full items-center justify-between border border-input bg-transparent px-3 py-4 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring /focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-12 mt-2 rounded-sm"
              >
                <span style={{pointerEvents: "auto"}}>Select a duration</span>
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
            <div className="monthly-form mt-4 w-full">
              <label for="monthly" className="text-sm font-bold pb-4">
                Return per cycle
              </label>
              <input
                className="flex border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 mt-2 w-full text-sm rounded-sm h-12"
                id="monthly"
                readonly=""
                value="0 per months"
              />
            </div>
          </div>
          <div className="flex items-center gap-x-3 w-full justify-stretch">
            <div className="roi-form mt-4 w-full">
              <label for="roi" className="text-sm font-bold pb-4">
                ROI (USD)
              </label>
              <input
                className="flex border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 mt-2 w-full text-sm rounded-sm h-12"
                id="amount"
                readonly=""
                value="NaN"
              />
            </div>
            <div className="roi-form mt-4 w-full">
              <label for="roi" className="text-sm font-bold pb-4">
                Staking Equivalent
              </label>
              <input
                className="flex border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 mt-2 w-full text-sm rounded-sm h-12"
                id="amount"
                readonly=""
                value="NaN BTC"
              />
            </div>
          </div>
          <div className="text-sm rounded-sm border p-2 mt-3 text-black/60">
            <p>
              Staking results in an estimated
              <span className="font-bold text-black">
                0% RPC (Return Per Cycle)
              </span>
              for <span className="font-bold text-black">BTC</span>
            </p>
          </div>
          <div className="text-sm rounded-sm border p-2 mt-3 text-black/60">
            <p>
              Your staking period will end in
              <span className="font-bold text-black">0 month(s)</span> . Your
              earnings will be sent to your live BTC account.
            </p>
          </div>
          <button
            disabled=""
            className="btn font-bold disabled:cursor-not-allowed text-sm text-white py-3 rounded-sm w-full text-center mt-3 bg-muted-foreground"
          >
            Stake NaN BTC
          </button>
        </div>
      </div>
      <button
        onClick={()=>setItem(null)}
        type="button"
        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 /focus:outline-none /focus:ring-2 /focus:ring-ring /focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
      >
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
          className="h-4 w-4"
        >
          <line x1="18" x2="6" y1="6" y2="18"></line>
          <line x1="6" x2="18" y1="6" y2="18"></line>
        </svg>
        <span className="sr-only">Close</span>
      </button>
    </div>
  );
}

export default Stake;
