const { Request, Response } = require("express");
const db = require("../database/db.js");

class CaminhoneiroController {
    createDb() {
        db.run(`
            CREATE TABLE IF NOT EXISTS caminhoneiro (
                cpf         INTEGER PRIMARY KEY,
                image       TEXT,
                name        TEXT,
                email       TEXT, FOREIGN KEY (email) REFERENCES login(email), 
                rg          INTEGER,
                idade       INTEGER,
                genero      CHAR,
                docCarro    TEXT, FOREIGN KEY (docCarro) REFERENCES caminhao(docCarro),
                numViagens  INTEGER,
                avaliacao   INTEGER,
            );
        `)
    }
    create(req, res) {
        //Prepara a referência ao diretório da imagem
        //req.body.image = path.resolve(__dirname, '..', '..', 'public', 'uploads', req.file.filename);
        req.body.image = `/uploads/${req.file.filename}`;
        const query = `
            INSERT INTO caminhoneiro (
                cpf,
                image,
                name,
                email,
                rg,
                idade,
                genero,
                docCarro,
                numViagens,
                avaliacao,
            ) VALUES (?,?,?,?,?,?,?,?,?,?);    
        `;  
        const values = [
            req.body.cpf,
            req.body.image,
            req.body.name,
            req.body.email,
            req.body.rg,
            req.body.idade,
            req.body.genero,
            req.body.docCarro,
            req.body.numViagens,
            req.body.avaliacao
        ];
        function afterInsertData(err) {
            if(err){
                console.log(err);
                return "error";
            }
            // console.log("Cadastrado com sucesso!");
            // console.log(this);

            //return res.json("ok");
            return "saved";
        };
        //Cria o item no db
        db.run(query, values, afterInsertData);
    }
    index(req,res) {
        //Pegar os dados do banco de dados
        db.all(`SELECT * FROM caminhoneiro`, function(err, rows){
            if(err){
                return console.log(err);
            }
            return rows;
        });
    }
    show(req, res, searchParam, searchContent){
        //Pegar os dados do banco de dados de acordo com o filtro
        db.all(`SELECT * FROM caminhoneiro WHERE '%${searchParam}%' LIKE '%${searchContent}%'`, function(err, rows){
            if(err){
                return console.log(err);
            }
            return rows;
        });
    }
}

module.exports = CaminhoneiroController;