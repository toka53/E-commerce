import React, { useState ,useEffect ,useContext} from 'react'
import style from './AllProducts.module.css';
import axios from 'axios';
import { Bars } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Contexts/CartContent';
import toast, { Toaster } from 'react-hot-toast';
//  REACT QUERY -> axios 
// TAN STACK -> CALLING API ASAAHL BKTEEER  

 
export default function AllProducts() {
   let {addProductToCart} =useContext(CartContext)
//   let [isLoading,setIsLoading]=useState(false);
//  let [AllProducts,setAllProducts]=useState([]);
//   async function getAllProducts() {
//     setIsLoading(true);
//     let {data}=await axios.get('https://ecommerce.routemisr.com/api/v1/products');
//     console.log(data.data);
//     setAllProducts(data.data);
//     setIsLoading(false)
// }


function getProducts(){
   return axios.get('https://ecommerce.routemisr.com/api/v1/products');
}


async function addToCart(id){
  
  let {data}=await addProductToCart(id);
   console.log(data);
   if(data.status=="success"){
    //  toaster  - >  react hot toast
    toast("Your Product Add To Cart")
   }

}

// KEY 
let {isLoading,isFetching,data,refetch}= useQuery('getAllProducts',getProducts);

// console.log(data?.data.data);

// useEffect(()=>{
 
//   getAllProducts();

// },[])


  return <>
   <h1>All Products</h1>
 {isLoading? <div className='d-flex justify-content-center align-items-center'>

 <Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
 </div> :   <div className="row">
   <Toaster/>
      {data?.data.data.map((item)=>(
        <div key={item._id} className="col-md-2">
           <div className='product p-2'>
          <Link  to={`Product/${item._id}`}>
             <img src={item.imageCover} className='w-100' alt={item.title} />
            
             <span className='text-main'>{item.category.name}</span>
              <h3 className='h6'>{item.title.split(" ").slice(0,3).join(" ")}</h3>
              <div className='d-flex justify-content-between'>
                  <span>{item.price}EG</span>
                  <span><i className='fas fa-star rating-color'></i>{item.ratingsAverage}</span>
              </div>

           </Link>
              <button onClick={()=>addToCart(item._id)} className='btn bg-main btn-small w-100 text-white'>Add To Cart</button>
           </div>
        </div>
      ))}
    </div>    }

 
  
  </>
}
