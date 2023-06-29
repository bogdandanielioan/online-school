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


//     @Bean
//     CommandLineRunner commandLineRunner(PersonRepository personRepository){

//         return args -> {
// //            Faker faker = new Faker();
// //            String firstName = faker.name().firstName();
// //            String lastName = faker.name().lastName();
// //            String email = String.format("%s.%s@mycode.edu", firstName, lastName);
// //            Person person= new Person("bogdan","daniel","bogdan.daniel@yahoo.com","parola");
// //
// //
// //            Course course= new Course("Build a Basic Bookcase",
// //                    "to be a museum showpiece, though. Often a simple design does the job just as well and the experience gained in completing it goes a long way toward making the next project even better.\\n\\nOur pine bookcase, for example, features simple construction and it's designed to be built with basic woodworking tools. Yet, the finished project is a worthy and useful addition to any room of the house. While it's meant to rest on the floor, you can convert the bookcase to a wall-mounted storage unit by leaving off the baseboard. You can secure the cabinet to the wall by screwing through the cabinet cleats into the wall studs.\\n\\nWe made the case out of materials available at most building-supply dealers and lumberyards, including 1/2 x 3/4-in. parting strip, 1 x 2, 1 x 4 and 1 x 10 common pine and 1/4-in.-thick lauan plywood. Assembly is quick and easy with glue and nails, and when you're done with construction you have the option of a painted or clear finish.\\n\\nAs for basic tools, you'll need a portable circular saw, hammer, block plane, combination square, tape measure, metal rule, two clamps, nail set and putty knife. Other supplies include glue, nails, sandpaper, wood filler and varnish or paint and shellac.\\n\\nThe specifications that follow will produce a bookcase with overall dimensions of 10 3/4 in. deep x 34 in. wide x 48 in. tall. While the depth of the case is directly tied to the 1 x 10 stock, you can vary the height, width and shelf spacing to suit your needs. Keep in mind, though, that extending the width of the cabinet may require the addition of central shelf supports.",
// //                    "12 hours",
// //                    "* 1/2 x 3/4 inch parting strip\\n* 1 x 2 common pine\\n* 1 x 4 common pine\\n* 1 x 10 common pine\\n* 1/4 inch thick lauan plywood\\n* Finishing Nails\\n* Sandpaper\\n* Wood Glue\\n* Wood Filler\\n* Minwax Oil Based Polyurethane\\n"
// //                    );
// //            Course course1= new Course("Learn How to Program",
// //                    "In this course, you'll learn how to write code like a pro!",
// //                    "12 hours",
// //                    "* Notebook computer running Mac OS X or Windows\\n* Text editor"
// //            );
// //
// //            person.addCourse(course);
// //            person.addCourse(course1);
// //
// //
// //            personRepository.save(person);


//         };
//     }




}
