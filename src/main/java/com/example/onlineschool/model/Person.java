package com.example.onlineschool.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

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
    private String password;


    public Person(String firstName, String lastName, String emailAddress, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.password = (new BCryptPasswordEncoder().encode(password));
    }

    @JsonManagedReference
    @OneToMany(
            cascade = CascadeType.ALL,
            mappedBy ="user",
            fetch = FetchType.EAGER
    )
    private List<Course> courses= new ArrayList<>();
    public  void addCourse(Course course){

         if(courses.contains(course)==false){

             this.courses.add(course);

             course.setUser(this);
         }
    }

    public void removeCourse(Course course) {
        if (this.courses.contains(course)) {
            this.courses.remove(course);
            course.setUser(null);
        }
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
}
