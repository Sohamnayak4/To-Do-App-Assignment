let tasks = [];
let id = 0;

const getTasks = () => tasks;

const getTaskById = (taskId) => tasks.find(task => task.id === taskId);

const addTask = (task) => {
    task.id = ++id;
    tasks.push(task);
    return task;
};

const updateTask = (taskId, updatedTask) => {
    const index = tasks.findIndex(task => task.id === taskId);
    if (index !== -1) {
        tasks[index] = { ...tasks[index], ...updatedTask };
        return tasks[index];
    }
    return null;
};

const deleteTask = (taskId) => {
    const index = tasks.findIndex(task => task.id === taskId);
    if (index !== -1) {
        return tasks.splice(index, 1);
    }
    return null;
};

module.exports = { getTasks, getTaskById, addTask, updateTask, deleteTask };
