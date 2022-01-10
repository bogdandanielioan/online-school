package com.example.onlineschool.services;

import com.example.onlineschool.exceptions.BadRequestException;
import com.example.onlineschool.model.Person;
import com.example.onlineschool.repository.CourseRepository;
import com.example.onlineschool.repository.PersonRepository;
import com.github.javafaker.Faker;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;
import org.springframework.test.context.TestPropertySource;

import java.util.Optional;


import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.then;

@ExtendWith(MockitoExtension.class)
@TestPropertySource(
        locations = "classpath:application-it.properties"
)

class PersonServiceTest {


    @Mock private CourseRepository courseRepository;
    @Mock private PersonRepository personRepository;
    private ModelMapper modelMapper;
    private  PersonService underTest;
    @Captor
    private ArgumentCaptor<Person>  personArgumentCaptor;
    @BeforeEach
    public void setup(){
        underTest= new PersonService(personRepository, modelMapper, courseRepository);

         personArgumentCaptor=ArgumentCaptor.forClass(Person.class);
    }
    @Test
    public  void itShouldSaveNewPerson(){

        Faker faker = new Faker();
        String firstName = faker.name().firstName();
        String lastName = faker.name().lastName();
        String email = String.format("%s.%s@test.com", firstName, lastName);
        String password=faker.internet().password();
        Person person= new Person(
                firstName,
                lastName,
                email,
                password
        );

        given(personRepository.selectExistsEmail(email)).willReturn(Optional.empty());

        this.underTest.addPerson(person);

        then(personRepository).should().save(personArgumentCaptor.capture());

        Person personArgumentCaptorValue=this.personArgumentCaptor.getValue();

        assertThat(personArgumentCaptorValue).isEqualTo(person);


    }

    @Test
    public  void itShouldNotSaveNewPerson(){
        Faker faker = new Faker();
        String firstName = faker.name().firstName();
        String lastName = faker.name().lastName();
        String email = String.format("%s.%s@test.com", firstName, lastName);
        String password=faker.internet().password();
        Person person= new Person(
                firstName,
                lastName,
                email,
                password
        );
        given(personRepository.selectExistsEmail(email)).willReturn(Optional.of(person));


       assertThatThrownBy(()->underTest.addPerson(person))
               .isInstanceOf(BadRequestException.class)
               .hasMessageContaining( "Email " + person.getEmailAddress() + " taken");



    }










}