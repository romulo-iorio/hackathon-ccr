CREATE TABLE IF NOT EXISTS caminhoneiro (
    cpf         INTEGER PRIMARY KEY,
    image       TEXT,
    name        TEXT,
    email       TEXT, 
    rg          INTEGER,
    birthday    INTEGER,
    gender      TEXT,
    docCarro    INTEGER,
    numViagens  INTEGER,
    avaliacao   INTEGER,
    cnh         INTEGER,
    phone       INTEGER,
    FOREIGN KEY(email) REFERENCES login(email),
    FOREIGN KEY(docCarro) REFERENCES caminhao(docCarro)
);