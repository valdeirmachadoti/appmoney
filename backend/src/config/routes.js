const express = require('express')
const auth = require('./auth')

module.exports = function (server) {
  /*
   * Rotas protegidas por Token JWT - API PRIVADAS
   */
  const protectedApi = express.Router()
  server.use('/api', protectedApi)
  
  //Filtro de autenticação
  protectedApi.use(auth)

  const CicloPagamento = require('../api/ciclopagamento/cicloPamentoService')
  CicloPagamento.register(protectedApi, '/cicloPagamentos')

  const TodoService = require("../api/todo/todoService");
  TodoService.register(protectedApi, "/todo");
  /*
   * Rotas abertas - API PUBLIC
   */
  const openApi = express.Router()
  server.use('/oapi', openApi)

  const AuthService = require('../api/user/AuthService')
  openApi.post('/login', AuthService.login)
  openApi.post('/signup', AuthService.signup)
  openApi.post('/validateToken', AuthService.validateToken)
}
