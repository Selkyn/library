// const db = require('./db')

// //table genre
// const createGenre_Livre =`
// CREATE TABLE IF NOT EXISTS Genre_Livre (
//     ID_Genre_Livre INT AUTO_INCREMENT PRIMARY KEY,
//     ID_Livre INT NOT NULL,
//     ID_Genre INT NOT NULL,
//     FOREYGN KEY (ID_Livre) REFERENCES Livres(ID_Livre)
//     FOREYGN KEY (ID) REFERENCES Genres(ID_Genre)
// )`;

// db.query(createGenre_Livre, (err, results) => {
//     if (err) {
//         console.error('Erreur lors de le création de la table genre_livre')

//     }else {
//         console.log('Table Genre_Livre créée ou deja existante')
//     }
// })

// module.exports = db;