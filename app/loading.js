import React from 'react'

function Loading() {
  return (
    <div
  className="animate__animated text-xl flex w-full h-full  justify-center items-center" style={{height: '100vh'}}
>
<img src="stoxa.svg" width={'500'} alt='stoxa' className=' animate-bounce' />
</div>
  )
}

export default Loading