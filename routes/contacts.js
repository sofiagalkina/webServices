const nameController = require('../controllers/names');

routes.get('/contacts', nameController.getData);