import React  from "react";

import { useState  ,useEffect ,useContext} from "react";


import ReactMarkdown from 'react-markdown'

import Data from "../../Api";

import {Link, useHistory, useParams} from "react-router-dom";
import remarkGfm from "remark-gfm";


// import { Context } from "../../Context";

export default ({id})=>{


    let [course ,setCourse]=useState({});
    // const [user, setUser] = useContext(Context);
    let {courseId}=useParams();

    // const history=useHistory();



    useEffect( async ()=>{

        let data = new Data();
        try{
            let c=await data.fetchCourse(courseId);
            setCourse(c)
        }catch(e){

            throw new Error(e)

        }

    },[])






    return( <main>
        <div className="actions--bar">
            <div className="wrap">
                <Link className="button"  to={`/course-update/${courseId}`}>Update Course</Link>
                {/*<Link className="button">Delete Course</Link>*/}
                {/*<Link className="button button-secondary" to="/">Return to List</Link>*/}
            </div>
        </div>
        <div className="wrap">
            <h2>Course Detail</h2>
            <form>
                <div className="main--flex">
                    <div>
                        <h3 className="course--detail--title">Course</h3>
                        <h4 className="course--name">{course.title}</h4>
                        <p>By Bogdan Daniel</p>

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