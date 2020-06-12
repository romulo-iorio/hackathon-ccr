const path = require('path'); //Importando o path para usar para caminhos das imagens
//Declaração de objetos e configurações
const express = require('express');
const routes = express.Router();

//Configuração de rotas
routes.get('/', (req, res) => {
    return res.sendFile(path.resolve(__dirname + '/../publico/views/index.html'));
});
routes.get('/manifest.json',(req, res) =>{
    return res.sendFile(path.resolve(__dirname + '/../manifest.json'));
});
routes.get('/service-worker.js',(req, res) =>{
    return res.sendFile(path.resolve(__dirname + '/../publico/service-worker.js'));
});

//The 404 Route (ALWAYS Keep this as the last route)
//routes.get('*', (req, res) => {res.status(404).render('page-404.html');});
//Exportação do arquivo para ser usado no server.js
module.exports = routes; 