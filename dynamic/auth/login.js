"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Alert from "@/components/pop/alert";


function LoginAuth({props}) {
  var {LoginPop, setLoginPop} = props
  const router = useRouter();

  const [name, setName] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [password, setPassword] = useState("");
  const [err, setErr] = useState([]);
  

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: name,
      password: password,
    }),
  };

  const loginAccount = () => {
    setDisabled(true);
    console.log(err);
    fetch("http://127.0.0.1:8000/api/login", requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if(res.detail){
          console.log(res);
          setDisabled(false)
          setErr((l)=> [...l, res.detail])
        }else{
          var date = new Date()
          var response = {
            res:res,
            'time': date.toLocaleTimeString(date.getTime())
          }
          var string_res = JSON.stringify(response);
          window.localStorage.setItem("user", string_res);
          
          
          setDisabled(false);
          setLoginPop(true)

          setTimeout(() => {
            router.push("/dashboard");
            
          }, 6000);
        }
        
        
      })
      .catch((e)=> {
        console.log(e.message);
        setDisabled(false);
        setErr((l)=> [...l, e.message])
      })
  };

  return (
    <div
      data-state="active"
      data-orientation="horizontal"
      role="tabpanel"
      aria-labelledby="radix-:r3:-trigger-login"
      id="radix-:r3:-content-login"
      tabIndex="0"
      className="/ring-offset-background focus-visible:outline-none /focus-visible:ring-2 /focus-visible:ring-ring /focus-visible:ring-offset-2 mt-8"
    >
      {err && err.map((x)=> <Alert props={{message:x}} />)}
      
      <form className="">
        <div className="message mb-5">
          <div className="font-bold">
            <span className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent font-black">
              Sign-In  
            </span>
            to your account
          </div>
          <p className="text-sm font-normal mt-3 text-gray-200">
            Continue where you left off by logging in, we keep
            <span className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent font-black">
              track
            </span>
            of your every progress.
          </p>
        </div>
        <div className="mt-6 mb-2">
          <label
            className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block font-bold text-sm mb-2"
            htmlFor="email"
          >
            Username
          </label>
          <input
            className="flex border border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 w-full px-4 py-1 bg-[#111111] text-gray-200 border-none h-11 focus:border-none transition-all rounded-lg text-sm"
            id="Username"
            placeholder="johndoe@example.com"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="my-2">
          <div className="label_controller mb-2 flex items-center justify-between">
            <label
              className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block font-bold text-sm"
              htmlFor="password"
            >
              Password
            </label>
            <div className="show-pass cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path
                  fillRule="evenodd"
                  d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <input
            className="flex border border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 w-full px-4 py-1 bg-[#111111] text-gray-200 border-none h-11 focus:border-none transition-all rounded-lg text-sm"
            id="Loginpassword"
            placeholder="Enter your password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            loginAccount();
          }}
          className="inline-flex items-center justify-center text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 w-full h-11 font-bold mt-5 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-600 to-orange-700 text-white py-3 px-4 rounded-lg"
          type="submit"
          disabled={disabled}
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginAuth;
