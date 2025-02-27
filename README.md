# React Todo Application

A modern Todo application built with React that integrates with a Spring Boot backend. This project demonstrates how to decouple API logic from UI components, enabling clean code architecture and improved maintainability.

## Table of Contents

- [React Todo Application](#react-todo-application)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Screenshots](#screenshots)
  - [File Structure](#file-structure)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Configuration](#configuration)
  - [Future Improvements](#future-improvements)
  - [License](#license)

## Overview

This React Todo Application allows users to perform full CRUD operations (Create, Read, Update, Delete) on tasks. The application integrates with a Spring Boot backend API running at `http://localhost:8080/todos`. API calls are centralized in a dedicated module, keeping UI components lean and focused on presentation and state management.

## Features

- **Task Management:**  
  Create, rename, update completion status, and delete tasks.
- **Decoupled API Layer:**  
  All API interactions are abstracted in `src/api/todoApi.js` for better maintainability.
- **Optimized UI Components:**  
  Components such as `Task`, `TaskForm`, `RenameForm`, and `TaskTools` are modular and reusable.
- **Real-time Feedback:**  
  Visual indicators show progress (completed vs. total tasks) and display motivational messages.
- **Integration with Spring Boot:**  
  Connects seamlessly with a Spring Boot backend for persistent data storage.

## Screenshots

![home.png](screenshots/home.png)
![add-new-tasks.png](screenshots/add-new-tasks.png)
![rename-task.png](screenshots/rename-task.png)
![completed-tasks.png](screenshots/completed-tasks.png)

## File Structure

```
crud-todo-app/
├── public/
│   └── index.html
├── src/
│   ├── api/
│   │   └── todoApi.js         # API calls to Spring Boot backend
│   ├── components/
│   │   ├── Checkbox.js        # Custom checkbox component
│   │   ├── RenameForm.js      # Form for renaming a task (submit-based)
│   │   ├── Task.js            # Renders individual task with edit and delete options
│   │   ├── TaskForm.js        # Form to add a new task
│   │   └── TaskTools.js       # Provides edit and delete icons/buttons
│   ├── App.js                 # Main application component
│   ├── App.css                # Global styles
│   └── index.js               # Entry point for React
├── package.json
└── README.md
```

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/crud-todo-app.git
   cd crud-todo-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   or if you use Yarn:

   ```bash
   yarn install
   ```

3. **Ensure your Spring Boot Todo API is running:**  
   The React app expects the API at `http://localhost:8080/todos`. Adjust the `API_URL` in `src/App.js` if necessary.

## Usage

1. **Start the React development server:**

   ```bash
   npm start
   ```

   or with Yarn:

   ```bash
   yarn start
   ```

2. **Open your browser:**  
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

3. **Using the App:**  
   - **Add Task:** Use the TaskForm at the top to add a new task.
   - **Edit Task:** Click the edit icon to toggle edit mode; update the task name and click the "Rename" button.
   - **Toggle Completion:** Use the checkbox to mark tasks as complete or incomplete.
   - **Delete Task:** Click the delete icon to remove a task.

## Configuration

- **Backend API URL:**  
  The base URL for API requests is defined in `src/App.js`:
  ```js
  const API_URL = "http://localhost:8080/todos";
  ```
  Update this URL if your backend is hosted elsewhere.

- **API Module:**  
  All network requests are handled in `src/api/todoApi.js`, providing a single point of modification for API integration.

## Future Improvements

- **Error Handling:**  
  Enhance error handling and add user-friendly error messages.
- **Optimistic UI Updates:**  
  Implement optimistic UI updates to improve responsiveness.
- **Authentication:**  
  Integrate user authentication and authorization.
- **Testing:**  
  Add unit and integration tests for both API interactions and UI components.
- **Responsive Design:**  
  Improve styling for mobile and tablet devices.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.