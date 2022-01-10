package com.example.onlineschool.dto;

import com.example.onlineschool.model.Course;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.checkerframework.checker.units.qual.C;

@Data
@AllArgsConstructor
public class CourseDTO {
    private Long id;
    private String title;
    private String description;
    private String estimatedTime;
    private String materialsNeeded;
    private Long userId;


}
