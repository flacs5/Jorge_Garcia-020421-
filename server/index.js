const express = require('express');
const cors = require('cors');

const db = require('./db');
const toDoRouter = require('./routes/todo-router');

const app = express();
const apiPort = 5000;



app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', toDoRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))