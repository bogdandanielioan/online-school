package com.example.onlineschool.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
@Data
@AllArgsConstructor
public class CourseDTO {
    private String title;
    private String description;
    private String estimatedTime;
    private String materialsNeeded;
    private Long userId;


}
