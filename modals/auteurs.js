// const db = require('./db')

// //table auteurs
// const createAuteursTable =`
// CREATE TABLE IF NOT EXISTS Auteurs (
//     ID_Auteur INT AUTO_INCREMENT PRIMARY KEY,
//     Nom VARCHAR(255) NOT NULL,
//     Prenom VARCHAR(255) NOT NULL,
//     Nationalite VARCHAR(255) NOT NULL
// )`;

// db.query(createAuteursTable, (err, result) => {
//     if (err) {
//       console.error('Erreur lors de la création de la table Auteurs:', err.stack);
//     } else {
//       console.log('Table Auteurs créée ou déjà existante');
//     }
//   });

// module.exports = db;