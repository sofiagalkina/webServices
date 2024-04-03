const routes = require('express').Router();


const myController = require('../controllers')
routes.get('/', myController.testFunction);

const nameController = require('../controllers/names');
routes.get('/contacts', nameController.getData);


module.exports = routes;