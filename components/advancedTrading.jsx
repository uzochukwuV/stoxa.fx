import React from 'react'
import Image from 'next/image'


function AdvancedTrading() {
  return (
    <div className="bg-[#0a0a0a] text-white">
    <div
      className="mt-container grid grid-cols-1 md:grid-cols-2 md:px-10 px-5 py-8 md:py-5"
    >
      <section
        className="image_section flex w-full h-full items-center justify-center"
      >
        <div className="img_container px-4">
          <Image
            alt=""
            data-aos="fade-down"
            loading="lazy"
            width="1000"
            height="1000"
            decoding="async"
            data-nimg="1"
            style={{color: "transparent"}}
            // srcset="
            //   /_next/image?url=%2Fassets%2Ftrade.png&amp;w=1080&amp;q=75 1x,
            //   /_next/image?url=%2Fassets%2Ftrade.png&amp;w=2048&amp;q=75 2x
            // "
            srcSet="/assets/trade.webp"
            src={`/assets/trade.webp`}
            className="aos-init"
          />
          <div
            className="flex items-center justify-center w-full aos-init"
            data-aos="fade-up"
          >
            <div
              className="py-1 w-40 mt-4 h-[1px] bg-gray-700 blur-md rounded-[100%] shadow-2xl shadow-gray-100"
            ></div>
          </div>
        </div>
      </section>
      <section className="text_section md:px-8 px-2 pt-7">
        <div className="textcontaier">
          <div
            className="maintext text-xl md:text-2xl lg:text-3xl font-bold mb-12 aos-init"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Advanced
            <span
              className="text-blue-accent2 bg-clip-text text-transparent"
              >Trading</span
            >
            <br />
            Platforms &amp;
            <span
              className="text-blue-accent2 bg-clip-text text-transparent"
              >Financial Technology</span
            >
          </div>
          <div className="listtext font-seibold text-sm text-gray-200">
            <div
              className="list_text1 flex pb-5 items-start aos-init"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2 text-gren-600 mt-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  ></path>
                </svg>
              </div>
              <div className="message">
                <span
                  className="text-blue-accent2 font-bold"
                  >MetaTrader 4 </span
                >(MT4) &amp;
                <span
                  className="text-blue-accent2 font-bold"
                  >MetaTrader 5
                </span>
                (MT5) , IRESS,
                <span
                  className="text-blue-accent2 font-bold"
                  >cTrader</span
                >
                and WebTrader &amp; mobile apps for iPhone and Android
                devices
              </div>
            </div>
            <div
              className="list_text2 flex pb-5 items-center aos-init"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2 text-gren-600 mt-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  ></path>
                </svg>
              </div>
              <div className="message">
                Advanced client portal to track your trading in real-time
              </div>
            </div>
            <div
              className="list_text3 flex pb-5 aos-init"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2 text-geen-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  ></path>
                </svg>
              </div>
              <div className="message">
                Superior
                <span
                  className="text-blue-accent2 font-bold"
                  >Virtual Private Servers (VPS)</span
                >
                solutions for Expert Advisors (EAs) , scalping and
                auto-trading
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  )
}

export default AdvancedTrading