package com.example.onlineschool;

import com.example.onlineschool.model.Course;
import com.example.onlineschool.model.Person;
import com.example.onlineschool.repository.CourseRepository;
import com.example.onlineschool.repository.PersonRepository;
import com.github.javafaker.Faker;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class OnlineSchoolApplication {

    public static void main(String[] args) {
        SpringApplication.run(OnlineSchoolApplication.class, args);
    }






//    @Bean
//    CommandLineRunner commandLineRunner(PersonRepository personRepository){
//
//
//        return args -> {
//
//
//            Faker faker = new Faker();
//
//            String firstName = faker.name().firstName();
//            String lastName = faker.name().lastName();
//            String email = String.format("%s.%s@mycode.edu", firstName, lastName);
//
//            Person person= new Person(firstName,lastName,email);
//
//
//
//            for(int i=0;i<10;i++){
//
//
//                Course  course = new Course(faker.educator().course(),
//                     faker.educator().secondarySchool(),"1h",faker.lorem().characters());
//
//
//                person.addCourse(course);
//
//
//
//            }
//            personRepository.save(person);
//
//
//        };
//    }

}
