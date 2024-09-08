const express = require('express');
const router = express.Router();

const bibliothequeCtrl = require ('../controller/bibliothequeCtrl');

router.get('/', bibliothequeCtrl.getAllBooks)

module.exports = router;