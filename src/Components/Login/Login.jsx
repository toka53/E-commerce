import React, { useContext, useState } from 'react'
import style from './Login.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { InfinitySpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';

// useNavigate()

export default function Login() {
  let {setUserToken}=useContext(UserContext)
  let navigate=useNavigate();
  let [isloading,setLoading]=useState(false);
let [err,setErr]=useState(null);

const val=Yup.object({
 email:Yup.string().required('Email Required'),
 password:Yup.string().required('Password rreq'),
})

   async  function sendData(values){
       setLoading(true);
     let {data}=await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values)
       .catch((err)=>{
         console.log(err.response.data.message);
         setErr(err.response.data.message);
         setLoading(false);
       })
      
       console.log(data);
   if(data.message=='success'){
    setLoading(false);
    //akhod el token w a7ota fel local storage 
     localStorage.setItem('userToken',data.token)
     setUserToken(data.token);
    navigate('/');
   } 
       
    } 
  


  let formik=useFormik({
    initialValues:{
      email:'',
      password:'',
     
    } ,
     validationSchema:val,
    onSubmit:sendData
  })

// Gebna el values men form
//  Validtion - >native  -> Library (YUP)

  return <>
  <div className='w-75  mx-auto'>

    <h3>Login Now :</h3>
     
     {err ? <div className='alert alert-danger'> {err} </div>: '' }
    <form   onSubmit={formik.handleSubmit}>
     

       <label htmlFor="userEmail">Email :</label>
       <input className='form-control' type="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} id="userEmail" />
       {formik.errors.email && formik.touched.email ? <div className='alert alert-danger'>{formik.errors.email}</div> :''}
     

      <label htmlFor='userPassword'>Password :</label>
      <input id='userPassword' className='form-control' type="password" name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
      {formik.errors.password && formik.touched.password ? <div className='alert alert-danger'>{formik.errors.password}</div> :''}

      {/* props */}
      {isloading? <InfinitySpin 
         width='1000'
        color="#4fa94d"
/> : <button   type='submit' className='btn bg-main text-white my-3'>Login</button> }
      

    </form>
    </div>
  </>
}

