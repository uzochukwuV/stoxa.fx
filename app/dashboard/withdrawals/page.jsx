'use client'
import React, { useState } from "react";

import { useContext } from "react";
import { userAccountContext } from "../context";
import { useRouter } from "next/navigation";

function Withdrawals() {
  let {user, setUser, account, setAccount} = useContext(userAccountContext)
  
  const [input, setInput] = useState(false)
  const [inputValue, setInputValue] = useState(100)
  const [confirm, setConfirm] = useState(false)
  const [amount, setAmount] = useState('')
  const showInput = ()=> {
    setInput(true)
    
  }
  if(confirm) return <Modal />;

  const confirmed = ()=> {

    if(input && amount){
      setConfirm(true)
    }
  }
  return (
    <div>
      <div classNameName="p-4">
        
        <div>
          <div classNameName="flex w-full md:w-1/2 md:mx-auto h-[80vh] justify-center items-center">
            <div classNameName="not-verified-container rounded-xl p-6 text-color-change-90">
              <div classNameName="header-text text-lg uppe/rcase font-bold w-full text-center">
                <div className="font-manrope flex h-screen w-full items-center justify-center">
                  <div className="mx-auto box-border  w-full  sm:w-[760px]  border bg-white p-4">
                    

                    <div className="mt-6">
                      <div className="font-semibold">
                        How much would you like to withdraw?
                      </div>
                      <div>
                        <input
                          className="mt-1 w-full rounded-[4px] border border-[#A0ABBB] p-2"
                          onChange={(e)=>setInputValue(e.target.value)}
                          type="text"
                          value={inputValue}
                          placeholder="100.00"
                        />
                      </div>
                      <div className="flex justify-between">
                        <div className="mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23]" onClick={()=>setInputValue(100)}>
                          $100
                        </div>
                        <div className="mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23]" onClick={()=>setInputValue(200)}>
                          $200
                        </div>
                        <div className="mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE]  p-3 text-[#191D23]" onClick={()=>setInputValue(500)}>
                          $500
                        </div>
                        <div className="mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23]" onClick={()=>setInputValue(account.total_deposited - account.total_withdrawn)}>
                          max
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="font-semibold">From</div>
                      <div className="mt-2">
                        <div className="flex w-full items-center justify-between bg-neutral-100 p-3 rounded-[4px]">
                          <div className="flex items-center gap-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 text-[#299D37]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="font-semibold">Main Account</span>
                          </div>

                          
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="flex justify-between">
                        <span className="font-semibold text-[#191D23]">
                        To
                        </span>
                        <div className="flex cursor-pointer items-center gap-x-2" onClick={showInput}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-green-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <div className="font-semibold text-green-700">
                            Add Bitcoin Adrress
                          </div>
                        </div>
                      </div>

                      
                    </div>
                   {input && (
                     <div>
                     <input type="text" onChange={(e)=>setAmount(e.target.value)} value={amount} placeholder="btc address" className=" border m-3 border-sm  p-3 bg-inherit font-normal" />
                     </div>
                   )}
                    <div className="mt-6">
                      <div onClick={confirmed} aria-disabled={inputValue<1?'true':"false"} className="w-full cursor-pointer rounded-[4px] bg-green-700 px-3 py-[6px] text-center font-semibold text-white">
                        Send ${inputValue}
                      </div>
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

export default Withdrawals;




function Modal() {
  const router =useRouter()
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
  <div className="rounded-lg bg-gray-50 px-16 py-14">
    <div className="flex justify-center">
      <div className="rounded-full bg-green-200 p-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-8 w-8 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
      </div>
    </div>
    <h3 className="my-4 text-center text-3xl font-semibold text-gray-700">Congratuation!!!</h3>
    <p className="w-[230px] text-center font-normal text-gray-600">Your order have been taken and is being attended to</p>
    <button className="mx-auto mt-10 block rounded-xl border-4 border-transparent bg-green-400 px-6 py-3 text-center text-base font-medium text-gray-100 outline-8 hover:outline hover:duration-300" onClick={()=>router.push('/dashboard')}> Confirmed</button>
  </div>
</div>
  )
}
