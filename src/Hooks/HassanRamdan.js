import axios from 'axios';
import React, { useState } from 'react'


// hooks || import 
export default function  HassanRamadan(endPointURL , headers) {
// data
// isError
// isLoading
const baseUrl='https://ecommerce.routemisr.com'
  let [data,setData]=useState([]);
  let [isError,setisError]=useState(null);
  let [isLoading,setIsLoading]=useState(false);
// 
    axios.get(`${baseUrl}${endPointURL}`).then((res=>{
        setIsLoading(true)
        setData(res);
    })).catch((err)=>{
        setIsLoading(true)
        setisError(err)
    }).finally(()=>{
        setIsLoading(false)
    })
 

    // jsx 
   
    return [data,isError,isLoading];
}
