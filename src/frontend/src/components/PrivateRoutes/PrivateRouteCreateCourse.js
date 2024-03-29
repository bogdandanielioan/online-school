import React from "react";

import { Context } from "../../Context";

import { useContext  ,useEffect } from "react";



import { Route, Redirect } from 'react-router-dom';

export default  ({children})=>{

    let [user ,setUser]=useContext(Context);
    return(
        <Route  path={"/create-course"}>{
            user ? (

                    <>
                        {
                            children
                        }
                    </>


                ):
                (
                    <Redirect to="/sign-in"/>
                )

        }
        </Route>
    );
}


