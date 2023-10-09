import React from 'react'
import style from './Gurad.module.css';
import { Navigate } from 'react-router-dom';


// useNavigate      Navigate -> <Navigate to='' >
export default function Gurad({children}) {
   
  if(localStorage.getItem('userToken')!=null) {
     
      return children 
  } else {
   
    return <Navigate to='/login' />

  }

return <>
     Gurad
  </>
}
