import React from "react";

function MarketInput() {
  return (
    <div className="input-region mb-4">
      <div className="rounded-md mt-5 flex items-center px-3 capitalize w-full bg-color-change[#222] border border-white/10 text-white">
        <input
          className="flex w-full rounded-md border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent font-bold border-0 h-12 ring-0 focus-within:ring-0 focus:ring-0 focus-visible:ring-0"
          placeholder="Search Cryptos eg. 'BTC' "
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
  );
}

export default MarketInput;
