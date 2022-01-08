import React  from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import {GlobalStyle} from "./GlobalStyles"
import Header from "./components/Header/Header";
import  Home from "./components/Home/Home"

export  default  ()=>{


    return(
        <Router>

            <Header/>
            <Switch>
                <Route exact path="/"> <Home/></Route>
            </Switch>
            <GlobalStyle/>
        </Router>

    )
}