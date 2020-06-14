const path = require('path'); //Importando o path para usar para caminhos das imagens
const express = require('express');
const CaminhaoController = require("./controllers/CaminhaoController"); //Importar a classe DbController
const CaminhoneiroController = require("./controllers/CaminhoneiroController"); //Importar a classe DbController
const LoginController = require("./controllers/LoginController"); //Importar a classe DbController
const multer = require('multer'); //Configuração do multer para upload de arquivos
const bodyParser = require('body-parser'); //cleans our req.body

//Declaração de objetos e configurações
const routes = express.Router();
const caminhaoController = new CaminhaoController(); //Criar o objeto para fazer as operações no banco de dados
const caminhoneiroController = new CaminhoneiroController(); //Criar o objeto para fazer as operações no banco de dados
const loginController = new LoginController(); //Criar o objeto para fazer as operações no banco de dados
const multerConfig = { //MULTER CONFIG: to get file photos to temp server storage
    
    storage: multer.diskStorage({
        //Setup where the user's file will go
        destination: function(req, file, next){
            next(null, './publico/uploads');
        },   
        
        //Then give the file a unique name
        filename: function(req, file, next){
            console.log(file);
            const ext = file.mimetype.split('/')[1];
            next(null, file.fieldname + '-' + Date.now() + '.'+ext);
        }
    }),   
    
    //A means of ensuring only images are uploaded. 
    fileFilter: function(req, file, next){
        if(!file){
            next();
        }
        const image = file.mimetype.startsWith('image/');
        if(image){
            console.log('Photo uploaded');
            next(null, true);
        }else{
            console.log("File not supported");
            
            //TODO:  A better message response to user on failure.
            return next();
        }
    }
};
routes.use(bodyParser.urlencoded({extended:false})); //Habilitar o uso do req.body //handle body requests
routes.use(bodyParser.json()); // let's make JSON work too!

//Inicialização do bancos de dados e criação das entidades, se ainda não tiverem sido criadas
caminhaoController.createDb();
caminhoneiroController.createDb();
loginController.createDb();

//Configuração de rotas
routes.get('/', (req, res) => {
    return res.sendFile(path.resolve(__dirname + '/../publico/views/login.html'));
});
routes.get('/registro', (req, res) => {
    return res.sendFile(path.resolve(__dirname + '/../publico/views/registro.html'));
});
routes.get('/profile', (req, res) => {
    return res.sendFile(path.resolve(__dirname + '/../publico/views/profile.html'));
});
routes.post('/registro', multer(multerConfig).single('image'), (req, res) => {
    caminhaoController.create(req,res);
    loginController.create(req,res);
    caminhoneiroController.create(req,res);
    res.sendFile(path.resolve(__dirname + '/../publico/views/cadastro-concluido.html'));
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