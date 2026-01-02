document.addEventListener('DOMContentLoaded', () => {

    // --- State ---
    let todos = [];
    let currentFilter = 'all';

    // --- DOM Elements ---
    const taskInput = document.getElementById('task-input');
    const categorySelect = document.getElementById('category-select');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const taskCount = document.getElementById('task-count');

    // --- Initialization ---
    // Load from LocalStorage
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        todos = JSON.parse(storedTodos);
    }
    render();

    // --- Event Listeners ---
    addBtn.addEventListener('click', addTodo);

    // Allow pressing Entry key
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTodo();
    });

    // Filter Buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update UI
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update State
            currentFilter = btn.dataset.filter;
            render();
        });
    });

    // --- Core Functions ---

    function addTodo() {
        const text = taskInput.value.trim();
        const category = categorySelect.value;

        if (text === '') return;

        const newTask = {
            id: Date.now(), // Unique ID based on timestamp
            text: text,
            category: category,
            completed: false
        };

        todos.push(newTask);
        save();
        render();

        // Reset input
        taskInput.value = '';
    }

    function deleteTodo(id) {
        todos = todos.filter(todo => todo.id !== id);
        save();
        render();
    }

    function toggleTodo(id) {
        const todo = todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            save();
            render();
        }
    }

    function save() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function render() {
        todoList.innerHTML = '';

        // Filter Tasks
        const filteredTodos = todos.filter(todo => {
            if (currentFilter === 'all') return true;
            return todo.category === currentFilter;
        });

        // Update Stats
        const remaining = filteredTodos.filter(t => !t.completed).length;
        taskCount.textContent = `${remaining} pending`;

        // Render Empty State
        if (filteredTodos.length === 0) {
            todoList.innerHTML = '<div class="empty-state">No tasks found</div>';
            return;
        }

        // Render List
        filteredTodos.forEach(todo => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'completed' : ''}`;

            li.innerHTML = `
                <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''}>
                <span class="todo-text">${escapeHtml(todo.text)}</span>
                <span class="category-badge badge-${todo.category}">${todo.category}</span>
                <button class="delete-btn" aria-label="Delete task">✖</button>
            `;

            // Event Binding (using closure for ID)
            const checkbox = li.querySelector('.todo-checkbox');
            checkbox.addEventListener('change', () => toggleTodo(todo.id));

            const delBtn = li.querySelector('.delete-btn');
            delBtn.addEventListener('click', () => deleteTodo(todo.id));

            todoList.appendChild(li);
        });
    }

    // Helper to prevent XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

});
