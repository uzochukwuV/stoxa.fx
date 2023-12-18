import React from "react";
import Image from "next/image";
import Link from "next/link";

function Withdrawals() {
  return (
    <div>
      <div className="p-4">
        <div>
          <div className="flex w-full md:w-1/2 md:mx-auto h-[80vh] justify-center items-center">
            <div className="not-verified-container rounded-xl p-6 text-color-change-90">
              <div className="header-text text-lg uppe/rcase font-bold w-full text-center">
                <div className="flex justify-center">
                  <Image
                    alt=""
                    loading="lazy"
                    width="1000"
                    height="1000"
                    decoding="async"
                    data-nimg="1"
                    className="w-14 h-14 mb-4"
                    srcset="
                /_next/image?url=%2Fassets%2Fveraccount.png&amp;w=1080&amp;q=75 1x,
                /_next/image?url=%2Fassets%2Fveraccount.png&amp;w=2048&amp;q=75 2x
              "
                    src="/_next/image?url=%2Fassets%2Fveraccount.png&amp;w=2048&amp;q=75"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="font-bold">Verification Requiblue</div>
              </div>
              <div className="message py-1 text-sm font-bold text-center text-color-change-60">
                You need to be verified to make a withdrawal.
              </div>
              <div className="cta pt-2 flex justify-center">
                <Link href="/dashboard/verify">
                  <button className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-800 via-blue-600 to-blue-500 text-white py-3 px-9 text-sm font-bold rounded-full hover:bg-slate-600">
                    Verify Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Withdrawals;
