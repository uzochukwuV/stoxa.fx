import React from "react";



function BankWire() {
  return (
    <div className="p-4">
      <div className="deposits-cont p-3 rounded-lg transition-all border border-white/10 bg-white text-black/90">
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
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
            ></path>
          </svg>
          <p className="text-sm uppercase">Bank Transfers</p>
        </div>
        <div className="header-text font-bold capitalize text-lg pb-4 w-full text-center">
          Deposit using Bank Wire
        </div>
        <div className="input my-3 flex items-center">
          <div className="w-full">
            <input
              min="0"
              className="w-full px-4 py-4 text-sm placeholder:text-muted-foreground rounded-lg /bg-gray-50 font-bold bg-black/5"
              placeholder="Enter amount in USD"
              type="number"
              defaultValue=""
            />
          </div>
        </div>
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:r8h:"
          data-state="closed"
          className="w-full"
        ></button>
      </div>
    </div>
  );
}

export default BankWire;
