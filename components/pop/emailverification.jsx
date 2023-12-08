import React from "react";

function Emailverification({props}) {
    var {email, setEmailPop} = props
  return (
    <div class="relative animate-wiggle flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-[#0a0a0a] text-white">
      <div class="max-w-xl px-5 text-center">
        <h2 class="mb-2 text-[42px] font-bold text-zinc-800">
          Check your inbox
        </h2>
        <p class="mb-2 text-lg text-zinc-500">
          We are glad, that you&lsquo;re with us ? We&lsquo;ve sent you a verification link
          to the email address{" "}
          <span class="font-medium text-indigo-500">{email}</span>.
        </p>
        <button
          onClick={()=>{setEmailPop(false)}}
          class="mt-3 inline-block w-96 rounded bg-indigo-600 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700"
        >
          Back to Login →
        </button>
      </div>
    </div>
  );
}

export default Emailverification;
