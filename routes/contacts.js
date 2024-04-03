const nameController = require('../controllers/names');

// Define route for '/contacts' to use getData function from nameController
routes.get('/contacts', nameController.getData);
