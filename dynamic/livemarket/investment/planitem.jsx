import React from "react";
import Image from "next/image";

function PlanItem() {
  return (
    <div className="p-4 grid-cols-1 grid md:grid-cols-2 gap-4">
      <div
        className="p-4 rounded-xl border relative bg-[#111] text-white/80"
        style={{ border: "2px solid rgba(107, 75, 201, 0.19)" }}
      >
        <div className="absolute bottom-20 right-0 mb-3">
          <Image
            alt=""
            loading="lazy"
            width="1000"
            height="1000"
            decoding="async"
            data-nimg="1"
            className="opacity-40 w-32 h-32"
            srcset="
          /_next/image?url=%2Fassets%2Fpremiumm.png&amp;w=1080&amp;q=75 1x,
          /_next/image?url=%2Fassets%2Fpremiumm.png&amp;w=2048&amp;q=75 2x
        "
            src="/_next/image?url=%2Fassets%2Fpremiumm.png&amp;w=2048&amp;q=75"
            style={{ color: "transparent" }}
          />
        </div>
        <div
          className="text-xl font-bold mb-5 text-center flex items-center justify-center #6B4BC9"
          style={{ color: "rgb(107, 75, 201)" }}
        >
          <Image
            alt=""
            loading="lazy"
            width="1000"
            height="1000"
            decoding="async"
            data-nimg="1"
            className="w-8 h-8"
            srcset="
          /_next/image?url=%2Fassets%2Fpremiumm.png&amp;w=1080&amp;q=75 1x,
          /_next/image?url=%2Fassets%2Fpremiumm.png&amp;w=2048&amp;q=75 2x
        "
            src="/_next/image?url=%2Fassets%2Fpremiumm.png&amp;w=2048&amp;q=75"
            style={{ color: "transparent" }}
          />
          <div className="capitalize">premium plan</div>
        </div>
        <div className="flex items-center justify-center cursor-pointer z-50">
          <div
            className="text-2xl my-1 p-2 font-bold rounded-sm"
            style={{ backgroundColor: "rgba(107, 75, 201, 0.19)" }}
          >
            <sup>$</sup> 100,000<span className="text-xs"> / 6mo</span>
          </div>
        </div>
        <div className="list-disc pl-5">
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>99.5% AI accuracy</div>
          </div>
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>24/7 Priority support</div>
          </div>
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Exclusive market insights</div>
          </div>
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Zero trading fees</div>
          </div>
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Dedicated account manager</div>
          </div>
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>VIP event invitations</div>
          </div>
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Customized portfolio</div>
          </div>
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Early access to opportunities</div>
          </div>
        </div>
        <div className="button-container flex justify-center">
          <button
            className="rounded-full px-7 text-white my-4 py-3 text-sm font-bold"
            style={{ backgroundColor: "rgb(107, 75, 201)" }}
          >
            Purchase Plan
          </button>
        </div>
        <div className="text-sm text-blue-500 w-full text-center">
          Insufficient Balance to activate this plan.
          <span className="font-bold">
            <a href="/dashboard/deposits">Deposit now</a>
          </span>
        </div>
      </div>
      <div
        className="p-4 rounded-xl border relative bg-[#111] text-white/80"
        style={{ border: "2px solid rgba(207, 155, 3, 0.19)" }}
      >
        <div className="absolute bottom-20 right-0 mb-3">
          <Image
            alt=""
            loading="lazy"
            width="1000"
            height="1000"
            decoding="async"
            data-nimg="1"
            className="opacity-40 w-32 h-32"
            srcset="
          /_next/image?url=%2Fassets%2Fgold.png&amp;w=1080&amp;q=75 1x,
          /_next/image?url=%2Fassets%2Fgold.png&amp;w=2048&amp;q=75 2x
        "
            src="/_next/image?url=%2Fassets%2Fgold.png&amp;w=2048&amp;q=75"
            style={{ color: "transparent" }}
          />
        </div>
        <div
          className="text-xl font-bold mb-5 text-center flex items-center justify-center #CF9B03"
          style={{ color: "rgb(207, 155, 3)" }}
        >
          <Image
            alt=""
            loading="lazy"
            width="1000"
            height="1000"
            decoding="async"
            data-nimg="1"
            className="w-8 h-8"
            srcset="
          /_next/image?url=%2Fassets%2Fgold.png&amp;w=1080&amp;q=75 1x,
          /_next/image?url=%2Fassets%2Fgold.png&amp;w=2048&amp;q=75 2x
        "
            src="/_next/image?url=%2Fassets%2Fgold.png&amp;w=2048&amp;q=75"
            style={{ color: "transparent" }}
          />
          <div className="capitalize">gold plan</div>
        </div>
        <div className="flex items-center justify-center cursor-pointer z-50">
          <div
            className="text-2xl my-1 p-2 font-bold rounded-sm"
            style={{ backgroundColor: "rgba(207, 155, 3, 0.19)" }}
          >
            <sup>$</sup> 75,000<span className="text-xs"> / 6mo</span>
          </div>
        </div>
        <div className="list-disc pl-5">
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>99% AI accuracy</div>
          </div>
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Extended support hours</div>
          </div>
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Premium market insights</div>
          </div>
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>blueuced trading fees</div>
          </div>
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Personalized strategies</div>
          </div>
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Exclusive webinars</div>
          </div>
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Flexible withdrawal options</div>
          </div>
        </div>
        <div className="button-container flex justify-center">
          <button
            className="rounded-full px-7 text-white my-4 py-3 text-sm font-bold"
            style={{ backgroundColor: "rgb(207, 155, 3)" }}
          >
            Purchase Plan
          </button>
        </div>
      </div>
      <div
        className="p-4 rounded-xl border relative bg-[#111] text-white/80"
        style={{ border: "2px solid rgba(192, 192, 192, 0.19)" }}
      >
        <div className="absolute bottom-20 right-0 mb-3">
          <Image
            alt=""
            loading="lazy"
            width="1000"
            height="1000"
            decoding="async"
            data-nimg="1"
            className="opacity-40 w-32 h-32"
            srcset="
          /_next/image?url=%2Fassets%2Fsilverr.png&amp;w=1080&amp;q=75 1x,
          /_next/image?url=%2Fassets%2Fsilverr.png&amp;w=2048&amp;q=75 2x
        "
            src="/_next/image?url=%2Fassets%2Fsilverr.png&amp;w=2048&amp;q=75"
            style={{ color: "transparent" }}
          />
        </div>
        <div
          className="text-xl font-bold mb-5 text-center flex items-center justify-center #C0C0C0"
          style={{ color: "rgb(192, 192, 192)" }}
        >
          <Image
            alt=""
            loading="lazy"
            width="1000"
            height="1000"
            decoding="async"
            data-nimg="1"
            className="w-8 h-8"
            srcset="
          /_next/image?url=%2Fassets%2Fsilverr.png&amp;w=1080&amp;q=75 1x,
          /_next/image?url=%2Fassets%2Fsilverr.png&amp;w=2048&amp;q=75 2x
        "
            src="/_next/image?url=%2Fassets%2Fsilverr.png&amp;w=2048&amp;q=75"
            style={{ color: "transparent" }}
          />
          <div className="capitalize">silver plan</div>
        </div>
        <div className="flex items-center justify-center cursor-pointer z-50">
          <div
            className="text-2xl my-1 p-2 font-bold rounded-sm"
            style={{ backgroundColor: "rgba(192, 192, 192, 0.19)" }}
          >
            <sup>$</sup> 50,000<span className="text-xs"> / 6mo</span>
          </div>
        </div>
        <div className="list-disc pl-5">
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>98% AI accuracy</div>
          </div>
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Advanced market insights</div>
          </div>
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Loyalty discounts</div>
          </div>
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Educational resources</div>
          </div>
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Weekly market analysis</div>
          </div>
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Investment community access</div>
          </div>
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Enhanced security</div>
          </div>
        </div>
        <div className="button-container flex justify-center">
          <button
            className="rounded-full px-7 text-white my-4 py-3 text-sm font-bold"
            style={{ backgroundColor: "rgb(192, 192, 192)" }}
          >
            Purchase Plan
          </button>
        </div>
      </div>
      <div
        className="p-4 rounded-xl border relative bg-[#111] text-white/80"
        style={{ border: "2px solid rgba(205, 127, 50, 0.19)" }}
      >
        <div className="absolute bottom-20 right-0 mb-3">
          <Image
            alt=""
            loading="lazy"
            width="1000"
            height="1000"
            decoding="async"
            data-nimg="1"
            className="opacity-40 w-32 h-32"
            srcset="
          /_next/image?url=%2Fassets%2Fbronze.png&amp;w=1080&amp;q=75 1x,
          /_next/image?url=%2Fassets%2Fbronze.png&amp;w=2048&amp;q=75 2x
        "
            src="/_next/image?url=%2Fassets%2Fbronze.png&amp;w=2048&amp;q=75"
            style={{ color: "transparent" }}
          />
        </div>
        <div
          className="text-xl font-bold mb-5 text-center flex items-center justify-center #CD7F32"
          style={{ color: "rgb(205, 127, 50)" }}
        >
          <Image
            alt=""
            loading="lazy"
            width="1000"
            height="1000"
            decoding="async"
            data-nimg="1"
            className="w-8 h-8"
            srcset="
          /_next/image?url=%2Fassets%2Fbronze.png&amp;w=1080&amp;q=75 1x,
          /_next/image?url=%2Fassets%2Fbronze.png&amp;w=2048&amp;q=75 2x
        "
            src="/_next/image?url=%2Fassets%2Fbronze.png&amp;w=2048&amp;q=75"
            style={{ color: "transparent" }}
          />
          <div className="capitalize">bronze plan</div>
        </div>
        <div className="flex items-center justify-center cursor-pointer z-50">
          <div
            className="text-2xl my-1 p-2 font-bold rounded-sm"
            style={{ backgroundcolor: "rgba(205, 127, 50, 0.19)" }}
          >
            <sup>$</sup> 25,000<span className="text-xs"> / 6mo</span>
          </div>
        </div>
        <div className="list-disc pl-5">
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>97% AI accuracy</div>
          </div>
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Live chat support</div>
          </div>
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Basic market insights</div>
          </div>
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Competitive fees</div>
          </div>
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Monthly market analysis</div>
          </div>
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Community forums</div>
          </div>
          <div className="text-sm flex p-2 font-bold items-center text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-white/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Mobile app support</div>
          </div>
        </div>
        <div className="button-container flex justify-center">
          <button
            className="rounded-full px-7 text-white my-4 py-3 text-sm font-bold"
            style={{ backgroundColor: "rgb(205, 127, 50)" }}
          >
            Purchase Plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlanItem;
