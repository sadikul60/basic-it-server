const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/course.json')

app.get('/', (req, res) => {
    res.send('Basic IT server is running')
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    
    const course = courses.find(c => c.id === id);
    res.send(course);
})

app.listen(port, () => {
    console.log(`Basic IT running on port, ${port}`)
})