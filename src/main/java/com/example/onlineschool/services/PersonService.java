package com.example.onlineschool.services;

import com.example.onlineschool.dto.CourseDTO;
import com.example.onlineschool.exceptions.BadRequestException;
import com.example.onlineschool.model.Course;
import com.example.onlineschool.model.Person;
import com.example.onlineschool.repository.PersonRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.List;

@Service
public class PersonService {
    private    ModelMapper modelMapper;
    private    PersonRepository personRepository;

    @Autowired
    public PersonService(PersonRepository personRepository , ModelMapper modelMapper) {
        this.personRepository = personRepository;
        this.modelMapper=modelMapper;
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
    public void addCourse(CourseDTO courseDTO) {

        System.out.print(courseDTO);
        Course course =this.convertDtoToEntity(courseDTO);
        Person isPerson = personRepository
                .findById(courseDTO.getUserId()).get();
        if (isPerson==null) {
            throw new BadRequestException(
                    " Person with   " + courseDTO.getUserId() + " doesn't exists ");
        }

        isPerson.addCourse(course);
        this.personRepository.save(isPerson);

    }
    public Course convertDtoToEntity(CourseDTO courseDTO){


        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.LOOSE);
        Course course = new Course();
        modelMapper.map(courseDTO,course);
        return course ;
    }
    public CourseDTO convertEntityToDto(Course course){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(course, CourseDTO.class);
    }
    public void deleteCourse(Long idPerson, Long idCourse) {
        Person isPerson = personRepository
                .findById(idPerson).get();
        Course course =isPerson.getById(idCourse);
        if(course!=null){
            isPerson.removeCourse(course);
        }else{
             throw  new BadRequestException(isPerson.getFirstName()+" dont  have acces ");
        }

    }





}
