const db = require('./db')

const createAuteursTable =`
CREATE TABLE IF NOT EXISTS Auteurs (
    ID_Auteur INT AUTO_INCREMENT PRIMARY KEY,
    Nom VARCHAR(255) NOT NULL,
    Prenom VARCHAR(255) NOT NULL,
    Nationalite VARCHAR(255) NOT NULL
)`;

//table livre
const createLivresTable = `
CREATE TABLE IF NOT EXISTS Livres(
    ID_Livre Int AUTO_INCREMENT PRIMARY KEY,
    Titre VARCHAR(255) NOT NULL,
    Annee_publication YEAR NOT NULL,
    ID_Auteur INT NOT NULL,
    FOREIGN KEY (ID_Auteur) REFERENCES Auteurs(ID_Auteur)
)`;



const createGenreTable = `
CREATE TABLE IF NOT EXISTS Genres (
    ID_Genre Int AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (255) UNIQUE     
)`;



//table genre
const createGenre_Livre =`
CREATE TABLE IF NOT EXISTS Genre_Livre (
    ID_Genre_Livre INT AUTO_INCREMENT PRIMARY KEY,
    ID_Livre INT NOT NULL,
    ID_Genre INT NOT NULL,
    FOREIGN KEY (ID_Livre) REFERENCES Livres(ID_Livre),
    FOREIGN KEY (ID_Genre) REFERENCES Genres(ID_Genre)
)`;

//table users
const createUsersTable = `
CREATE TABLE IF NOT EXISTS Users (
    ID_User INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR (255) UNIQUE NOT NULL,
    password VARCHAR (255) NOT NULL,
    pseudo VARCHAR (255) NOT NULL,
    ID_Role INT,
    FOREIGN KEY (ID_Role) REFERENCES Roles(ID_Role)
)
`;

const createRolesTable = `
CREATE TABLE IF NOT EXISTS Roles(
    ID_Role INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (255)
)`;

db.query(createRolesTable, (err, result) => {
    if (err) {
        console.error('Erreur lors de la création de la table Roles:', err.stack);
      } else {
        console.log('Table Roles créée ou déjà existante');
      }
})

db.query(createUsersTable, (err, result) => {
    if (err) {
        console.error('Erreur lors de la création de la table Auteurs:', err.stack);
      } else {
        console.log('Table Auteurs créée ou déjà existante');
      }
}),


db.query(createAuteursTable, (err, result) => {
    if (err) {
      console.error('Erreur lors de la création de la table Auteurs:', err.stack);
    } else {
      console.log('Table Auteurs créée ou déjà existante');
    }
  });

  db.query(createLivresTable, (err, result) => {
    if (err) {
      console.error('Erreur lors de la création de la table Livres:', err.stack);
    } else {
      console.log('Table Livres créée ou déjà existante');
    }
  });

db.query(createGenreTable, (err, result)=> {
    if (err) {
        console.error('erreur lors de la création de la table genre')

    } else {
        console.log('Table Genres créée ou déja existante')
    }
});

db.query(createGenre_Livre, (err, results) => {
    if (err) {
        console.error('Erreur lors de le création de la table genre_livre')

    }else {
        console.log('Table Genre_Livre créée ou deja existante')
    }
})


module.exports = db;