import React from "react";
import { Link } from "react-router-dom";

import { useContext ,useEffect } from "react";

import { Context} from "../../Context";
import Cookies from "js-cookie";

export default ()=>{


    const [user,setUser]=useContext(Context);


    useEffect(()=>{

        if(user) {
            Cookies.set("authenticatedUser", JSON.stringify(user));
            console.log("aici");
        }
    })

    return(
        <header>
            <div className="wrap header--flex">
                <h1 className="header--logo"><Link to={"/"}>Courses</Link></h1>
                <nav>
                    {
                        user ? (

                                <ul className="header--signedout">
                                    <li>Welcome, {user.firstName +" "+user.lastName} !</li>
                                    <li><Link to="/sign-out">Sign Out</Link></li>
                                </ul>



                            )
                            :
                            (
                                <ul className="header--signedout">
                                    <li><Link to="/sign-in">Sign In</Link></li>
                                    <li><Link to="/sign-up">Sign Up</Link></li>
                                </ul>



                            )
                    }
                </nav>
            </div>
        </header>
    );
}