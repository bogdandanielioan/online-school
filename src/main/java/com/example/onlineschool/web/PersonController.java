package com.example.onlineschool.web;

import com.example.onlineschool.exceptions.BadRequestException;
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
    public ResponseEntity<Person> getUser(){
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username="";
        if (principal instanceof UserDetails) {
            username = ((UserDetails)principal).getUsername();
        } else {
            username = principal.toString();
        }
        return   new ResponseEntity<>(personService.getUserByEmail(username), HttpStatus.OK);
    }

        @PostMapping("/signup")
        @ResponseStatus(
                code = HttpStatus.OK
        )
    public void addBook(@Valid @RequestBody Person person) {
        personService.addPerson(person);
    }


}
