"use client";

import React, { useState, useRef, useMemo } from "react";

function MiniSideBar({ props }) {
  const { sidebarOpen, setSidebarOpen } = props;
  const bar = useRef();

  let hidden = sidebarOpen ? "-translate-x-full animate-out" : "";
  return (
    <>
      <div
      onClick={() => {
        setSidebarOpen((f) => !f);
        console.log(sidebarOpen);
      }}
        data-state={sidebarOpen ? "open" : "close"}
        className={
          "fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  " +
          hidden
        }
        style={{ pointerEvents: "auto" }}
        data-aria-hidden="true"
        aria-hidden="true"
        id="blurDiv"
      ></div>
      <div
        ref={bar}
        role="dialog"
        id="radix-:R53jd3a:"
        aria-describedby="radix-:R53jd3aH2:"
        aria-labelledby="radix-:R53jd3aH1:"
        data-state={sidebarOpen ? "open" : "close"}
        className={
          "fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm  " +
          hidden
        }
        tabIndex="-1"
        style={{ pointerEvents: "auto" }}
      >
        <div className="flex flex-col space-y-2 text-center sm:text-left text-white">
          <h2
            id="radix-:R53jd3aH1:"
            className="text-lg font-semibold text-foreground"
          >
            <div className="font-bold">
              <Image width='20' height='20' src="close.svg" alt="x" />
            </div>
          </h2>
        </div>
        <div className="nav-menus mt-10 flex-col w-full flex">
          <a className="w-full font-bold">
            <button type="button" className="w-full">
              <div className="menu-item py-3 /my-2 hover:opacity-90 text-gray-500 duration-200 cursor-pointer hover:bg-gray-100 px-2 //rounded-md flex items-center opacity-100 bg-gray-100  font-bold rounded-md ">
                <p>Home</p>
              </div>
            </button>
          </a>
          <a className="w-full">
            <button type="button" className="w-full">
              <div className="menu-item py-3 /my-2 hover:opacity-90 text-gray-500 duration-200 cursor-pointer hover:bg-gray-100 px-2 //rounded-md flex items-center">
                <p>Getting Started</p>
              </div>
            </button>
          </a>
          <a className="w-full">
            <button type="button" className="w-full">
              <div className="menu-item py-3 /my-2 hover:opacity-90 text-gray-500 duration-200 cursor-pointer hover:bg-gray-100 px-2 //rounded-md flex items-center">
                <p>About Us</p>
              </div>
            </button>
          </a>
          <a className="w-full">
            <button type="button" className="w-full">
              <div className="menu-item py-3 /my-2 hover:opacity-90 text-gray-500 duration-200 cursor-pointer hover:bg-gray-100 px-2 //rounded-md flex items-center">
                <p>Features &amp; Benefits</p>
              </div>
            </button>
          </a>
          <a className="w-full">
            <button type="button" className="w-full">
              <div className="menu-item py-3 /my-2 hover:opacity-90 text-gray-500 duration-200 cursor-pointer hover:bg-gray-100 px-2 //rounded-md flex items-center">
                <p>Advantages</p>
              </div>
            </button>
          </a>
          <a className="w-full">
            <button type="button" className="w-full">
              <div className="menu-item py-3 /my-2 hover:opacity-90 text-gray-500 duration-200 cursor-pointer hover:bg-gray-100 px-2 //rounded-md flex items-center">
                <p>Partners</p>
              </div>
            </button>
          </a>
          <a className="w-full">
            <button type="button" className="w-full">
              <div className="menu-item py-3 /my-2 hover:opacity-90 text-gray-500 duration-200 cursor-pointer hover:bg-gray-100 px-2 //rounded-md flex items-center">
                <p>Testimonials</p>
              </div>
            </button>
          </a>
          <a className="w-full">
            <button type="button" className="w-full">
              <div className="menu-item py-3 /my-2 hover:opacity-90 text-gray-500 duration-200 cursor-pointer hover:bg-gray-100 px-2 //rounded-md flex items-center">
                <p>FAQ</p>
              </div>
            </button>
          </a>
        </div>
        <a href="/auth">
          <button type="button">
            <div className="cta-button justify-center text-sm flex items-center pr-12 cursor-pointer w-full absolute bottom-5">
              <div className="w-full bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-700 via-rose-700 to-orange-500 text-white px-7 py-4 rounded-xl font-bold">
                Login or Sign up
              </div>
            </div>
          </button>
        </a>
        <button
          type="button"
          onClick={() => {
            setSidebarOpen((f) => !f);
            console.log(sidebarOpen);
          }}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
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
    </>
  );
}

export default MiniSideBar;
