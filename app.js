const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.static('public'));
let tasks = [{
    id: 1,
        title: 'Learn Git/GitHub Basics',
        completed: true
},
{
    id: 2,
        title: 'Configure Jenkins Build',
        completed: false
},
{
    id: 3,
        title: 'Build Configurations for CICD',
        completed: false
}];
app.get('/api/tasks', (req,res) => {res.json(tasks)});

app.post('/api/tasks', (req,res) => {
    const task = {
        id: Date.now(),
        title: req.body.title,
        completed: false
    };
    tasks.push(task);
    res.status(201).json(task);
});
app.patch('/api/tasks/:id', (req, res) => {

    const task = tasks.find(
        task => task.id === Number(req.params.id)
    );

    if (!task) {

        return res.status(404).json({
            message: 'Task not found'
        });

    }

    task.completed = !task.completed;

    res.json(task);

});

app.delete('/api/tasks/:id', (req, res) => {

    tasks = tasks.filter(
        task => task.id !== Number(req.params.id)
    );

    res.status(204).send();

});

app.listen(PORT, '0.0.0.0', () => {

    console.log(
        `Student Task Manager running on port ${PORT}`
    );

});