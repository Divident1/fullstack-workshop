package com.gotam.taskmanager.config;

import com.gotam.taskmanager.model.Task;
import com.gotam.taskmanager.repository.TaskRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Data Loader
 * Loads sample data on application startup
 */
@Configuration
public class DataLoader {

    @Bean
    CommandLineRunner initDatabase(TaskRepository taskRepository) {
        return args -> {
            // Add sample tasks for testing
            taskRepository
                    .save(new Task("Learn Spring Boot", "Complete Spring Boot tutorial and build REST API", "HIGH"));
            taskRepository.save(new Task("Learn AngularJS", "Practice AngularJS components and services", "HIGH"));
            taskRepository
                    .save(new Task("Connect Frontend & Backend", "Integrate AngularJS with Spring Boot API", "MEDIUM"));
            taskRepository.save(new Task("Add Styling", "Apply Bootstrap CSS to the frontend", "LOW"));
            taskRepository.save(new Task("Deploy Application", "Deploy to cloud platform", "LOW"));

            System.out.println("Sample tasks loaded successfully!");
        };
    }
}
