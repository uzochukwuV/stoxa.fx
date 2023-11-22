import React from "react";

function Contact() {
  return (
    <div className="p-4">
      <div className="text-white">
        <div className="title">
          <div className="font-bold text-lg">Support</div>
          <div className="small text-sm mt-2 opacity-80">
            Need a helping hand or have a burning question? Our support team is
            here to assist you on your journey. Whether it's a technical hiccup
            or you're just curious, we've got your back.
          </div>
        </div>
        <div className="contacts mt-5">
          <div className="text font-bold text-sm mb-3">Contact us via:</div>
          <div className="cont grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="whatsapp">
              <div className="border border-green-500/40 rounded-md p-3 bg-green-500/5">
                <div className="flex justify-center">
                  <div className="image w-24 h-24">
                    <img
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      srcset="
                    /_next/image?url=%2Fassets%2Fwhatsapp.png&amp;w=1080&amp;q=75 1x,
                    /_next/image?url=%2Fassets%2Fwhatsapp.png&amp;w=2048&amp;q=75 2x
                  "
                      src="/_next/image?url=%2Fassets%2Fwhatsapp.png&amp;w=2048&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
                <div className="title text-lg font-bold my-3 text-center">
                  Whatsapp
                </div>
                <div className="cta">
                  <a href="#">
                    <button className="flex items-center gap-3 justify-center rounded-md w-full py-3 px-3 font-bold text-white text-sm bg-[#29A61A]">
                      <div>Chat on whatsapp</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="whatsapp">
              <div className="border border-red-500/40 rounded-md p-3 bg-red-600/5">
                <div className="flex justify-center">
                  <div className="image w-24 h-24">
                    <img
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      srcset="
                    /_next/image?url=%2Fassets%2Fgmail.png&amp;w=1080&amp;q=75 1x,
                    /_next/image?url=%2Fassets%2Fgmail.png&amp;w=2048&amp;q=75 2x
                  "
                      src="/_next/image?url=%2Fassets%2Fgmail.png&amp;w=2048&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
                <div className="title text-lg font-bold my-3 text-center">
                  Email
                </div>
                <div className="cta">
                  <a href="mailto:">
                    <button className="flex items-center gap-3 justify-center rounded-md w-full py-3 px-3 font-bold text-white text-sm bg-[#F54336]">
                      <div>Send Email</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
