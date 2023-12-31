import React from "react";
import Image from "next/image";
import Link from "next/link";

function Purchase() {
  return (
    <div className="md:grid-cols-3 grid grid-cols-1 p-4">
      <div className="border rounded-xl p-4 m-2">
        <div className="image lg:h-40 w-full">
          <Image
            alt=""
            loading="lazy"
            width="300"
            height="300"
            decoding="async"
            data-nimg="1"
            className="rounded-lg w-full"
            srcset="
          /assets/moonpay.gif&amp;w=384&amp;q=75 1x,
          /assets/moonpay.gif 2x
        "
            src="/assets/moonpay.gif"
            style={{ color: "transparent" }}
          />
        </div>
        <div className="button flex justify-center">
          <Link href="https://www.moonpay.com">
            <button className="bg-[#7B00FF] font-bold text-white rounded-full px-8 py-3 mt-6 text-sm">
              Purchase from Moonpay
            </button>
          </Link>
        </div>
      </div>
      <div className="border rounded-xl p-4 m-2">
        <div className="image lg:h-40 w-full">
          <Image
            alt=""
            loading="lazy"
            width="300"
            height="300"
            decoding="async"
            data-nimg="1"
            className="rounded-lg w-full"
            srcset="
          /assets/binance.png&amp;w=384&amp;q=75 1x,
          /assets/binance.jpg 2x
        "
            src="/assets/binance.jpg"
            style={{ color: "transparent" }}
          />
        </div>
        <div className="button flex justify-center">
          <Link href="https://www.binance.us">
            <button className="bg-[#E9B72B] font-bold text-white rounded-full px-8 py-3 mt-6 text-sm">
              Purchase from Binance
            </button>
          </Link>
        </div>
      </div>
      <div className="border rounded-xl p-4 m-2">
        <div className="image lg:h-40 w-full">
          <Image
            alt=""
            loading="lazy"
            width="300"
            height="300"
            decoding="async"
            data-nimg="1"
            className="rounded-lg w-full"
            srcset="
          /assets/coinbase.png&amp;w=384&amp;q=75 1x,
          /assets/coinbase.jpg 2x
        "
            src="/assets/coinbase.jpg"
            style={{ color: "transparent" }}
          />
        </div>
        <div className="button flex justify-center">
          <Link href="https://www.coinbase.com">
            <button className="bg-[#0051FE] font-bold text-white rounded-full px-8 py-3 mt-6 text-sm">
              Purchase from Coinbase
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
