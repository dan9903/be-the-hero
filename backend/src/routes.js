const express = require('express');
const routes = express.Router();

const ongController =  require('./controllers/ongController');
const incidentController =  require('./controllers/incidentController');
const profileController =  require('./controllers/profileController');
const sessionController =  require('./controllers/sessionController');
//session route
routes.post('/sessions', sessionController.create);
//ong routes
routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);
//ong-incidents routes
routes.get('/profile', profileController.index);
//incident routes
routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);



module.exports = routes;