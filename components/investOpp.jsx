import React from "react";
import Image from "next/image";

function InvestmentOpp() {
  return (
    <div className="pt-10 bg-[#0a0a0a] text-white">
      <div className="mt-container grid grid-cols-1 md:grid-cols-2 md:px-10 px-5 py-8 md:py-5">
        <section className="image_section flex w-full h-full items-center justify-center">
          <div className="img_container aos-init" data-aos="fade-down">
            <Image
              alt=""
              loading="lazy"
              width="1000"
              height="1000"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              // srcset="
              //   /_next/image?url=%2Fassets%2Ffpimg.png&amp;w=1080&amp;q=75 1x,
              //   /_next/image?url=%2Fassets%2Ffpimg.png&amp;w=2048&amp;q=75 2x
              // "
              srcSet="/assets/fpimg.webp"
              src="/assets/fpimg.webp"
            />
            <div className="flex items-center justify-center w-full"></div>
          </div>
        </section>
        <section className="text_section md:px-8 px-2 pt-7">
          <div className="textcontaier">
            <div
              className="maintext text-xl md:text-2xl lg:text-3xl font-bold mb-12 aos-init"
              data-aos="fade-up"
            >
              Enhancing
              <span className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700 bg-clip-text text-transparent">
                Investment
              </span>
              Opportunities with Capital Nexus &lsquo; s Versatile
              <span className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700 bg-clip-text text-transparent">
                CFD Trading
              </span>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="listtext font-semibld text-sm text-gray-400 aos-init"
            >
              Although trading Forex is a key component of our business, Capital
              Nexus also offers a diverse range of CFD trading options. With
              Capital Nexus, you can engage in CFD trading across various asset
              classNamees, including
              <span className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700 bg-clip-text text-transparent font-bold">
                Forex, Indices, Shares, Commodities, Metals, Digital Currencies,
                Bonds, and ETFs
              </span>
              . Our CFD trading platform provides you with access to the biggest
              global exchanges, including the NASDAQ and NYSE in the United
              States, along with the
              <span className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700 bg-clip-text text-transparent font-bold">
                Australian Stock Exchange (ASX)
              </span>
              . This means you can trade some of the world &lsquo; s largest and most
              influential companies, allowing you to diversify your portfolio
              and explore a wide range of trading opportunities.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default InvestmentOpp;
