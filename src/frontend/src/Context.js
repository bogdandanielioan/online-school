import React, { useState, createContext } from 'react';

import Cookies from 'js-cookie';

import { useEffect } from 'react';

export const Context = createContext();





const UserProvider = ({ children }) => {

    const [user, setUser] = useState(undefined);

    useEffect(()=>{


        if(Cookies.get('authenticatedUser')){

            setUser( JSON.parse(Cookies.get('authenticatedUser')));
        }
    },[])

    return (
        <Context.Provider value={[user, setUser]}>{children}</Context.Provider>
    );




};







export default UserProvider;

