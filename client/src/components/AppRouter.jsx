import React, { useEffect } from 'react'
import { Routes,  Route, Navigate, useLocation } from "react-router-dom";
import {publicRoutes} from '../PAGES/router/routs'

export default function AppRouter({setShowNavBar}) {

  const location = useLocation();
    useEffect(()=>{
        if(location.pathname === '/login' || location.pathname === '/registration'){
            setShowNavBar(true)
        }else{
            setShowNavBar(false)
        }
    },[location.pathname])

  return (
    <Routes>
        {publicRoutes.map(route =>
          <Route key={route.index+1}path={route.path} element={route.element} exact={route.exact}/>
        )}
        <Route path='*' element={<Navigate replace to='/'/>}/>
    </Routes>
  )
}
