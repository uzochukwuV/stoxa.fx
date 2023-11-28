import React from 'react'

function Loading() {
  return (
    <div
  className="animate__animated text-xl flex w-full h-full justify-center items-center"
>
  <div className="progress-cont w-4/5 md:w-1/2">
    <div
      className="bg-[#11111150] progressguauge w-full h-1.5 rounded-full overflow-hidden transition-all relative"
    >
      <div
        className="progressbar absolute rounded-full h-full top-0 left-0 transition-all bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700"
        style={{width: "91%", height:300}}
      >
        Loading........
      </div>
    </div>
  </div>
</div>
  )
}

export default Loading