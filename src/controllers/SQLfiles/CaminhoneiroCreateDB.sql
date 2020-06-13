CREATE TABLE IF NOT EXISTS caminhoneiro (
    cpf         INTEGER PRIMARY KEY,
    image       TEXT,
    name        TEXT,
    email       TEXT, 
    rg          INTEGER,
    idade       INTEGER,
    genero      CHAR,
    docCarro    TEXT,
    numViagens  INTEGER,
    avaliacao   INTEGER,
    FOREIGN KEY(email) REFERENCES login(email),
    FOREIGN KEY(docCarro) REFERENCES caminhao(docCarro)
);