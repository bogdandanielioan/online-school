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
import  SignIn from  "./components/SignIn"
import UserProvider from "./Context";
import SignOut from "./components/SignOut/SignOut";
import  PrivateRoute from "./components/PrivateRoute"
import  SignUp from  "./components/SignUp"
export  default  ()=>{


    return (
        <Router>
            <UserProvider>
                <Header/>
                <Switch>
                    <Route exact path="/"> <Home/></Route>
                    {/*<Route exact path ="/create-course/"><CreateCourse/></Route>*/}
                    <PrivateRoute path="/course-details/:courseId"><CourseDetails/></PrivateRoute>
                    {/*<Route path="/course-update/:courseId"><CourseUpdate/></Route>*/}
                    <Route path="/sign-in/"><SignIn /></Route>
                    <Route path="/sign-up" ><SignUp/></Route>
                    <Route path="/sign-out" ><SignOut/></Route>
                </Switch>
            </UserProvider>
            <GlobalStyle/>
        </Router>
    )
}