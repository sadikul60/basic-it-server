const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Basic IT server is running')
});

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    
    const category = categories.find(c => c.id === id);
    res.send(category);
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectCourse = courses.find(c => c._id === id);
    res.send(selectCourse);
})




app.listen(port, () => {
    console.log(`Basic IT running on port, ${port}`)
})