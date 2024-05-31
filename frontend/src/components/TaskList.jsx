import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/tasks')
            .then(response => setTasks(response.data))
            .catch(error => console.error(error));
    }, []);

    const deleteTask = (id) => {
        axios.delete(`http://localhost:5000/tasks/${id}`)
            .then(() => setTasks(tasks.filter(task => task.id !== id)))
            .catch(error => console.error(error));
    };

    return (
        <div className="container">
            <h1>Task List</h1>
            <Link to="/new" className="link">Add New Task</Link>
            <div className="task-list">
                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>
                            <div>
                                <strong>{task.title}</strong> - {task.status} - {task.dueDate}
                            </div>
                            <div>
                                <Link to={`/edit/${task.id}`} className="link">Edit</Link>
                                <button onClick={() => deleteTask(task.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TaskList;
