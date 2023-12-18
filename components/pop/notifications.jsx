import React from "react";

function PopNotifications() {
  return (
    <div data-radix-popper-content-wrapper="" id="" className=" float-right right-0 top-0">
      <div
        data-side="bottom"
        data-align="center"
        data-state="open"
        role="dialog"
        id="radix-:r4:"
        className="z-50 fixed rounded-md border top-20 right-0 w-80 p-4 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-[350px] md:w-[400px] mx-3 pb-0 pt-4 px-1  overflow-hidden bg-[#222] border-white/5 text-gray-200"
        tabIndex="1"
      >
        <div className="tit px-3">
          <div className="flex w-full justify-between items-center pb-4">
            <div className="title-name font-bold text-white">Notifications</div>
            <div className="titcount fleex">
              <div className=" ">
                <div className="py-1 px-2 rounded-full text-xs font-bold bg-[#333]">
                  6
                </div>
              </div>
            </div>
          </div>
          <div className="line w-1/2 mx-auto mb-2 h-0.5 rounded-full bg-white/5"></div>
        </div>
        <div className="cont">
          <div>
            <div
              dir="ltr"
              className="relative radix3 max-h-[300px] overflow-scroll overflow-x-hidden w-full px-3 py-3"
            >
              <div
                data-radix-scroll-area-viewport=""
                className="h-full w-full rounded-[inherit]"
                style={{ overflow: "hidden scroll" }}
              >
                <div style={{ minWidth: "100%", display: "table" }}>
                  <div className="flex justify-between w-full items-start cursor-pointer transition-all">
                    <div className="icon flex items-center flex-col">
                      <div className="bg-red-500/10 text-red-500 rounded-full p-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M13.2 2.24a.75.75 0 00.04 1.06l2.1 1.95H6.75a.75.75 0 000 1.5h8.59l-2.1 1.95a.75.75 0 101.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 00-1.06.04zm-6.4 8a.75.75 0 00-1.06-.04l-3.5 3.25a.75.75 0 000 1.1l3.5 3.25a.75.75 0 101.02-1.1l-2.1-1.95h8.59a.75.75 0 000-1.5H4.66l2.1-1.95a.75.75 0 00.04-1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div className="linedwon bg-red-500/10 text-red-500 h-11 border border-dashed border-white/5"></div>
                    </div>
                    <div className="message w-full text-sm mx-2">
                      <div className="pb-1 pt-1 text-white">
                        Your premium plan purchase was declined due to
                        insufficient balance. Please deposit.
                      </div>
                      <div className="date text-xs capitalize opacity-40">
                        about 3 hours ago
                      </div>
                    </div>
                    <div className="actiom pt-3 h-full /w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 text-white/50 hover:text-white/80"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-between w-full items-start cursor-pointer transition-all">
                    <div className="icon flex items-center flex-col">
                      <div className="bg-red-500/10 text-red-500 rounded-full p-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M13.2 2.24a.75.75 0 00.04 1.06l2.1 1.95H6.75a.75.75 0 000 1.5h8.59l-2.1 1.95a.75.75 0 101.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 00-1.06.04zm-6.4 8a.75.75 0 00-1.06-.04l-3.5 3.25a.75.75 0 000 1.1l3.5 3.25a.75.75 0 101.02-1.1l-2.1-1.95h8.59a.75.75 0 000-1.5H4.66l2.1-1.95a.75.75 0 00.04-1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div className="linedwon bg-red-500/10 text-red-500 h-11 border border-dashed border-white/5"></div>
                    </div>
                    <div className="message w-full text-sm mx-2">
                      <div className="pb-1 pt-1 text-white">
                        Your premium plan purchase was declined due to
                        insufficient balance. Please deposit.
                      </div>
                      <div className="date text-xs capitalize opacity-40">
                        about 3 hours ago
                      </div>
                    </div>
                    <div className="actiom pt-3 h-full /w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 text-white/50 hover:text-white/80"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-between w-full items-start cursor-pointer transition-all">
                    <div className="icon flex items-center flex-col">
                      <div className="bg-red-500/10 text-red-500 rounded-full p-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M13.2 2.24a.75.75 0 00.04 1.06l2.1 1.95H6.75a.75.75 0 000 1.5h8.59l-2.1 1.95a.75.75 0 101.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 00-1.06.04zm-6.4 8a.75.75 0 00-1.06-.04l-3.5 3.25a.75.75 0 000 1.1l3.5 3.25a.75.75 0 101.02-1.1l-2.1-1.95h8.59a.75.75 0 000-1.5H4.66l2.1-1.95a.75.75 0 00.04-1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div className="linedwon bg-red-500/10 text-red-500 h-11 border border-dashed border-white/5"></div>
                    </div>
                    <div className="message w-full text-sm mx-2">
                      <div className="pb-1 pt-1 text-white">
                        Your premium plan purchase was declined due to
                        insufficient balance. Please deposit.
                      </div>
                      <div className="date text-xs capitalize opacity-40">
                        about 3 hours ago
                      </div>
                    </div>
                    <div className="actiom pt-3 h-full /w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 text-white/50 hover:text-white/80"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-between w-full items-start cursor-pointer transition-all">
                    <div className="icon flex items-center flex-col">
                      <div className="bg-red-500/10 text-red-500 rounded-full p-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M13.2 2.24a.75.75 0 00.04 1.06l2.1 1.95H6.75a.75.75 0 000 1.5h8.59l-2.1 1.95a.75.75 0 101.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 00-1.06.04zm-6.4 8a.75.75 0 00-1.06-.04l-3.5 3.25a.75.75 0 000 1.1l3.5 3.25a.75.75 0 101.02-1.1l-2.1-1.95h8.59a.75.75 0 000-1.5H4.66l2.1-1.95a.75.75 0 00.04-1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div className="linedwon bg-red-500/10 text-red-500 h-11 border border-dashed border-white/5"></div>
                    </div>
                    <div className="message w-full text-sm mx-2">
                      <div className="pb-1 pt-1 text-white">
                        Your premium plan purchase was declined due to
                        insufficient balance. Please deposit.
                      </div>
                      <div className="date text-xs capitalize opacity-40">
                        about 3 hours ago
                      </div>
                    </div>
                    <div className="actiom pt-3 h-full /w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 text-white/50 hover:text-white/80"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-between w-full items-start cursor-pointer transition-all">
                    <div className="icon flex items-center flex-col">
                      <div className="bg-red-500/10 text-red-500 rounded-full p-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M13.2 2.24a.75.75 0 00.04 1.06l2.1 1.95H6.75a.75.75 0 000 1.5h8.59l-2.1 1.95a.75.75 0 101.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 00-1.06.04zm-6.4 8a.75.75 0 00-1.06-.04l-3.5 3.25a.75.75 0 000 1.1l3.5 3.25a.75.75 0 101.02-1.1l-2.1-1.95h8.59a.75.75 0 000-1.5H4.66l2.1-1.95a.75.75 0 00.04-1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div className="linedwon bg-red-500/10 text-red-500 h-11 border border-dashed border-white/5"></div>
                    </div>
                    <div className="message w-full text-sm mx-2">
                      <div className="pb-1 pt-1 text-white">
                        Your premium plan purchase was declined due to
                        insufficient balance. Please deposit.
                      </div>
                      <div className="date text-xs capitalize opacity-40">
                        about 3 hours ago
                      </div>
                    </div>
                    <div className="actiom pt-3 h-full /w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 text-white/50 hover:text-white/80"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-between w-full items-start cursor-pointer transition-all">
                    <div className="icon flex items-center flex-col">
                      <div className="bg-[#333] text-white rounded-full p-3">
                        🤝
                      </div>
                      <div className="linedwon bg-[#333] text-white"></div>
                    </div>
                    <div className="message w-full text-sm mx-2">
                      <div className="pb-1 pt-1 text-white">
                        Welcome to capital nexus
                      </div>
                      <div className="date text-xs capitalize opacity-40">
                        about 5 hours ago
                      </div>
                    </div>
                    <div className="actiom pt-3 h-full /w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 text-white/50 hover:text-white/80"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
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

export default PopNotifications;
