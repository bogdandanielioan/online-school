package com.example.onlineschool.dto;

import lombok.Data;

@Data
public class CourseDTO {

    private String title;
    private String description;
    private String estimatedTime;
    private String materialsNeeded;
    private  Long userId;
}
