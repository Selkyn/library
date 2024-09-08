const db = require('../modals/db');

exports.getHomeData = async (req, res) => {
    try {
        // Requête pour les auteurs
        const auteursQuery = 'SELECT Nom, ID_Auteur FROM Auteurs';
        const genresQuery = 'SELECT name, ID_Genre FROM Genres';

        // Exécuter les deux requêtes en parallèle
        db.query(auteursQuery, (err, auteursResults) => {
            if (err) {
                console.error('Impossible de récupérer les noms des auteurs dans la BDD:', err);
                return res.status(500).send('Erreur lors de la récupération des noms des auteurs.');
            }

            // Exécuter la requête pour les genres après avoir récupéré les auteurs
            db.query(genresQuery, (err, genresResults) => {
                if (err) {
                    console.error('Impossible de récupérer les genres dans la BDD:', err);
                    return res.status(500).send('Erreur lors de la récupération des genres.');
                }

                // Rendre la vue 'index' avec les deux ensembles de données
                res.render('index', { auteurs: auteursResults, genres: genresResults });
            });
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des données pour la page d\'accueil:', error);
        return res.status(500).send('Erreur serveur.');
    }
};