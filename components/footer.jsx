import React from "react";

function Footer() {
  return (
    <div className="footer-container bg-[#0a0a0a] p-5 text-white">
      <div className="grid-system grid gap-x-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="grid1 my-10">
          <section className="broker-name text-3xl my-4">
            <svg
              width="198"
              height="32"
              viewBox="0 0 198 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text x="0" y="30"  fill="rgba(0,122,225)">S</text>
<text x="20" y="30" fill="rgb(0,122,225)">TOXA</text>
            </svg>
          </section>
          <section className="broker-writeup text-sm text-gray-400">
            Stoxa Platform is a financial investment company established by a
            group of professional traders and investors, who have fore seen the
            future of International Capital Market. The company has direct
            contracts with professional traders and miners around the world that
            guarantees the best services and ensures profits are made and
            remitted to investors daily.
          </section>
        </div>
        <div className="grid2 flex justify-center flex-col">
          <h2 className="text-xl my-4">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p>Useful Links</p>
            </div>
          </h2>
          <div className="links focus:outline-none focus:bg-none grid-cols-2 grid text-gray-400 mx-2 transition-all cursor-pointer">
            <div className="flex hover:text-white items-center my-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 mr-2 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="text-sm capitalize">Getting Started</p>
            </div>
            <div className="flex hover:text-white items-center my-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 mr-2 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="text-sm capitalize">About Us</p>
            </div>
            <div className="flex hover:text-white items-center my-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 mr-2 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="text-sm capitalize">partners</p>
            </div>
            <div className="flex hover:text-white items-center my-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 mr-2 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="text-sm capitalize">features &amp; benefits</p>
            </div>
            <div className="flex hover:text-white items-center my-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 mr-2 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="text-sm capitalize">testimonials</p>
            </div>
            <div className="flex hover:text-white items-center my-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 mr-2 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="text-sm capitalize">FAQ</p>
            </div>
          </div>
          <a href="/auth">
            <div className="flex items-center justify-center">
              <div className="flex w-2/3 items-center justify-center md:w-full my-5 px-6 py-4 text-blue-accent text-blue-500 rounded-lg">
                <p className="text-sm ">Create account</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ml-2 text-white"
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
        <div className="grid3">
          <h2 className="text-xl my-9">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 11-9 0V4.125zm4.5 14.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                  clipRule="evenodd"
                ></path>
                <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257zM12.738 17.625l6.474-6.474a1.875 1.875 0 000-2.651L15.5 4.787a1.875 1.875 0 00-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375z"></path>
              </svg>
              <p>Contacts Information</p>
            </div>
          </h2>
          <div className="phone-container px-4 py-2 my-3 /bg-[#ffffff05] rounded-lg hover:bg-[#ffffff10] transition-all cursor-pointer flex items-center justify-between">
            <section className="phone-section flex items-center">
              <div className="icon p-3 rounded-full mr-4 opacity-60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  ></path>
                </svg>
              </div>
              <div className="phonenum text-sm">
                <div className="phone text-gray-200 font-bold">
                  Phone Contact
                </div>
                <div className="phone text-gray-400 my-1 text-sm">
                  +1 (555) - 6488
                </div>
              </div>
            </section>
            <section className="icon-section"></section>
          </div>
          <div className="email-container px-4 py-2 my-3 /bg-[#ffffff05] rounded-lg hover:bg-[#ffffff10] transition-all cursor-pointer flex items-center justify-between">
            <section className="email-section flex items-center">
              <div className="icon p-3 rounded-full mr-4 opacity-60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  ></path>
                </svg>
              </div>
              <div className="emailadd text-sm">
                <div className="email text-gray-200 font-bold">
                  E-mail Contact
                </div>
                <div className="phone text-gray-400 my-1 text-sm">
                  team@capitalnexus.com
                </div>
              </div>
            </section>
            <section className="icon-section"></section>
          </div>
          <div className="address-container px-4 py-2 my-3 /bg-[#ffffff05] rounded-lg hover:bg-[#ffffff10] transition-all cursor-pointer flex items-center justify-between">
            <section className="address-section flex items-center">
              <div className="icon p-3 rounded-full mr-4 opacity-60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  ></path>
                </svg>
              </div>
              <div className="addressadd text-sm">
                <div className="address text-gray-200 font-bold">
                  Office Address
                </div>
                <div className="phone text-gray-400 my-1 text-sm">
                  4240 Atwaters center, CA 20032, USA
                </div>
              </div>
            </section>
            <section className="icon-section"></section>
          </div>
        </div>
      </div>
      <div className="footer-message py-4 flex justify-center text-gray-400 bg-[#0a0a0a] text-xs md:text-base">
        © 2023 capitalnexus.com All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
