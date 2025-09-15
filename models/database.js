// WIP: Create table, init sql and path 

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../data/crm.db');
const db = new sqlite3.Database(dbPath);

const   initDatabase = () => {
    db.serialize(() => {
        db.run(`
            CREATE TABLE IF NOT EXISTS contacts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                prenom TEXT NOT NULL,
                nom TEXT NOT NULL,
                email TEXT UNIQUE,
                telephone TEXT,
                entreprise TEXT,
                poste TEXT,
                adresse TEXT,
                ville TEXT,
                code_postal TEXT,
                pays TEXT DEFAULT 'France',
                notes TEXT,
                date_creation DATETIME DEFAULT CURRENT_TIMESTAMP,
                date_modification DATETIME DEFAULT CURRENT_TIMESTAMP
            )
            `);
        console.log("Base de données initializée");
    });
};

module.exports = {
    db,
    initDatabase
};


