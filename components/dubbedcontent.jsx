import React from "react";
import Image from "next/image";
import { Variants, motion } from "framer-motion";

const introHeaderVariants = {
  hide: {
    opacity: 0,
    x: -500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

function AnimateHeader({ children, props }) {
  var { duration, delay } = props;
  return (
    <motion.header
      initial={{ opacity: 0, x: -100 }}
      whileInView={{
        opacity: 1,
        x: 1,
        transition: {
          duration: duration,
          delay: delay,
        },
      }}
      viewport={{ once: false }}
    >
      {children}
    </motion.header>
  );
}

function Content() {
  return (
    <div className="w-full relative">
      <div className="w-full">
        <div
          className="camera_wrap relative w-full"
          id="Home"
          style={{ display: "block", height: 600 }}
        >
          <div className="camera_fakehover">
            <div className="camera_src camerastarted camerasliding">
              <div data-src="/assets/brokerImage1.webp">
                <Image
                  alt=""
                  fetchPriority="high"
                  width="800"
                  height="500"
                  decoding="async"
                  data-nimg="1"
                  className="h-screen w-full"
                  style={{ color: "transparent", objectFit: "cover" }}
                  srcSet={"/assets/brokerImage1.webp"}
                  src={"/assets/brokerImage1.webp"}
                />
              </div>

              <div data-src="/assets/pic1.webp">
                <Image
                  alt=""
                  fetchPriority="high"
                  width="500"
                  height="500"
                  decoding="async"
                  data-nimg="1"
                  className="h-screen"
                  style={{ color: "transparent", objectFit: "cover" }}
                  srcSet="/assets/pic1.webp"
                  src={"/assets/pic1.webp"}
                />
              </div>
              <div data-src="/assets/brokerImage3.webp">
                <Image
                  alt=""
                  fetchPriority="high"
                  width="500"
                  height="500"
                  decoding="async"
                  data-nimg="1"
                  className="h-screen gg"
                  style={{ color: "transparent", objectFit: "cover" }}
                  srcSet="/assets/brokerImage3.webp"
                  src="/assets/brokerImage3.webp"
                />
              </div>
            </div>
            <div className="camera_target">
              <div className="cameraCont">
                <div
                  className="cameraSlide cameraSlide_0 cameracurrent"
                  style={{
                    visibility: "visible",
                    display: "block",
                    zIndex: 999,
                  }}
                >
                  <Image
                    alt=""
                    src="/assets/brokerImage1.webp?1700344517505"
                    className="imgLoaded"
                    style={{
                      visibility: "visible",
                      height: 700,
                      marginLeft: -84.5,
                      marginRight: -84.5,
                      marginTop: 0,
                      position: "absolute",
                      width: 1440,
                      objectFit: "cover",
                      pixelRatio: "1/2",
                    }}
                    data-alignment=""
                    data-portrait=""
                    width="4000"
                    height="4000"
                  />
                  <div
                    className="camerarelative"
                    style={{ width: 731, height: 600 }}
                  ></div>
                </div>
                <div
                  className="cameraSlide cameraSlide_1 cameranext"
                  style={{ display: "none", zIndex: 1 }}
                >
                  <Image
                    alt=""
                    src="/assets/pic1.webp?1700344519111"
                    className="imgLoaded"
                    style={{
                      visibility: "visible",
                      height: 600,
                      marginLeft: -84.4451,
                      marginRight: -84.4451,
                      marginTop: 0,
                      position: "absolute",
                      width: 899.89,
                    }}
                    data-alignment=""
                    data-portrait=""
                    width="4096"
                    height="2731"
                  />
                  <div
                    className="camerarelative"
                    style={{ width: 731, height: 600 }}
                  ></div>
                </div>
                <div
                  className="cameraSlide cameraSlide_2"
                  style={{
                    display: "none",
                    zIndex: 1,
                    marginLeft: 0,
                    marginTop: 0,
                  }}
                >
                  <Image
                    alt=""
                    src="/assets/brokerImage3.webp?1700344665440"
                    className="imgLoaded"
                    style={{
                      visibility: "visible",
                      height: 600,
                      marginLeft: -84.4451,
                      marginRight: -84.4451,
                      marginTop: 0,
                      position: "absolute",
                      width: 899.89,
                    }}
                    data-alignment=""
                    data-portrait=""
                    width="4096"
                    height="2731"
                  />
                  <div
                    className="camerarelative"
                    style={{ width: 731, height: 600 }}
                  ></div>
                </div>
                <div
                  className="cameraSlide cameraSlide_3 cameranext"
                  style={{ zIndex: 1, display: " none" }}
                >
                  <div
                    className="camerarelative"
                    style={{ width: 731, height: 600 }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="camera_overlayer"></div>
            <div className="camera_target_content">
              <div className="cameraContents">
                <div
                  className="cameraContent cameracurrent"
                  style={{ display: "block" }}
                >
                  <div className="w-full h-full flex justify-center items-center">
                    <div className="flex items-center w-full justify-start">
                      <div className="lg:ml-20 ml-10 slider-texts text-white w-2/3 overflow-hidden">
                        <div className="textheaders overflow-hidden">
                          <div className="smaller-text animate__faster animate__animated animate__slideInLeft flex items-center font-medium lg:text-sm text-xs opacity-70 py-5 uppercase">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-4 h-4 mr-2"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.5 2A1.5 1.5 0 002 3.5V15a3 3 0 106 0V3.5A1.5 1.5 0 006.5 2h-3zm11.753 6.99L9.5 14.743V6.257l1.51-1.51a1.5 1.5 0 012.122 0l2.121 2.121a1.5 1.5 0 010 2.122zM8.364 18H16.5a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5h-2.136l-6 6zM5 16a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              ></path>
                            </svg>

                            <p>Master the Art of Wealth Creation</p>
                          </div>

                          <div
                            className={
                              "larger-text text-white lg:text-5xl text-2xl sm:text-2xl md:text-3xl font-bold opacity-95 animate__fast animate__animated animate__fadeInLeft"
                            }
                          >
                            Discover a World,
                            <p className="font-black">of Financial Freedom.</p>
                          </div>
                        </div>
                        <div className="textcontexts my-5 opacity-90 animate__animated animate__fadeInLeft text-sm flex-wrap lg:text-base">
                          <p>
                            Embark on a transformative journey to financial
                            <br className="hidden md:block lg:block" />
                            mastery. Unveil the secrets of wealth creation and
                            <br className="hidden md:block lg:block" />
                            tap into infinite potential.
                          </p>
                        </div>

                        <a className="flex" href="/auth">
                          <div className="calltoactionBtn mt-10">
                            <div className="cursor-pointer animate__animated animate__fadeInUp animate__delay-2s rounded-md px-3 flex justify-between/ items-center py-3 bg-white text-black font-bold text-sm lg:text-base md:text-base">
                              <p className="">Start Your Epic Journey</p>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5 ml-1"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cameraContent" style={{ display: "none" }}>
                  <div className="w-full h-full flex justify-center items-center">
                    <div className="flex items-center w-full justify-start">
                      <div className="lg:ml-20 ml-10 slider-texts text-white w-2/3 overflow-hidden">
                        <div className="textheaders overflow-hidden">
                          <div className="smaller-text animate__faster animate__animated animate__slideInLeft flex items-center font-medium text-xs opacity-70 py-5 uppercase">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-4 h-4 mr-2"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.5 2A1.5 1.5 0 002 3.5V15a3 3 0 106 0V3.5A1.5 1.5 0 006.5 2h-3zm11.753 6.99L9.5 14.743V6.257l1.51-1.51a1.5 1.5 0 012.122 0l2.121 2.121a1.5 1.5 0 010 2.122zM8.364 18H16.5a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5h-2.136l-6 6zM5 16a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <p>Keeping Track Of Every Detail</p>
                          </div>
                          <div className="larger-text lg:text-5xl text-xl sm:text-2xl md:text-3xl font-bold opacity-95 animate__fast animate__animated animate__fadeInLeft">
                            Continue Trading.
                            <p className="font-black">
                              Pick Up Where&apos;d Left Off.
                            </p>
                          </div>
                        </div>
                        <div className="textcontexts my-5 opacity-90 animate__animated animate__fadeInLeft text-sm flex-wrap lg:text-base">
                          <p>
                            Pick up your trading activities right where you
                            <br className="hidden md:block lg:block" />
                            left off. Our platform ensures a smooth experience.
                            <br className="hidden md:block lg:block" />
                            span You can resume trading without interruption
                          </p>
                        </div>
                        <a className="flex" href="/auth">
                          <div className="calltoactionBtn text-center mt-10">
                            <div className="cursor-pointer animate__animated animate__fadeInUp animate__delay-2s rounded-md w-auto px-3 flex justify-between/ items-center py-3 bg-white text-black font-bold text-sm lg:text-base md:text-base">
                              <p className="">Cool? Start Trading</p>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5 ml-2"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cameraContent" style={{ display: "none" }}>
                  <div className="w-full h-full flex justify-center items-center">
                    <div className="flex items-center w-full justify-start">
                      <div className="lg:ml-20 ml-10 slider-texts text-white w-2/3 overflow-hidden">
                        <div className="textheaders overflow-hidden">
                          <div className="smaller-text animate__faster animate__animated animate__slideInLeft flex items-center font-medium text-xs opacity-70 py-5 uppercase">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-4 h-4 mr-2"
                            >
                              <path d="M4.464 3.162A2 2 0 016.28 2h7.44a2 2 0 011.816 1.162l1.154 2.5c.067.145.115.291.145.438A3.508 3.508 0 0016 6H4c-.288 0-.568.035-.835.1.03-.147.078-.293.145-.438l1.154-2.5z"></path>
                              <path
                                fillRule="evenodd"
                                d="M2 9.5a2 2 0 012-2h12a2 2 0 110 4H4a2 2 0 01-2-2zm13.24 0a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V9.5zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V9.5a.75.75 0 00-.75-.75h-.01zM2 15a2 2 0 012-2h12a2 2 0 110 4H4a2 2 0 01-2-2zm13.24 0a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <p>Security &amp; Safety A Priority</p>
                          </div>
                          <div className="larger-text lg:text-5xl text-xl sm:text-2xl md:text-3xl font-bold opacity-95 animate__fast animate__animated animate__fadeInLeft">
                            Secure Investments.
                            <p className="font-black">Trade with Confidence.</p>
                          </div>
                        </div>
                        <div className="textcontexts my-5 opacity-90 animate__animated animate__fadeInLeft text-sm flex-wrap lg:text-base">
                          <p>
                            Take control of your financial future and
                            <br className="hidden md:block lg:block" />
                            unlock the unlimited potential of investing. Start
                            with
                            <br className="hidden md:block lg:block" />
                            us today and explore a world of opportunities
                          </p>
                        </div>
                        <a className="flex" href="/auth">
                          <div className="calltoactionBtn text-center mt-10">
                            <div className="cursor-pointer animate__animated animate__fadeInUp animate__delay-2s rounded-md w-auto px-3 flex justify-between items-center py-3 bg-white text-black font-bold text-sm lg:text-base md:text-base">
                              <p className="">Aye! Get Going</p>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5 ml-2"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="camera_pie">
              <canvas
                id="pie_0"
                width="38"
                height="38"
                style={{
                  position: "absolute",
                  zIndex: "1002",
                  right: 0,
                  top: 0,
                  opacity: "0.8",
                  display: "block",
                }}
              ></canvas>
            </div>
            <div className="camera_commands">
              <div className="camera_play" style={{ display: "none" }}></div>
              <div className="camera_stop" style={{ display: "block" }}></div>
            </div>
          </div>
          <div
            className="camera_loader"
            style={{ display: "none", visibility: "visible" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Content;
