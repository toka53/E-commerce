import React, { useEffect, useMemo, useRef, useState } from 'react'
import style from './Brands.module.css';
import useFetch from '../../Hooks/HassanRamdan';
import { useFormik } from 'formik';


export default function Brands() {

   let [data,isError,isLoading]= useFetch('/api/v1/categories');
  let [counter1,setCounter1]=useState(0);
  let [counter2,setCounter2]=useState(0);
  // let [render,setrender]=useState(0);
  // let render=useRef();
  // dom  
  // prev | prev 
  const render=useRef(0);
  let input=useRef();
 
  function counterOne(){
    setCounter1(counter1 +1);
   
  }



  useEffect(()=>{
 
  },[])
// HOOKS
// -> reusable Logic 
// API hook 
// useFetch()   


 
  
   
  

// useRef
      

  return <>
    
    <div className="row">
     
 {console.log(data.data?.data.map())}

    </div>
  </>
}
