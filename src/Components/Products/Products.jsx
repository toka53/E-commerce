import React from 'react'
import style from './Products.module.css';

import {increase,decrease ,increaseByValue} from './../../Redux/CounterReducer';
import { useDispatch } from 'react-redux';

export default function Products() {

    let dispatch=  useDispatch();

  return <>
     <button onClick={()=>dispatch(increase())} className='btn bg-main'>Increase</button>
     <button onClick={()=>dispatch(decrease())}  className='btn bg-main'>Decrease</button>
     <button onClick={()=>dispatch(increaseByValue(100))}  className='btn bg-main'>Inc By value</button>
  </>
}
