"use client";
import React, {
  useEffect,
  useState,
  useTransition,
  useContext,
  useMemo,
} from "react";
import Greeting from "@/dynamic/dashboard/greetings";
import AccountBoard from "@/dynamic/dashboard/accountboard";
import TradingProgress from "@/dynamic/dashboard/tradingProgress";
import DashCards from "@/dynamic/dashboard/dashcards";
import Plans from "@/dynamic/dashboard/plans";
import Staking from "@/dynamic/dashboard/staking";
import Trades from "@/dynamic/dashboard/trades";
import Assets from "@/dynamic/dashboard/assets";
import { url, AuthUrl } from "@/utils/static";
import { userAccountContext } from "./context";
import Loading from "../loading";
import { useStore } from "./context";
import "@/css/tailwindcss.css";
import { appContext } from "../appContext";




function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  let appcontext = useContext(appContext);
  let { user, setUser, account, setAccount } = useContext(userAccountContext);

  useEffect(() => {
    let Localuser = JSON.parse(window?.localStorage?.getItem("user")) || null;

    if (!Localuser?.res?.token) {
      return startTransition(() => router.push("/auth"));
    }

    setUser(Localuser);

    let id = Localuser?.res?.user?.id;

    var newurl = new URL(`${AuthUrl}user/account`),
      params = { id: id };
    Object.keys(params).forEach((key) =>
      newurl.searchParams.append(key, params[key])
    );
    if (account === null){
      fetch(newurl)
      .then((res) => res.json())
      .then((res) => {
        
        setAccount(res.user);

        setIsLoading(false);

      })
      .catch((err) => console.log(err));
    
  
    }
    setIsLoading(false);

  }, [account])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
}

export default Dashboard;
