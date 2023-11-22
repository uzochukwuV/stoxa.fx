import React from 'react'

function Testimonials() {
  return (
    <div
    id="Testimonials"
    className="wwd-container flex flex-col pb-24 bg-[#171717] text-white"
  >
    <div className="second-cont mt-10 mb-3 md:w-2/3 lg:w-1/2 mx-10">
      <div className="inner-cont text-whte">
        <div className="smallertex aos-init" data-aos="fade-up">
          <div
            className="inner-smaller-text flex items-center font-semibold my-2 uppercase text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-ed-600"
            >
              <path
                fillRule="evenodd"
                d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p>Testimonials</p>
          </div>
        </div>
        <div
          className="larger-text text-2xl font-bold capitalize aos-init"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          what <span className="text-re-600">people say</span> about us.
        </div>
        <div
          className="text-writeUp text-sm my-3 aos-init"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <p>
            Immerse yourself in an unparalleled experience of exceptional
            service. Our dedicated team is committed to exceeding your
            expectations with meticulous attention to detail and personalized
            care. From the moment you arrive, we create a warm and sophisticated
            atmosphere tailored to your desires.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Testimonials