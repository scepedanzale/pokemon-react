import React from 'react'
import notfoundpage from '../imgs/notfoundpage.jpeg'

export default function NotFoundPage() {
  return (
    <div className='mt-5 d-flex justify-content-center align-items-center gap-3'>
    <img src={notfoundpage}/>
    <div className='fs-1'>
        <p className='fw-bold m-0'>404 ERROR</p>
        <p className='text-warning fw-bold m-0'>Page Not Found</p>
    </div>
    </div>
  )
}
