const {Router} = require('express');
const { AgregarMensaje, MostrarMensaje } = require('./controller/app_controller');

const routes = Router();

routes.post('/add', (req, res) => AgregarMensaje(req, res));
routes.get('/mensaje', (req, res) => MostrarMensaje(req, res));
routes.get('/', (req, res) => AgregarMensaje(req, res));

module.exports = routes;