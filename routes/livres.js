const express = require('express');
const router = express.Router();

const livreCtrl = require('../controller/livresCtrl');

router.post('/add-livre', livreCtrl.registerLivre);
// router.get('/get-name', livreCtrl.getNameAuteur);
// router.get('/', livreCtrl.getNameAuteur);

module.exports = router;