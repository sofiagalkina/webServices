//instance of router module
const routes = require('express').Router();
<<<<<<< HEAD

// const myController = require('../controllers');
const nameController = require('../controllers/names');
// routes.get('/', myController.testFunction);

routes.get('/contacts', nameController.getData);


module.exports = routes;


=======
const myController = require('../controllers')
const nameController = require('../controllers/names');

// routes.get('/', myController.testFunction);
routes.get('/contacts', nameController.getData);
routes.get('/contacts/:id', nameController.getSingle);

// PUT request to update contact:
routes.put('contacts/:id', nameController.updateContact);


module.exports = routes;
>>>>>>> 2c0651396d39ff5a12ce317d631a468db8fd48ee
