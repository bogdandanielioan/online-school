package com.example.onlineschool.services;

import com.example.onlineschool.exceptions.CourseNotFoundException;
import com.example.onlineschool.model.Course;
import com.example.onlineschool.repository.CourseRepository;
import org.springframework.stereotype.Service;

import javax.persistence.Id;
import java.util.List;

@Service
public class CourseServices {


    CourseRepository courseRepository;

    public CourseServices(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<Course> getAllCourses(){

        return  this.courseRepository.findAll();
    }

    public Course getCourse(Long id){

        if(this.courseRepository.findById(id).get()!=null){

            return this.courseRepository.findById(id).get();
        }else{

            throw  new CourseNotFoundException("Course with Id  " + id + " doesn't exists");
        }


    }


    public void updateCourse(Course newCourse,Long id){
        this.courseRepository.findById(id)
                .map(course -> {
                    course.setTitle(newCourse.getTitle());
                    course.setDescription(newCourse.getDescription());
                    course.setEstimatedTime(newCourse.getEstimatedTime());
                    course.setMaterialsNeeded(newCourse.getMaterialsNeeded());
                    return courseRepository.save(course);
                }).orElseThrow(()->new CourseNotFoundException("Course with Id  "+id+" doesnt exists"));

    }





}
