"use client"
import React from "react";
import "./page.css";
import SideBar from "@/dynamic/dashboard/sidebar";
import PopMenu from "@/components/pop/menu";
import PopNotifications from "@/components/pop/notifications";
import Image from "next/image";

function Content({ children }) {
  
  return (
    <>
      <div className="main-bar w-full relative overflow-hidden /overflow-y-scroll">
        <div
          dir="ltr"
          className="h-[calc(100vh-66px)] relative overflow-hidden w-screen md:w-full radix"
        >
          <div
            data-radix-scroll-area-viewport=""
            className="h-full w-full rounded-[inherit]"
            style={{ overflow: "hidden scroll" }}
          >
            <div style={{ minWidth: "100%", display: "table" }}>
              <div>
                <div>
                  <div
                    role="region"
                    aria-label="Notifications (F8)"
                    tabIndex="-1"
                    style={{ pointerEvents: "none" }}
                  >
                    <ol
                      tabIndex="-1"
                      className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
                    >
                      <li
                        role="status"
                        aria-live="off"
                        aria-atomic="true"
                        tabIndex="0"
                        data-state="open"
                        data-swipe-direction="right"
                        className="group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full bg-[#111] text-white border border-white/10 top-0 md:right-0 md:fixed md:w-[400px] md:mt-5 md:mr-5"
                        data-radix-collection-item=""
                        style={{
                          userSelect: "none",
                          touchAction: "none",
                          display: "none",
                        }}
                      >
                        <div className="grid gap-1">
                          <div className="text-sm font-semibold">
                            No or Low trading balance??
                          </div>
                          <div className="text-sm opacity-90">
                            Why not get started by making a deposit to enjoy all
                            trading benefits
                          </div>
                        </div>
                        <button
                          type="button"
                          className="inline-flex shrink-0 items-center justify-center rounded-md px-3 text-sm ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] h-11 border-0/ from-blue-800 via-blue-600 to-blue-500 text-white"
                          data-radix-toast-announce-exclude=""
                          data-radix-toast-announce-alt="Deposit"
                        >
                          <a href="/dashboard/deposits">Deposit</a>
                        </button>
                        <button
                          type="button"
                          className="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-blue-300 group-[.destructive]:hover:text-blue-50 group-[.destructive]:focus:ring-blue-400 group-[.destructive]:focus:ring-offset-blue-600"
                          toast-close=""
                          data-radix-toast-announce-exclude=""
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
                        </button>
                      </li>
                    </ol>
                  </div>
                  <div className="dash-cont p-4 relative max-w-[100vw]">
                    {children}
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

export default function layout({ children }) {
  return (
    <main className="h-screen  overflow-hidden relative overflow-y-scroll w-screen">
      {/* <PopMenu />
      <PopNotifications /> */}
      <div
        style={{
          position: "fixed",
          zIndex: 9999,
          inset: 16,
          pointerEvents: "none",
        }}
      ></div>
      <div className="fixed top-0 left-0 w-full   z-30">
        <div className="nav-container flex justify-between  border border-white/5 duration-300 items-center py-3 px-5 transition-colors">
          <div className="burger md:hidden cursor-pointer">
            <button
           
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:rc:"
              data-state="closed"
            >
              <div className="burger-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
          <div className="title hidden md:flex">
            <h2 className="font-bold text-4xl font-mono">
            <svg
                width="198"
                height="32"
                viewBox="0 0 198 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                            
              <text x="0" y="30"  fill="rgba(0,122,225)">STOXA</text>




              </svg>
            </h2>
          </div>
          <div className="nav-tools text-sm flex items-center">
            <button
              type="button"
              role="combobox"
              aria-controls="radix-:rf:"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              className="flex h-12 w-full items-center justify-between rounded-md border-input bg-transparent px-3 py-4 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring /focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border"
            >
              <span style={{ pointerEvents: "none" }}>
                <div className="flex items-center py-2">
                  <div className="w-5 h-5">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="10000"
                      decoding="async"
                      data-nimg="1"
                      //   srcset="
                      //     /_next/image?url=%2Fassets%2Fdollar.png&amp;w=1080&amp;q=75 1x,
                      //     /_next/image?url=%2Fassets%2Fdollar.png&amp;w=2048&amp;q=75 2x
                      //   "
                      srcSet="/assets/dollar.webp"
                      src="/assets/dollar.webp"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="text-sm font-bold mx-2">
                    <code>0</code>
                  </div>
                </div>
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
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:rg:"
              data-state="closed"
            >
              <div className="notif-cont ml-3 relative">
                <div className="flex font-bold md:bg-green-800/30 text-green-600 rounded-full md:rounded-lg md:px-3 md:py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="md:w-5 md:h-5 w-5 h-5 md:mr-1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 8a6 6 0 1112 0c0 1.887.454 3.665 1.257 5.234a.75.75 0 01-.515 1.076 32.903 32.903 0 01-3.256.508 3.5 3.5 0 01-6.972 0 32.91 32.91 0 01-3.256-.508.75.75 0 01-.515-1.076A11.448 11.448 0 004 8zm6 7c-.655 0-1.305-.02-1.95-.057a2 2 0 003.9 0c-.645.038-1.295.057-1.95.057zM8.75 6a.75.75 0 000 1.5h1.043L8.14 9.814A.75.75 0 008.75 11h2.5a.75.75 0 000-1.5h-1.043l1.653-2.314A.75.75 0 0011.25 6h-2.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <div className="hidden md:block text-green-600">
                    Notifications
                  </div>
                </div>
              </div>
            </button>
            <button className="theme-toggler  md:p-3  md:bg-white/10 text-white  rounded-full mx-5 md:mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 }"
              >
                <path
                  d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:rh:"
              data-state="closed"
            >
              <div className="flex font-bold text-blue-600 rounded-full md:p-3 md:bg-blue-50 md:mr-5 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="content-container relative md:flex h-full">
          <SideBar />
          <Content>{children}</Content>
        </div>
      </div>
    </main>
  );
}


