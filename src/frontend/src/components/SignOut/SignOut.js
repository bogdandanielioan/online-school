import React from 'react';
import { Redirect } from 'react-router-dom';

import { Context } from '../../Context';
import { useContext  ,useEffect} from 'react';
import Cookies from 'js-cookie';

export default () => {
    const [user,setUser]=useContext(Context)
    useEffect(()=>{
        setUser(null);
        Cookies.remove('authenticatedUser');
    },[ ])

    return (
        <Redirect to="/" />
    );
}
