const { Request, Response } = require("express");
const db = require("../database/db.js");

class CaminhaoController {
    createDb() {
        db.run(`
            CREATE TABLE IF NOT EXISTS caminhao (
                docCarro    TEXT PRIMARY KEY,
                modelo      TEXT,
                placa       TEXT,
                cor         TEXT
            );
        `)
    }
    create(req, res) {
        //Prepara a referência ao diretório da imagem
        //req.body.image = path.resolve(__dirname, '..', '..', 'public', 'uploads', req.file.filename);
        req.body.image = `/uploads/${req.file.filename}`;
        const query = `
            INSERT INTO caminhao (
                docCarro,
                modelo,
                placa,
                cor
            ) VALUES (?,?,?,?);    
        `;  
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
        db.all(`SELECT * FROM caminhao WHERE '%${searchParam}%' LIKE '%${searchContent}%'`, function(err, rows){
            if(err){
                return console.log(err);
            }
            return rows;
        });
    }
}

module.exports = CaminhaoController;