/**
 * Task Manager AngularJS Application
 * Connects to Spring Boot REST API
 */

// Create the Angular Module
var app = angular.module('taskManagerApp', []);

// API Base URL - Change this if your backend runs on a different port
var API_URL = 'http://localhost:8080/api/tasks';

/**
 * Task Controller
 * Handles all task-related operations
 */
app.controller('TaskController', ['$scope', '$http', function($scope, $http) {
    
    // =====================
    // INITIALIZATION
    // =====================
    
    $scope.tasks = [];
    $scope.loading = true;
    $scope.error = null;
    $scope.filter = 'all';
    $scope.searchKeyword = '';
    
    // New task model
    $scope.newTask = {
        title: '',
        description: '',
        priority: 'MEDIUM'
    };
    
    // Task being edited
    $scope.editingTask = {};
    
    // Bootstrap modal reference
    var editModal;
    
    // Initialize on page load
    $scope.init = function() {
        $scope.loadTasks();
        // Initialize Bootstrap modal
        editModal = new bootstrap.Modal(document.getElementById('editModal'));
    };
    
    // =====================
    // API OPERATIONS
    // =====================
    
    /**
     * Load all tasks from the API
     */
    $scope.loadTasks = function() {
        $scope.loading = true;
        $scope.error = null;
        
        $http.get(API_URL)
            .then(function(response) {
                $scope.tasks = response.data;
                $scope.loading = false;
                console.log('Tasks loaded:', $scope.tasks.length);
            })
            .catch(function(error) {
                $scope.loading = false;
                $scope.error = 'Failed to load tasks. Make sure the Spring Boot server is running on port 8080.';
                console.error('Error loading tasks:', error);
            });
    };
    
    /**
     * Add a new task
     */
    $scope.addTask = function() {
        if (!$scope.newTask.title || $scope.newTask.title.trim() === '') {
            alert('Please enter a task title');
            return;
        }
        
        $http.post(API_URL, $scope.newTask)
            .then(function(response) {
                $scope.tasks.push(response.data);
                // Reset form
                $scope.newTask = {
                    title: '',
                    description: '',
                    priority: 'MEDIUM'
                };
                console.log('Task added:', response.data);
            })
            .catch(function(error) {
                alert('Failed to add task');
                console.error('Error adding task:', error);
            });
    };
    
    /**
     * Toggle task completion status
     */
    $scope.toggleTask = function(task) {
        $http.patch(API_URL + '/' + task.id + '/toggle')
            .then(function(response) {
                // Update the task in the array
                var index = $scope.tasks.findIndex(function(t) {
                    return t.id === task.id;
                });
                if (index !== -1) {
                    $scope.tasks[index] = response.data;
                }
                console.log('Task toggled:', response.data);
            })
            .catch(function(error) {
                alert('Failed to update task');
                console.error('Error toggling task:', error);
            });
    };
    
    /**
     * Delete a task
     */
    $scope.deleteTask = function(id) {
        if (!confirm('Are you sure you want to delete this task?')) {
            return;
        }
        
        $http.delete(API_URL + '/' + id)
            .then(function() {
                $scope.tasks = $scope.tasks.filter(function(task) {
                    return task.id !== id;
                });
                console.log('Task deleted:', id);
            })
            .catch(function(error) {
                alert('Failed to delete task');
                console.error('Error deleting task:', error);
            });
    };
    
    /**
     * Open edit modal
     */
    $scope.editTask = function(task) {
        // Create a copy to avoid modifying the original
        $scope.editingTask = angular.copy(task);
        editModal.show();
    };
    
    /**
     * Save edited task
     */
    $scope.saveTask = function() {
        $http.put(API_URL + '/' + $scope.editingTask.id, $scope.editingTask)
            .then(function(response) {
                // Update the task in the array
                var index = $scope.tasks.findIndex(function(t) {
                    return t.id === $scope.editingTask.id;
                });
                if (index !== -1) {
                    $scope.tasks[index] = response.data;
                }
                editModal.hide();
                console.log('Task updated:', response.data);
            })
            .catch(function(error) {
                alert('Failed to update task');
                console.error('Error updating task:', error);
            });
    };
    
    // =====================
    // FILTERING & STATS
    // =====================
    
    /**
     * Set filter type
     */
    $scope.setFilter = function(filterType) {
        $scope.filter = filterType;
    };
    
    /**
     * Get filtered tasks based on current filter
     */
    $scope.getFilteredTasks = function() {
        switch($scope.filter) {
            case 'completed':
                return $scope.tasks.filter(function(task) {
                    return task.completed;
                });
            case 'pending':
                return $scope.tasks.filter(function(task) {
                    return !task.completed;
                });
            default:
                return $scope.tasks;
        }
    };
    
    /**
     * Get count of completed tasks
     */
    $scope.getCompletedCount = function() {
        return $scope.tasks.filter(function(task) {
            return task.completed;
        }).length;
    };
    
    /**
     * Get count of pending tasks
     */
    $scope.getPendingCount = function() {
        return $scope.tasks.filter(function(task) {
            return !task.completed;
        }).length;
    };
    
    // Initialize the application
    $scope.init();
    
}]);

// =====================
// CUSTOM FILTERS
// =====================

// Date filter for formatting dates
app.filter('formatDate', function() {
    return function(dateString) {
        if (!dateString) return '';
        var date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };
});
