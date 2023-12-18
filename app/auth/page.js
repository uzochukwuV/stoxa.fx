"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

import "@/css/main.css";
import "@/css/animate.css";
import "@/css/tailwindcss.css";
import SignupOne from "@/dynamic/auth/signupOne";
import SignupTwo from "@/dynamic/auth/signupTwo";
import SignupX from "@/dynamic/auth/signupX";
import LoginAuth from "@/dynamic/auth/login";
import Alert from "@/components/pop/alert";
import Emailverification from "@/components/pop/emailverification";
import LoginAlert from "@/components/pop/loginAlert";
import PopNotifications from "@/components/pop/notifications";
import { url, AuthUrl } from "@/utils/static";
import { appContext } from "../appContext";
import { useContext } from "react";


export function StateBlur({ props }) {
  const { setAuthPage } = props;
  
  return (
    <div
      onClick={() => setAuthPage(false)}
      data-state="open"
      className="fixed inset-0 z-50 bg-slate-900/20 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      style={{ pointerEvents: "auto" }}
      data-aria-hidden="true"
      aria-hidden="true"
    >

    </div>
  );
}

function Login({ props }) {
  const { setAuthPage, setEmailPop, email, setEmail } = props;
  const router = useRouter();

  const [login, setLogin] = useState(null);

  const [name, setName] = useState("");

  const [country, setCountry] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [lid, setlid] = useState(0);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [LoginPop, setLoginPop] = useState(false)

  const requestOptions = {
    method: 'POST',
    headers: {'content-type':'application/json'},
    body: JSON.stringify({username:"Holand",password:"hellodear", user_account:"1", "email":"sel@gmail.com" }),
};

  let genderValue = gender === 'male'? 'M':'F' ;
  
  const createAccount = async() => {
    console.log({
      country: country,
      gender:gender,
      phone:number,
      date_of_birth: date,
      password:password,
      username: passwordConfirm,
      fullname:name,
      email:email
     });
    setLoading(true);
    console.log("started .....", name, password);
    await fetch(`${AuthUrl}api/signup`, {
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify({
        country: country,
        gender:genderValue,
        phone:number,
        date_of_birth: date,
        password:password,
        username: passwordConfirm,
        fullname:name,
        email:email
       }),
  })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
      })
      .catch(e=>{
        setErr(e.message);
        setLoading(false);
      });
      setLoading(false);
  };

  let context = useContext(appContext)


  useMemo(() => console.log(context), [context])


  

  return (
    <div
      role="dialog"
      id="radix-:r0:"
      aria-describedby="radix-:r2:"
      aria-labelledby="radix-:r1:"
      data-state="open"
      className="fixed left-[50%] top-[50%] z-50 grid max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg border-0 transition-all focus:outline-none rounded-xl w-[90%] md:w-[60%] lg:w:-[20%] bg-[#0a0a0a] text-gray-200 border-white/10 /border"
      tabIndex="-1"
      style={{ pointerEvents: "auto" }}
    >
      {err && <Alert props={err} />}
     
      {LoginPop && <LoginAlert props={setAuthPage} />}
      <div className="flex flex-col space-y-1.5 text-center sm:text-left text-white">
        <h2
          id="radix-:r1:"
          className="text-lg font-semibold leading-none tracking-tight"
        ></h2>
      </div>

      <div dir="ltr" data-orientation="horizontal" className="transition-all">
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="h-10 items-center justify-center rounded-md p-1 text-muted-foreground w-full grid grid-cols-2 font-bold bg-[#111]"
          tabIndex="0"
          data-orientation="horizontal"
          style={{ outline: "none" }}
        >
          <button
            onClick={() => setLogin(false)}
            type="button"
            role="tab"
            aria-selected={login ? "false" : "true"}
            aria-controls="radix-:r3:-content-signup"
            data-state={login ? "inactive" : "active"}
            id="radix-:r3:-trigger-signup"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm data-[state=active]:bg-[#333] data-[state=active]:text-gray-200 data-[state=active]:font-bold"
            tabIndex="-1"
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            Sign Up
          </button>
          <button
            onClick={() => setLogin(true)}
            type="button"
            role="tab"
            aria-selected={login ? "true" : "false"}
            aria-controls="radix-:r3:-content-login"
            data-state={login ? "active" : "inactive"}
            id="radix-:r3:-trigger-login"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm data-[state=active]:bg-[#333] data-[state=active]:text-gray-200 data-[state=active]:font-bold"
            tabIndex="-1"
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            Log In
          </button>
        </div>

        <div className={login ? "hidden" : ""}>
          <div
            data-state="active"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:r3:-trigger-signup"
            id="radix-:r3:-content-signup"
            tabIndex="0"
            className="/ring-offset-background focus-visible:outline-none /focus-visible:ring-2 /focus-visible:ring-ring /focus-visible:ring-offset-2 mt-8"
            style={{ animationDuration: 0 }}
          >
            <form className={lid === 0 ? "" : "hidden"}>
              <div className="message mb-5">
                <div className="text-gray-200 font-bold text-lg">
                  <span className="text-blue-700 font-bold bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-500 to-blue-500 bg-clip-text text-transparent">
                    Create
                  </span>
                  a new account
                </div>
                <p className="text-sm font-normal text-gray-200 mt-3">
                  Create a new
                  <span className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] bord fonttb from-blue-600 via-blue-500 to-blue-500 bg-clip-text text-transparent font-bold">
                    account
                  </span>
                  to enjoy immense benefits and financial freedom, it&lsquo;s
                  easy, it&lsquo;s
                  <span className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-500 to-blue-500 bg-clip-text text-transparent font-bold">
                    simple
                  </span>
                </p>
              </div>
              <div className="progress w-full mt-2 mb-8">
                <div className="progress-cont w-full h-1 rounded-full bg-[#11111180] relative">
                  <div
                    className="progress-bar h-full w-1/2 transition-all duration-500 absolute bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-800 via-blue-600 to-blue-700 rounded-full top-0 left-0"
                    style={{ width: 0 }}
                  ></div>
                </div>
              </div>
              
              <div className="">
                <div className="mb-5 mt-6">
                  <label
                    className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-blue-00 font-bold text-sm mb-2 capitalize"
                    htmlFor="name"
                  >
                    Legal Full Name
                  </label>
                  <input
                    className="flex border border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 w-full px-4 py-1 bg-[#111111] text-gray-200 border-none h-11 focus:border-none transition-all capitalize rounded-lg text-sm"
                    id="name"
                    placeholder="John Doe"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-5">
                  <label
                    className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block font-bold text-blue-00 text-sm mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="flex border border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 w-full px-4 py-1 bg-[#111111] text-gray-200 border-none h-11 focus:border-none transition-all rounded-lg text-sm"
                    id="email"
                    placeholder="johndoe@example.com"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => setlid(1)}
                  className="rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 px-4 py-2 w-full flex items-center justify-center bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-800 via-blue-600 to-blue-700 text-white h-12 font-bold roundd-lg"
                  type="button"
                  disabled=""
                >
                  <div className="py-2 flex items-center justify-center">
                    Proceed
                  </div>
                </button>
              </div>
            </form>
            <SignupOne
              props={{ lid, setlid, country, setCountry, number, setNumber }}
            />
            <SignupTwo
              props={{ lid, setlid, gender, setGender, date, setDate }}
            />
            <SignupX
              props={{
                lid,
                setlid,
                password,
                setPassword,
                passwordConfirm,
                setPasswordConfirm,
                createAccount,
                loading,
              }}
            />
          </div>
        </div>

        <div className={login ? "" : "hidden"}>
          <LoginAuth props={{LoginPop, setLoginPop}} />
        </div>

        <div
          data-state="inactive"
          data-orientation="horizontal"
          role="tabpanel"
          aria-labelledby="radix-:r3:-trigger-login"
          hidden=""
          id="radix-:r3:-content-login"
          tabIndex="0"
          className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 /focus-visible:ring-ring /focus-visible:ring-offset-2 mt-8"
        ></div>
      </div>
      <button
        onClick={() => setAuthPage(false)}
        type="button"
        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 /focus:outline-none /focus:ring-2 /focus:ring-ring /focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <line x1="18" x2="6" y1="6" y2="18"></line>
          <line x1="6" x2="18" y1="6" y2="18"></line>
        </svg>
        <span className="sr-only">Close</span>
      </button>
    </div>
  );
}

