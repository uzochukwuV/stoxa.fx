'use client'

import React from "react";
import Image from "next/image";

import Link from "next/link";
import { useContext } from "react";
import { userAccountContext } from "@/app/dashboard/context";

function Plans() {
  let {user, setUser, account, setAccount} = useContext(userAccountContext)
  return (
    <div className="">
      <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-3">
        <div className="flex relative overflow-hidden justify-between items-center p-4 rounded-md wfull bg-black/5 border">
          <div className="absolute z-20 -bottom-2 right-40">
            <Image
              alt=""
              loading="lazy"
              width="1000"
              height="1000"
              decoding="async"
              data-nimg="1"
              className="w-24 h-24 opacity-10"
              srcSet="
                              /_next/image?url=%2Fassets%2Fempty-box.png&amp;w=1080&amp;q=75 1x,
                              /_next/image?url=%2Fassets%2Fempty-box.png&amp;w=2048&amp;q=75 2x
                            "
              src="/_next/image?url=%2Fassets%2Fempty-box.png&amp;w=2048&amp;q=75"
              style={{ color: "transparent" }}
            />
          </div>
          <div className="flex items-center gap-x-3">
            <div className="image_cont rounded-full h-full p-3 bg-black/10">
              <Image
                alt=""
                loading="lazy"
                width="1000"
                height="1000"
                decoding="async"
                data-nimg="1"
                className="w-7 h-7"
                srcSet="
                                /_next/image?url=%2Fassets%2Fempty-box.jpg&amp;w=1080&amp;q=75 1x,
                                /_next/image?url=%2Fassets%2Fempty-box.jpg&amp;w=2048&amp;q=75 2x
                              "
                src="/assets/empty-box.jpg"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="text">
              <div className="currentplan_name text-sm">Current Plan</div>
              <div className="currentplan_name font-bold text-lg capitalize">
                no plan
              </div>
            </div>
          </div>
          <div className="action">
            <Link href="/dashboard/investments">
              <button className="py-3 z-50 text-white px-4 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-600 to-blue-700 rounded-md text-sm font-bold">
                Purchase Plan
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-black/5 border p-4 rounded-md relative overflow-hidden">
          <div className="absolute z-20 -bottom-5 right-5">
            <Image
              alt=""
              loading="lazy"
              width="1000"
              height="1000"
              decoding="async"
              data-nimg="1"
              className="w-24 h-24 opacity-10"
              srcSet="
                              /_next/image?url=%2Fassets%2Fcoin.png&amp;w=1080&amp;q=75 1x,
                              /_next/image?url=%2Fassets%2Fcoin.png&amp;w=2048&amp;q=75 2x
                            "
              src="/_next/image?url=%2Fassets%2Fcoin.png&amp;w=2048&amp;q=75"
              style={{ color: "transparent" }}
            />
          </div>
          <div className="flex gap-x-3">
            <div className="image_cont rounded-full h-full p-3 bg-black/10">
              <Image
                alt=""
                loading="lazy"
                width="1000"
                height="1000"
                decoding="async"
                data-nimg="1"
                className="w-7 h-7"
                srcSet="
                                /_next/image?url=%2Fassets%2Fcoin.jpg&amp;w=1080&amp;q=75 1x,
                                /_next/image?url=%2Fassets%2Fcoin.jpg&amp;w=2048&amp;q=75 2x
                              "
                src="/assets/coin.jpg"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="text">
              <div className="currentplan_name text-sm">Plan Bonus</div>
              <div className="currentplan_name font-bold text-lg capitalize">
                ${account?.plan_bonus}.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
