"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function SignupX({ props }) {
  const {
    lid,
    setlid,
    password,
    setPassword,
    passwordConfirm,
    setPasswordConfirm,
    createAccount,
    loading
  } = props;
  const router = useRouter();
  const [isText, setIsText]= useState(false)
  return (
    <form className={lid === 3 ? "" : "hidden"}>
      <div className="message mb-5">
        <div className="text-gray-200 font-bold text-lg">
          <span className="text-blue-700 font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent">
            Create
          </span>
          a new account
        </div>
        <p className="text-sm font-normal text-gray-200 mt-3">
          Create a new
          <span className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] bord fonttb from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent font-bold">
            account
          </span>
          to enjoy immense benefits and financial freedom, it's easy, it's
          <span className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent font-bold">
            simple
          </span>
        </p>
      </div>
      <div className="progress w-full mt-2 mb-8">
        <div className="progress-cont w-full h-1 rounded-full bg-[#11111180] relative">
          <div
            className="progress-bar h-full w-1/2 transition-all duration-500 absolute bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-800 via-blue-600 to-orange-700 rounded-full top-0 left-0"
            style={{ width: "100%" }}
          ></div>
        </div>
      </div>
      <div className="">
        
        <div className="mb-5">
          <label
            className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block font-bold text-sm mb-2"
            htmlFor="confirmPassword"
          >
            Username
          </label>
          <input
            className="flex border border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 w-full px-4 py-1 bg-[#111111] text-gray-200 border-none h-11 focus:border-none transition-all rounded-lg text-sm"
            type="text"
            name="user"
            id="user"
            placeholder="Unique Username"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <div className="label_controller mb-2 flex items-center justify-between">
            <label
              className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block font-bold text-sm"
              htmlFor="password"
            >
              Password
            </label>
            <div className="show-pass cursor-pointer" onClick={()=>setIsText((prev)=> !prev)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path
                  fillRule="evenodd"
                  d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <input
            className="flex border border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 w-full px-4 py-1 bg-[#111111] text-gray-200 border-none h-11 focus:border-none transition-all rounded-lg text-sm"
            id="password"
            placeholder="Create a password"
            type={isText? 'text':'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => setlid(2)}
          className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 mr-2 bg-[#111] text-gray-200 hover:bg-[#11111180] h-12 rounded-lg"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            createAccount();
          }}
          className="text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 px-4 py-2 w-full flex items-center justify-center bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-800 via-blue-600 to-orange-700 text-white h-12 font-bold rounded-lg"
          type="submit"
          disabled={loading}
        >
          <div className="py-2 flex items-center justify-center">
            
            {loading ? "........ ":"Create my account"}
          </div>
        </button>
      </div>
    </form>
  );
}

export default SignupX;
