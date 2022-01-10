package com.example.onlineschool.services;

import com.example.onlineschool.repository.CourseRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.context.TestPropertySource;

import static org.mockito.Mockito.verify;


@ExtendWith(MockitoExtension.class)
@TestPropertySource(
        locations = "classpath:application-it.properties"
)

class CourseServicesTest {
    @Mock
    private CourseRepository courseRepository;
    private  CourseServices underTest;
    @BeforeEach
    void setUp(){
        underTest=  new CourseServices(courseRepository);
    }
    @Test
    void candGetAllCourses(){
        underTest.getAllCourses();
        verify(courseRepository).findAll();
    }






}