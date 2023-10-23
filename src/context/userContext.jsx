
import {createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {

    const  [user, setUser] = useState();
  
    console.log('AuthContext: ',user);
    
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}