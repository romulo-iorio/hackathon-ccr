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

let loggedInEmail = "";

//Inicialização do bancos de dados e criação das entidades, se ainda não tiverem sido criadas
caminhaoController.createDb();
caminhoneiroController.createDb();
loginController.createDb();

//Configuração de rotas
routes.get('/', (req, res) => {
    const login = loginController.index(req,res);
    return res.render(path.resolve(__dirname + '/../publico/views/login.html'), { login });
});

routes.get('/map', (req, res) => {
    window.location = "https://www.google.com/maps/";
});

routes.get('/chat', (req, res) => {
    return res.render(path.resolve(__dirname + '/../publico/views/chat.html'));
});

routes.get('/services', (req, res) => {
    return res.render(path.resolve(__dirname + '/../publico/views/services.html'));
});

routes.get('/registro', (req, res) => {
    const login = loginController.index(req,res);
    return res.render(path.resolve(__dirname + '/../publico/views/registro.html'), { login });
});

routes.get('/profile', (req, res) => {
    const login = loginController.show(req,res,'email',loggedInEmail);
    
    const caminhoneiro = null //caminhoneiroController.show(req,res,'email'.loggedInEmail);
    const caminhao = null //caminhaoController.show(req,res,'docCarro',caminhoneiro.docCarro);
    
    return res.render(path.resolve(__dirname + '/../publico/views/profile.html'), { caminhoneiro, caminhao, login });
});

routes.get('/main-page', (req, res) => {
    const login = loginController.show(req,res,'email',loggedInEmail);
    
    const caminhoneiro = null //caminhoneiroController.show(req,res,'email'.loggedInEmail);
    const caminhao = null //caminhaoController.show(req,res,'docCarro',caminhoneiro.docCarro);
    
    return res.render(path.resolve(__dirname + '/../publico/views/main-page.html'), { caminhoneiro, caminhao, login });
});

routes.get('/cadastro-concluido', (req, res) => {
    return res.render(path.resolve(__dirname + '/../publico/views/cadastro-concluido.html'));
});

routes.post('/registro', multer(multerConfig).single('image'), (req, res) => {
    req.body.image = path.resolve(__dirname + `/../../publico/uploads/${req.file.filename}`);
    loggedInEmail = req.body.email
    caminhaoController.create(req,res);
    loginController.create(req,res);
    caminhoneiroController.create(req,res);
    res.render(path.resolve(__dirname + '/../publico/views/cadastro-concluido.html'));
});

routes.post('/change-photo', multer(multerConfig).single('image'), (req, res) => {
    req.body.image = path.resolve(__dirname + `/../../publico/uploads/${req.file.filename}`);
    caminhoneiroController.update(req,res,'image',req.body.image,loggedInEmail);
    caminhoneiro = caminhoneiroController.show(req,res,'email', loggedInEmail)
    res.render(path.resolve(__dirname + '/../publico/views/profile.html'), { caminhoneiro });
});

routes.post('/main-page',(req, res) =>{
    return res.render(path.resolve(__dirname + '/../publico/views/main-page.html'));
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