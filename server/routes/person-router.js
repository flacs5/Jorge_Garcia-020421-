const express = require('express')

const Controller = require('../controllers/person-controller')

const router = express.Router()

router.post('/person', Controller.createPerson)
router.put('/person/:id', Controller.updatePerson)
router.delete('/person/:id', Controller.deletePerson)
router.get('/person/:id', Controller.getPersonById)
router.get('/persons', Controller.getPersons)

module.exports = router