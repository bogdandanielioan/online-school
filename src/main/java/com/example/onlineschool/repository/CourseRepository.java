package com.example.onlineschool.repository;

import com.example.onlineschool.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
@Transactional(readOnly = true)
public interface CourseRepository extends JpaRepository<Course,Long> {

//    @Query("" +
//            "SELECT CASE WHEN COUNT(c) > 0 THEN " +
//            "TRUE ELSE FALSE END " +
//            "from Course c "+
//            "where c.title=?1"
//    )
//    Boolean existsCourseByByTitle(String title);
//
//    Boolean existsCourseById(Long id);
}
