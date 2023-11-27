import React from 'react'
import Image from 'next/image'

function GettingStarted() {
  return (
    <section
    id="Getting Started"
    className="stepContainer w-full flex flex-col lg:flex-row md:flex-col pt-16 md:pt-16 px-3 relative max-w[100vw] bg-[#0a0a0a] text-gray-100"
  >
    <div
      className="absolute aos-init aos-animate"
      data-aos="fade-right"
    >
      <div className="w-40 h-40 absolute opacity-30">
        <Image
          alt=""
          width={100}
          height={100}
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          className="top-0 lg:left-0 right-0 md:left-0 w-full h-full opacity-10"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            color: "transparent",
          }}
          sizes="100vw"
          // srcset="
          //   /_next/image?url=%2Fassets%2Fdot.png&amp;w=640&amp;q=75   640w,
          //   /_next/image?url=%2Fassets%2Fdot.png&amp;w=750&amp;q=75   750w,
          //   /_next/image?url=%2Fassets%2Fdot.png&amp;w=828&amp;q=75   828w,
          //   /_next/image?url=%2Fassets%2Fdot.png&amp;w=1080&amp;q=75 1080w,
          //   /_next/image?url=%2Fassets%2Fdot.png&amp;w=1200&amp;q=75 1200w,
          //   /_next/image?url=%2Fassets%2Fdot.png&amp;w=1920&amp;q=75 1920w,
          //   /_next/image?url=%2Fassets%2Fdot.png&amp;w=2048&amp;q=75 2048w,
          //   /_next/image?url=%2Fassets%2Fdot.png&amp;w=3840&amp;q=75 3840w
          // "
          srcSet="/assets/dot.webp"
          src="/assets/dot.webp"
        />
      </div>
    </div>
    <div className="textSection lg:w-1/2 md:w-1/2 mt-10 z-20">
      <div
        className="title font-black flex max-w-[170px] items-center rounded-xl px-3 uppercase justify-start text-sm aos-init aos-animate"
        data-aos="fade-down"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 text-red-700"
        >
          <path
            d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z"
          ></path>
          <path
            d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z"
          ></path>
          <path
            d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z"
          ></path>
        </svg>
        <p className="ml-2">Getting Started</p>
      </div>
      <div className="mainTitle mt-3 mx-3">
        <div
          className="howItWorks font-black text-2xl md:text-4xl lg:text-4xl aos-init aos-animate"
          data-aos="fade-down"
        >
          <p>How It <span className="text-red-700">Works?</span></p>
        </div>
      </div>
      <div
        className="text-content mb-3 mt-3 lg:mt-9 mx-3 text-sm aos-init aos-animate"
        data-aos="fade-up"
      >
        We all have to start somewhere. Let us help get you on the right track
        as you start your investing journey. With this innovative platform
        you&apos;ll be ready to start in no time. The fund is started in literally
        several minutes with minimal costs using blockchain-based infrastructure
        that infos. We believe it is incredibly important to redistribute this
        power &amp; profitability.
      </div>
      <a className="flex items-center" href="/auth"
        ><div
          className="btn ml-2 mt-5 md:mt-12 mb-5 lg:block aos-init aos-animate"
          data-aos="fade-up"
        >
          <div
            className="px-5 py-4 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700 text-white font-semibold text-sm items-center rounded-xl flex"
          >
            <p>Create an account</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 ml-4"
            >
              <path
                fillRule="evenodd"
                d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div></div
      ></a>
    </div>
    <div
      className="stepSection my-4 w-full lg:flex md:flex md flex-grow px-3 md:px-0"
    >
      <div
        className="stepRowOne lg:flex lg:flex-col md:flex md:mx-4 md:flex-col w-full aos-init aos-animate"
        data-aos="fade-right"
      >
        <div className="stepOne py-6 px-3 rounded-xl bg-[#111]">
          <div className="stepHead">
            <div className="small-text">
              <div
                className="cont flex items-center uppercase font-semibold opacit-70 text-xs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 mr-2 text-red-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.362 1.093a.75.75 0 00-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925zM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0018 14.25V6.443zm-8.75 12.25v-8.25l-7.25-4v7.807a.75.75 0 00.388.657l6.862 3.786z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p>Registration</p>
              </div>
            </div>
            <div className="large-text capitalize text-lg py-2 font-semibold ml-3">
              <p>create an <span className="text-red-700">account</span></p>
            </div>
          </div>
          <div className="stepBody">
            <div className="body-cont text-sm px-3 text-gray-400">
              <p>
                Getting started with us is really easy. Fill in the requested
                fields regarding your personal information and trading expertise
                to complete Client Area registration.
              </p>
            </div>
          </div>
        </div>
        <div className="stepOne my-2 py-6 px-3 rounded-xl bg-[#111]">
          <div className="stepHead">
            <div className="small-text">
              <div
                className="cont flex items-center uppercase font-semibold opacit-70 text-xs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 mr-2 text-red-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.362 1.093a.75.75 0 00-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925zM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0018 14.25V6.443zm-8.75 12.25v-8.25l-7.25-4v7.807a.75.75 0 00.388.657l6.862 3.786z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p>Investment Plans</p>
              </div>
            </div>
            <div className="large-text capitalize text-lg py-2 font-semibold ml-3">
              <p>make a <span className="text-red-700">deposit</span></p>
            </div>
          </div>
          <div className="stepBody">
            <div className="body-cont text-sm px-3 text-gray-400">
              <p>
                You have an unlimited access to our wide range of profitable
                assets to investon. Once your contract is started, your earnings
                will automatically be credited to you wallet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="stepRowTwo lg:flex lg:flex-col md:flex md:flex-col w-full aos-init"
        data-aos="fade-left"
      >
        <div className="stepOne py-6 px-3 rounded-xl bg-[#111]">
          <div className="stepHead">
            <div className="small-text">
              <div
                className="cont flex items-center uppercase font-semibold text-xs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 mr-2 text-red-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.362 1.093a.75.75 0 00-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925zM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0018 14.25V6.443zm-8.75 12.25v-8.25l-7.25-4v7.807a.75.75 0 00.388.657l6.862 3.786z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p>Financial Growth</p>
              </div>
            </div>
            <div className="large-text capitalize text-lg py-2 font-semibold ml-3">
              <p><span className="text-red-700">Trading</span> Interception</p>
            </div>
          </div>
          <div className="stepBody">
            <div className="body-cont text-sm px-3 text-gray-400">
              <p>
                Getting started with us is really easy. Fill in the requested
                fields regarding your personal information and trading expertise
                to complete Client Area registration.
              </p>
            </div>
          </div>
        </div>
        <div className="stepOne my-2 py-6 px-3 rounded-xl bg-[#111]">
          <div className="stepHead">
            <div className="small-text">
              <div
                className="cont flex items-center uppercase font-semibold opacit-0 text-xs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 mr-2 text-red-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.362 1.093a.75.75 0 00-.724 0L2.523 5.018 10 9.143l7.477-4.125-7.115-3.925zM18 6.443l-7.25 4v8.25l6.862-3.786A.75.75 0 0018 14.25V6.443zm-8.75 12.25v-8.25l-7.25-4v7.807a.75.75 0 00.388.657l6.862 3.786z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p>Withrawals</p>
              </div>
            </div>
            <div className="large-text capitalize text-lg py-2 font-semibold ml-3">
              <p>
                Make <span className="text-red-700">withdrawal</span>
                request
              </p>
            </div>
          </div>
          <div className="stepBody">
            <div className="body-cont text-sm px-3 text-gray-400">
              <p>
                Once earnings has been collected or claimed, you can confidently
                head straight for the withdrawal section to withdraw your funds.
                Funds are immediately sent to your wallet address.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default GettingStarted