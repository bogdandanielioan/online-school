package com.example.onlineschool.repository;

import com.example.onlineschool.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface PersonRepository extends JpaRepository<Person,Long> {


    @Query("SELECT s FROM Person  s WHERE s.emailAddress = ?1")
    Optional<Person> selectExistsEmail(String email);

    Optional<Person>findById(Long id);


}
