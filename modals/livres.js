// const db = require('./db')

// //table livre
// const createLivresTable = `
// CREATE TABLE IF NOT EXISTS Livres(
//     ID_Livre Int AUTO_INCREMENT PRIMARY KEY,
//     Titre VARCHAR(255) NOT NULL,
//     Genre VARCHAR(255) NOT NULL,
//     Annee_publication YEAR NOT NULL,
//     ID_Auteur INT NOT NULL,
//     FOREIGN KEY (ID_Auteur) REFERENCES Auteurs(ID_Auteur)
// )`;

// db.query(createLivresTable, (err, result) => {
//     if (err) {
//       console.error('Erreur lors de la création de la table Livres:', err.stack);
//     } else {
//       console.log('Table Livres créée ou déjà existante');
//     }
//   });

// module.exports = db;