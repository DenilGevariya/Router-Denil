import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId}=useParams()
  return (
    <div className='flex justify-center'>
        <div className='text-center text-3xl m-10 p-5 rounded-4xl bg-amber-400 w-fit h-fit'>User is: {userId}</div>
    </div>
  )
}

export default User