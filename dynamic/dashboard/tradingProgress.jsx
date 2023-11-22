export default function TradingProgress() {
  return (
    <>
      <div className="rounded-sm p-3 bg-gray-400/10 border">
        <div className="flex items-center gap-x-2">
          <div className="icon">
            <div className="rounded-full p-3 bg-black/5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M1 2.75A.75.75 0 011.75 2h16.5a.75.75 0 010 1.5H18v8.75A2.75 2.75 0 0115.25 15h-1.072l.798 3.06a.75.75 0 01-1.452.38L13.41 18H6.59l-.114.44a.75.75 0 01-1.452-.38L5.823 15H4.75A2.75 2.75 0 012 12.25V3.5h-.25A.75.75 0 011 2.75zM7.373 15l-.391 1.5h6.037l-.392-1.5H7.373zM13.25 5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0v-5.5a.75.75 0 01.75-.75zm-6.5 4a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 016.75 9zm4-1.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div className="trading-bar w-full">
            <div className="title font-bold text-sm">Trading Progress</div>
            <div className="progress mt-2">
              <div className="progresstrack overflow-hidden w-full relative h-1.5 rounded-full bg-black/5">
                <div
                  className="bar absolute top-0 left-0 h-full rounded-full bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-600 via-red-500 to-orange-500"
                  style={{ width: "2%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
