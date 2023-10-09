import axios from "axios";
import { createContext, useState } from "react";

// useState
// useEffect
// useContext
// useRef



export let CartContext=createContext();


export default function CartContextProvider({children}){
   const baseUrl=`https://ecommerce.routemisr.com`;
   let [cartId,setCartId]=useState(null);
    const headers={
        token:localStorage.getItem('userToken')
       } 
//   headers -> token :ejasdqwasdqwdq.
    function addProductToCart(id){    
        console.log(id);
      return  axios.post('https://ecommerce.routemisr.com/api/v1/cart',
        {
           productId: id
        }
        ,{
           headers
        })
        .then(res=>res)
        .catch(err=>err)

        // PROMISE THEN CATCH

    }


    function getCartProduct(){    
      
    return  axios.get('https://ecommerce.routemisr.com/api/v1/cart'
      ,{
         headers
      })
      .then(res=>res)
      .catch(err=>err)

      // PROMISE THEN CATCH

  }


  function deleteCartItem(id){    
      
    return  axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`
      ,{
         headers
      })
      .then(res=>res)
      .catch(err=>err)

      // PROMISE THEN CATCH

  }

  function updateCartItemCount(id,count){    
      
    return  axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
      count
    }
      ,{
         headers
      })
      .then(res=>res)
      .catch(err=>err)

      // PROMISE THEN CATCH

  }

// url/allOrders
  
function pay(data,id){
    // body & headers
   return axios.post(`${baseUrl}/api/v1/orders/checkout-session/${id}?url=http://localhost:3000`,
   {
    shippingAddress:data
   },
   {
    // headers
    headers
   }).then(res=>res)
   .catch(err=>err)

  }
   

      return <CartContext.Provider value={{addProductToCart,getCartProduct,deleteCartItem,updateCartItemCount,pay,cartId,setCartId}}>
        {children}
      </CartContext.Provider>
}