import React from "react";

import { useState,useContext ,useEffect } from "react";

import {Link, useHistory} from "react-router-dom";


import { Context } from "../../Context";


import Data from "../../Api";


import {errorNotification, successNotification} from "../Notifications/Notifications";

import Cookies from 'js-cookie'



export default ()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [user, setUser] = useContext(Context);

    const [flag,setFlag]=useState(false);

    const history=useHistory();

    let fetchUser=async ()=>{

        let data = new Data();


        try{

            let object = await data.getUser(username,password);

            setUser({firstName:object.firstName, lastName: object.lastName})

        }catch(err){

            setFlag(true);
            throw new Error(err);

        }

    }


    let handleSubmit=(event)=>{

        event.preventDefault();

        fetchUser()
            .then(data=>{



                successNotification(`Login succesfull!`,`Hello ${username}!`);
                history.push("/");


            })
            .catch(()=>{

                errorNotification(
                    "Login failed",
                    "Username or password incorrect",


                );



            });
    }


    let handleChange=(event)=>{
        event.preventDefault();

        let obj=event.target;

        if(obj.type=="email"){

            setUsername(obj.value);

        }else if(obj.type=="password"){

            setPassword(obj.value);
        }


    }







    return (

        <main>
            <div class="form--centered">
                <h2>Sign In</h2>
                <form onChange={handleChange} onSubmit={handleSubmit}>
                    <label>Email Address</label>
                    <input id="emailAddress" name="emailAddress" type="email" />
                    <label >Password</label>
                    <input id="password" name="password" type="password" />
                    <button className="button" type="submit">Sign In</button><button className="button" onClick={()=>{
                        history.push("/")
                }}>Cancel</button>
                </form>
                <p>Don't have a user account? Click here to <Link to="/sign-up">Sign Up</Link>!</p>
            </div>
        </main>


    );
}