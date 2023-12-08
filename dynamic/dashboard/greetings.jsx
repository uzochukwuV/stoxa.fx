'use client'
import { userAccountContext } from "@/app/dashboard/page";
import { useContext } from "react";

export default function Greeting() {
  const {userAcc, user} = useContext(userAccountContext)
  return (
    <>
      <div className="flex items-center gap-x-2">
        <div className="dash-header font-bold text-sm mt-3 capitalize p-2 rounded-md text-black bg-black/5">
          👋 hey {user.username}
        </div>
        <div className="dash-header font-bold mt-3 capitalize p-2 rounded-md text-black bg-blue-500/10">
          <a
            className="flex items-center text-xs md:text-sm"
            href="/dashboard/verify"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-blue-600 mr-1"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="pr-1">You're not verified</p>
          </a>
        </div>
      </div>
    </>
  );
}
