package com.example.onlineschool.configuration;


import com.example.onlineschool.dto.CourseDTO;
import com.example.onlineschool.model.Course;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.TypeMap;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Config {


    @Bean
    ModelMapper createModelMapper(){
        return  new ModelMapper();
    }
}
