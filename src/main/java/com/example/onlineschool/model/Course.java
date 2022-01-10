package com.example.onlineschool.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.checkerframework.checker.interning.qual.EqualsMethod;


import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
@Entity(
        name="Course"
)
@Table(
        name="course"
)
@NoArgsConstructor
@ToString
public class Course {


    @Id
    @SequenceGenerator(
            name="course_sequence",
            sequenceName = "course_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            generator = "course_sequence"
    )
    private Long Id;

    @Column(
            name="title",
            nullable = false,
            columnDefinition = "TEXT"
    )
    @NotEmpty
    @Size(
            min=2,
            message = "title should have more than 2 characters"
    )
    private String title;

    @Column(
            name="description",
            nullable = false,
            columnDefinition = "TEXT"
    )
    @NotEmpty
    @Size(
            min=10,
            message = "description should have more than 12 characters"
    )
    private String description;

    @Column(
            name="estimated_time",
            nullable = false,
            columnDefinition = "TEXT"
    )
    @NotEmpty
    @Size(
            min=2,
            message = "estimated time should have more than 2 characthers"
    )
    private String estimatedTime;
    @Column(
            name="materials_needed",
            nullable = false,
            columnDefinition = "TEXT"
    )
    @NotEmpty
    @Size(
            min=2,
            message = "description should have more than 2 characthers"
    )
    private String materialsNeeded;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(

            name = "user_id",
            referencedColumnName = "id",
            foreignKey = @ForeignKey(
                    name = "user_id_fk"
            )
    )
    private Person user;


    public Course(String title, String description, String estimatedTime, String materialsNeeded) {
        this.title = title;
        this.description = description;
        this.estimatedTime = estimatedTime;
        this.materialsNeeded = materialsNeeded;
    }
}

