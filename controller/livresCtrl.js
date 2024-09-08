const db = require('../modals/db');

exports.registerLivre = async (req, res, next) => {
    try {
        const { titre, genres, anneePublication, auteurs } = req.body;

        // Insertion du livre dans la table Livres
        const sqlLivreTable = 'INSERT INTO Livres (Titre, Annee_publication, ID_Auteur) VALUES (?, ?, ?)';
        const valuesLivre = [titre, anneePublication, auteurs];

        db.query(sqlLivreTable, valuesLivre, (err, result) => {
            if (err) {
                console.error('Erreur lors de l\'enregistrement du livre:', err);
                return res.status(500).send('Erreur serveur lors de l\'enregistrement du livre.');
            }

            const livreId = result.insertId; // Récupération de l'ID du livre inséré

            // Insertion des genres associés dans la table Genre_Livre
            const sqlGenre = 'INSERT INTO Genre_Livre (ID_Livre, ID_Genre) VALUES (?, ?)';
            
            if (Array.isArray(genres)) {
                genres.forEach(genreId => {
                    db.query(sqlGenre, [livreId, genreId], (err, result) => {
                        if (err) {
                            console.error('Erreur lors de l\'enregistrement du genre:', err);
                            return res.status(500).send('Erreur serveur lors de l\'enregistrement du genre.');
                        }
                    });
                });
            } else {
                // Si un seul genre est sélectionné
                db.query(sqlGenre, [livreId, genres], (err, result) => {
                    if (err) {
                        console.error('Erreur lors de l\'enregistrement du genre:', err);
                        return res.status(500).send('Erreur serveur lors de l\'enregistrement du genre.');
                    }
                });
            }

            return res.status(201).redirect('/');
        });
        
    } catch (error) {
        console.error('Erreur lors de l\'envoi d\'un livre vers la BDD:', error);
        return res.status(500).send('Erreur serveur.');
    }
};



// exports.getNameAuteur = async (req, res) => {
//     try {
//         const sql = 'SELECT Nom, ID_Auteur FROM Auteurs';

//         db.query(sql, (err, results) => {
//             if (err) {
//                 console.error('impossible de récupérer le nom des auteurs dans la bdd');
//                 return res.status(500).send('erreur lors de la recup');
//             }
//             console.log('Résultats récupérés:', results);
//         res.render('index', { auteursName: results });
//         })
//     }catch(error) {
//         console.error('erreur lors de la recup des nom d auteurs');
//     }
// }

