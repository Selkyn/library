const express = require('express');
const router = express.Router();

const auteurCtrl = require ('../controller/auteursCtrl');

router.post('/add-auteur', auteurCtrl.registerAuteur);
// router.get('/get-name', auteurCtrl.getNameAuteur);

module.exports = router;

