const { Request, Response } = require("express");
const db = require("../database/db.js");
const fs = require('fs');
const path = require('path');

const CaminhoneiroCreateDB = fs.readFileSync(path.resolve(__dirname + '/SQLfiles/CaminhoneiroCreateDB.sql')).toString()
const CaminhoneiroInsert = fs.readFileSync(path.resolve(__dirname + '/SQLfiles/CaminhoneiroInsert.sql')).toString()

db.run('PRAGMA foreign_keys=ON;');

class CaminhoneiroController {
    createDb() {
        db.run(CaminhoneiroCreateDB)
    }
    create(req, res) {
        //Prepara a referência ao diretório da imagem
        //req.body.image = path.resolve(__dirname, '..', '..', 'public', 'uploads', req.file.filename);
        req.body.image = path.resolve(__dirname + `/../../publico/uploads/${req.file.filename}`);
        const values = [
            req.body.cpf,
            req.body.image,
            req.body.name,
            req.body.email,
            req.body.rg,
            req.body.birthday,
            req.body.gender,
            req.body.docCarro,
            req.body.numViagens,
            req.body.avaliacao,
            req.body.cnh,
            req.body.phone
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
        db.run(CaminhoneiroInsert, values, afterInsertData);
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