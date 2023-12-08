'use client'
import React from "react";
import Greeting from "@/dynamic/dashboard/greetings";
import AccountBoard from "@/dynamic/dashboard/accountboard";
import TradingProgress from "@/dynamic/dashboard/tradingProgress";
import DashCards from "@/dynamic/dashboard/dashcards";
import Plans from "@/dynamic/dashboard/plans";
import Staking from "@/dynamic/dashboard/staking";
import Trades from "@/dynamic/dashboard/trades";
import Assets from "@/dynamic/dashboard/assets";
import { getData } from "@/utils/fetch";
import { useMemo, useEffect, useState, createContext } from "react";

import "@/css/tailwindcss.css";
export const userAccountContext = createContext({})

function Dashboard() {
  const [userAcc, setUserAcc] = useState({})
  const [user, setUser] = useState({})
  
  
  useEffect(() => {

    var user = window.localStorage.getItem('user')
    user = JSON.parse(user)
    var userToken = user.res.token
    var auth = `Token ${userToken}`
    var link = `https://stoxafx.vercel.app/snippets/${user.res.user.user_account}/`
    setUser(user.res.user)


    fetch(link)
    .then(res=>res.json())
    .then(res=>{
      console.log(res);
      setUserAcc(res);
    })
    .catch(e=>console.log(e))
    

  }, [])
  return (
    <userAccountContext.Provider value={{userAcc,user}}>
    <div>
      <Greeting />
      <AccountBoard />
      <TradingProgress />
      <DashCards />
      <Plans />
      <Staking />
      <Trades />
      <Assets />
    </div>
    </userAccountContext.Provider>
  );
}

export default Dashboard;
