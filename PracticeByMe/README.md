# Task Manager - Spring Boot + AngularJS

A full-stack Task Management application demonstrating the integration of **Spring Boot** (Backend) and **AngularJS** (Frontend).

---

## 📁 Project Structure

```
PracticeByMe/
├── task-manager-backend/          # Spring Boot REST API
│   ├── pom.xml                    # Maven configuration
│   └── src/main/
│       ├── java/com/gotam/taskmanager/
│       │   ├── TaskManagerApplication.java   # Main class
│       │   ├── model/Task.java               # JPA Entity
│       │   ├── repository/TaskRepository.java # Data layer
│       │   ├── service/TaskService.java      # Business logic
│       │   ├── controller/TaskController.java # REST Controller
│       │   └── config/
│       │       ├── WebConfig.java            # CORS config
│       │       └── DataLoader.java           # Sample data
│       └── resources/application.properties  # Configuration
│
└── task-manager-frontend/         # AngularJS Frontend
    ├── index.html                 # Main HTML
    ├── js/app.js                  # AngularJS app
    └── css/style.css              # Custom styles
```

---

## 🚀 How to Run

### Step 1: Start the Backend (Spring Boot)

```bash
cd task-manager-backend
./mvnw spring-boot:run
```

Or if you have Maven installed:
```bash
mvn spring-boot:run
```

**Backend will run on:** `http://localhost:8080`

### Step 2: Open the Frontend

Simply open `task-manager-frontend/index.html` in your browser.

Or use a simple HTTP server:
```bash
cd task-manager-frontend
# Using Python
python3 -m http.server 3000

# Or using Node.js
npx serve
```

**Frontend will run on:** `http://localhost:3000`

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/{id}` | Get task by ID |
| POST | `/api/tasks` | Create new task |
| PUT | `/api/tasks/{id}` | Update task |
| DELETE | `/api/tasks/{id}` | Delete task |
| PATCH | `/api/tasks/{id}/toggle` | Toggle completion |
| GET | `/api/tasks/search?keyword=` | Search tasks |
| GET | `/api/tasks/status?completed=` | Filter by status |

---

## 📋 Features

### Backend (Spring Boot)
- ✅ RESTful API with CRUD operations
- ✅ JPA/Hibernate for ORM
- ✅ H2 In-memory database
- ✅ CORS enabled for frontend
- ✅ Sample data loader
- ✅ Service layer pattern

### Frontend (AngularJS)
- ✅ Two-way data binding
- ✅ $http service for API calls
- ✅ Task filtering (All/Pending/Completed)
- ✅ Search functionality
- ✅ Edit modal with Bootstrap
- ✅ Responsive Bootstrap 5 design
- ✅ Statistics dashboard

---

## 🎨 Technologies Used

| Layer | Technology |
|-------|------------|
| Backend Framework | Spring Boot 3.2 |
| ORM | Spring Data JPA |
| Database | H2 (In-memory) |
| Frontend Framework | AngularJS 1.8 |
| UI Framework | Bootstrap 5 |
| Icons | Bootstrap Icons |

---

## 💡 Learning Points

### Spring Boot Concepts
1. `@RestController` - REST API endpoints
2. `@Entity` - JPA entity mapping
3. `@Repository` - Data access layer
4. `@Service` - Business logic layer
5. `@CrossOrigin` - CORS handling
6. `@Autowired` - Dependency Injection

### AngularJS Concepts
1. `ng-app` - Application bootstrap
2. `ng-controller` - Controller binding
3. `ng-model` - Two-way binding
4. `ng-repeat` - Iteration
5. `ng-click` - Event handling
6. `$http` - HTTP requests
7. `$scope` - Data sharing

---

## 🔧 Configuration

### Change Backend Port
Edit `application.properties`:
```properties
server.port=8080
```

### Change API URL in Frontend
Edit `js/app.js`:
```javascript
var API_URL = 'http://localhost:8080/api/tasks';
```

---

## 📝 Sample Task JSON

```json
{
    "title": "Learn Spring Boot",
    "description": "Complete Spring Boot tutorial",
    "priority": "HIGH",
    "completed": false
}
```

---

## 👨‍💻 Author

**Gotam Singh**

Built for learning Full Stack Development with Spring Boot and AngularJS.
