package com.example.onlineschool.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.apache.commons.lang3.builder.EqualsExclude;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.*;
import java.util.stream.Collectors;

import static com.example.onlineschool.security.ApplicationUserRole.STUDENT;

@Data
@NoArgsConstructor
@Entity(
        name="Person"

)
@Table(
        name = "person",
        uniqueConstraints = {
                @UniqueConstraint(name = "student_email_unique", columnNames = "email_address")
        }
)
@AllArgsConstructor
@ToString
public class Person implements UserDetails {

    @Id
    @SequenceGenerator(
            name="person_sequence",
            sequenceName = "person_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "person_sequence"
    )
    @Column(name="id")
    private Long id;

    @Column(
            name="first_name",
            nullable = false,
            columnDefinition = "TEXT"
    )
    @NotEmpty
    @Size(
            min=2,
            message = "first name should have at least 2 characters"
    )
    private String firstName;

    @Column(
            name="last_name",
            nullable = false,
            columnDefinition = "TEXT"
    )
    @NotEmpty
    @Size(
            min=2,
            message = "last name should have at least 2 characters"
    )
    private String lastName;
    @Column(
            name="email_address",
            nullable = false,
            columnDefinition = "varchar(50)"

    )
    @NotEmpty
    @Email
    private String emailAddress;


    @Column(
            name="password",
            nullable = false,
            columnDefinition = "TEXT"
    )
    @EqualsExclude
    private String password;


    public Person(String firstName, String lastName, String emailAddress, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.password = (new BCryptPasswordEncoder().encode(password));
    }

    @JsonManagedReference
    @OneToMany(
            mappedBy = "user",
            orphanRemoval = true,
            cascade = {CascadeType.ALL},
            fetch = FetchType.LAZY
    )
    @EqualsExclude
    private List<Course> courses= new ArrayList<>();

    public  void addCourse(Course course){

        this.courses.add(course);

        course.setUser(this);
    }

    public boolean removeCourse(Course course) {
        if (this.courses.contains(course)) {
            this.courses.remove(course);
            course.setUser(null);
            return true;
        }
        return false;
    }


    public Person(String firstName, String lastName, String emailAddress) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.password="pass";
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        return STUDENT.getGrantedAuthorities();
    }

    @Override
    public String getUsername() {
        return this.getEmailAddress();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public  boolean isCourse(Course c){
        return  this.courses.contains(c);
    }

    public Course getById(Long id){

        return  courses.stream().filter(e->e.getId()==id).findFirst().get();
    }



    @Override
    public int hashCode() {
        return Objects.hash(getFirstName(), getLastName(), getEmailAddress(), getPassword());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Person)) return false;
        Person person = (Person) o;
        return getFirstName().equals(person.getFirstName()) && getLastName().equals(person.getLastName()) && getEmailAddress().equals(person.getEmailAddress());
    }
}
