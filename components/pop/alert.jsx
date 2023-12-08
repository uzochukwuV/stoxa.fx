import React from "react";
import 'aos/dist/aos.css';

function Alert({props}) {
    var {message} = props
  return (
    <div
    
      className="bg-blue-100 animate-out border border-blue-400 text-blue-700 px-4 py-3 rounded -mt-10  fixed top-0 right-0 z-50 w-80"
      role="alert"
    >
      <strong className="font-bold">Sorry</strong>
      <span className="inline sm:inline">{message}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          className="fill-current h-6 w-6 text-blue-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  );
}

export default Alert;
