const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'project-library'
});

db.connect((err) => {
    if(err) {
        console.error('erreur de connexion à la bdd');
        return;
    }
    console.log('connexion à la bdd réussi')
});

module.exports = db;