"use client";
import Image from "next/image";
import React, { useState } from "react";

function Crypto() {
  const [click, setClick] = useState(false);
  const [amount, setAmount] = useState(false);
  const [type, setType] = useState(false);
  const handleClick = () => {

    setClick(true);
  };
  if (click)
    return <DepositAddress type={type} amount={amount} setA={setAmount} />;
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
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
              ></path>
            </svg>
            <p className="text-sm uppercase">Crypto</p>
          </div>
          <div className="header-text font-bold capitalize text-lg pb-4">
            Deposit using Crypto
          </div>
        </div>
        {/*  */}
        <div className="px-2 py-5">
          <select
            onChange={(e) => setType(e.target.value)}
            className="flex h-12 w-full items-center justify-between border-input px-3 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring /focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 /bg-gray-50 py-4 border-0 bg-black/5"
            name="whatever"
            id="frm-whatever"
          >
            <option value="" className="w-20">
              {" "}
              Select a Deposit Asset&hellip;
            </option>
            <option value="BTC" className="w-20">
              Bitcion
            </option>
            <option value="ETH">Etherum</option>
            <option value="USDT">USD Tether</option>
          </select>

          <div className=""></div>
          <div className="input my-3 flex items-center">
            <div className="w-full">
              <input
                className="w-full px-4 py-4 text-sm placeholder:text-muted-foreground /bg-gray-50 font-bold bg-black/5"
                placeholder="Enter amount in USD"
                disabled=""
                type="number"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
          <button
            type="button"
            onClick={handleClick}
            className="w-full bg-blue-800 border py-3"
          >
            Deposit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Crypto;

function DepositAddress({ setA, type, amount }) {
  const [disabled, setDisabled] = useState(false)
  return (
    <div>
      <div className="p-4">
        <div className="deposits-cont p-3 rounded-lg transition-all border bg-gray-100 border-white/10 bg-black/50 text-black/90">
          <div className="pb-2 transition-all w-full text-center">
            <p className="py-3 text-lg text-black ">Make deposits to the generated address below</p>
            <div className="grid grid-cols-2 gap-2">
              <div className=" w-2/3 text-left  sm:min-w-full text-base">
                <Image
                  src={`/assets/markets/crypto/${type}.svg`}
                  width={140}
                  height={140}
                  className="text-center align-middle mx-auto"
                />
                <div className="w-full p-3">
                  <input
                    className="w-full px-4 py-4 text-sm placeholder:text-muted-foreground /bg-gray-50 font-bold bg-black/5"
                    placeholder="Enter amount in USD"
                    disabled={disabled}
                    type="number"
                    value={amount}
                    onChange={(e) => setA(e.target.value)}
                  />
                  <button onClick={()=>setDisabled(true)}>change</button>
                </div>
              </div>
              <div className=" w-1/3 ">
                <div className=" py-3 px-2 border-b mb-2 grid grid-cols-2">
                  <div className="w-2/3 text-left">Transaction Id</div>
                  <div className="w-1/3">Tuf76cv6ertyxc5</div>
                </div>
                <div className=" py-3 px-2 border-b mb-2 grid grid-cols-2">
                  <div className="w-2/3 text-left">Gateway</div>
                  <div className="w-1/3">{type}</div>
                </div>
                <div className=" py-3 px-2 border-b mb-2 grid grid-cols-2">
                  <div className="w-2/3 text-left">Amount in USD</div>
                  <div className="w-1/3">{amount} usdt</div>
                </div>
                <div className=" py-3 px-2 border-b mb-2 grid grid-cols-2">
                  <div className="w-2/3 text-left">Address</div>
                  <div className="w-1/3 text-red-400">839yf79d23gc78f23tgf72</div>
                </div>
              </div>
            </div>
          </div>
          <p className="py-3">
            Transaction will take 3 network connection to be verified, it takes at most 30mins. <span className=" text-red-700">Refresh your dashboard</span>
          </p>
        </div>
      </div>
    </div>
  );
}
