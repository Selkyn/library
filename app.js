const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const port = 3010;

require('./modals/initDb');

const auteurRoutes = require ('./routes/auteurs');
const livreRoutes = require('./routes/livres');
const genreRoutes = require('./routes/genres');
const homeRoutes = require('./routes/home');
const bibliothequeRoutes = require('./routes/bibliotheque');
const authRoutes = require('./routes/auth');



// Middleware pour parser les données des formulaire
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'votre_clé_secrète', 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));

// Middleware global pour injecter les informations de session dans toutes les vues
app.use((req, res, next) => {
    res.locals.userId = req.session.userId;
    res.locals.email = req.session.email;
    res.locals.role = req.session.role;
    res.locals.pseudo = req.session.pseudo;
    res.locals.token = req.session.token;
    next();
});

//démarer le serveur
app.listen(port, () => {
    console.log("serveur lancer sur le port" + port)
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// app.get('/', (req, res) => {
//     res.render('index');
// })

// app.get('/test', (req, res) => {
//     res.render('index'); // Sans passer de données
// });
// app.use('/bibliotheque', (req, res) => {
//     res.render('bibliotheque')
// })
// app.get('/', livreRoutes); 
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Erreur lors de la déconnexion.');
        }
        res.redirect('/auth');
    });
});

app.use('/auth', authRoutes);
app.use('/', homeRoutes);
app.use('/auteurs', auteurRoutes);
app.use('/livres', livreRoutes);
app.use('/genres', genreRoutes);
app.use('/bibliotheque', bibliothequeRoutes)

