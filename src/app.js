var express = require('express');
var path = require('path');
const routes = require('./routes.js')
const cors = require('cors')

var port = 3000;

var app = express();

app.use(cors());
app.use(express.static(path.resolve(__dirname + "/../publico")));
app.use(routes); //Habilitando o uso de rotas

app.use((req, res, next) => { //Cria um middleware onde todas as requests passam por ele 
    if (req.headers["x-forwarded-proto"] == "http") //Checa se o protocolo informado nos headers é HTTP 
        res.redirect(`https://${req.headers.host}${req.url}`); //Redireciona pra HTTPS 
    else //Se a requisição já é HTTPS 
        next(); //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado 
});
 
app.listen(port);
console.log(`Servidor on-line na porta: ${port}`);