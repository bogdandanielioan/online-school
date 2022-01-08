package com.example.onlineschool.web;


import com.example.onlineschool.model.Course;
import com.example.onlineschool.services.CourseServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/courses")
public class CourseController {


    CourseServices courseServices;

    @Autowired
    public CourseController(CourseServices courseServices) {
        this.courseServices = courseServices;
    }

    @GetMapping
    @ResponseStatus(
            value = HttpStatus.OK
    )
    List<Course> getAllCourses(){

        return  courseServices.getAllCourses();
    }
    @GetMapping("/{id}")

    Course getBook (@PathVariable Long id) {


        return  this.courseServices.getCourse(id);

    }


}
