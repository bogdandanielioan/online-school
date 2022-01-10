import React  from "react";

import { useState  ,useEffect ,useContext} from "react";


import ReactMarkdown from 'react-markdown'

import Data from "../../Api";

import {Link, useHistory, useParams} from "react-router-dom";
import  Api from "../../Api"
import remarkGfm from "remark-gfm";
import {Context} from "../../Context";

import {successNotification,errorNotification} from "../Notifications/Notifications";

export default ()=>{
    let [course ,setCourse]=useState({});
    const [user, setUser] = useContext(Context);
    let {courseId}=useParams();
    const history=useHistory();
    useEffect( async ()=>{

        let data = new Data();
        try{
            let c=await data.fetchCourse(courseId);
            setCourse(c)
        }catch(e){

            throw new Error(e)

        }

    },[])

    let handleDelete= async (e)=>{
        e.preventDefault();
        console.log(user);
         let api = new Api();
         try{
            let response= await  api.deleteCourse(courseId,user.emailAddress,user.pass);

            if(response.length==0){
                successNotification(
                    "Succes", `the course  ${course.title} was deleted`
                );
                history.push("/")
            }else{
                errorNotification("error",response);

            }

         }catch (e){
             errorNotification("error","Can't erase course");
         }

    }


    return( <main>
        <div className="actions--bar">
            <div className="wrap">
                <Link className="button"  to={`/course-update/${courseId}`}>Update Course</Link>
                <a className="button"   onClick={handleDelete}>Delete Course</a>
                <Link className="button button-secondary" to="/">Return to List</Link>
            </div>
        </div>
        <div className="wrap">
            <h2>Course Detail</h2>
            <form>
                <div className="main--flex">
                    <div>
                        <h3 className="course--detail--title">Course</h3>
                        <h4 className="course--name">{course.title}</h4>
                        <p>{"By "+user.firstName+"  " +user.lastName}</p>

                        <ReactMarkdown children={course.description}/>
                    </div>


                    <div>
                        <h3 className="course--detail--title">Estimated Time</h3>
                        <p>{course.estimatedTime}</p>

                        <h3 className="course--detail--title">Materials Needed</h3>
                        <ul className="course--detail--list">
                            <ReactMarkdown children={course.materialsNeeded} remarkPlugins={[remarkGfm]} />
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    </main>);
}