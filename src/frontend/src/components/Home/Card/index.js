import React from "react";

import { Link } from "react-router-dom";

export default ({course})=>{




    return(
        <Link   to={`/course-details/${course.id}`} className="course--module course--link" >
            <h2 className="course--label">Course</h2>
            <h3 className="course--title">{course.title}</h3>
        </Link>
    )
}