import React from 'react'

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center w-full mt-5 p-52 text-center'>
      <div className='text-4xl dark:text-white/90 m-5'>404</div>
      <div className='text-2xl dark:text-white/90'>The requested Post does not exist.</div>
    </div>
  )
}