export default function page() {
  const [authPage, setAuthPage] = useState(null);
  const [emailPop, setEmailPop] = useState(false);
  const [email, setEmail] = useState("");
  const router = useRouter()

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('user')) || null
    let time =  (new Date().getTime()) /1000
    let userTime = (new Date(user?.time).getTime())/100 || null
    console.log(userTime);
    if (userTime && time - userTime <= 9000){
      return () => router.push('/dashboard')
      
    }else {
      localStorage.removeItem('user')
    }
  
    
  }, [])
  

  return (
    <>
      

      {emailPop ? (
        <div>
          <Emailverification props={{ email, setEmailPop }} />
        </div>
      ) : (
        <>
        <section className={authPage ? "" : "hidden"}>
        <StateBlur props={{ setAuthPage }} />
        <Login props={{ setAuthPage, setEmailPop, email, setEmail }} />
      </section>
        <div
          className="w-full h-screen flex justify-center items-center bg-[#0a0a0a] text-white"
          data-aria-hidden="true"
          aria-hidden="true"
        >
          <div>
            <div className="auth-container w-[80vw] md:w-[40vw] p-4 rounded-md bg-[#111] border-white/10 border">
              <div className="cont w-full">
                <div className="icon-cont flex justify-center items-center w-full">
                  <div className="cont rounded-full p-5 bg-[#222] text-white/80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-9 h-9"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                        clipRule="evenodd"
                      ></path>
                      <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z"></path>
                    </svg>
                  </div>
                </div>
                <div className="text-cont mt-5 mb-4 rounded-md /p-3 text-white/90 /bg-[#222]">
                  <div className="text text- font-bold text-center">
                    Login or Create an account with us
                  </div>
                </div>
                
                <div className="form-cont flex items-center justify-center">
                  <button
                    onClick={() => setAuthPage(true)}
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded="true"
                    aria-controls="radix-:r0:"
                    data-state="open"
                    className="w-full px-2"
                  >
                    <div className="btn w-full">
                      <div className="px-4 py-3 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-800 via-blue-600 to-blue-700 text-white font-semibold text-sm items-center justify-center rounded-md flex">
                        <p>Proceed Authentication</p>
                      </div>
                    </div>
                  </button>
                </div>
                <a href="/">
                  <div className="btn w-full p-2 mt-1">
                    <div className="px-4 py-3 w-full flex items-center justify-center text-center bg-[#222] text-white/80 font-semibold text-sm rounded-xl">
                      <p>Back to home</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        </>
      )}
    </>
  );
}
