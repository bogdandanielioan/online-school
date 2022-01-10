package com.example.onlineschool.services;

import com.example.onlineschool.exceptions.BadRequestException;
import com.example.onlineschool.model.Person;
import com.example.onlineschool.repository.PersonRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService {
    private final PersonRepository personRepository;
    public PersonService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }
    public List<Person> getAllUsers(){
        return  personRepository.findAll();
    }


    public void addPerson(Person person) {
        Boolean existsEmail = personRepository
                .selectExistsEmail(person.getEmailAddress()).isPresent();
        if (existsEmail) {
            throw new BadRequestException(
                    "Email " + person.getEmailAddress() + " taken");
        }
        personRepository.save(new Person(person.getFirstName(),person.getLastName(),person.getEmailAddress(),person.getPassword()));
    }

    public Person getUserByEmail(String email){
        return  personRepository.selectExistsEmail(email).get();
    }
}
