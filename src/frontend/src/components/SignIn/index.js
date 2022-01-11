import React from "react";

import { useState,useContext ,useEffect } from "react";

import {Link, useHistory} from "react-router-dom";


import { Context } from "../../Context";


import Data from "../../Api";


import {errorNotification, successNotification} from "../Notifications/Notifications";

import Cookies from 'js-cookie'

export default ()=>{
    const [emailAddress,setEmailAddress]=useState("");
    const[password,setPassword]=useState("");
    let [err, setErrors] = useState([]);
    const [user, setUser] = useContext(Context);
    const history=useHistory();


    let check=()=>{
        setErrors([]);

        if(emailAddress==""){
            setErrors((prev)=>[
                ...prev,
                "invalid email "
            ])
        }
        if(password==""){
            setErrors((prev)=>([
                ...prev,
                "password  is required "
            ]));
        }




    }
    useEffect(()=>{
        check();
    },[emailAddress,password])
    let onChangeHandler=(e)=>{
        e.preventDefault();
        check();

        let obj=e.target;
        if(obj.classList.contains("emailAddress")){
            setEmailAddress(obj.value);
        }else if(obj.classList.contains("password")){

            setPassword(obj.value);
        }

    }
    let onsubmitHandler =  async (event) => {
        event.preventDefault();
        check();
        if(err.length>0){
            err.forEach(e=>errorNotification("error",e));
        }else{
            try {
                let api= new Data();
                let data = await api.getUser(emailAddress,password);
                if(data) {
                    setUser({...data,pass:password});
                    successNotification(
                        "Succes", `Hello ${data.firstName}!!`
                    );
                    history.push("/");
                }else{
                    errorNotification(
                        "You have entered an invalid username or password",data);
                }
            }catch (e){
                errorNotification("error","couldn't register");
                throw  new Error(e);
            }
        }

    }

    return (
        <main>
            <div class="form--centered">
                <h2>Sign In</h2>
                <form onChange={onChangeHandler} onSubmit={onsubmitHandler}>
                    <label>Email Address</label>
                    <input id="emailAddress" name="emailAddress" type="email" className="emailAddress" />
                    <label >Password</label>
                    <input id="password" name="password" type="password"  className="password"/>
                    <button className="button" type="submit">Sign In</button><button className="button" onClick={()=>{
                        history.push("/")
                }}>Cancel</button>
                </form>
                <p>Don't have a user account? Click here to <Link to="/sign-up">Sign Up</Link>!</p>
            </div>
        </main>


    );
}