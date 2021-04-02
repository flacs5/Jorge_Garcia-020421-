const express = require('express');

const Controller = require('../controllers/todo-controller');

const router = express.Router();

router.post('/todo', Controller.createToDo);
router.put('/todo/:id', Controller.updateToDo);
router.delete('/todo/:id', Controller.deleteToDo);
router.get('/todos', Controller.getToDos);

module.exports = router;
