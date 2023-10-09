import React, { useContext , useEffect } from 'react'
import style from './Home.module.css';
import AllProducts from './../AllProducts/AllProducts';
import axios from 'axios';
import CategorySlider from '../CategorySlider/CategorySlider';
import MainSlider from './../MainSlider/MainSlider';
import {Helmet} from "react-helmet";
export default function Home() {



 
  return <>

     <Helmet>
           
                <title>My Home</title>
            </Helmet>

  <MainSlider/>
    <CategorySlider/>
     <AllProducts/>
  </>
}

