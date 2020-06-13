const { Request, Response } = require("express");
const db = require("../database/db.js");
const fs = require('fs');

const CaminhaoCreateDB = fs.readFileSync('SQL files/CaminhaoCreateDB.sql').toString()
const CaminhaoInsert = fs.readFileSync('SQL files/CaminhaoInsert.sql').toString()

class CaminhaoController {
    createDb() {
        db.run(CaminhaoCreateDB)
    }
    create(req, res) {
        //Prepara a referência ao diretório da imagem
        //req.body.image = path.resolve(__dirname, '..', '..', 'public', 'uploads', req.file.filename);
        const values = [
            req.body.docCarro,
            req.body.modelo,
            req.body.placa,
            req.body.cor
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
        db.run(CaminhaoInsert, values, afterInsertData);
    }
    index(req,res) {
        //Pegar os dados do banco de dados
        db.all(`SELECT * FROM caminhao`, function(err, rows){
            if(err){
                return console.log(err);
            }
            return rows;
        });
    }
    show(req, res, searchParam, searchContent){
        //Pegar os dados do banco de dados de acordo com o filtro
        db.all(`SELECT * FROM caminhao WHERE '%${searchParam}%' LIKE '%${searchContent}%'`, function(err, rows){
            if(err){
                return console.log(err);
            }
            return rows;
        });
    }
}

module.exports = CaminhaoController;