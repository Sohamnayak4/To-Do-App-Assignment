# To-Do List Application

This is a simple To-Do List application that allows users to manage their tasks. The application supports creating, reading, updating, and deleting (CRUD) tasks. Each task has a title, description, status, and due date.


## Features

- **Frontend**: Developed using React and Vite.
  - Task List Page: Displays a list of all tasks with their title, status, and due date.
  - Task Form Page: A form for creating and editing tasks.
- **Backend**: Built with Node.js and Express.
  - Provides RESTful API endpoints for managing tasks.
- **In-memory Data Storage**: Used to store tasks.

## Prerequisites

- Node.js installed on your machine.

## Installation

1. **Clone the repository**:
    ```sh
    https://github.com/Sohamnayak4/To-Do-App-Assignment.git
    cd To-Do-App-Assignment
    ```

2. **Install backend dependencies**:
    ```sh
    npm install
    ```

3. **Navigate to the `frontend` directory and install frontend dependencies**:
    ```sh
    cd frontend
    npm install
    ```

## Running the Application

1. **Start the backend server**:
    ```sh
    cd ..
    cd backend
    node server.js
    ```

2. **Start the frontend development server**:
    ```sh
    cd frontend
    npm run dev
    ```

3. **Open your browser and navigate to**:
    ```sh
    http://localhost:5173
    ```

## API Endpoints

- **GET /tasks**: Retrieve all tasks.
- **GET /tasks/:id**: Retrieve a single task by ID.
- **POST /tasks**: Create a new task.
- **PUT /tasks/:id**: Update an existing task by ID.
- **DELETE /tasks/:id**: Delete a task by ID.

## Project Details

### Backend (Node.js with Express)

#### `data.js`

Handles in-memory data storage and provides functions to manage tasks.

#### `server.js`

Sets up the Express server and defines the API routes for task management.

### Frontend (Vite with React)

#### `src/main.jsx`

The entry point for the React application.

#### `src/App.jsx`

Manages the routes and includes the necessary components.

#### `src/components/TaskList.jsx`

Displays the list of tasks and includes buttons for editing and deleting tasks.

#### `src/components/TaskForm.jsx`

Handles creating and editing tasks using a form.

### Styling

- **Body Styling**: Centered the application vertically and horizontally using Flexbox.
- **Container Styling**: Added padding, border radius, and a shadow to create a card-like appearance.
- **Typography**: Increased the heading size and aligned it to the center.
- **Task List Styling**: Used Flexbox to align task items and buttons.
- **Form Styling**: Improved input and button styling with padding, border, and focus effects.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
