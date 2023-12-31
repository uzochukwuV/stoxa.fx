'use client'

import Main from "@/components/dubbedmain";
import Content from "@/components/dubbedcontent";
import GettingStarted from "@/components/gettingStarted";
import AboutUs from "@/components/aboutUs";
import Achievements from "@/components/achievements";
import Features from "@/components/features";
import AdvancedTrading from "@/components/advancedTrading";
import Products from "@/components/products";
import InvestmentOpp from "@/components/investOpp";
import TradingAdvantages from "@/components/tradingAd";
import Traders from "@/components/traders";
import Partners from "@/components/partners";
import Testimonials from "@/components/testimonials";
import Testimonials2 from "@/components/testimonials2";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import "@/css/home.css";
import "@/css/main.css";
// import "@/css/animate.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/css/tailwindcss.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { userLoggedIn } from "@/utils/isAuthenticated";




export default function Home() {
  const router = useRouter()

  useMemo(() => {
    var isLoggedIn = userLoggedIn()
    if (isLoggedIn){
      router.push('/dashboard');
    }
  }, [router])
  useEffect(() => {
   
    AOS.init({
         duration: 500,
         once: true,
       })
 }, [])
  return (
    <>
      <main  className=" left-0 right-0 absolute ">
        <Main />

        <div  className=" left-0 right-1 w-full z-20 bg-[#0a0a0a]  absolute top-0 ">
          <Content />
          <GettingStarted />
          <div className="bg-[#0a0a0a]">
            <AboutUs />
            <Achievements />
          </div>
          <Features />
          <AdvancedTrading />
          <Products />
          <InvestmentOpp />
          <Traders></Traders>

          <Partners></Partners>

          <Testimonials></Testimonials>
          <Testimonials2></Testimonials2>
          {/* <FAQ></FAQ> */}
          <Footer></Footer>
        </div>
        
      </main>
    </>
  );
}


