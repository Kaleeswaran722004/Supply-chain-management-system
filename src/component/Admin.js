import React from 'react'
import { useAuth } from './Auth'

export const Admin = () => {
    const auth=useAuth()
    const handlelogout=()=>{
        auth.logout()
    }
  return (
    <div className='admin-p'>
      <br></br>
      welcome {auth.user}<br></br><br></br>
      <button onClick={handlelogout}>logout</button>
    </div>
  )
}
