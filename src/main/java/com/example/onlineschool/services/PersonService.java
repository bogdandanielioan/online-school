package com.example.onlineschool.services;

import com.example.onlineschool.dto.CourseDTO;
import com.example.onlineschool.exceptions.BadRequestException;
import com.example.onlineschool.model.Course;
import com.example.onlineschool.model.Person;
import com.example.onlineschool.repository.CourseRepository;
import com.example.onlineschool.repository.PersonRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class PersonService {
    private ModelMapper modelMapper;
    private PersonRepository personRepository;

    private CourseRepository courseRepository;

    @Autowired
    public PersonService(PersonRepository personRepository, ModelMapper modelMapper, CourseRepository courseRepository) {
        this.personRepository = personRepository;
        this.modelMapper = modelMapper;
        this.courseRepository = courseRepository;
    }

    public List<Person> getAllUsers() {
        return personRepository.findAll();
    }
    public void addPerson(Person person) {
        Boolean existsEmail = personRepository
                .selectExistsEmail(person.getEmailAddress()).isPresent();
        if (existsEmail) {
            throw new BadRequestException(
                    "Email " + person.getEmailAddress() + " taken");
        }
        personRepository.save(new Person(person.getFirstName(), person.getLastName(), person.getEmailAddress(), person.getPassword()));
    }
    public Person getUserByEmail(String email) {
        return personRepository.selectExistsEmail(email).get();
    }
    public void addCourse(CourseDTO courseDTO) {


        Course course =this.convertDtoToEntity(courseDTO);
        Person isPerson = personRepository
                .findById(courseDTO.getUserId()).get();
        if (isPerson==null) {
            throw new BadRequestException(
                    " Person with   " + courseDTO.getUserId() + " doesn't exists ");
        }


        System.out.println(course);

        System.out.println(isPerson.getPassword());


        isPerson=this.personRepository.selectExistsEmail(isPerson.getEmailAddress()).get();

        isPerson.addCourse(course);

        this.personRepository.save(isPerson);

        System.out.println(courseDTO.toString());

    }
    public Course convertDtoToEntity(CourseDTO courseDTO){
//        modelMapper.addMappings(new PropertyMap<CourseDTO, Course>() {
//            @Override
//            protected void configure() {
//                skip(courseDTO.getUserId());
//            }
//        });
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
    public void deleteCourse(Long idCourse, String username) {
        Person isPerson = personRepository
                .selectExistsEmail(username).get();
        Course course = courseRepository.getById(idCourse);
        if (course != null) {
            boolean status = isPerson.removeCourse(course);
            personRepository.save(isPerson);
            if (status == false) {
                throw new BadRequestException(isPerson.getFirstName() + " you dont have acces to erase this course");

            }
        } else {
            throw new BadRequestException(isPerson.getFirstName() + "  you dont have acces to erase this course ");
        }
        System.out.println(course);

    }

}
