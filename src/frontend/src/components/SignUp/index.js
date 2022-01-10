import React from "react";
import { useEffect,useState ,useContext} from "react";
import {Link, useHistory} from "react-router-dom";


import Data from "../../Api";

import { Context } from "../../Context";

import  {errorNotification,  successNotification} from  "../Notifications/Notifications"
// Must contain a lowercase, uppercase letter and a number
function isValidPassword(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(password);
}

export default ()=>{
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [emailAddress,setEmailAddress]=useState("");
    const[password,setPassword]=useState("");
    let [err, setErrors] = useState([]);

    const [user,setUser]=useContext(Context)
    const history=useHistory();
    let check=()=>{
        setErrors([]);

        if(firstName==""){
            console.log("aici=============");
            setErrors((prevState) => [
                    ...prevState,
                    "firstName is required"
                ]
            )
        }

        if(lastName==""){

            setErrors((prev)=>[
                ...prev,
                "lastname is required"
            ]);


        }

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

        if(isValidPassword(password)==false ){
            setErrors((prev)=>([
                ...prev,
                "Must contain a lowercase, uppercase letter and a number"
            ]));
        }


    }

    useEffect(()=>{
        check();
    },[firstName,lastName,emailAddress,password])

    let onChangeHandler=(e)=>{
        e.preventDefault();
        check();


        let obj=e.target;

        if(obj.classList.contains("firstName")){


            setFirstName(obj.value);

        }else if(obj.classList.contains("lastName")){

            setLastName(obj.value);

        }else if(obj.classList.contains("emailAddress")){
            setEmailAddress(obj.value);
        }else if(obj.classList.contains("password")){

            setPassword(obj.value);
        }

    }
    let onsubmitHandler =  async (event) => {

        event.preventDefault();
        check();

        console.log(err.length);

        if(err.length>0){

            err.forEach(e=>errorNotification("error",e));
        }else{
            try {
                let api= new Data();
                let details={
                    firstName,
                    lastName,
                    emailAddress,
                    password
                }

                let  data =  await api.createUser(details);
                if(data.length==0) {
                    setUser(details)
                    successNotification(
                        "Succes", `Hello ${firstName}`
                    );
                    history.push("/");
                }else{
                    errorNotification("error",data);
                }
            }catch (e){
                errorNotification("error","couldn't register");
                throw  new Error(e);
            }
        }

    }





    return (
        <main>
            <div className="form--centered">
                <h2>Sign Up</h2>
                <form onChange={onChangeHandler} onSubmit={onsubmitHandler}>
                    <label >First Name</label>
                    <input id="firstName" name="firstName" className="firstName" type="text"/>
                    <label>Last Name</label>
                    <input id="lastName" name="lastName" type="text"  className="lastName"/>
                    <label >Email Address</label>
                    <input id="emailAddress" name="emailAddress" type="email"   className="emailAddress"/>
                    <label >Password</label>
                    <input id="password" name="password" type="password" className="password"/>
                    <button className="button" type="submit">Sign Up</button>
                    <button className="button button-secondary" ><Link to="/"href="sign-in.html">Cancel</Link></button>
                </form>
                <p>Already have a user account? Click here to <Link to="/sign-in"href="sign-in.html">sign in</Link>!</p>
            </div>
        </main>
    )
}
