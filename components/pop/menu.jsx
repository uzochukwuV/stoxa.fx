import React from "react";
import Image from "next/image";


function PopMenu() {
  return (
    <div
      data-radix-popper-content-wrapper=""
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        transform: "translate(calc(100vw - 320px), 62.5px)",
        minWidth: "max-content",
        willChange: "transform",
        zIndex: 50,
      }}
      id="menuRadix"
    >
      <div
        data-side="bottom"
        data-align="center"
        data-state="open"
        role="dialog"
        id="radix-:r5:"
        class="z-50 radix2 rounded-md shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-[300px] mx-3 p-1 bg-[#111] text-white border border-white/5"
        tabindex="-1"
      >
        <div class="content1 grid grid-cols-3 gap-y-4 py-3 pt-5 gap-x-3 px-3">
          <a href="/dashboard/account">
            <div class="deposit flex flex-col items-center text-xs justify-center rounded-md font-bold p-3 bg-white/5 hite/5 hover:bg-white/10">
              <Image
                alt=""
                loading="lazy"
                width="1000"
                height="1000"
                decoding="async"
                data-nimg="1"
                class="w-8 h-8"
                srcset="
              /_next/image?url=%2Fassets%2Fprofile.png&amp;w=1080&amp;q=75 1x,
              /_next/image?url=%2Fassets%2Fprofile.png&amp;w=2048&amp;q=75 2x
            "
                src="/_next/image?url=%2Fassets%2Fprofile.png&amp;w=2048&amp;q=75"
                style={{ color: "transparent" }}
              />
              <p class="pt-2">Profile</p>
            </div>
          </a>
          <a href="/dashboard/deposits">
            <div class="deposit flex flex-col items-center text-xs justify-center rounded-md font-bold p-3 bg-white/5 hite/5 hover:bg-white/10">
              <Image
                alt=""
                loading="lazy"
                width="1000"
                height="1000"
                decoding="async"
                data-nimg="1"
                class="w-8 h-8"
                srcset="
              /_next/image?url=%2Fassets%2Fwallet.png&amp;w=1080&amp;q=75 1x,
              /_next/image?url=%2Fassets%2Fwallet.png&amp;w=2048&amp;q=75 2x
            "
                src="/_next/image?url=%2Fassets%2Fwallet.png&amp;w=2048&amp;q=75"
                style={{ color: "transparent" }}
              />
              <p class="pt-2">Deposit</p>
            </div>
          </a>
          <a href="/dashboard/withdrawals">
            <div class="deposit flex flex-col items-center text-xs justify-center rounded-md font-bold p-3 bg-white/5 hite/5 hover:bg-white/10">
              <Image
                alt=""
                loading="lazy"
                width="1000"
                height="1000"
                decoding="async"
                data-nimg="1"
                class="w-8 h-8"
                srcset="
              /_next/image?url=%2Fassets%2Fwithdraw.png&amp;w=1080&amp;q=75 1x,
              /_next/image?url=%2Fassets%2Fwithdraw.png&amp;w=2048&amp;q=75 2x
            "
                src="/_next/image?url=%2Fassets%2Fwithdraw.png&amp;w=2048&amp;q=75"
                style={{ color: "transparent" }}
              />
              <p class="pt-2">Withdraw</p>
            </div>
          </a>
          <a href="/dashboard/livetrades">
            <div class="deposit flex flex-col items-center text-xs justify-center rounded-md font-bold p-3 relative bg-white/5 hite/5 hover:bg-white/10">
              <div class="identifier absolute -top-1 -right-2">
                <div class="px-2 font-normal bg-green-500 rounded-md text-white text-[10px]">
                  Live
                </div>
              </div>
              <Image
                alt=""
                loading="lazy"
                width="1000"
                height="1000"
                decoding="async"
                data-nimg="1"
                class="w-8 h-8"
                srcset="
              /_next/image?url=%2Fassets%2Fincrease.png&amp;w=1080&amp;q=75 1x,
              /_next/image?url=%2Fassets%2Fincrease.png&amp;w=2048&amp;q=75 2x
            "
                src="/_next/image?url=%2Fassets%2Fincrease.png&amp;w=2048&amp;q=75"
                style={{ color: "transparent" }}
              />
              <p class="pt-2">Tradings</p>
            </div>
          </a>
          <a href="/dashboard/investments">
            <div class="deposit flex flex-col items-center text-xs justify-center rounded-md font-bold p-3 bg-white/5 hite/5 hover:bg-white/10">
              <Image
                alt=""
                loading="lazy"
                width="1000"
                height="1000"
                decoding="async"
                data-nimg="1"
                class="w-8 h-8"
                srcset="
              /_next/image?url=%2Fassets%2Fmoney.png&amp;w=1080&amp;q=75 1x,
              /_next/image?url=%2Fassets%2Fmoney.png&amp;w=2048&amp;q=75 2x
            "
                src="/_next/image?url=%2Fassets%2Fmoney.png&amp;w=2048&amp;q=75"
                style={{ color: "transparent" }}
              />
              <p class="pt-2">Subscription</p>
            </div>
          </a>
          <a href="/dashboard/verify">
            <div class="deposit flex flex-col items-center text-xs justify-center rounded-md font-bold p-3 relative bg-white/5 hite/5 hover:bg-white/10">
              <div class="verification-identifier absolute -top-1 -right-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 text-blue-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <Image
                alt=""
                loading="lazy"
                width="1000"
                height="1000"
                decoding="async"
                data-nimg="1"
                class="w-8 h-8"
                srcset="
              /_next/image?url=%2Fassets%2Fveraccount.png&amp;w=1080&amp;q=75 1x,
              /_next/image?url=%2Fassets%2Fveraccount.png&amp;w=2048&amp;q=75 2x
            "
                src="/_next/image?url=%2Fassets%2Fveraccount.png&amp;w=2048&amp;q=75"
                style={{ color: "transparent" }}
              />
              <p class="pt-2">Verification</p>
            </div>
          </a>
        </div>
        <div class="relative w-full flex items-center justify-center pt-4">
          <div class="line h-0.5 w-1/2 mx-auto top-0 left-0 bg-white/5 rounded-full"></div>
        </div>
        <div class="logout flex items-center text-sm py-3 mb-4 mx-3 rounded-md text-blue-600 mt-4 bg-blue-500/10 /border /border-blue-600 font-bold px-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5 mr-2"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a.75.75 0 01.75.75v7.5a.75.75 0 01-1.5 0v-7.5A.75.75 0 0110 2zM5.404 4.343a.75.75 0 010 1.06 6.5 6.5 0 109.192 0 .75.75 0 111.06-1.06 8 8 0 11-11.313 0 .75.75 0 011.06 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}

export default PopMenu;
