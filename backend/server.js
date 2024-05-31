const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getTasks, getTaskById, addTask, updateTask, deleteTask } = require('./data');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/tasks', (req, res) => {
    res.json(getTasks());
});

app.get('/tasks/:id', (req, res) => {
    const task = getTaskById(parseInt(req.params.id, 10));
    if (task) {
        res.json(task);
    } else {
        res.status(404).send('Task not found');
    }
});

app.post('/tasks', (req, res) => {
    const newTask = addTask(req.body);
    res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
    const updatedTask = updateTask(parseInt(req.params.id, 10), req.body);
    if (updatedTask) {
        res.json(updatedTask);
    } else {
        res.status(404).send('Task not found');
    }
});

app.delete('/tasks/:id', (req, res) => {
    const deletedTask = deleteTask(parseInt(req.params.id, 10));
    if (deletedTask) {
        res.status(204).send();
    } else {
        res.status(404).send('Task not found');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
