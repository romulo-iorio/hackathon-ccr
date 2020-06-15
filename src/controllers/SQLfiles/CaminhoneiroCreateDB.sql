CREATE TABLE IF NOT EXISTS caminhoneiro (
    cpf         INTEGER PRIMARY KEY NOT NULL,
    image       TEXT NOT NULL,
    name        TEXT NOT NULL,
    email       TEXT NOT NULL, 
    rg          INTEGER NOT NULL,
    birthday    INTEGER NOT NULL,
    gender      TEXT NOT NULL,
    docCarro    INTEGER NOT NULL,
    numViagens  INTEGER NOT NULL,
    avaliacao   INTEGER NOT NULL,
    cnh         INTEGER NOT NULL,
    phone       INTEGER NOT NULL,
    FOREIGN KEY(email) REFERENCES login(email),
    FOREIGN KEY(docCarro) REFERENCES caminhao(docCarro)
);