import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Brands from './Components/Brands/Brands';
import Categiores from './Components/Categiores/Categiores';
import Products from './Components/Products/Products';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import CounterContextProvider from './Contexts/CounterContext';
import UserContextProvider, { UserContext } from './Contexts/UserContext';
import { useContext } from 'react';
import Gurad from './Components/Gurad/Gurad';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import CartContextProvider from './Contexts/CartContent';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store';
import PaymentDetails from './Components/PaymentDetails/PaymentDetails';
import Orders from './Components/Orders/Orders';




let routers=createHashRouter([
  {path:'/',element:<Layout/>,children:[
    {index:true,element:<Gurad><Home/></Gurad>},
    {path:'Categiores',element: <Gurad><Categiores/></Gurad> },
    {path:'Cart',element:<Gurad><Cart/></Gurad>},
    {path:'Products',element:<Products/>},
    {path:'Product/:id',element: <Gurad> <ProductDetails/>  </Gurad>  },
    {path:'PaymentDetails/:id',element: <Gurad> <PaymentDetails/>  </Gurad>  },
    {path:'allorders',element: <Gurad> <Orders/>  </Gurad>  },
    {path:'Register',element:<Register/>},
    {path:'Login',element:<Login/>},
    {path:'*',element:<NotFound/>},
  
  ]}
])

function App() {
  
  return (
   <>
 

     <UserContextProvider>
   <CartContextProvider>
       <Provider store={Store}>
      <RouterProvider router={routers}/>
      </Provider>
      </CartContextProvider>
      
      </UserContextProvider>
     
    
   </>
  );
}

export default App;
