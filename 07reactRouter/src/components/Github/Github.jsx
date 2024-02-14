import React, { useEffect, useState } from 'react'
import { useLoaderData } from "react-router-dom";

function Github() {
  const userData = useLoaderData()

  // const [userData, setUserData] = useState([]);
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/Sumit-rana13')
  //   .then((response)=> response.json())
  //   .then((data)=>{
  //     console.log(data);
  //     setUserData(data)
  //   })
  // },
  // [])
  

  return (
    <div className='bg-slate-500 py-4 text-center text-2xl text-white'>
      <div>Github follower : {userData.followers }</div>
      <div>Github Id : {userData.login}</div>
      <div>Account Created On : {userData.created_at}</div>
      <img src={userData.avatar_url} alt="Image" width={250} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async() =>{
  const res = await fetch('https://api.github.com/users/Sumit-rana13')
  return res.json()
}