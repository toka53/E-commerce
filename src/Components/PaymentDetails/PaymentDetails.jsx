import React, { useContext } from 'react'
import style from './PaymentDetails.module.css';
import { useFormik } from 'formik';
import { CartContext } from '../../Contexts/CartContent';
import { useParams } from 'react-router-dom';


export default function PaymentDetails() {
    let {id} = useParams();
    let {pay}=useContext(CartContext);
  
   const handlePayemtDetails= async (values)=>{
    // ASYNC
          let {data} = await pay(values,id);
          if(data.status ==="success"){
            window.location.href=data.session.url;
          }
  
  }

 let formik=useFormik({
  initialValues:{
    details:'',
    phone:'',
    city:'',
  },
  onSubmit:handlePayemtDetails
 }
 
 )
return <>
     <form onSubmit={formik.handleSubmit}>
         <label htmlFor="Details">Details</label>
         <input className='form-control' type="text" name="details" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.details} id="Details" />


         <label htmlFor="Phone">Phone</label>
         <input className='form-control' type="tel" name="phone" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} id="Phone" />



         <label htmlFor="City">City</label>
         <input className='form-control' type="text" name="city" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} id="City" />

    <button type='submit' className='btn bg-main text-white mt-4' >Pay Now</button>


     
     </form>
  </>
}
