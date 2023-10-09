import React, { useState } from 'react'
import style from './Register.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { InfinitySpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

// useNavigate()

export default function Register() {

  let navigate=useNavigate();
let [isloading,setLoading]=useState(false);
let [err,setErr]=useState(null);
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const val=Yup.object({
  name:Yup.string('Must be String').min(3,'Length more than 3 ').max(15,'Length more less 15').required('Name is requried'),
 email:Yup.string().email('Email Foramt is not valid').required('Email Required'),
 phone:Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone is Required'),
 password:Yup.string().matches(/^[A-Z][a-z0-9]{5,20}/,'Message').required('Password rreq'),
 rePassword:Yup.string().oneOf([Yup.ref('password')],'Password is not match').required('Required')
})



   async  function sendData(values){
       setLoading(true);
     let {data}=await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values)
       .catch((err)=>{
         console.log(err.response.data.message);
         setErr(err.response.data.message);
         setLoading(false);
       })
      
   if(data.message=='success'){
    setLoading(false);
    navigate('/Login');
   } 
       
    } 


  let formik=useFormik({
    initialValues:{
      name:'',
      email:'',
      phone:'',
      password:'',
      rePassword:''
    } ,
     validationSchema:val,
    onSubmit:sendData
  })

// Gebna el values men form
//  Validtion - >native  -> Library (YUP)



  return <>
  <div className='w-75  mx-auto'>

    <h3>Register Now :</h3>
     
     {err ? <div className='alert alert-danger'> {err} </div>: '' }
    <form   onSubmit={formik.handleSubmit}>
       <label htmlFor="userName">Name :</label>
       <input className='form-control' type="text" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} id="userName" />
       {formik.errors.name && formik.touched.name ? <div className='alert alert-danger'>{formik.errors.name}</div> :''}
       


       <label htmlFor="userEmail">Email :</label>
       <input className='form-control' type="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} id="userEmail" />
       {formik.errors.email && formik.touched.email ? <div className='alert alert-danger'>{formik.errors.email}</div> :''}
     
     
      <label htmlFor='userPhone'>Phone :</label>
      <input id='userPhone' className='form-control' type="tel" name='phone' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} />

      {formik.errors.phone && formik.touched.phone ? <div className='alert alert-danger'>{formik.errors.phone}</div> :''}



      <label htmlFor='userPassword'>Password :</label>
      <input id='userPassword' className='form-control' type="password" name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
      {formik.errors.password && formik.touched.password ? <div className='alert alert-danger'>{formik.errors.password}</div> :''}



      <label htmlFor='userRePassword'>RePassword :</label>
      <input id='userRePassword' className='form-control' type="password" name='rePassword' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword} />
      {formik.errors.rePassword && formik.touched.rePassword ? <div className='alert alert-danger'>{formik.errors.rePassword}</div> :''}

      {/* props */}
      {isloading? <InfinitySpin 
         width='1000'
        color="#4fa94d"
/> : <button   type='submit' className='btn bg-main text-white my-3'>Register</button> }
      

    </form>
    </div>
  </>
}

