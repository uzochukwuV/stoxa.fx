import React from "react";

function SignupTwo({ props }) {
  const { lid, setlid, gender, setGender, date, setDate } = props;
  return (
    <form className={lid === 2 ? "" : "hidden"}>
      <div className="message mb-5">
        <div className="text-gray-200 font-bold text-lg">
          <span className="text-red-700 font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
            Create
          </span>
          a new account
        </div>
        <p className="text-sm font-normal text-gray-200 mt-3">
          Create a new
          <span className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] bord fonttb from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent font-bold">
            account
          </span>
          to enjoy immense benefits and financial freedom, it's easy, it's
          <span className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent font-bold">
            simple
          </span>
        </p>
      </div>
      <div className="progress w-full mt-2 mb-8">
        <div className="progress-cont w-full h-1 rounded-full bg-[#11111180] relative">
          <div
            className="progress-bar h-full w-1/2 transition-all duration-500 absolute bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700 rounded-full top-0 left-0"
            style={{ width: "66.6667%" }}
          ></div>
        </div>
      </div>
      <div className="">
        <div className="mb-5">
          <label
            className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block font-bold text-sm mb-2"
            htmlFor="gender"
          >
            Gender
          </label>
          <div className="w-full pr-4 py-3 bg-[#111111] text-gray-200 text-sm rounded-lg">
            <select
              name="gender"
              className="bg-inherit w-full ml-1 mr-3"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" disabled="">
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="mb-5">
          <label
            className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block font-bold text-sm mb-2"
            htmlFor="dob"
          >
            Date of Birth
          </label>
          <input
            className="flex border border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 w-full px-4 py-1 bg-[#111111] text-gray-200 border-none h-11 focus:border-none transition-all rounded-lg text-sm"
            type="date"
            name="dob"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => setlid(1)}
          className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 mr-2 bg-[#111] text-gray-200 hover:bg-[#11111180] h-12 rounded-lg"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <button
          onClick={() => setlid(3)}
          className="rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 px-4 py-2 w-full flex items-center justify-center bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700 text-white h-12 font-bold roundd-lg"
          type="button"
          disabled=""
        >
          <div className="py-2 flex items-center justify-center">Proceed</div>
        </button>
      </div>
    </form>
  );
}

export default SignupTwo;
