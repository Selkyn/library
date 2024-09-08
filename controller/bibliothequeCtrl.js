const db = require('../modals/db');

exports.getAllBooks = async (req, res, next) => {
    const sqlAllBooks = `
        SELECT 
            Livres.Titre, 
            Livres.Annee_publication, 
            Auteurs.Nom AS AuteurNom, 
            Auteurs.Prenom AS AuteurPrenom,
            GROUP_CONCAT(Genres.name SEPARATOR '\n') AS Genres
        FROM Livres
        JOIN Genre_Livre ON Livres.ID_Livre = Genre_Livre.ID_Livre
        JOIN Genres ON Genre_Livre.ID_Genre = Genres.ID_Genre
        JOIN Auteurs ON Livres.ID_Auteur = Auteurs.ID_Auteur
        GROUP BY Livres.ID_Livre;
    ` ;

    db.query(sqlAllBooks, (err, results) => {
        if (err) {
            console.error('Erreur lors de la recuperation des livres', err);
            return res.status(500).send('erreur lors de la recup des livres')
        }
        console.log('Résultats de la base de données:', results);
        // console.log('Données reçues:', results);
        res.render('bibliotheque', { allBooks : results})
    })
};