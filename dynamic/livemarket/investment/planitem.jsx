import { M_PLUS_1 } from "next/font/google";
import React, { useState } from "react";
import { useContext } from "react";
import { userAccountContext } from "@/app/dashboard/context";


function PlanItem() {
  const [green, setGreen]= useState(null)
  const [error, setError]= useState(null)
  const userAccount = useContext(userAccountContext)
  console.log(userAccount)

  const purchasePlan = (value, plan)=> {
    fetch(`http://127.0.0.1:8000/account/purchase_plan/?id=${value}&plan=${plan}`)
    .then((res)=>res.json()
    .then(r=> {
      if(r.error){
        setError(r.error)
      }else{
        console.log(r);
      }
    }))
  }
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
      <div
        className="relative p-4 border rounded-xl text-black/80"
        style={{ border: "2px solid rgba(107, 75, 201, 0.19)" }}
      >
        
          
        <div className="z-50 flex items-center justify-center cursor-pointer">
          <div
            className="p-2 my-1 text-2xl font-bold rounded-sm"
            style={{ backgroundColor: "rgba(107, 75, 201, 0.19)" }}
          >
            <sup>$</sup> 1,000<span className="text-xs"> / 1mo</span>
          </div>
        </div>
        <div className="pl-5 list-disc">
          <div className="flex items-center p-2 text-sm font-bold text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-black/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>99.5% AI accuracy</div>
          </div>
          <div className="flex items-center p-2 text-sm font-bold text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-black/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>24/7 Priority support</div>
          </div>
          <div className="flex items-center p-2 text-sm font-bold text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-black/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Exclusive market insights</div>
          </div>
          <div className="flex items-center p-2 text-sm font-bold text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-black/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Zero trading fees</div>
          </div>
          <div className="flex items-center p-2 text-sm font-bold text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-black/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Dedicated account manager</div>
          </div>
          <div className="flex items-center p-2 text-sm font-bold text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-black/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>VIP event invitations</div>
          </div>
          
          <div className="flex items-center p-2 text-sm font-bold text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-black/80"
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
        <div className="flex justify-center button-container">
          <button
          onClick={(e)=>purchasePlan(userAccount.account.id, e.target.value )}
          value={'premium'}
          
            className="py-3 my-4 text-sm font-bold text-white bg-green-500 rounded-full hover:bg-green-300 hover:ring-1 focus:bg-green-300 focus:opacity-50 px-7"
            
          >
            Purchase Plan
          </button>
        </div>
        {/* <div className="w-full text-sm text-center text-blue-500">
          Insufficient Balance to activate this plan.
          <span className="font-bold">
            <Link href="/dashboard/deposits">Deposit now</Link>
          </span>
        </div> */}
      </div>
      <div
        className="relative p-4 border rounded-xl text-black/80"
        style={{ border: "2px solid rgba(207, 155, 3, 0.19)" }}
      >
        
        
        <div className="z-50 flex items-center justify-center cursor-pointer">
          <div
            className="p-2 my-1 text-2xl font-bold rounded-sm"
            style={{ backgroundColor: "rgba(207, 155, 3, 0.19)" }}
          >
            <sup>$</sup> 500<span className="text-xs"> / 1mo</span>
          </div>
        </div>
        <div className="pl-5 list-disc">
          <div className="flex items-center p-2 text-sm font-bold text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-black/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>99% AI accuracy</div>
          </div>
          <div className="flex items-center p-2 text-sm font-bold text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-black/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Extended support hours</div>
          </div>
          <div className="flex items-center p-2 text-sm font-bold text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-black/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Premium market insights</div>
          </div>
          <div className="flex items-center p-2 text-sm font-bold text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-black/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>blueuced trading fees</div>
          </div>
          <div className="flex items-center p-2 text-sm font-bold text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-black/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Personalized strategies</div>
          </div>
          <div className="flex items-center p-2 text-sm font-bold text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-black/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Exclusive webinars</div>
          </div>
          <div className="flex items-center p-2 text-sm font-bold text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-black/80"
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
        <div className="flex justify-center button-container">
          <button
          onClick={(e)=>purchasePlan(userAccount.account.id, e.target.value)}
          value={'gold'}
            className="py-3 my-4 text-sm font-bold text-white bg-green-500 rounded-full focus:opacity-50 hover:bg-green-300 hover:ring-1 focus:bg-green-300 fo px-7"
            
          >
            Purchase Plan
          </button>
        </div>
      </div>
      <div
        className="relative p-4 border rounded-xl text-black/80"
        style={{ border: "2px solid rgba(192, 192, 192, 0.19)" }}
      >
        
        <div className="z-50 flex items-center justify-center cursor-pointer">
          <div
            className="p-2 my-1 text-2xl font-bold rounded-sm"
            style={{ backgroundColor: "rgba(192, 192, 192, 0.19)" }}
          >
            <sup>$</sup> 200<span className="text-xs"> / 2wks</span>
          </div>
        </div>
        <div className="pl-5 list-disc">
          <div className="flex items-center p-2 text-sm font-bold text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-black/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>98% AI accuracy</div>
          </div>
          <div className="flex items-center p-2 text-sm font-bold text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-black/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Advanced market insights</div>
          </div>
          
          <div className="flex items-center p-2 text-sm font-bold text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-black/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Weekly market analysis</div>
          </div>
          <div className="flex items-center p-2 text-sm font-bold text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-black/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Investment community access</div>
          </div>
          <div className="flex items-center p-2 text-sm font-bold text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-black/80"
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
        <div className="flex justify-center button-container">
          <button
          value={'silver'}
          onClick={(e)=>purchasePlan(userAccount.account.id, e.target.value)}
            className="py-3 my-4 text-sm font-bold text-white bg-green-500 rounded-full focus:opacity-50 hover:bg-green-300 hover:ring-1 focus:bg-green-300 fo px-7"
            
          >
            Purchase Plan
          </button>
        </div>
      </div>
      <div
        className="relative p-4 border rounded-xl text-black/80"
        style={{ border: "2px solid rgba(205, 127, 50, 0.19)" }}
      >
        
        
        <div className="z-50 flex items-center justify-center cursor-pointer">
          <div
            className="p-2 my-1 text-2xl font-bold rounded-sm"
            style={{ backgroundcolor: "rgba(205, 127, 50, 0.19)" }}
          >
            <sup>$</sup> 50<span className="text-xs"> / 1wk</span>
          </div>
        </div>
        <div className="pl-5 list-disc">
          <div className="flex items-center p-2 text-sm font-bold text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-black/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>97% AI accuracy</div>
          </div>
          <div className="flex items-center p-2 text-sm font-bold text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-black/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Live chat support</div>
          </div>
          <div className="flex items-center p-2 text-sm font-bold text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-black/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Basic market insights</div>
          </div>
          <div className="flex items-center p-2 text-sm font-bold text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-black/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Competitive fees</div>
          </div>
          <div className="flex items-center p-2 text-sm font-bold text-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-black/80"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>Monthly market analysis</div>
          </div>
          
          
        </div>
        <div className="flex justify-center button-container">
          <button
          value={'bronze'}
          onClick={(e)=>purchasePlan(userAccount.account.id, e.target.value)}
            className="py-3 my-4 text-sm font-bold text-white bg-green-500 rounded-full focus:opacity-50 hover:bg-green-300 hover:ring-1 focus:bg-green-300 fo px-7"
            
          >
            Purchase Plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlanItem;
