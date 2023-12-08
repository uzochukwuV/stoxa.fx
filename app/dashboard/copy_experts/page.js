import React from "react";
import Image from "next/image";

function page() {
  return (
    <div style={{minWidth: "100%", display: "table"}}>
      <div>
        <div class="pt-4 px-4">
          <div class="title-region">
            <div class="text-black/50 text-sm">
              <h1 class="text-xl mt-2 font-bold mb-2 capitalize">
                Copy expert traders
              </h1>
              <p class="text-black/50/80">
                Copy expert traders from all over the world and enhance your
                investment portfolio.
              </p>
            </div>
          </div>
          <div class="input-region">
            <div class="rounded-md mt-5 flex items-center px-3 capitalize w-full bg-black/5 border border-white/10 text-black/50">
              <input
                class="flex w-full rounded-md border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-transparent font-bold border-0 h-12 ring-0 hover:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:ring-0"
                placeholder="Search expert traders"
                type="text"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 opacity-50"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div class="traders-region mt-6">
            <div class="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div class=" w-full p-3 relative rounded-md text-black/50  border-white/5 bg-black/5">
                <div class="flag absolute top-2 right-2">
                  <div class="rounded-sm p-3 bg-black/5">
                    <Image
                      alt="US"
                      width="21"
                      height="21"
                      src="https://cdn.jsdelivr.net/gh/umidbekk/react-flag-kit@1/assets/US.svg"
                    />
                  </div>
                </div>
                <div class="image-region overflow-hidden flex justify-center w-full">
                  <div class="img-container w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      class=""
                      srcset="
                    /_next/image?url=%2Fassets%2Fcopy-7.jpg&amp;w=1080&amp;q=75 1x,
                    /_next/image?url=%2Fassets%2Fcopy-7.jpg&amp;w=2048&amp;q=75 2x
                  "
                      src="/_next/image?url=%2Fassets%2Fcopy-7.jpg&amp;w=2048&amp;q=75"
                      style={{color: "transparent"}}
                    />
                  </div>
                </div>
                <div class="trader-name font-bold text-center capitalize text-xl mt-4 justify-center items-center flex">
                  <div>ProTraderX</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-5 h-5 ml-1 text-blue-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="location flex items-center gap-x-1 mt-2 justify-center text-black/50/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <div class="text-sm font-bold">New York</div>
                </div>
                <div class="key-items mt-2 flex gap-x-3 justify-center items-center text-black/50/80">
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">1.2k</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.5 3.528v4.644c0 .729-.29 1.428-.805 1.944l-1.217 1.216a8.75 8.75 0 013.55.621l.502.201a7.25 7.25 0 004.178.365l-2.403-2.403a2.75 2.75 0 01-.805-1.944V3.528a40.205 40.205 0 00-3 0zm4.5.084l.19.015a.75.75 0 10.12-1.495 41.364 41.364 0 00-6.62 0 .75.75 0 00.12 1.495L7 3.612v4.56c0 .331-.132.649-.366.883L2.6 13.09c-1.496 1.496-.817 4.15 1.403 4.475C5.961 17.852 7.963 18 10 18s4.039-.148 5.997-.436c2.22-.325 2.9-2.979 1.403-4.475l-4.034-4.034A1.25 1.25 0 0113 8.172v-4.56z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">8.2</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5 text-blue-600"
                    >
                      <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">AAPL</div>
                  </div>
                </div>
                <div class="other-deets grid grid-cols-2 gap-x-2 mt-2">
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total trades</div>
                    </div>
                    <div class="font-bold text-sm">300</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total loss</div>
                    </div>
                    <div class="font-bold text-sm">12</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Profit share</div>
                    </div>
                    <div class="font-bold text-sm">20.5%</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Win rate</div>
                    </div>
                    <div class="font-bold text-sm">75%</div>
                  </div>
                </div>
                <div class="btn flex justify-center mt-8">
                  <button class=" rounded-md px-4 py-3 text-sm font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-500 to-blue-500 text-black/50">
                    Copy Trader Strategy
                  </button>
                </div>
              </div>
              <div class=" w-full p-3 relative rounded-md text-black/50 border border-white/5 bg-black/5">
                <div class="flag absolute top-2 right-2">
                  <div class="rounded-sm p-3 bg-black/5">
                    <Image
                      alt="US"
                      width="21"
                      height="21"
                      src="https://cdn.jsdelivr.net/gh/umidbekk/react-flag-kit@1/assets/US.svg"
                    />
                  </div>
                </div>
                <div class="image-region overflow-hidden flex justify-center w-full">
                  <div class="img-container w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      class=""
                      srcset="
                    /_next/image?url=%2Fassets%2Fcopy-14.jpg&amp;w=1080&amp;q=75 1x,
                    /_next/image?url=%2Fassets%2Fcopy-14.jpg&amp;w=2048&amp;q=75 2x
                  "
                      src="/_next/image?url=%2Fassets%2Fcopy-14.jpg&amp;w=2048&amp;q=75"
                      style={{color: "transparent"}}
                    />
                  </div>
                </div>
                <div class="trader-name font-bold text-center capitalize text-xl mt-4 justify-center items-center flex">
                  <div>SwingMaster</div>
                </div>
                <div class="location flex items-center gap-x-1 mt-2 justify-center text-black/50/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <div class="text-sm font-bold">Los Angeles</div>
                </div>
                <div class="key-items mt-2 flex gap-x-3 justify-center items-center text-black/50/80">
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">0.8k</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.5 3.528v4.644c0 .729-.29 1.428-.805 1.944l-1.217 1.216a8.75 8.75 0 013.55.621l.502.201a7.25 7.25 0 004.178.365l-2.403-2.403a2.75 2.75 0 01-.805-1.944V3.528a40.205 40.205 0 00-3 0zm4.5.084l.19.015a.75.75 0 10.12-1.495 41.364 41.364 0 00-6.62 0 .75.75 0 00.12 1.495L7 3.612v4.56c0 .331-.132.649-.366.883L2.6 13.09c-1.496 1.496-.817 4.15 1.403 4.475C5.961 17.852 7.963 18 10 18s4.039-.148 5.997-.436c2.22-.325 2.9-2.979 1.403-4.475l-4.034-4.034A1.25 1.25 0 0113 8.172v-4.56z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">6.5</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5 text-blue-600"
                    >
                      <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">GOOGL</div>
                  </div>
                </div>
                <div class="other-deets grid grid-cols-2 gap-x-2 mt-2">
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total trades</div>
                    </div>
                    <div class="font-bold text-sm">450</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total loss</div>
                    </div>
                    <div class="font-bold text-sm">8</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Profit share</div>
                    </div>
                    <div class="font-bold text-sm">15.2%</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Win rate</div>
                    </div>
                    <div class="font-bold text-sm">62%</div>
                  </div>
                </div>
                <div class="btn flex justify-center mt-8">
                  <button class=" rounded-md px-4 py-3 text-sm font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-500 to-blue-500 text-black/50">
                    Copy Trader Strategy
                  </button>
                </div>
              </div>
              <div class=" w-full p-3 relative rounded-md text-black/50 border border-white/5 bg-black/5">
                <div class="flag absolute top-2 right-2">
                  <div class="rounded-sm p-3 bg-black/5">
                    <Image
                      alt="GB"
                      width="21"
                      height="21"
                      src="https://cdn.jsdelivr.net/gh/umidbekk/react-flag-kit@1/assets/GB.svg"
                    />
                  </div>
                </div>
                <div class="image-region overflow-hidden flex justify-center w-full">
                  <div class="img-container w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      class=""
                      srcset="
                    /_next/image?url=%2Fassets%2Fcopy-trader-2.jpg&amp;w=1080&amp;q=75 1x,
                    /_next/image?url=%2Fassets%2Fcopy-trader-2.jpg&amp;w=2048&amp;q=75 2x
                  "
                      src="/_next/image?url=%2Fassets%2Fcopy-trader-2.jpg&amp;w=2048&amp;q=75"
                      style={{color: "transparent"}}
                    />
                  </div>
                </div>
                <div class="trader-name font-bold text-center capitalize text-xl mt-4 justify-center items-center flex">
                  <div>OptionsPro</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-5 h-5 ml-1 text-blue-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="location flex items-center gap-x-1 mt-2 justify-center text-black/50/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <div class="text-sm font-bold">London</div>
                </div>
                <div class="key-items mt-2 flex gap-x-3 justify-center items-center text-black/50/80">
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">1.5k</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.5 3.528v4.644c0 .729-.29 1.428-.805 1.944l-1.217 1.216a8.75 8.75 0 013.55.621l.502.201a7.25 7.25 0 004.178.365l-2.403-2.403a2.75 2.75 0 01-.805-1.944V3.528a40.205 40.205 0 00-3 0zm4.5.084l.19.015a.75.75 0 10.12-1.495 41.364 41.364 0 00-6.62 0 .75.75 0 00.12 1.495L7 3.612v4.56c0 .331-.132.649-.366.883L2.6 13.09c-1.496 1.496-.817 4.15 1.403 4.475C5.961 17.852 7.963 18 10 18s4.039-.148 5.997-.436c2.22-.325 2.9-2.979 1.403-4.475l-4.034-4.034A1.25 1.25 0 0113 8.172v-4.56z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">7.1</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5 text-blue-600"
                    >
                      <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">TSLA</div>
                  </div>
                </div>
                <div class="other-deets grid grid-cols-2 gap-x-2 mt-2">
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total trades</div>
                    </div>
                    <div class="font-bold text-sm">250</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total loss</div>
                    </div>
                    <div class="font-bold text-sm">18</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Profit share</div>
                    </div>
                    <div class="font-bold text-sm">23.7%</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Win rate</div>
                    </div>
                    <div class="font-bold text-sm">81%</div>
                  </div>
                </div>
                <div class="btn flex justify-center mt-8">
                  <button class=" px-4 py-3 text-sm font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-500 to-blue-500 text-black/50">
                    Copy Trader Strategy
                  </button>
                </div>
              </div>
              <div class=" w-full p-3 relative rounded-md text-black/50 border border-white/5 bg-black/5">
                <div class="flag absolute top-2 right-2">
                  <div class="rounded-sm p-3 bg-black/5">
                    <Image
                      alt="US"
                      width="21"
                      height="21"
                      src="https://cdn.jsdelivr.net/gh/umidbekk/react-flag-kit@1/assets/US.svg"
                    />
                  </div>
                </div>
                <div class="image-region overflow-hidden flex justify-center w-full">
                  <div class="img-container w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      class=""
                      srcset="
                    /_next/image?url=%2Fassets%2Fcopy-trader-3.jpg&amp;w=1080&amp;q=75 1x,
                    /_next/image?url=%2Fassets%2Fcopy-trader-3.jpg&amp;w=2048&amp;q=75 2x
                  "
                      src="/_next/image?url=%2Fassets%2Fcopy-trader-3.jpg&amp;w=2048&amp;q=75"
                      style={{color: "transparent"}}
                    />
                  </div>
                </div>
                <div class="trader-name font-bold text-center capitalize text-xl mt-4 justify-center items-center flex">
                  <div>Quantum master 🥂</div>
                </div>
                <div class="location flex items-center gap-x-1 mt-2 justify-center text-black/50/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <div class="text-sm font-bold">San Francisco</div>
                </div>
                <div class="key-items mt-2 flex gap-x-3 justify-center items-center text-black/50/80">
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">1.0k</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.5 3.528v4.644c0 .729-.29 1.428-.805 1.944l-1.217 1.216a8.75 8.75 0 013.55.621l.502.201a7.25 7.25 0 004.178.365l-2.403-2.403a2.75 2.75 0 01-.805-1.944V3.528a40.205 40.205 0 00-3 0zm4.5.084l.19.015a.75.75 0 10.12-1.495 41.364 41.364 0 00-6.62 0 .75.75 0 00.12 1.495L7 3.612v4.56c0 .331-.132.649-.366.883L2.6 13.09c-1.496 1.496-.817 4.15 1.403 4.475C5.961 17.852 7.963 18 10 18s4.039-.148 5.997-.436c2.22-.325 2.9-2.979 1.403-4.475l-4.034-4.034A1.25 1.25 0 0113 8.172v-4.56z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">6.8</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5 text-blue-600"
                    >
                      <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">MSFT</div>
                  </div>
                </div>
                <div class="other-deets grid grid-cols-2 gap-x-2 mt-2">
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total trades</div>
                    </div>
                    <div class="font-bold text-sm">380</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total loss</div>
                    </div>
                    <div class="font-bold text-sm">15</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Profit share</div>
                    </div>
                    <div class="font-bold text-sm">18.9%</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Win rate</div>
                    </div>
                    <div class="font-bold text-sm">68%</div>
                  </div>
                </div>
                <div class="btn flex justify-center mt-8">
                  <button class=" rounded-md px-4 py-3 text-sm font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-500 to-blue-500 text-black/50">
                    Copy Trader Strategy
                  </button>
                </div>
              </div>
              <div class=" w-full p-3 relative rounded-md text-black/50 border border-white/5 bg-black/5">
                <div class="flag absolute top-2 right-2">
                  <div class="rounded-sm p-3 bg-black/5">
                    <Image
                      alt="AU"
                      width="21"
                      height="21"
                      src="https://cdn.jsdelivr.net/gh/umidbekk/react-flag-kit@1/assets/AU.svg"
                    />
                  </div>
                </div>
                <div class="image-region overflow-hidden flex justify-center w-full">
                  <div class="img-container w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      class=""
                      srcset="
                    /_next/image?url=%2Fassets%2Fcopy-trader-4.jpg&amp;w=1080&amp;q=75 1x,
                    /_next/image?url=%2Fassets%2Fcopy-trader-4.jpg&amp;w=2048&amp;q=75 2x
                  "
                      src="/_next/image?url=%2Fassets%2Fcopy-trader-4.jpg&amp;w=2048&amp;q=75"
                      style={{color: "transparent"}}
                    />
                  </div>
                </div>
                <div class="trader-name font-bold text-center capitalize text-xl mt-4 justify-center items-center flex">
                  <div>CryptoMaster</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-5 h-5 ml-1 text-blue-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="location flex items-center gap-x-1 mt-2 justify-center text-black/50/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <div class="text-sm font-bold">Sydney</div>
                </div>
                <div class="key-items mt-2 flex gap-x-3 justify-center items-center text-black/50/80">
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">0.9k</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.5 3.528v4.644c0 .729-.29 1.428-.805 1.944l-1.217 1.216a8.75 8.75 0 013.55.621l.502.201a7.25 7.25 0 004.178.365l-2.403-2.403a2.75 2.75 0 01-.805-1.944V3.528a40.205 40.205 0 00-3 0zm4.5.084l.19.015a.75.75 0 10.12-1.495 41.364 41.364 0 00-6.62 0 .75.75 0 00.12 1.495L7 3.612v4.56c0 .331-.132.649-.366.883L2.6 13.09c-1.496 1.496-.817 4.15 1.403 4.475C5.961 17.852 7.963 18 10 18s4.039-.148 5.997-.436c2.22-.325 2.9-2.979 1.403-4.475l-4.034-4.034A1.25 1.25 0 0113 8.172v-4.56z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">7.5</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5 text-blue-600"
                    >
                      <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">BTC</div>
                  </div>
                </div>
                <div class="other-deets grid grid-cols-2 gap-x-2 mt-2">
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total trades</div>
                    </div>
                    <div class="font-bold text-sm">320</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total loss</div>
                    </div>
                    <div class="font-bold text-sm">10</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Profit share</div>
                    </div>
                    <div class="font-bold text-sm">21.3%</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Win rate</div>
                    </div>
                    <div class="font-bold text-sm">73%</div>
                  </div>
                </div>
                <div class="btn flex justify-center mt-8">
                  <button class=" rounded-md px-4 py-3 text-sm font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-500 to-blue-500 text-black/50">
                    Copy Trader Strategy
                  </button>
                </div>
              </div>
              <div class=" w-full p-3 relative rounded-md text-black/50 border border-white/5 bg-black/5">
                <div class="flag absolute top-2 right-2">
                  <div class="rounded-sm p-3 bg-black/5">
                    <Image
                      alt="CH"
                      width="21"
                      height="21"
                      src="https://cdn.jsdelivr.net/gh/umidbekk/react-flag-kit@1/assets/CH.svg"
                    />
                  </div>
                </div>
                <div class="image-region overflow-hidden flex justify-center w-full">
                  <div class="img-container w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      class=""
                      srcset="
                    /_next/image?url=%2Fassets%2Fcopy-trader-5.jpg&amp;w=1080&amp;q=75 1x,
                    /_next/image?url=%2Fassets%2Fcopy-trader-5.jpg&amp;w=2048&amp;q=75 2x
                  "
                      src="/_next/image?url=%2Fassets%2Fcopy-trader-5.jpg&amp;w=2048&amp;q=75"
                      style={{color: "transparent"}}
                    />
                  </div>
                </div>
                <div class="trader-name font-bold text-center capitalize text-xl mt-4 justify-center items-center flex">
                  <div>CommoditiesExpert</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-5 h-5 ml-1 text-blue-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="location flex items-center gap-x-1 mt-2 justify-center text-black/50/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <div class="text-sm font-bold">Zurich</div>
                </div>
                <div class="key-items mt-2 flex gap-x-3 justify-center items-center text-black/50/80">
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">1.1k</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.5 3.528v4.644c0 .729-.29 1.428-.805 1.944l-1.217 1.216a8.75 8.75 0 013.55.621l.502.201a7.25 7.25 0 004.178.365l-2.403-2.403a2.75 2.75 0 01-.805-1.944V3.528a40.205 40.205 0 00-3 0zm4.5.084l.19.015a.75.75 0 10.12-1.495 41.364 41.364 0 00-6.62 0 .75.75 0 00.12 1.495L7 3.612v4.56c0 .331-.132.649-.366.883L2.6 13.09c-1.496 1.496-.817 4.15 1.403 4.475C5.961 17.852 7.963 18 10 18s4.039-.148 5.997-.436c2.22-.325 2.9-2.979 1.403-4.475l-4.034-4.034A1.25 1.25 0 0113 8.172v-4.56z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">6.2</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5 text-blue-600"
                    >
                      <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">GLD</div>
                  </div>
                </div>
                <div class="other-deets grid grid-cols-2 gap-x-2 mt-2">
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total trades</div>
                    </div>
                    <div class="font-bold text-sm">310</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total loss</div>
                    </div>
                    <div class="font-bold text-sm">9</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Profit share</div>
                    </div>
                    <div class="font-bold text-sm">19.8%</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Win rate</div>
                    </div>
                    <div class="font-bold text-sm">79%</div>
                  </div>
                </div>
                <div class="btn flex justify-center mt-8">
                  <button class=" rounded-md px-4 py-3 text-sm font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-500 to-blue-500 text-black/50">
                    Copy Trader Strategy
                  </button>
                </div>
              </div>
              <div class=" w-full p-3 relative rounded-md text-black/50 border border-white/5 bg-black/5">
                <div class="flag absolute top-2 right-2">
                  <div class="rounded-sm p-3 bg-black/5">
                    <Image
                      alt="US"
                      width="21"
                      height="21"
                      src="https://cdn.jsdelivr.net/gh/umidbekk/react-flag-kit@1/assets/US.svg"
                    />
                  </div>
                </div>
                <div class="image-region overflow-hidden flex justify-center w-full">
                  <div class="img-container w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      class=""
                      srcset="
                    /_next/image?url=%2Fassets%2Fcopy-6.jpg&amp;w=1080&amp;q=75 1x,
                    /_next/image?url=%2Fassets%2Fcopy-6.jpg&amp;w=2048&amp;q=75 2x
                  "
                      src="/_next/image?url=%2Fassets%2Fcopy-6.jpg&amp;w=2048&amp;q=75"
                      style={{color: "transparent"}}
                    />
                  </div>
                </div>
                <div class="trader-name font-bold text-center capitalize text-xl mt-4 justify-center items-center flex">
                  <div>OptionsWizard</div>
                </div>
                <div class="location flex items-center gap-x-1 mt-2 justify-center text-black/50/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <div class="text-sm font-bold">Seattle</div>
                </div>
                <div class="key-items mt-2 flex gap-x-3 justify-center items-center text-black/50/80">
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">0.8k</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.5 3.528v4.644c0 .729-.29 1.428-.805 1.944l-1.217 1.216a8.75 8.75 0 013.55.621l.502.201a7.25 7.25 0 004.178.365l-2.403-2.403a2.75 2.75 0 01-.805-1.944V3.528a40.205 40.205 0 00-3 0zm4.5.084l.19.015a.75.75 0 10.12-1.495 41.364 41.364 0 00-6.62 0 .75.75 0 00.12 1.495L7 3.612v4.56c0 .331-.132.649-.366.883L2.6 13.09c-1.496 1.496-.817 4.15 1.403 4.475C5.961 17.852 7.963 18 10 18s4.039-.148 5.997-.436c2.22-.325 2.9-2.979 1.403-4.475l-4.034-4.034A1.25 1.25 0 0113 8.172v-4.56z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">8</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5 text-blue-600"
                    >
                      <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">AMZN</div>
                  </div>
                </div>
                <div class="other-deets grid grid-cols-2 gap-x-2 mt-2">
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total trades</div>
                    </div>
                    <div class="font-bold text-sm">270</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total loss</div>
                    </div>
                    <div class="font-bold text-sm">14</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Profit share</div>
                    </div>
                    <div class="font-bold text-sm">17.6%</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Win rate</div>
                    </div>
                    <div class="font-bold text-sm">70%</div>
                  </div>
                </div>
                <div class="btn flex justify-center mt-8">
                  <button class=" rounded-md px-4 py-3 text-sm font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-500 to-blue-500 text-black/50">
                    Copy Trader Strategy
                  </button>
                </div>
              </div>
              <div class="w-full p-3 relative rounded-md text-black/50 border border-white/5 bg-black/5">
                <div class="flag absolute top-2 right-2">
                  <div class="rounded-sm p-3 bg-black/5">
                    <Image
                      alt="SG"
                      width="21"
                      height="21"
                      src="https://cdn.jsdelivr.net/gh/umidbekk/react-flag-kit@1/assets/SG.svg"
                    />
                  </div>
                </div>
                <div class="image-region overflow-hidden flex justify-center w-full">
                  <div class="img-container w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      class=""
                      srcset="
                    /_next/image?url=%2Fassets%2Fcopy-trader.jpg&amp;w=1080&amp;q=75 1x,
                    /_next/image?url=%2Fassets%2Fcopy-trader.jpg&amp;w=2048&amp;q=75 2x
                  "
                      src="/_next/image?url=%2Fassets%2Fcopy-trader.jpg&amp;w=2048&amp;q=75"
                      style={{color: "transparent"}}
                    />
                  </div>
                </div>
                <div class="trader-name font-bold text-center capitalize text-xl mt-4 justify-center items-center flex">
                  <div>DayTradeQueen</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-5 h-5 ml-1 text-blue-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="location flex items-center gap-x-1 mt-2 justify-center text-black/50/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <div class="text-sm font-bold">Singapore</div>
                </div>
                <div class="key-items mt-2 flex gap-x-3 justify-center items-center text-black/50/80">
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">1.3k</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.5 3.528v4.644c0 .729-.29 1.428-.805 1.944l-1.217 1.216a8.75 8.75 0 013.55.621l.502.201a7.25 7.25 0 004.178.365l-2.403-2.403a2.75 2.75 0 01-.805-1.944V3.528a40.205 40.205 0 00-3 0zm4.5.084l.19.015a.75.75 0 10.12-1.495 41.364 41.364 0 00-6.62 0 .75.75 0 00.12 1.495L7 3.612v4.56c0 .331-.132.649-.366.883L2.6 13.09c-1.496 1.496-.817 4.15 1.403 4.475C5.961 17.852 7.963 18 10 18s4.039-.148 5.997-.436c2.22-.325 2.9-2.979 1.403-4.475l-4.034-4.034A1.25 1.25 0 0113 8.172v-4.56z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">7.3</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5 text-blue-600"
                    >
                      <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">NFLX</div>
                  </div>
                </div>
                <div class="other-deets grid grid-cols-2 gap-x-2 mt-2">
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total trades</div>
                    </div>
                    <div class="font-bold text-sm">290</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total loss</div>
                    </div>
                    <div class="font-bold text-sm">11</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Profit share</div>
                    </div>
                    <div class="font-bold text-sm">22%</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Win rate</div>
                    </div>
                    <div class="font-bold text-sm">76%</div>
                  </div>
                </div>
                <div class="btn flex justify-center mt-8">
                  <button class=" rounded-md px-4 py-3 text-sm font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-500 to-blue-500 text-black/50">
                    Copy Trader Strategy
                  </button>
                </div>
              </div>
              <div class=" w-full p-3 relative rounded-md text-black/50 border border-white/5 bg-black/5">
                <div class="flag absolute top-2 right-2">
                  <div class="rounded-sm p-3 bg-black/5">
                    <Image
                      alt="US"
                      width="21"
                      height="21"
                      src="https://cdn.jsdelivr.net/gh/umidbekk/react-flag-kit@1/assets/US.svg"
                    />
                  </div>
                </div>
                <div class="image-region overflow-hidden flex justify-center w-full">
                  <div class="img-container w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      class=""
                      srcset="
                    /_next/image?url=%2Fassets%2Fcopy-13.jpg&amp;w=1080&amp;q=75 1x,
                    /_next/image?url=%2Fassets%2Fcopy-13.jpg&amp;w=2048&amp;q=75 2x
                  "
                      src="/_next/image?url=%2Fassets%2Fcopy-13.jpg&amp;w=2048&amp;q=75"
                      style={{color: "transparent"}}
                    />
                  </div>
                </div>
                <div class="trader-name font-bold text-center capitalize text-xl mt-4 justify-center items-center flex">
                  <div>SwingKing</div>
                </div>
                <div class="location flex items-center gap-x-1 mt-2 justify-center text-black/50/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <div class="text-sm font-bold">Philadelphia</div>
                </div>
                <div class="key-items mt-2 flex gap-x-3 justify-center items-center text-black/50/80">
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">0.9k</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.5 3.528v4.644c0 .729-.29 1.428-.805 1.944l-1.217 1.216a8.75 8.75 0 013.55.621l.502.201a7.25 7.25 0 004.178.365l-2.403-2.403a2.75 2.75 0 01-.805-1.944V3.528a40.205 40.205 0 00-3 0zm4.5.084l.19.015a.75.75 0 10.12-1.495 41.364 41.364 0 00-6.62 0 .75.75 0 00.12 1.495L7 3.612v4.56c0 .331-.132.649-.366.883L2.6 13.09c-1.496 1.496-.817 4.15 1.403 4.475C5.961 17.852 7.963 18 10 18s4.039-.148 5.997-.436c2.22-.325 2.9-2.979 1.403-4.475l-4.034-4.034A1.25 1.25 0 0113 8.172v-4.56z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">6.6</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5 text-blue-600"
                    >
                      <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">AAPL</div>
                  </div>
                </div>
                <div class="other-deets grid grid-cols-2 gap-x-2 mt-2">
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total trades</div>
                    </div>
                    <div class="font-bold text-sm">360</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total loss</div>
                    </div>
                    <div class="font-bold text-sm">13</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Profit share</div>
                    </div>
                    <div class="font-bold text-sm">16.4%</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Win rate</div>
                    </div>
                    <div class="font-bold text-sm">64%</div>
                  </div>
                </div>
                <div class="btn flex justify-center mt-8">
                  <button class=" rounded-md px-4 py-3 text-sm font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-500 to-blue-500 text-black/50">
                    Copy Trader Strategy
                  </button>
                </div>
              </div>
              <div class=" w-full p-3 relative rounded-md text-black/50 border border-white/5 bg-black/5">
                <div class="flag absolute top-2 right-2">
                  <div class="rounded-sm p-3 bg-black/5">
                    <Image
                      alt="DE"
                      width="21"
                      height="21"
                      src="https://cdn.jsdelivr.net/gh/umidbekk/react-flag-kit@1/assets/DE.svg"
                    />
                  </div>
                </div>
                <div class="image-region overflow-hidden flex justify-center w-full">
                  <div class="img-container w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      class=""
                      srcset="
                    /_next/image?url=%2Fassets%2Fcopy.jpg&amp;w=1080&amp;q=75 1x,
                    /_next/image?url=%2Fassets%2Fcopy.jpg&amp;w=2048&amp;q=75 2x
                  "
                      src="/_next/image?url=%2Fassets%2Fcopy.jpg&amp;w=2048&amp;q=75"
                      style={{color: "transparent"}}
                    />
                  </div>
                </div>
                <div class="trader-name font-bold text-center capitalize text-xl mt-4 justify-center items-center flex">
                  <div>ForexqueenX</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-5 h-5 ml-1 text-blue-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="location flex items-center gap-x-1 mt-2 justify-center text-black/50/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <div class="text-sm font-bold">Berlin</div>
                </div>
                <div class="key-items mt-2 flex gap-x-3 justify-center items-center text-black/50/80">
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">1.4k</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.5 3.528v4.644c0 .729-.29 1.428-.805 1.944l-1.217 1.216a8.75 8.75 0 013.55.621l.502.201a7.25 7.25 0 004.178.365l-2.403-2.403a2.75 2.75 0 01-.805-1.944V3.528a40.205 40.205 0 00-3 0zm4.5.084l.19.015a.75.75 0 10.12-1.495 41.364 41.364 0 00-6.62 0 .75.75 0 00.12 1.495L7 3.612v4.56c0 .331-.132.649-.366.883L2.6 13.09c-1.496 1.496-.817 4.15 1.403 4.475C5.961 17.852 7.963 18 10 18s4.039-.148 5.997-.436c2.22-.325 2.9-2.979 1.403-4.475l-4.034-4.034A1.25 1.25 0 0113 8.172v-4.56z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">7.7</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5 text-blue-600"
                    >
                      <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">EURUSD</div>
                  </div>
                </div>
                <div class="other-deets grid grid-cols-2 gap-x-2 mt-2">
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total trades</div>
                    </div>
                    <div class="font-bold text-sm">330</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total loss</div>
                    </div>
                    <div class="font-bold text-sm">17</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Profit share</div>
                    </div>
                    <div class="font-bold text-sm">20.2%</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Win rate</div>
                    </div>
                    <div class="font-bold text-sm">72%</div>
                  </div>
                </div>
                <div class="btn flex justify-center mt-8">
                  <button class=" rounded-md px-4 py-3 text-sm font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-500 to-blue-500 text-black/50">
                    Copy Trader Strategy
                  </button>
                </div>
              </div>
              <div class=" w-full p-3 relative rounded-md text-black/50 border border-white/5 bg-black/5">
                <div class="flag absolute top-2 right-2">
                  <div class="rounded-sm p-3 bg-black/5">
                    <Image
                      alt="JP"
                      width="21"
                      height="21"
                      src="https://cdn.jsdelivr.net/gh/umidbekk/react-flag-kit@1/assets/JP.svg"
                    />
                  </div>
                </div>
                <div class="image-region overflow-hidden flex justify-center w-full">
                  <div class="img-container w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      class=""
                      srcset="
                    /_next/image?url=%2Fassets%2Fcopy-trader-1.jpg&amp;w=1080&amp;q=75 1x,
                    /_next/image?url=%2Fassets%2Fcopy-trader-1.jpg&amp;w=2048&amp;q=75 2x
                  "
                      src="/_next/image?url=%2Fassets%2Fcopy-trader-1.jpg&amp;w=2048&amp;q=75"
                      style={{color: "transparent"}}
                    />
                  </div>
                </div>
                <div class="trader-name font-bold text-center capitalize text-xl mt-4 justify-center items-center flex">
                  <div>Forex empress💃🥰</div>
                </div>
                <div class="location flex items-center gap-x-1 mt-2 justify-center text-black/50/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <div class="text-sm font-bold">Tokyo</div>
                </div>
                <div class="key-items mt-2 flex gap-x-3 justify-center items-center text-black/50/80">
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">1.1k</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.5 3.528v4.644c0 .729-.29 1.428-.805 1.944l-1.217 1.216a8.75 8.75 0 013.55.621l.502.201a7.25 7.25 0 004.178.365l-2.403-2.403a2.75 2.75 0 01-.805-1.944V3.528a40.205 40.205 0 00-3 0zm4.5.084l.19.015a.75.75 0 10.12-1.495 41.364 41.364 0 00-6.62 0 .75.75 0 00.12 1.495L7 3.612v4.56c0 .331-.132.649-.366.883L2.6 13.09c-1.496 1.496-.817 4.15 1.403 4.475C5.961 17.852 7.963 18 10 18s4.039-.148 5.997-.436c2.22-.325 2.9-2.979 1.403-4.475l-4.034-4.034A1.25 1.25 0 0113 8.172v-4.56z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">7.8</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5 text-blue-600"
                    >
                      <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">JPY</div>
                  </div>
                </div>
                <div class="other-deets grid grid-cols-2 gap-x-2 mt-2">
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total trades</div>
                    </div>
                    <div class="font-bold text-sm">280</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total loss</div>
                    </div>
                    <div class="font-bold text-sm">9</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Profit share</div>
                    </div>
                    <div class="font-bold text-sm">21.5%</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Win rate</div>
                    </div>
                    <div class="font-bold text-sm">78%</div>
                  </div>
                </div>
                <div class="btn flex justify-center mt-8">
                  <button class=" rounded-md px-4 py-3 text-sm font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-500 to-blue-500 text-black/50">
                    Copy Trader Strategy
                  </button>
                </div>
              </div>
              <div class=" w-full p-3 relative rounded-md text-black/50 border border-white/5 bg-black/5">
                <div class="flag absolute top-2 right-2">
                  <div class="rounded-sm p-3 bg-black/5">
                    <Image
                      alt="IN"
                      width="21"
                      height="21"
                      src="https://cdn.jsdelivr.net/gh/umidbekk/react-flag-kit@1/assets/IN.svg"
                    />
                  </div>
                </div>
                <div class="image-region overflow-hidden flex justify-center w-full">
                  <div class="img-container w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      class=""
                      srcset="
                    /_next/image?url=%2Fassets%2Fcopy-9.jpg&amp;w=1080&amp;q=75 1x,
                    /_next/image?url=%2Fassets%2Fcopy-9.jpg&amp;w=2048&amp;q=75 2x
                  "
                      src="/_next/image?url=%2Fassets%2Fcopy-9.jpg&amp;w=2048&amp;q=75"
                      style={{color: "transparent"}}
                    />
                  </div>
                </div>
                <div class="trader-name font-bold text-center capitalize text-xl mt-4 justify-center items-center flex">
                  <div>Cryptoxavant</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-5 h-5 ml-1 text-blue-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="location flex items-center gap-x-1 mt-2 justify-center text-black/50/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <div class="text-sm font-bold">Mumbai</div>
                </div>
                <div class="key-items mt-2 flex gap-x-3 justify-center items-center text-black/50/80">
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">0.9k</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.5 3.528v4.644c0 .729-.29 1.428-.805 1.944l-1.217 1.216a8.75 8.75 0 013.55.621l.502.201a7.25 7.25 0 004.178.365l-2.403-2.403a2.75 2.75 0 01-.805-1.944V3.528a40.205 40.205 0 00-3 0zm4.5.084l.19.015a.75.75 0 10.12-1.495 41.364 41.364 0 00-6.62 0 .75.75 0 00.12 1.495L7 3.612v4.56c0 .331-.132.649-.366.883L2.6 13.09c-1.496 1.496-.817 4.15 1.403 4.475C5.961 17.852 7.963 18 10 18s4.039-.148 5.997-.436c2.22-.325 2.9-2.979 1.403-4.475l-4.034-4.034A1.25 1.25 0 0113 8.172v-4.56z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">6.4</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5 text-blue-600"
                    >
                      <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">INR</div>
                  </div>
                </div>
                <div class="other-deets grid grid-cols-2 gap-x-2 mt-2">
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total trades</div>
                    </div>
                    <div class="font-bold text-sm">320</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total loss</div>
                    </div>
                    <div class="font-bold text-sm">16</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Profit share</div>
                    </div>
                    <div class="font-bold text-sm">18.7%</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Win rate</div>
                    </div>
                    <div class="font-bold text-sm">65%</div>
                  </div>
                </div>
                <div class="btn flex justify-center mt-8">
                  <button class=" rounded-md px-4 py-3 text-sm font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-500 to-blue-500 text-black/50">
                    Copy Trader Strategy
                  </button>
                </div>
              </div>
              <div class=" w-full p-3 relative rounded-md text-black/50 border border-white/5 bg-black/5">
                <div class="flag absolute top-2 right-2">
                  <div class="rounded-sm p-3 bg-black/5">
                    <Image
                      alt="BR"
                      width="21"
                      height="21"
                      src="https://cdn.jsdelivr.net/gh/umidbekk/react-flag-kit@1/assets/BR.svg"
                    />
                  </div>
                </div>
                <div class="image-region overflow-hidden flex justify-center w-full">
                  <div class="img-container w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      class=""
                      srcset="
                    /_next/image?url=%2Fassets%2Fcopy-10.jpg&amp;w=1080&amp;q=75 1x,
                    /_next/image?url=%2Fassets%2Fcopy-10.jpg&amp;w=2048&amp;q=75 2x
                  "
                      src="/_next/image?url=%2Fassets%2Fcopy-10.jpg&amp;w=2048&amp;q=75"
                      style={{color: "transparent"}}
                    />
                  </div>
                </div>
                <div class="trader-name font-bold text-center capitalize text-xl mt-4 justify-center items-center flex">
                  <div>Samba_trader</div>
                </div>
                <div class="location flex items-center gap-x-1 mt-2 justify-center text-black/50/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <div class="text-sm font-bold">Sao Paulo</div>
                </div>
                <div class="key-items mt-2 flex gap-x-3 justify-center items-center text-black/50/80">
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">1.0k</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.5 3.528v4.644c0 .729-.29 1.428-.805 1.944l-1.217 1.216a8.75 8.75 0 013.55.621l.502.201a7.25 7.25 0 004.178.365l-2.403-2.403a2.75 2.75 0 01-.805-1.944V3.528a40.205 40.205 0 00-3 0zm4.5.084l.19.015a.75.75 0 10.12-1.495 41.364 41.364 0 00-6.62 0 .75.75 0 00.12 1.495L7 3.612v4.56c0 .331-.132.649-.366.883L2.6 13.09c-1.496 1.496-.817 4.15 1.403 4.475C5.961 17.852 7.963 18 10 18s4.039-.148 5.997-.436c2.22-.325 2.9-2.979 1.403-4.475l-4.034-4.034A1.25 1.25 0 0113 8.172v-4.56z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">7.1</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5 text-blue-600"
                    >
                      <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">BRL</div>
                  </div>
                </div>
                <div class="other-deets grid grid-cols-2 gap-x-2 mt-2">
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total trades</div>
                    </div>
                    <div class="font-bold text-sm">340</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total loss</div>
                    </div>
                    <div class="font-bold text-sm">12</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Profit share</div>
                    </div>
                    <div class="font-bold text-sm">20.1%</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Win rate</div>
                    </div>
                    <div class="font-bold text-sm">73%</div>
                  </div>
                </div>
                <div class="btn flex justify-center mt-8">
                  <button class=" rounded-md px-4 py-3 text-sm font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-500 to-blue-500 text-black/50">
                    Copy Trader Strategy
                  </button>
                </div>
              </div>
              <div class=" w-full p-3 relative rounded-md text-black/50 border border-white/5 bg-black/5">
                <div class="flag absolute top-2 right-2">
                  <div class="rounded-sm p-3 bg-black/5">
                    <Image
                      alt="EG"
                      width="21"
                      height="21"
                      src="https://cdn.jsdelivr.net/gh/umidbekk/react-flag-kit@1/assets/EG.svg"
                    />
                  </div>
                </div>
                <div class="image-region overflow-hidden flex justify-center w-full">
                  <div class="img-container w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      class=""
                      srcset="
                    /_next/image?url=%2Fassets%2Fcopy-11.jpg&amp;w=1080&amp;q=75 1x,
                    /_next/image?url=%2Fassets%2Fcopy-11.jpg&amp;w=2048&amp;q=75 2x
                  "
                      src="/_next/image?url=%2Fassets%2Fcopy-11.jpg&amp;w=2048&amp;q=75"
                      style={{color: "transparent"}}
                    />
                  </div>
                </div>
                <div class="trader-name font-bold text-center capitalize text-xl mt-4 justify-center items-center flex">
                  <div>Pyramidmystic 🔥</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-5 h-5 ml-1 text-blue-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="location flex items-center gap-x-1 mt-2 justify-center text-black/50/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <div class="text-sm font-bold">Cairo</div>
                </div>
                <div class="key-items mt-2 flex gap-x-3 justify-center items-center text-black/50/80">
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">1.2k</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.5 3.528v4.644c0 .729-.29 1.428-.805 1.944l-1.217 1.216a8.75 8.75 0 013.55.621l.502.201a7.25 7.25 0 004.178.365l-2.403-2.403a2.75 2.75 0 01-.805-1.944V3.528a40.205 40.205 0 00-3 0zm4.5.084l.19.015a.75.75 0 10.12-1.495 41.364 41.364 0 00-6.62 0 .75.75 0 00.12 1.495L7 3.612v4.56c0 .331-.132.649-.366.883L2.6 13.09c-1.496 1.496-.817 4.15 1.403 4.475C5.961 17.852 7.963 18 10 18s4.039-.148 5.997-.436c2.22-.325 2.9-2.979 1.403-4.475l-4.034-4.034A1.25 1.25 0 0113 8.172v-4.56z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">7.6</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5 text-blue-600"
                    >
                      <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">BTC</div>
                  </div>
                </div>
                <div class="other-deets grid grid-cols-2 gap-x-2 mt-2">
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total trades</div>
                    </div>
                    <div class="font-bold text-sm">270</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total loss</div>
                    </div>
                    <div class="font-bold text-sm">10</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Profit share</div>
                    </div>
                    <div class="font-bold text-sm">22.3%</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Win rate</div>
                    </div>
                    <div class="font-bold text-sm">80%</div>
                  </div>
                </div>
                <div class="btn flex justify-center mt-8">
                  <button class=" rounded-md px-4 py-3 text-sm font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-500 to-blue-500 text-black/50">
                    Copy Trader Strategy
                  </button>
                </div>
              </div>
              <div class=" w-full p-3 relative rounded-md text-black/50 border border-white/5 bg-black/5">
                <div class="flag absolute top-2 right-2">
                  <div class="rounded-sm p-3 bg-black/5">
                    <Image
                      alt="MX"
                      width="21"
                      height="21"
                      src="https://cdn.jsdelivr.net/gh/umidbekk/react-flag-kit@1/assets/MX.svg"
                    />
                  </div>
                </div>
                <div class="image-region overflow-hidden flex justify-center w-full">
                  <div class="img-container w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      class=""
                      srcset="
                    /_next/image?url=%2Fassets%2Fcopy-12.jpg&amp;w=1080&amp;q=75 1x,
                    /_next/image?url=%2Fassets%2Fcopy-12.jpg&amp;w=2048&amp;q=75 2x
                  "
                      src="/_next/image?url=%2Fassets%2Fcopy-12.jpg&amp;w=2048&amp;q=75"
                      style={{color: "transparent"}}
                    />
                  </div>
                </div>
                <div class="trader-name font-bold text-center capitalize text-xl mt-4 justify-center items-center flex">
                  <div>Lucha$trader</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-5 h-5 ml-1 text-blue-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="location flex items-center gap-x-1 mt-2 justify-center text-black/50/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <div class="text-sm font-bold">Mexico City</div>
                </div>
                <div class="key-items mt-2 flex gap-x-3 justify-center items-center text-black/50/80">
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">1.1k</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.5 3.528v4.644c0 .729-.29 1.428-.805 1.944l-1.217 1.216a8.75 8.75 0 013.55.621l.502.201a7.25 7.25 0 004.178.365l-2.403-2.403a2.75 2.75 0 01-.805-1.944V3.528a40.205 40.205 0 00-3 0zm4.5.084l.19.015a.75.75 0 10.12-1.495 41.364 41.364 0 00-6.62 0 .75.75 0 00.12 1.495L7 3.612v4.56c0 .331-.132.649-.366.883L2.6 13.09c-1.496 1.496-.817 4.15 1.403 4.475C5.961 17.852 7.963 18 10 18s4.039-.148 5.997-.436c2.22-.325 2.9-2.979 1.403-4.475l-4.034-4.034A1.25 1.25 0 0113 8.172v-4.56z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">7</div>
                  </div>
                  <div class="totalTrades flex items-center p-2 rounded-sm bg-black/5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5 text-blue-600"
                    >
                      <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
                    </svg>
                    <div class="number font-bold text-xs ml-1">MXN</div>
                  </div>
                </div>
                <div class="other-deets grid grid-cols-2 gap-x-2 mt-2">
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total trades</div>
                    </div>
                    <div class="font-bold text-sm">310</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-2 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Total loss</div>
                    </div>
                    <div class="font-bold text-sm">14</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Profit share</div>
                    </div>
                    <div class="font-bold text-sm">17.9%</div>
                  </div>
                  <div class="winrate flex items-center justify-between p-3 rounded-sm mt-3 bg-[#2222225c] text-black/50/70">
                    <div class="flex items-center gap-x-2">
                      <div class="name font-bold text-sm">Win rate</div>
                    </div>
                    <div class="font-bold text-sm">67%</div>
                  </div>
                </div>
                <div class="btn flex justify-center mt-8">
                  <button class=" rounded-md px-4 py-3 text-sm font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-500 to-blue-500 text-black/50">
                    Copy Trader Strategy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
