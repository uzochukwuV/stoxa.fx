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




export default function Home() {
  return (
    <>
      <main className="relative transition-all /duration-1000 bg-[#0a0a0a]">
        <Main />

        <div className="w-full left-0 right-0 absolute top-0 ">
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
          <FAQ></FAQ>
          <Footer></Footer>
        </div>
        
      </main>
    </>
  );
}
