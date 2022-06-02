package com.example.onlineschool.web;

import com.auth0.jwt.JWT;
import com.example.onlineschool.dto.CourseDTO;
import com.example.onlineschool.dto.UserDTO;
import com.example.onlineschool.jwt.JwtUsernameAndPasswordAuthenticationFilter;
import com.example.onlineschool.model.Person;
import com.example.onlineschool.services.PersonService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static com.auth0.jwt.algorithms.Algorithm.HMAC512;

@Controller
@CrossOrigin
@RequestMapping("/api/v1/users")
public class PersonController {
    @Value("${application.jwt.secretKey}")
    private PersonService personService;

    public PersonController(PersonService personService) {
        this.personService = personService;
    }




    @PostMapping("/signup")
    @ResponseStatus(
            code = HttpStatus.OK
    )
    public void addPerson(@Valid @RequestBody Person person) {
        personService.addPerson(person);
    }


    @PostMapping("/create-course")
    @PreAuthorize("hasAnyRole('ROLE_STUDENT')")
    @ResponseStatus(value = HttpStatus.OK)
    public void addCourse(@RequestBody CourseDTO course) {

        System.out.println(course);


        this.personService.addCourse(course);
    }

    @DeleteMapping("/delete-course/{id}")
    @ResponseStatus(
            code = HttpStatus.OK
    )
    @PreAuthorize("hasAnyRole('ROLE_STUDENT')")
    void deleteCourse(@PathVariable Long id, Principal principal) {
        String name = principal.getName();
        this.personService.deleteCourse(id, name);
    }


}