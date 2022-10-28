import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Routes,  Route, Navigate, useLocation } from "react-router-dom";
import {publicRoutes} from '../PAGES/router/routs'

export default function AppRouter({setShowNavBar}) {
  const dispatch = useDispatch();
  
  const resetRef = () => {
    dispatch({type:"RESET-REF", reset: []})
  }

  const location = useLocation();
    useEffect(()=>{
      resetRef();
    },[location])

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
