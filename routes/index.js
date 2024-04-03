const routes = require('express').Router();


const myController = require('../controllers')
const nameController = require('../controllers/names');

routes.get('/', myController.testFunction);
routes.get('/contacts', nameController.getData);
routes.get('/contacts/:id', nameController.getSingle);


module.exports = routes;