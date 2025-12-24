package com.gotam.taskmanager.repository;

import com.gotam.taskmanager.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Task Repository
 * Provides CRUD operations for Task entity
 */
@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    // Find tasks by completion status
    List<Task> findByCompleted(boolean completed);

    // Find tasks by priority
    List<Task> findByPriority(String priority);

    // Find tasks containing title (case insensitive)
    List<Task> findByTitleContainingIgnoreCase(String title);
}
