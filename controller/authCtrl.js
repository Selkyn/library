const db = require('../modals/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10); 

        const { email, pseudo} = req.body;

        const sqlRegisterUser = 'INSERT INTO Users (email, pseudo, password, ID_Role) VALUES (?, ?, ?, ?)';
        const values = [email, pseudo, hashedPassword, 1];

        db.query(sqlRegisterUser, values, (err, results) => {
            if (err) {
                console.error('Erreur lors de l\'enregistrement du livre:', err);
                return res.status(500).send('Erreur serveur lors de l\'enregistrement du livre.');
            }
            return res.status(201).redirect('/auth');
        })

    }catch (error) {
        console.error('Erreur lors de l enregistrement d un user', error);
    }
}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;


        const sqlGetUser = `
        SELECT
            Users.email,
            Users.ID_User,
            Users.pseudo,
            Users.password,
            Roles.name AS Role
        FROM Users
        JOIN Roles ON Users.ID_Role = Roles.ID_Role
        WHERE Users.email = ?
        `;

        db.query(sqlGetUser, [email], async (err, results) => {
            if (err) {
                console.error('Erreur lors de la recuperation de l\'user', err);
                return res.status(500).send('erreur lors de la recup de l\'user')
            }

            const [user] = results;

            const matchPassword = await bcrypt.compare(password, user.password);
            if(!matchPassword) {
                return res.status(401).json({ message : "mot de passe incorrect"})
            }

            const token = jwt.sign(
                {userId: user.id, roleId: user.Role},
                'SECRET_TOKEN',
                {expiresIn: '24h'}
            );

            req.session.userId = user.ID_User
            req.session.email = user.email
            req.session.role = user.Role
            req.session.pseudo = user.pseudo
            req.session.token = token

            res.status(200).redirect('/');
        })
    }catch (error) {
        console.error('impossible de se co', error)
    }
}

// exports.logout = (req, res, next) => {

// }