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
import CourseUpdate from "./components/CourseUpdate/CourseUpdate";
export  default  ()=>{


    return(
        <Router>

            <Header/>
            <Switch>
                <Route exact path="/"> <Home/></Route>
                <Route path="/course-details/:courseId"><CourseDetails/></Route>
                <Route path="/course-update/:courseId"><CourseUpdate/></Route>
            </Switch>
            <GlobalStyle/>
        </Router>

    )
}