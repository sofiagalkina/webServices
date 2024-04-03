//instance of router module
const routes = require('express').Router();

// const myController = require('../controllers');
const nameController = require('../controllers/names');
// routes.get('/', myController.testFunction);

routes.get('/contacts', nameController.getData);


module.exports = routes;


