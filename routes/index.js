//instance of router module
const routes = require('express').Router();
const myController = require('../controllers')
const nameController = require('../controllers/names');

// routes.get('/', myController.testFunction);
routes.get('/contacts', nameController.getData);
routes.get('/contacts/:id', nameController.getSingle);

// PUT request to update existing contact:
routes.put('/contacts/:id', nameController.updateContact);

// POST request to create a new contact:
routes.post('/contacts', nameController.addContact);

// DELETE request to delete existing contact:
routes.delete('/contacts/:id', nameController.deleteContact);


module.exports = routes;
