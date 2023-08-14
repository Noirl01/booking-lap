import React from 'react'

const Success = () => {
  setTimeout(()=> {
    window.location.href = '/home';
}, 3000);
  return (
    <div className=''>
      <div className='mt-[11em] h-full w-9/12 text-center ml-[2em]'>
        <h1 className='text-green-500 text-5xl mb-10'>Successfully Signed up! </h1> 
        <h1 className='text-2xl text-black font-medium'>You'll be redirected to the main page..</h1>
      </div>
 
    </div>
  )
}

export default Success