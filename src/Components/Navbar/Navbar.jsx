import React, { useContext } from 'react'
import style from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/images/freshcart-logo.svg';
import { UserContext } from '../../Contexts/UserContext';
import { useSelector } from 'react-redux';


// useSelector() 
export default function Navbar() {
 let nav=useNavigate()

 let {count}= useSelector((state)=>state.counter);

 function logout(){
   localStorage.removeItem('userToken')
    setUserToken(null);
    nav('/login');
 }
  let {userToken,setUserToken}=useContext(UserContext);

  
  return <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to=''>

      <img src={logo} alt="" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
     {userToken?       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
   
   <li className="nav-item">
     <Link className="nav-link" to="">Home {count} </Link>
   </li>

   <li className="nav-item">
     <Link className="nav-link" to="Cart">Cart</Link>
   </li>

   <li className="nav-item">
     <Link className="nav-link" to="Products">Products</Link>
   </li>
   <li className="nav-item">
     <Link className="nav-link" to="Categiores">Categroy</Link>
   </li>


 </ul>: null }
 
  

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
   
   <li className="nav-item  d-flex align-items-center  ">
         <i className=' mx-2 fa-brands fa-facebook'></i>
         <i className=' mx-2 fa-brands fa-twitter'></i>
         <i className=' mx-2 fa-brands fa-youtube'></i>
         <i className=' mx-2 fa-brands fa-linkedin'></i>
         <i className=' mx-2 fa-brands fa-instagram'></i>
   </li>

  



   
{/* NULL || EJSWQEASQWEQW */}
   {userToken?    <li className="nav-item">
     <a className="nav-link" 
     onClick={logout} >Logout</a>
   </li>   : <>
    <li className="nav-item">
     <Link className="nav-link" to="Login">Login</Link>
   </li>

   <li className="nav-item">
     <Link className="nav-link" to="Register">Register</Link>
   </li>
   </>     }
 


 </ul>

    </div>
  </div>
</nav>
  </>
}
