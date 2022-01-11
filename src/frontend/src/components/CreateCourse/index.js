import React, {useContext} from "react";

import { useState ,useEffect  } from "react";
import { useHistory } from "react-router";
import Data from "../../Api"

import  {Context} from "../../Context";
import {errorNotification, successNotification} from "../Notifications/Notifications";

import Api from "../../Api";

export default ()=>{
    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");
    let [estimatedTime, setEstimatedTime] = useState("");
    let [materialsNeeded, setMaterialsNeeded] = useState("");
    let [err, setErrors] = useState([]);
    let [user ,setUser]=useContext(Context);
    const history=useHistory();

    useEffect(()=>{

         check();

    },[title,description,estimatedTime,materialsNeeded]);

    let onChangeHandler=(e)=>{
        e.preventDefault();
        check();
        let obj=e.target;
        if(obj.classList.contains("title")){

            setTitle(obj.value);
        }else if(obj.classList.contains("description")){


            setDescription(obj.value);

        }else if(obj.classList.contains("estimatedTime")){

            setEstimatedTime(obj.value);

        }else if(obj.classList.contains("materialsNeeded")){

            setMaterialsNeeded(obj.value);
        }

    }

    let onsubmitHandler =  async (event) => {

        event.preventDefault();
        check();

        if(err.length>0){
            err.forEach(e=>errorNotification("error",e));

        }else{
            try {
                let data = new Data();
                let course = {
                    title,
                    description,
                    estimatedTime,
                    materialsNeeded,
                    userId: user.id
                }
               let d= data.createCourse(course, user.emailAddress, user.password);
                if(d) {
                    successNotification("succes", "course create ");
                    history.push(`/`);
                }else{
                    errorNotification("error","couldn't create course");

                }
            }catch (e){
                errorNotification("error","couldn't updated course");
                throw  new Error(e);
            }
        }

    }

    let check=()=>{
        setErrors([]);
        if(title==""){
            setErrors((prevState) => [
                    ...prevState,
                    "title is required"
                ]
            )
        }

        if(materialsNeeded==""){

            setErrors((prev)=>[
                ...prev,
                "materialsNeeded is required"
            ]);


        }

        if(estimatedTime==""){
            setErrors((prev)=>[
                ...prev,
                "estimatedTime is required"
            ])
        }
        if(description==""){
            setErrors((prev)=>[
                ...prev,
                "description is required"
            ])
        }

    }



    // let onsubmit = async  (event) => {
    //     event.preventDefault();
    //     let data = new Data();
    //     let course = {
    //         title,
    //         description,
    //         estimatedTime,
    //         materialsNeeded,
    //         userId: user.id
    //     }
    //
    //     try {
    //         let d = await data.createCourse(course, user.emailAddress, user.password);
    //         console.log(d);
    //         history.push("/");
    //
    //     }catch (e){
    //         throw  new Error(e);
    //     }
    //
    //
    //
    //
    //
    //
    // }








    return (
        <main>
            <div className="wrap">
                <h2>Create Course</h2>
                <form onChange={onChangeHandler}  onSubmit={onsubmitHandler}>
                    <div className="main--flex">
                        <div>
                            <label >Course Title</label>
                            <input id="courseTitle" name="courseTitle" type="text" className="title" />

                            <label>Course Description</label>
                            <textarea id="courseDescription" name="courseDescription" className="description"></textarea>
                        </div>
                        <div>
                            <label >Estimated Time</label>
                            <input id="estimatedTime" name="estimatedTime" type="text" className="estimatedTime"/>

                            <label  >Materials Needed</label>
                            <textarea id="materialsNeeded" name="materialsNeeded" className="materialsNeeded"></textarea>
                        </div>
                    </div>
                    <button className="button"  type="submit" >Create Course</button><button className="button button-secondary" >Cancel</button>
                </form>
            </div>
        </main>
    );
}