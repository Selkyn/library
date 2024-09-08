const db = require('../modals/db');

exports.registerAuteur = async (req, res, next) => {
    try {
        const { nom, prenom, nationalite } = req.body;

        if (!nom || !prenom || !nationalite) {
            return res.status(400).send('Tous les champs sont requis.');
          }

        const sql = "INSERT INTO Auteurs (Nom, Prenom, Nationalite) VALUES (?, ?, ?)";
        const values = [nom, prenom, nationalite];

        db.query(sql, values, (err, result) => {
            if (err) {
                console.error('erreur lors de l\'enregistrement d\'un auteur');
                return res.status(500).send('erreur serveur');
            }

            return res.status(201).redirect('/');
        })
        
    } catch (error) {
        console.error("erreur lors de l enregistrement d un auteur")
    };
}



