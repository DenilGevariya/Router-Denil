import React from 'react'
import { useLoaderData } from 'react-router-dom';
function Github() {
    const data=useLoaderData()
    return (
    <div className='flex flex-col items-center'>   
        <div className='m-5 text-5xl bg-blue-900 p-4 rounded-full text-white'>Followers: {data.followers}</div>
        <img className='h-70 w-70 m-5 rounded-full' src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github;

export const gitHubInfoLoader= async ()=>{
    const response=await fetch('https://api.github.com/users/DenilGevariya')
    return response.json();
}