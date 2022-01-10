package com.example.onlineschool.web;

import com.example.onlineschool.dto.CourseDTO;
import com.example.onlineschool.model.Course;
import com.example.onlineschool.model.Person;
import com.example.onlineschool.services.PersonService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;

@Controller
@CrossOrigin
@RequestMapping("/api/v1/users")
public class PersonController {

    PersonService personService;

    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping("/signin")
        @PreAuthorize("hasAnyRole('ROLE_STUDENT')")
    @ResponseStatus(
            code = HttpStatus.OK
    )
    public ResponseEntity<Person> getUser() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = "";
        if (principal instanceof UserDetails) {
            username = ((UserDetails) principal).getUsername();
        } else {
            username = principal.toString();
        }
        return new ResponseEntity<>(personService.getUserByEmail(username), HttpStatus.OK);
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

        System.out.println(name);

        this.personService.deleteCourse(id, name);


//        this.personService.deleteCourse(id,personService.getUserByEmail(principal.getName()).getId());
    }



}