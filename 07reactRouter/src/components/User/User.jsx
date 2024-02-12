import React from 'react'
import { useParams } from "react-router-dom";

function User() {
    const {uid} = useParams()
  return (
    <div className='bg-slate-500 text-center py-3 text-white text-2xl'>User { uid}</div>
  )
}

export default User