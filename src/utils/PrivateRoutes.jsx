import React from 'react'
import { Navigate, Outlet } from 'react-router'

const PrivateRoutes = () => {
    const loginData = JSON.parse(localStorage.getItem("Login_data"))
    // console.log(loginData)
    
    
  return (
   loginData.isLogin ? <Outlet/> : <Navigate to="/" />
  )
}

export default PrivateRoutes