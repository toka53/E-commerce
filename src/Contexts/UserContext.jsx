// 1 

import { createContext } from "react";
import { useState } from 'react';


export let UserContext=createContext();

// 2 Provider 

export default  function UserContextProvider({children}){
   
    let [userToken,setUserToken]=useState(null);

    return <UserContext.Provider value={{userToken,setUserToken}} >
            {children} 
    </UserContext.Provider>

} 

