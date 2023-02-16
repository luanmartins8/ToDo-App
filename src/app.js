// Importando o packages
const express = require('express')

// Importa o cors
const cors = require('cors')

// instanciando o servidor
const app = express()

// configurando o servidor para receber requisições com o corpo no formato JSON
app.use(express.json())

// Cross origin recurse sharing - compartilhamento recursivo de origem cruzada "Diferentes" 
// Usado para aceitar requisições vindas de origens diferentes, ou seja, qualquer outro http .... diferente do nosso.
app.use(cors())

// importando os controllers
const usuarioController = require('./controllers/usuarioController.js')
const tarefaController = require('./controllers/tarefaController.js')

// Chama as rotas
usuarioController.rotas(app)
tarefaController.rotas(app)

// Exporta o app para ser usado em outro módulo, por exemplo: no server.js
module.exports = app
