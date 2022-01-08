import React  from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import {GlobalStyle} from "./GlobalStyles"
import Header from "./components/Header/Header";
import  Home from "./components/Home/Home"
import CourseDetails from "./components/CourseDetails/CourseDetails";
export  default  ()=>{


    return(
        <Router>

            <Header/>
            <Switch>
                <Route exact path="/"> <Home/></Route>
                <Route path="/course-details/:courseId"><CourseDetails/></Route>
            </Switch>
            <GlobalStyle/>
        </Router>

    )
}