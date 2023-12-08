import React from 'react'


const componentStyle = {
    "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
    "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
  };


function FAQ() {
  return (
    <div id="FAQ" className="my-20 bg-[#222] text-white py-5">
    <div className="inner-cont mx-10 mb-10 lg:w-1/2 md:w-2/3">
      <div className="smallertex aos-init" data-aos="fade-up">
        <div
          className="inner-smaller-text flex items-center font-semibold my-2 uppercase text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 mr-2 text-blue-700"
          >
            <path
              fillRule="evenodd"
              d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 11-9 0V4.125zm4.5 14.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
              clipRule="evenodd"
            ></path>
            <path
              d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257zM12.738 17.625l6.474-6.474a1.875 1.875 0 000-2.651L15.5 4.787a1.875 1.875 0 00-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375z"
            ></path>
          </svg>
          <p>queries</p>
        </div>
      </div>
      <div
        className="larger-text text-2xl font-bold capitalize aos-init"
        data-aos="fade-left"
      >
        You Got <span className="text-blue-700">questions?</span> we got
        <span className="text-blue-700">answers!</span>
      </div>
      <div className="text-writeUp text-sm my-3 aos-init" data-aos="fade-left">
        <p>
          Immerse yourself in an unparalleled experience of exceptional service.
          Our dedicated team is committed to exceeding your expectations with
          meticulous attention to detail and personalized care. From the moment
          you arrive, we create a warm and sophisticated atmosphere tailored to
          your desires.
        </p>
      </div>
    </div>
    <div className="faq-cont mx-10">
      <div
        className="grid grid-cols-1 transition-all sadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-xl md:grid-cols-2 lg:grid-cols-3 gap-6"
        data-orientation="vertical"
      >
        <div
          data-state="closed"
          data-orientation="vertical"
          className="border-b aos-init"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 data-orientation="vertical" data-state="closed" className="flex">
            <button
              type="button"
              aria-controls="radix-:Rir5jd3a:"
              aria-expanded="false"
              data-state="closed"
              data-orientation="vertical"
              id="radix-:R2r5jd3a:"
              className="flex flex-1 items-center justify-between py-4 transition-all [&amp;[data-state=open]>svg]:rotate-180 font-bold text-sm hover:no-underline"
              data-radix-collection-item=""
            >
              How can I get started with your platform?<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 shrink-0 transition-transform duration-200"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </h3>
          <div
            data-state="closed"
            id="radix-:Rir5jd3a:"
            hidden=""
            role="region"
            aria-labelledby="radix-:R2r5jd3a:"
            data-orientation="vertical"
            className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            style={componentStyle}
          ></div>
        </div>
        <div
          data-state="closed"
          data-orientation="vertical"
          className="border-b aos-init"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 data-orientation="vertical" data-state="closed" className="flex">
            <button
              type="button"
              aria-controls="radix-:Rkr5jd3a:"
              aria-expanded="false"
              data-state="closed"
              data-orientation="vertical"
              id="radix-:R4r5jd3a:"
              className="flex flex-1 items-center justify-between py-4 transition-all [&amp;[data-state=open]>svg]:rotate-180 font-bold text-sm hover:no-underline"
              data-radix-collection-item=""
            >
              What payment methods do you support?<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 shrink-0 transition-transform duration-200"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </h3>
          <div
            data-state="closed"
            id="radix-:Rkr5jd3a:"
            hidden=""
            role="region"
            aria-labelledby="radix-:R4r5jd3a:"
            data-orientation="vertical"
            className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            style={componentStyle}
          ></div>
        </div>
        <div
          data-state="closed"
          data-orientation="vertical"
          className="border-b aos-init"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 data-orientation="vertical" data-state="closed" className="flex">
            <button
              type="button"
              aria-controls="radix-:Rmr5jd3a:"
              aria-expanded="false"
              data-state="closed"
              data-orientation="vertical"
              id="radix-:R6r5jd3a:"
              className="flex flex-1 items-center justify-between py-4 transition-all [&amp;[data-state=open]>svg]:rotate-180 font-bold text-sm hover:no-underline"
              data-radix-collection-item=""
            >
              Are my funds safe with your platform?<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 shrink-0 transition-transform duration-200"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </h3>
          <div
            data-state="closed"
            id="radix-:Rmr5jd3a:"
            hidden=""
            role="region"
            aria-labelledby="radix-:R6r5jd3a:"
            data-orientation="vertical"
            className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            style={componentStyle}
          ></div>
        </div>
        <div
          data-state="closed"
          data-orientation="vertical"
          className="border-b aos-init"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3 data-orientation="vertical" data-state="closed" className="flex">
            <button
              type="button"
              aria-controls="radix-:Ror5jd3a:"
              aria-expanded="false"
              data-state="closed"
              data-orientation="vertical"
              id="radix-:R8r5jd3a:"
              className="flex flex-1 items-center justify-between py-4 transition-all [&amp;[data-state=open]>svg]:rotate-180 font-bold text-sm hover:no-underline"
              data-radix-collection-item=""
            >
              Do you provide customer support?<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 shrink-0 transition-transform duration-200"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </h3>
          <div
            data-state="closed"
            id="radix-:Ror5jd3a:"
            hidden=""
            role="region"
            aria-labelledby="radix-:R8r5jd3a:"
            data-orientation="vertical"
            className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            style={componentStyle}
          ></div>
        </div>
        <div
          data-state="closed"
          data-orientation="vertical"
          className="border-b aos-init"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h3 data-orientation="vertical" data-state="closed" className="flex">
            <button
              type="button"
              aria-controls="radix-:Rqr5jd3a:"
              aria-expanded="false"
              data-state="closed"
              data-orientation="vertical"
              id="radix-:Rar5jd3a:"
              className="flex flex-1 items-center justify-between py-4 transition-all [&amp;[data-state=open]>svg]:rotate-180 font-bold text-sm hover:no-underline"
              data-radix-collection-item=""
            >
              Can I trade on mobile devices?<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 shrink-0 transition-transform duration-200"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </h3>
          <div
            data-state="closed"
            id="radix-:Rqr5jd3a:"
            hidden=""
            role="region"
            aria-labelledby="radix-:Rar5jd3a:"
            data-orientation="vertical"
            className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            style={componentStyle}
          ></div>
        </div>
        <div
          data-state="closed"
          data-orientation="vertical"
          className="border-b aos-init"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h3 data-orientation="vertical" data-state="closed" className="flex">
            <button
              type="button"
              aria-controls="radix-:Rsr5jd3a:"
              aria-expanded="false"
              data-state="closed"
              data-orientation="vertical"
              id="radix-:Rcr5jd3a:"
              className="flex flex-1 items-center justify-between py-4 transition-all [&amp;[data-state=open]>svg]:rotate-180 font-bold text-sm hover:no-underline"
              data-radix-collection-item=""
            >
              How can I withdraw my profits?<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 shrink-0 transition-transform duration-200"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </h3>
          <div
            data-state="closed"
            id="radix-:Rsr5jd3a:"
            hidden=""
            role="region"
            aria-labelledby="radix-:Rcr5jd3a:"
            data-orientation="vertical"
            className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            style={componentStyle}
          ></div>
        </div>
      </div>
      <div
        className="flex w-full justify-center aos-init"
        data-aos="fade-up"
        data-aos-delay="1300"
      >
        <button
          className="my-5 flex items-center text-sm md:text-base rounded-lg x-6 py-4 font-bold mt-4 text-white"
        >
          <p>Show more</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 ml-1 transition-transform rotate-0"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
  )
}

export default FAQ