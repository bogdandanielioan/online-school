package com.example.onlineschool.security;

import lombok.AllArgsConstructor;

    @AllArgsConstructor
    public enum UserPermisions {
        STUDENT_READ("student:read"),
        STUDENT_WRITE("student:write"),
        COURSE_READ("course:read"),
        COURSE_WRITE("course:write");
        private final String permission;
            public String getPermission(){
            return permission;
        }
    }



