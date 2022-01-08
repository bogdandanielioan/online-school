import React  from "react";
import { useState  ,useEffect} from "react";
import { useParams  ,useHistory} from "react-router-dom";
import {errorNotification,successNotification} from "../Notifications/Notifications";
import Api from "../../Api";
export default ()=>{
    let {courseId}=useParams();
    let [course,setCourse]=useState({});
    const history=useHistory();
    let [err, setErrors] = useState([]);



    useEffect(async  ()=>{
        try {
            let api = new Api();
            let data = await api.fetchCourse(courseId);
            if (data) {
                setCourse(data);
            }
        }catch (e){
            throw  new Error(e);
        }

    },[]);

    useEffect(()=>{

        check();

    },[course])
    let onChangeHandler=(e)=>{
        e.preventDefault();
        check();
        let obj=e.target;
        if(obj.classList.contains("title")){

            setCourse((prev)=>({

                ...prev,
                title: obj.value
            }));
        }else if(obj.classList.contains("description")){

            setCourse((prev)=>({

                ...prev,
                description: obj.value
            }));


        }else if(obj.classList.contains("estimatedTime")){
            setCourse((prev)=>({

                ...prev,
                estimatedTime: obj.value
            }));
        }else if(obj.classList.contains("materialsNeeded")){
            setCourse((prev)=>({
                ...prev,
                materialsNeeded: obj.value
            }));
        }

    }

    let check=()=>{
        setErrors([]);
        if(course.title==""){
            setErrors((prevState) => [
                    ...prevState,
                    "title is required"
                ]
            )
        }

        if(course.materialsNeeded==""){

            setErrors((prev)=>[
                ...prev,
                "materialsNeeded is required"
            ]);


        }

        if(course.estimatedTime==""){
            setErrors((prev)=>[
                ...prev,
                "estimatedTime is required"
            ])
        }

    }

    let onsubmitHandler =  async (event) => {

        event.preventDefault();
        check();

        if(err.length>0){
            err.forEach(e=>errorNotification("error",e));

        }else{
            try {
                let api = new Api();



                let data = await api.updateCourse(course,courseId);

                if(data.length==0) {
                    successNotification("succes", "course updated ");
                    history.push(`/course-details/${courseId}`);
                }else{
                    errorNotification("error","couldn't updated course");
                }
            }catch (e){
                errorNotification("error","couldn't updated course");
                throw  new Error(e);
            }
        }

    }





    return (
        <main>
            <div className="wrap">
                <h2>Update Course</h2>
                <form onChange={onChangeHandler}  onSubmit={onsubmitHandler}>
                    <div className="main--flex">
                        <div>
                            <label >Course Title</label>
                            <input  className="title" id="courseTitle" name="courseTitle" type="text" defaultValue={course.title}/>

                            <p>By Joe Smith</p>

                            <label >Course Description</label>
                            <textarea  className="description" id="courseDescription" name="courseDescription" defaultValue={course.description}/>
                        </div>
                        <div>
                            <label >Estimated Time</label>
                            <input    className="estimatedTime" id="estimatedTime" name="estimatedTime" type="text" defaultValue={course.estimatedTime}/>

                            <label >Materials Needed</label>
                            <textarea className="materialsNeeded" id="materialsNeeded" name="materialsNeeded" defaultValue={course.materialsNeeded}/>

                        </div>
                    </div>
                    <button className="button" type="submit">Update Course</button>
                    <button className="button button-secondary" >Cancel</button>
                </form>
            </div>
        </main>

    );
}