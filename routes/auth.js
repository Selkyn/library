const express = require('express');
const router = express.Router();

const authCtrl = require('../controller/authCtrl');

router.get('/', (req, res) => {
    res.render('auth');
})
router.post('/add-user', authCtrl.registerUser);
router.post('/login', authCtrl.login);

module.exports = router;