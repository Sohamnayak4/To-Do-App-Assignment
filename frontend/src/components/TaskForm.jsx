import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('pending');
    const [dueDate, setDueDate] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/tasks/${id}`)
                .then(response => {
                    setTitle(response.data.title);
                    setDescription(response.data.description);
                    setStatus(response.data.status);
                    setDueDate(response.data.dueDate);
                })
                .catch(error => console.error(error));
        }
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const task = { title, description, status, dueDate };

        if (id) {
            axios.put(`http://localhost:5000/tasks/${id}`, task)
                .then(() => navigate('/'))
                .catch(error => console.error(error));
        } else {
            axios.post('http://localhost:5000/tasks', task)
                .then(() => navigate('/'))
                .catch(error => console.error(error));
        }
    };

    return (
        <div className="container">
            <h1>{id ? 'Edit Task' : 'New Task'}</h1>
            <form onSubmit={handleSubmit} className="form-container">
                <div>
                    <label>Title</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" value={description} onChange={e => setDescription(e.target.value)} required />
                </div>
                <div>
                    <label>Status</label>
                    <select value={status} onChange={e => setStatus(e.target.value)} required>
                        <option value="pending">Pending</option>
                        <option value="in-progress">In-Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div>
                    <label>Due Date</label>
                    <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} required />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default TaskForm;
