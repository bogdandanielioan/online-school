package com.example.onlineschool.web;


import com.example.onlineschool.model.Course;
import com.example.onlineschool.services.CourseServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
    @PreAuthorize("hasAnyRole('ROLE_STUDENT')")
    List<Course> getAllCourses(){

        return  courseServices.getAllCourses();
    }
    @PreAuthorize("hasAnyRole('ROLE_STUDENT')")
    @GetMapping("/{id}")
    Course getCourse (@PathVariable Long id) {
        return  this.courseServices.getCourse(id);
    }

    @PutMapping("{id}")
    @ResponseStatus(
            code = HttpStatus.OK
    )
    public void updateCourse(@RequestBody Course newCourse, @PathVariable Long id) {


        courseServices.updateCourse(newCourse,id);
    }

    @GetMapping("/ceva")
    @PreAuthorize("hasAnyRole('ROLE_STUDENT')")
    ResponseEntity<String> test(){

        return new ResponseEntity<>("ceva",HttpStatus.OK);
    }





}
