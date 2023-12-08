import React from 'react'
import { StateBlur } from '@/app/auth/page'

function LoginAlert({props}) {
  var {setAuthPage} = props;
  return (
    <>
    <StateBlur props={{ setAuthPage }} />
    
    <div class="text-blue-accent text-blue-500 animate-wiggle text-center py-4 lg:px-4 z-50 fixed top-40 right-0 left-0 -mt-24">
  <div class="p-2  items-center  leading-none lg:rounded-full flex lg:inline-flex" role="alert">
    <span class="flex rounded-full  uppercase px-2 py-1 text-xs font-bold mr-3">Ok</span>
    <span class="font-semibold mr-2 text-left flex-auto">You are now logged in</span>
    <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
  </div>
</div>
    </>
  )
}

export default LoginAlert