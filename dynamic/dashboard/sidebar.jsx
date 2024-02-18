"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function SideBar({Nav}) {

  const pathname = usePathname();

  return (
    <div className="hidden side-bar md:block /overflow-scroll ">
      <div
        dir="ltr"
        className="relative overflow-hidden w-[250px] h-[calc(100vh-70px)] mb-[70px]"
        style={{
          position: "relative",
          //   --radix-scroll-area-corner-width: 0px;
          //   --radix-scroll-area-corner-height: 0px;
        }}
      >
        <style></style>
        <div
          data-radix-scroll-area-viewport=""
          className="h-full w-full rounded-[inherit]"
          style={{ overflow: "hidden scroll" }}
        >
          <div style={{ minWidth: "100%", display: "table" }}>
            <div className="">
              <div className="px-2 pt-4 pb-8 border-r">
                <div
                  dir="ltr"
                  className="relative overflow-hidden"
                  style={{
                    position: "relative",
                    // --radix-scroll-area-corner-width: 0,
                    // --radix-scroll-area-corner-height: 0,
                  }}
                >
                  <div
                    data-radix-scroll-area-viewport=""
                    className="h-full w-full rounded-[inherit]"
                    style={{ overflow: "hidden scroll" }}
                  >
                    <div style={{ minWidth: "100%", display: "table" }}>
                      <Link href="/dashboard">
                        <div
                          className={
                            pathname === "/dashboard"
                              ? "flex flex-col md:flex-row lg:text-sm items-center rounded-md py-3 my-1 px-2 transition-all text-white font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-800 via-blue-600 to-blue-500"
                              : "flex flex-col md:flex-row lg:text-sm items-center text-black/70 rounded-md py-3 my-1 px-2 transition-all  hover:bg-gray-200  "
                          }
                        >
                          <div className="mx-2 font-bold">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path d="M14 6H6v8h8V6z"></path>
                              <path
                                fillRule="evenodd"
                                d="M9.25 3V1.75a.75.75 0 011.5 0V3h1.5V1.75a.75.75 0 011.5 0V3h.5A2.75 2.75 0 0117 5.75v.5h1.25a.75.75 0 010 1.5H17v1.5h1.25a.75.75 0 010 1.5H17v1.5h1.25a.75.75 0 010 1.5H17v.5A2.75 2.75 0 0114.25 17h-.5v1.25a.75.75 0 01-1.5 0V17h-1.5v1.25a.75.75 0 01-1.5 0V17h-1.5v1.25a.75.75 0 01-1.5 0V17h-.5A2.75 2.75 0 013 14.25v-.5H1.75a.75.75 0 010-1.5H3v-1.5H1.75a.75.75 0 010-1.5H3v-1.5H1.75a.75.75 0 010-1.5H3v-.5A2.75 2.75 0 015.75 3h.5V1.75a.75.75 0 011.5 0V3h1.5zM4.5 5.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <div className="text-xs lg:text-sm font-bol">
                            Dashboard
                          </div>
                        </div>
                      </Link>
                      <Link href="/dashboard/markets">
                        <div
                          className={
                            pathname === "/dashboard/markets"
                              ? "flex flex-col md:flex-row lg:text-sm items-center rounded-md py-3 my-1 px-2 transition-all text-white font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-800 via-blue-600 to-blue-500"
                              : "flex flex-col md:flex-row lg:text-sm items-center text-black/70 rounded-md py-3 my-1 px-2 transition-all  hover:bg-gray-200  "
                          }
                        >
                          <div className="mx-2 font-bold">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path d="M16.555 5.412a8.028 8.028 0 00-3.503-2.81 14.899 14.899 0 011.663 4.472 8.547 8.547 0 001.84-1.662zM13.326 7.825a13.43 13.43 0 00-2.413-5.773 8.087 8.087 0 00-1.826 0 13.43 13.43 0 00-2.413 5.773A8.473 8.473 0 0010 8.5c1.18 0 2.304-.24 3.326-.675zM6.514 9.376A9.98 9.98 0 0010 10c1.226 0 2.4-.22 3.486-.624a13.54 13.54 0 01-.351 3.759A13.54 13.54 0 0110 13.5c-1.079 0-2.128-.127-3.134-.366a13.538 13.538 0 01-.352-3.758zM5.285 7.074a14.9 14.9 0 011.663-4.471 8.028 8.028 0 00-3.503 2.81c.529.638 1.149 1.199 1.84 1.66zM17.334 6.798a7.973 7.973 0 01.614 4.115 13.47 13.47 0 01-3.178 1.72 15.093 15.093 0 00.174-3.939 10.043 10.043 0 002.39-1.896zM2.666 6.798a10.042 10.042 0 002.39 1.896 15.196 15.196 0 00.174 3.94 13.472 13.472 0 01-3.178-1.72 7.973 7.973 0 01.615-4.115zM10 15c.898 0 1.778-.079 2.633-.23a13.473 13.473 0 01-1.72 3.178 8.099 8.099 0 01-1.826 0 13.47 13.47 0 01-1.72-3.178c.855.151 1.735.23 2.633.23zM14.357 14.357a14.912 14.912 0 01-1.305 3.04 8.027 8.027 0 004.345-4.345c-.953.542-1.971.981-3.04 1.305zM6.948 17.397a8.027 8.027 0 01-4.345-4.345c.953.542 1.971.981 3.04 1.305a14.912 14.912 0 001.305 3.04z"></path>
                            </svg>
                          </div>
                          <div className="text-xs lg:text-sm font-bol">
                            Live Markets
                          </div>
                        </div>
                      </Link>
                      <Link href="/dashboard/stake">
                        <div className="flex flex-col items-center px-2 py-3 my-1 text-xs transition-all rounded-md md:flex-row lg:text-sm text-black/70 hover:bg-gray-200">
                          <div className="mx-2 font-bold">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path d="M12 9a1 1 0 01-1-1V3c0-.553.45-1.008.997-.93a7.004 7.004 0 015.933 5.933c.078.547-.378.997-.93.997h-5z"></path>
                              <path d="M8.003 4.07C8.55 3.992 9 4.447 9 5v5a1 1 0 001 1h5c.552 0 1.008.45.93.997A7.001 7.001 0 012 11a7.002 7.002 0 016.003-6.93z"></path>
                            </svg>
                          </div>
                          <div className="text-xs lg:text-sm font-bol">
                            Stake
                          </div>
                        </div>
                      </Link>
                      <Link href="/dashboard/deposits">
                        <div className="flex flex-col items-center px-2 py-3 my-1 text-xs transition-all rounded-md md:flex-row lg:text-sm text-black/70 hover:bg-gray-200">
                          <div className="mx-2 font-bold">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1 4a1 1 0 011-1h16a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm12 4a3 3 0 11-6 0 3 3 0 016 0zM4 9a1 1 0 100-2 1 1 0 000 2zm13-1a1 1 0 11-2 0 1 1 0 012 0zM1.75 14.5a.75.75 0 000 1.5c4.417 0 8.693.603 12.749 1.73 1.111.309 2.251-.512 2.251-1.696v-.784a.75.75 0 00-1.5 0v.784a.272.272 0 01-.35.25A49.043 49.043 0 001.75 14.5z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <div className="text-xs lg:text-sm font-bol">
                            Deposit
                          </div>
                          <div className="ml-2">
                            <Image
                              alt=""
                              loading="lazy"
                              width="1000"
                              height="1000"
                              decoding="async"
                              data-nimg="1"
                              className="w-8 h-8 opacity-60"
                              //   srcset="
                              //     /_next/image?url=%2Fassets%2Fnew.png&amp;w=1080&amp;q=75 1x,
                              //     /_next/image?url=%2Fassets%2Fnew.png&amp;w=2048&amp;q=75 2x
                              //   "
                              srcSet="/assets/new.webp"
                              src="/assets/new.webp"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </div>
                      </Link>
                      <Link href="/dashboard/copy_experts">
                        <div className="flex flex-col items-center px-2 py-3 my-1 text-xs transition-all rounded-md md:flex-row lg:text-sm text-black/70 hover:bg-gray-200">
                          <div className="mx-2 font-bold">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                                clipRule="evenodd"
                              ></path>
                              <path
                                fillRule="evenodd"
                                d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <div className="text-xs lg:text-sm font-bol">
                            Trading Experts
                          </div>
                          <div className="ml-2">
                            <Image
                              alt=""
                              loading="lazy"
                              width="1000"
                              height="1000"
                              decoding="async"
                              data-nimg="1"
                              className="w-8 h-8 opacity-60"
                              //   srcset="
                              //     /_next/image?url=%2Fassets%2Fnew.png&amp;w=1080&amp;q=75 1x,
                              //     /_next/image?url=%2Fassets%2Fnew.png&amp;w=2048&amp;q=75 2x
                              //   "
                              srcSet="/assets/new.webp"
                              src="/assets/new.webp"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </div>
                      </Link>
                      <Link href="/dashboard/withdrawals">
                        <div className="flex flex-col items-center px-2 py-3 my-1 text-xs transition-all rounded-md md:flex-row lg:text-sm text-black/70 hover:bg-gray-200">
                          <div className="mx-2 font-bold">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path d="M1 4.25a3.733 3.733 0 012.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0016.75 2H3.25A2.25 2.25 0 001 4.25zM1 7.25a3.733 3.733 0 012.25-.75h13.5c.844 0 1.623.279 2.25.75A2.25 2.25 0 0016.75 5H3.25A2.25 2.25 0 001 7.25zM7 8a1 1 0 011 1 2 2 0 104 0 1 1 0 011-1h3.75A2.25 2.25 0 0119 10.25v5.5A2.25 2.25 0 0116.75 18H3.25A2.25 2.25 0 011 15.75v-5.5A2.25 2.25 0 013.25 8H7z"></path>
                            </svg>
                          </div>
                          <div className="text-xs lg:text-sm font-bol">
                            Withdraw
                          </div>
                        </div>
                      </Link>
                      <Link href="/dashboard/history">
                        <div
                          className={
                            pathname === "/dashboard/history"
                              ? "flex flex-col md:flex-row lg:text-sm items-center rounded-md py-3 my-1 px-2 transition-all text-white font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-800 via-blue-600 to-blue-500"
                              : "flex flex-col md:flex-row lg:text-sm items-center text-black/70 rounded-md py-3 my-1 px-2 transition-all  hover:bg-gray-200  "
                          }
                        >
                          <div className="mx-2 font-bold">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2 3.75A.75.75 0 012.75 3h11.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zM2 7.5a.75.75 0 01.75-.75h6.365a.75.75 0 010 1.5H2.75A.75.75 0 012 7.5zM14 7a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02l-1.95-2.1v6.59a.75.75 0 01-1.5 0V9.66l-1.95 2.1a.75.75 0 11-1.1-1.02l3.25-3.5A.75.75 0 0114 7zM2 11.25a.75.75 0 01.75-.75H7A.75.75 0 017 12H2.75a.75.75 0 01-.75-.75z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <div className="text-xs lg:text-sm font-bol">
                            History
                          </div>
                        </div>
                      </Link>
                      <Link href="/dashboard/investments">
                        <div
                          className={
                            pathname === "/dashboard/investments"
                              ? "flex flex-col md:flex-row lg:text-sm items-center rounded-md py-3 my-1 px-2 transition-all text-white font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-800 via-blue-600 to-blue-500"
                              : "flex flex-col md:flex-row lg:text-sm items-center text-black/70 rounded-md py-3 my-1 px-2 transition-all  hover:bg-gray-200  "
                          }
                        >
                          <div className="mx-2 font-bold">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.362 1.093a.75.75 0 00-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925zM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0018 14.25V6.443zm-8.75 12.25v-8.25l-7.25-4v7.807a.75.75 0 00.388.657l6.862 3.786z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <div className="text-xs lg:text-sm font-bol">
                            Subscriptions
                          </div>
                        </div>
                      </Link>
                      <Link href="/dashboard/purchase_btc">
                        <div className="flex flex-col items-center px-2 py-3 my-1 text-xs transition-all rounded-md md:flex-row lg:text-sm text-black/70 hover:bg-gray-200">
                          <div className="mx-2 font-bold">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path d="M10.75 10.818v2.614A3.13 3.13 0 0011.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 00-1.138-.432zM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 00-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152z"></path>
                              <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-6a.75.75 0 01.75.75v.316a3.78 3.78 0 011.653.713c.426.33.744.74.925 1.2a.75.75 0 01-1.395.55 1.35 1.35 0 00-.447-.563 2.187 2.187 0 00-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 11-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 111.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 01-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 011.653-.713V4.75A.75.75 0 0110 4z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <div className="text-xs lg:text-sm font-bol">
                            Purchase Crypto
                          </div>
                          <div className="ml-2">
                            <Image
                              alt=""
                              loading="lazy"
                              width="1000"
                              height="1000"
                              decoding="async"
                              data-nimg="1"
                              className="w-8 h-8 opacity-60"
                              //   srcset="
                              //     /_next/image?url=%2Fassets%2Fnew.png&amp;w=1080&amp;q=75 1x,
                              //     /_next/image?url=%2Fassets%2Fnew.png&amp;w=2048&amp;q=75 2x
                              //   "
                              srcSet="/assets/new.webp"
                              src="/assets/new.webp"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </div>
                      </Link>
                      <Link href="/dashboard/account">
                        <div
                          className={
                            pathname === "/dashboard/account"
                              ? "flex flex-col md:flex-row lg:text-sm items-center rounded-md py-3 my-1 px-2 transition-all text-white font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-800 via-blue-600 to-blue-500"
                              : "flex flex-col md:flex-row lg:text-sm items-center text-black/70 rounded-md py-3 my-1 px-2 transition-all  hover:bg-gray-200  "
                          }
                        >
                          <div className="mx-2 font-bold">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <div className="text-xs lg:text-sm font-bol">
                            Account
                          </div>
                        </div>
                      </Link>
                  
                      <Link href="/dashboard/support">
                        <div
                          className={
                            pathname === "/dashboard/support"
                              ? "flex flex-col md:flex-row lg:text-sm items-center rounded-md py-3 my-1 px-2 transition-all text-white font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-800 via-blue-600 to-blue-500"
                              : "flex flex-col md:flex-row lg:text-sm items-center text-black/70 rounded-md py-3 my-1 px-2 transition-all  hover:bg-gray-200  "
                          }
                        >
                          <div className="mx-2 font-bold">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z"></path>
                            </svg>
                          </div>
                          <div className="text-xs lg:text-sm font-bol">
                            Support
                          </div>
                        </div>
                      </Link>
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

export default SideBar;
