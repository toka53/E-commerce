import React, { useEffect } from 'react'
import style from './Categiores.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from './../../Redux/CategoryReducer';

export default function Categiores() {
  let dispatch=useDispatch();
  
   
   let {isLoading,isError,categories}= useSelector((state)=>state.Categroies)
   console.log(categories);
     useEffect(()=>{
       dispatch(getAllCategories());
     },[])
  return <>
     {isLoading? "Loaaading":
       <div className='row'>
           
           {categories.map((item)=>(
            <div key={item._id} className="col-md-2">
            <img className='w-100' src={item.image} alt="" />
           <h4>{item.name}</h4>

</div>
           ))}
         
       </div>
     }
  </>
}
