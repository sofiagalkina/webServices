const routes = require('express').Router();

const myController = require('../controllers')
routes.get('/', myController.testFunction);
module.exports = routes;