package com.gotam.taskmanager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Main Application Class
 * Entry point for Spring Boot Application
 */
@SpringBootApplication
public class TaskManagerApplication {

    public static void main(String[] args) {
        SpringApplication.run(TaskManagerApplication.class, args);
        System.out.println("=================================");
        System.out.println("Task Manager API is running!");
        System.out.println("API URL: http://localhost:8080/api/tasks");
        System.out.println("H2 Console: http://localhost:8080/h2-console");
        System.out.println("=================================");
    }
}
