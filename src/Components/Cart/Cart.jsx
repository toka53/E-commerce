import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import style from './Cart.module.css';
import { CartContext } from '../../Contexts/CartContent';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
export default function Cart() {
    
  let [cartData,setCartData]=useState(null);
    let {getCartProduct,deleteCartItem,updateCartItemCount,setCartId} =  useContext(CartContext);

   async function getCartData(){
         let {data}= await getCartProduct()
         setCartData(data);
         setCartId(data.data._id);
         console.log(data);
       
    }

   async function deleteItem(id){
     
    let {data}=await deleteCartItem(id);
    setCartData(data);


   } 
   console.log("HEREEE");

  const updateCount = useCallback(async (id,count)=>{
    let {data} =await updateCartItemCount(id,count);
     setCartData(data);
  
 },[updateCartItemCount]);


// a cache result -> heavy process 

// SEO ->>> NEXT.JS
    useEffect(()=>{
         getCartData();
        
    },[])

  return <>

<Helmet>
           
           <title>My Cart</title>
       </Helmet>

  {cartData?  <div className='bg-body-tertiary my-5 p-4'>
        <h3>Shop Cart</h3>
        <h5 className='text-main'>Total Cart Price : {cartData.data.totalCartPrice}</h5>
        {cartData.data.products.map((item)=>(
          <div key={item._id} className="row my-2">
            <div className="col-md-2">
            <img className='w-100' src={item.product.imageCover} alt="" />
            </div>
            <div className="col-md-10 d-flex justify-content-between">
               <div>
               <h4>{item.product.title}</h4>
               <h5 className='text-main'> Price : {item.price}</h5>

               <button onClick={()=>deleteItem(item.product.id)} className='btn '> <i className='fa fa-trash text-main'></i> Remove </button>
               </div>
               <div>
                 <button onClick={()=>updateCount(item.product._id,item.count+1)} className='btn btn-brdr'><i className='fas fa-plus'></i></button>
                 <span className='mx-2'> {item.count}</span>
                 <button onClick={()=>updateCount(item.product._id,item.count-1)}  className='btn btn-brdr'><i className='fas fa-minus'></i></button>

               </div>
            </div>
          </div>
        ))}

  
        <Link to={`/PaymentDetails/${cartData.data._id}`}  className='btn bg-main text-white mt-3'> Pay Online</Link>

      </div> : null}

       
     
  </>
}
