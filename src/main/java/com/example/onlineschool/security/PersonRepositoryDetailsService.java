package com.example.onlineschool.security;


import com.example.onlineschool.model.Person;
import com.example.onlineschool.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class PersonRepositoryDetailsService implements UserDetailsService {

    private PersonRepository personRepository;




    @Autowired
    public PersonRepositoryDetailsService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }


    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        Person person = personRepository.selectExistsEmail(s).get();
        if (person != null) {
            System.out.println("aici");
            return person;
        }
        throw new UsernameNotFoundException(
                "User '" + s + "' not found");
    }


}
