import React from "react";

function Crypto() {
  return (
    <div className="p-4">
      <div className="deposits-cont p-3 rounded-lg transition-all border border-white/10 bg-black/50 text-black/90">
        <div className="pb-2 transition-all w-full text-center">
          <div className="heading pb-1 flex items-center mt-3 justify-center text-white/60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mr-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
              ></path>
            </svg>
            <p className="text-sm uppercase">Crypto</p>
          </div>
          <div className="header-text font-bold capitalize text-lg pb-4">
            Deposit using Crypto
          </div>
        </div>
        <div className="px-2 py-5">
          <button
            type="button"
            role="combobox"
            aria-controls="radix-:r8d:"
            aria-expanded="false"
            aria-autocomplete="none"
            dir="ltr"
            data-state="closed"
            data-placeholder=""
            className="flex h-12 items-center justify-between rounded-md border-input px-3 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring /focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full /bg-gray-50 py-4 border-0 bg-black/5"
          >
            <span style={{pointerEvents: "none"}}>Select a Deposit Asset</span>
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
          <div className=""></div>
          <div className="input my-3 flex items-center">
            <div className="w-full">
              <input
                className="w-full px-4 py-4 text-sm placeholder:text-muted-foreground rounded-lg /bg-gray-50 font-bold bg-black/5"
                placeholder="Enter amount in USD"
                disabled=""
                type="number"
                value=""
              />
            </div>
          </div>
          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:r8e:"
            data-state="closed"
            className="w-full"
          ></button>
        </div>
      </div>
    </div>
  );
}

export default Crypto;
